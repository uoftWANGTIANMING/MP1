'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/layout/Container'
import { type BlogCNType } from '@/lib/blogs-cn'
import { formatDateCN } from '@/lib/formatDateCN'

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

export function BookLayout({
  blog,
  children,
}: {
  blog: BlogCNType
  children: React.ReactNode
}) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-8 lg:mt-16">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="返回博客列表"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#fefcf8] shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 hover:bg-[#faf8f3]"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-600 transition group-hover:stroke-zinc-800" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl break-words">
                {blog.title}
              </h1>
              <time
                dateTime={blog.date}
                className="order-first flex items-center text-base text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-300" />
                <span className="ml-3">{formatDateCN(blog.date)}</span>
                <span className="mx-2">·</span>
                <span>{blog.author}</span>
              </time>
            </header>
            <div className="mt-8 prose-book" data-mdx-content>
              {children}
            </div>
          </article>
        </div>
      </div>
    </Container>
  )
}

