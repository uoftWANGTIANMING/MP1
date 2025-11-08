import glob from 'fast-glob'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogCNType = {
  title: string
  description: string
  author: string
  date: string
  slug: string
  draft?: boolean
}

async function importBlogCN(
  blogFilename: string,
): Promise<BlogCNType> {
  const source = await fs.readFile(
    path.join(process.cwd(), 'src/content/blog-cn', blogFilename),
    'utf-8'
  )
  
  const { data } = matter(source)
  
  // @ts-expect-error
  return {
    slug: blogFilename.replace(/\.mdx$/, ''),
    ...data,
  }
}

export async function getAllBlogsCN() {
  let blogFileNames = await glob('*.mdx', {
    cwd: './src/content/blog-cn',
  })

  let blogs = await Promise.all(blogFileNames.map(importBlogCN))

  // Filter out draft blogs
  blogs = blogs.filter(blog => !blog.draft)

  return blogs.sort((a, z) => {
    const aDate = a.date ? +new Date(a.date) : 0;
    const zDate = z.date ? +new Date(z.date) : 0;
    return zDate - aDate;
  })
}

export async function getBlogCNBySlug(slug: string): Promise<BlogCNType | null> {
  try {
    // 移除可能存在的 .mdx 扩展名
    const cleanSlug = slug.replace(/\.mdx$/, '')
    return await importBlogCN(`${cleanSlug}.mdx`)
  } catch (error) {
    console.error(`Failed to load blog-cn with slug: ${slug}`, error)
    return null
  }
}

