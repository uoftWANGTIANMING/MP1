import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import { Providers } from '@/app/providers'
import { ConditionalLayout } from '@/components/layout/ConditionalLayout'
import { name, headline, introduction } from '@/config/infoConfig'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${name}`,
    default:
      `${name} - ${headline}`,
  },
  description:
    `${introduction}`,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/avatar.ico',
    shortcut: '/avatar.ico',
    apple: '/avatar.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // 设置 viewport meta 标签
                let viewport = document.querySelector('meta[name="viewport"]');
                if (!viewport) {
                  viewport = document.createElement('meta');
                  viewport.setAttribute('name', 'viewport');
                  document.head.appendChild(viewport);
                }
                viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5');
                
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
        <Providers>
          <ConditionalLayout>{children}</ConditionalLayout>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
