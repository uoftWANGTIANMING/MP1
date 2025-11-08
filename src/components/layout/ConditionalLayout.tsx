'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Script from 'next/script'
import { Layout } from '@/components/layout/Layout'

export function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isCNRoute = pathname?.startsWith('/cn')

  useEffect(() => {
    if (isCNRoute) {
      // 为中文博客路由设置 body 和 html 样式
      document.body.className = 'min-h-screen font-serif'
      document.body.style.backgroundColor = '#f0ead6'
      document.body.style.color = '#27272a'
      document.body.style.display = 'block'
      document.documentElement.className = 'h-full antialiased'
      document.documentElement.style.backgroundColor = '#f0ead6'
      // 移除 dark 类
      document.documentElement.classList.remove('dark')
    } else {
      // 恢复主站 body 样式
      document.body.className = 'flex min-h-full'
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
      document.body.style.display = ''
      document.documentElement.style.backgroundColor = ''
    }
  }, [isCNRoute])

  if (isCNRoute) {
    return (
      <>
        <Script
          id="cn-route-styles"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (window.location.pathname.startsWith('/cn')) {
                  document.documentElement.style.backgroundColor = '#f0ead6';
                  document.body.style.backgroundColor = '#f0ead6';
                  document.body.style.display = 'block';
                  document.body.className = 'min-h-screen font-serif';
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        {children}
      </>
    )
  }

  return (
    <div className="flex w-full min-h-full">
      <Layout>{children}</Layout>
    </div>
  )
}

