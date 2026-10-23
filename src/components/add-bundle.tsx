'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { trackAddToCart } from '@/lib/analytics'
import { cart } from '@/lib/cart-store'

import type { PlateSlug } from '@/config/catalog'

/** Ajoute plusieurs plaques d'un coup (pack) puis ouvre le panier. */
export function AddBundle({ slugs, label }: { slugs: PlateSlug[]; label: string }) {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        setPending(true)
        slugs.forEach((slug) => cart.add(slug, 1))
        trackAddToCart(
          slugs.map((slug) => ({ slug, quantity: 1 })),
          'bundle'
        )
        router.push('/panier')
      }}
      className="flex min-h-15 w-full items-center justify-center rounded-full bg-brand-600 px-6 text-lg font-extrabold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700 disabled:opacity-70 sm:w-auto sm:px-10"
    >
      {pending ? 'Ajout au panier…' : label}
    </button>
  )
}
