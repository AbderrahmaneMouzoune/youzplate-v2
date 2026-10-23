'use client'

import { useRouter } from 'next/navigation'
import posthog from 'posthog-js'
import { useState } from 'react'

import { plateProperties, trackAddToCart } from '@/lib/analytics'
import { cart } from '@/lib/cart-store'
import { formatPrice } from '@/lib/format'
import { discountedUnitAmount, formatRate, tierFor } from '@/lib/pricing'

import type { PlateSlug } from '@/config/catalog'

const OPTIONS = [
  { quantity: 1, title: '1 plaque', detail: 'Pour le comptoir ou la caisse' },
  {
    quantity: 2,
    title: '2 plaques',
    detail: 'Comptoir + tables, ou deux plateformes',
    popular: true,
  },
  { quantity: 5, title: '5 plaques', detail: 'Tout l’établissement : comptoir, tables, vitrine' },
]

/**
 * Choix de la quantité avec les remises de volume, puis ajout au panier.
 * On enchaîne directement sur le panier : il propose ensuite les plaques
 * complémentaires, et c'est l'étape la plus courte vers le paiement.
 */
export function BuyBox({ slug, unitAmount }: { slug: PlateSlug; unitAmount: number }) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(2)
  const [pending, setPending] = useState(false)

  const total = discountedUnitAmount(unitAmount, quantity) * quantity

  return (
    <div id="acheter" className="scroll-mt-28 space-y-4">
      <fieldset className="space-y-2.5">
        <legend className="mb-2.5 text-sm font-bold">Quantité</legend>
        {OPTIONS.map((option) => {
          const tier = tierFor(option.quantity)
          const price = discountedUnitAmount(unitAmount, option.quantity) * option.quantity
          const checked = option.quantity === quantity
          return (
            <label
              key={option.quantity}
              className={`flex cursor-pointer items-center gap-3.5 rounded-2xl border-2 px-4 py-3.5 transition ${
                checked
                  ? 'border-brand-600 bg-brand-50'
                  : 'border-line bg-white hover:border-brand-200'
              }`}
            >
              <input
                type="radio"
                name="quantite"
                checked={checked}
                onChange={() => {
                  setQuantity(option.quantity)
                  posthog.capture('product_quantity_selected', {
                    ...plateProperties(slug),
                    quantity: option.quantity,
                    volume_tier: tier?.label ?? 'aucun',
                    value: price / 100,
                  })
                }}
                className="size-5 accent-brand-600"
              />
              <span className="flex flex-1 flex-col">
                <span className="font-bold">
                  {option.title}
                  {option.popular && (
                    <span className="ml-2 align-middle text-xs font-semibold text-brand-600">
                      Le plus choisi
                    </span>
                  )}
                </span>
                <span className="text-[13px] text-muted">{option.detail}</span>
              </span>
              {tier && (
                <span className="rounded-full bg-star px-2.5 py-1 text-xs font-extrabold">
                  {formatRate(tier.rate)}
                </span>
              )}
              <span className="flex flex-col text-right">
                <span className="text-lg font-extrabold">{formatPrice(price)}</span>
                {tier && (
                  <span className="text-[13px] text-muted line-through">
                    {formatPrice(unitAmount * option.quantity)}
                  </span>
                )}
              </span>
            </label>
          )
        })}
      </fieldset>
      <p className="text-[13px] text-muted">
        La remise compte toutes les plaques du panier : une Google + une Instagram = −10 %.
      </p>

      <button
        type="button"
        disabled={pending}
        onClick={() => {
          setPending(true)
          cart.add(slug, quantity)
          trackAddToCart([{ slug, quantity }], 'buy_box')
          router.push('/panier')
        }}
        className="flex min-h-15 w-full items-center justify-center rounded-full bg-brand-600 px-6 text-lg font-extrabold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700 disabled:opacity-70"
      >
        {pending ? 'Ajout au panier…' : `Ajouter au panier · ${formatPrice(total)}`}
      </button>
    </div>
  )
}
