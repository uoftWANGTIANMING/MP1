import { type Metadata } from 'next'
import Link from 'next/link'
import { type BlogCNType, getAllBlogsCN } from '@/lib/blogs-cn'
import { formatDateCN } from '@/lib/formatDateCN'

const name = '天铭'

export const runtime = process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'nodejs'

function BlogCN({ blog }: { blog: BlogCNType }) {
  return (
    <article className="mb-16">
      <Link 
        href={`/cn/${blog.slug}`}
        className="block group"
      >
        <time 
          dateTime={blog.date}
          className="text-sm text-zinc-500 mb-2 block"
        >
          {formatDateCN(blog.date)}
        </time>
        <h2 className="text-2xl font-semibold text-zinc-800 mb-3 group-hover:text-zinc-600 transition-colors">
          {blog.title}
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          {blog.description}
        </p>
      </Link>
    </article>
  )
}

export const metadata: Metadata = {
  title: '中文博客',
  description: '个人中文博客',
}

export default async function CNBlogsIndex() {
  let blogs = await getAllBlogsCN()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0ead6' }}>
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 relative z-10">
        {/* 个人介绍 */}
        <header className="mb-20">
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-6">
            {name}
          </h1>
          <p className="text-zinc-600 leading-relaxed text-lg">
            记录生活，记录思考。
          </p>
        </header>

        {/* 博客列表 */}
        <div className="space-y-12">
          {blogs.length > 0 ? (
            blogs.map((blog: BlogCNType) => (
              <BlogCN key={blog.slug} blog={blog} />
            ))
          ) : (
            <p className="text-zinc-500">暂无文章</p>
          )}
        </div>
      </div>
    </div>
  )
}

