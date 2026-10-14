'use client'

import Link from 'next/link'
import { useState } from 'react'

import { QuantityInput } from '@/components/quantity-input'
import { CART_LIMITS } from '@/config/site'
import { cart } from '@/lib/cart-store'
import { formatPrice } from '@/lib/format'

import type { PlateSlug } from '@/config/catalog'

export function AddToCart({ slug, unitAmount }: { slug: PlateSlug; unitAmount: number }) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <QuantityInput
          value={quantity}
          max={CART_LIMITS.maxQuantityPerLine}
          onChange={(next) => {
            setQuantity(next)
            setAdded(false)
          }}
          label="Quantité"
        />
        <button
          type="button"
          onClick={() => {
            cart.add(slug, quantity)
            setAdded(true)
          }}
          className="flex-1 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
        >
          Ajouter au panier · {formatPrice(unitAmount * quantity)}
        </button>
      </div>
      <p role="status" className="min-h-6 text-sm">
        {added && (
          <>
            <span className="font-semibold text-green-700">✓ Ajouté au panier.</span>{' '}
            <Link href="/panier" className="font-semibold text-brand-600 underline">
              Voir le panier et payer
            </Link>
          </>
        )}
      </p>
    </div>
  )
}
