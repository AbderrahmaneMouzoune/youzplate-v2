'use client'

import Link from 'next/link'
import { useState } from 'react'

import { trackAddToCart } from '@/lib/analytics'
import { cart } from '@/lib/cart-store'

import type { PlateSlug } from '@/config/catalog'

/** Ajout en un clic depuis une carte, sans quitter la page. */
export function QuickAdd({ slug, name }: { slug: PlateSlug; name: string }) {
  const [added, setAdded] = useState(false)

  if (added) {
    return (
      <Link
        href="/panier"
        className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-green-700 px-4 text-sm font-bold text-white"
      >
        Ajoutée · voir le panier
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={() => {
        cart.add(slug, 1)
        trackAddToCart([{ slug, quantity: 1 }], 'quick_add')
        setAdded(true)
      }}
      aria-label={`Ajouter ${name} au panier`}
      className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-bold text-white transition hover:bg-brand-700"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
      Ajouter
    </button>
  )
}
