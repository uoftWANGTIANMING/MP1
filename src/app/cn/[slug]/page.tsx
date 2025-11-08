import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import { getBlogCNBySlug } from '@/lib/blogs-cn'
import { getMDXContentCN } from '@/lib/mdx-cn'
import { formatDateCN } from '@/lib/formatDateCN'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogCNBySlug(params.slug)
  if (!blog) {
    return {
      title: '博客未找到',
    }
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default async function CNBlogPage({ params }: Props) {
  const blog = await getBlogCNBySlug(params.slug)
  
  if (!blog) {
    notFound()
  }

  const content = await getMDXContentCN(params.slug)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0ead6' }}>
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 relative z-10">
        {/* 返回链接 */}
        <Link 
          href="/cn"
          className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-800 mb-8 transition-colors group"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2 stroke-zinc-600 group-hover:stroke-zinc-800 transition-colors" />
          返回
        </Link>

        {/* 文章内容 */}
        <article>
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-4 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center text-sm text-zinc-500">
              <time dateTime={blog.date}>
                {formatDateCN(blog.date)}
              </time>
              <span className="mx-2">·</span>
              <span>{blog.author}</span>
            </div>
          </header>

          <div className="prose-book">
            {content}
          </div>
        </article>
      </div>
    </div>
  )
}

