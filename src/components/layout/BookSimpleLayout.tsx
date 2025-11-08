import { Container } from '@/components/layout/Container'

export function BookSimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-4 lg:mt-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base text-zinc-600 leading-relaxed">
          {intro}
        </p>
      </header>
      {children && <div className="mt-8 sm:mt-10">{children}</div>}
    </Container>
  )
}

