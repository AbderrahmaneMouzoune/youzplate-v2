import { CartView } from '@/components/cart-view'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Votre panier',
  robots: { index: false, follow: true },
}

export default function CartPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="mb-8 text-3xl font-extrabold tracking-tight">Votre panier</h1>
      <CartView />
    </div>
  )
}
