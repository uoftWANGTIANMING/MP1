import { type Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { mvp01Items } from '@/config/projects'
import { Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Companion for Cat',
  description: 'Why are all AI companions designed for humans? What about cats?',
}

export default function AICatProjectPage() {
  // Calculate total price
  const totalPrice = mvp01Items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''))
    return sum + price
  }, 0)

  return (
    <Container className="mt-4 lg:mt-8">
      {/* Header Section - Compact */}
      <header className="max-w-2xl mb-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          AI Companion for Cat
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          Why are all AI companions designed for humans? What about cats?
        </p>
      </header>

      {/* Body Section - Compact with white text */}
      <div className="max-w-2xl mt-4">
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed tracking-tight font-light">
          A hardware project to create an interactive AI companion specifically designed for cats.
        </p>
      </div>

      {/* MVP0.1 Purchase Items */}
      <div className="mt-4 pt-3 border-t border-muted/30 max-w-2xl pb-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="flex flex-row items-center justify-start gap-2 text-2xl font-semibold tracking-tight text-foreground">
            <Package size={28}/>
            MVP0.1 Purchase List
          </h2>
        </div>
        
        <div className="rounded-lg border border-muted/30 bg-muted/5 p-4">
          <ul role="list" className="flex flex-col gap-2.5">
            {mvp01Items.map((item, index) => (
              <li key={index} className="flex flex-row justify-between items-start py-2.5 px-2 border-b border-muted/20 last:border-b-0 hover:bg-muted/10 transition-colors rounded">
                <span className="text-sm text-foreground flex-1 pr-6 leading-relaxed">{item.name}</span>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">{item.price}</span>
              </li>
            ))}
          </ul>
          
          {/* Total Price */}
          <div className="mt-4 pt-4 border-t border-muted/30 flex flex-row justify-between items-center">
            <span className="text-base font-semibold text-foreground">Total</span>
            <span className="text-lg font-bold text-primary">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

