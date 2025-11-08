import { Container } from '@/components/layout/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-2 sm:mt-4 lg:mt-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-2 sm:mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-4 sm:mt-6 lg:mt-10">{children}</div>}
    </Container>
  )
}
