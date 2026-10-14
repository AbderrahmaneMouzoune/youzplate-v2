'use client'

import Link from 'next/link'

import { countItems } from '@/lib/cart'
import { useCart } from '@/lib/cart-store'

export function CartLink() {
  const count = countItems(useCart())

  return (
    <Link
      href="/panier"
      className="relative inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
      aria-label={count > 0 ? `Panier, ${count} article${count > 1 ? 's' : ''}` : 'Panier vide'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="20" r="1.5" fill="currentColor" />
        <circle cx="17" cy="20" r="1.5" fill="currentColor" />
      </svg>
      <span className="hidden sm:inline">Panier</span>
      {count > 0 && (
        <span className="grid min-w-5 place-items-center rounded-full bg-star px-1.5 text-xs font-bold text-ink">
          {count}
        </span>
      )}
    </Link>
  )
}
