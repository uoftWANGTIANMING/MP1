import { type Metadata } from 'next'

const name = '天铭'

export const metadata: Metadata = {
  title: {
    template: `%s - ${name}`,
    default: `${name} - 中文博客`,
  },
  description: '个人中文博客',
}

export default function CNLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div 
      className="min-h-screen text-zinc-800 font-serif paper-background"
      style={{ backgroundColor: '#f0ead6' }}
    >
      {children}
    </div>
  )
}

