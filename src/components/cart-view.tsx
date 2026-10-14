'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useActionState, useSyncExternalStore } from 'react'

import { startCheckout, type CheckoutState } from '@/app/actions/checkout'
import { QuantityInput } from '@/components/quantity-input'
import { CART_LIMITS, SHIPPING } from '@/config/site'
import { priceCart } from '@/lib/cart'
import { cart, useCart } from '@/lib/cart-store'
import { formatPrice } from '@/lib/format'

const INITIAL_STATE: CheckoutState = { error: null }

/** `false` au rendu serveur et à l'hydratation, `true` ensuite : évite un flash de « panier vide ». */
function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

export function CartView() {
  const lines = useCart()
  const hydrated = useHydrated()
  const [state, formAction, pending] = useActionState(startCheckout, INITIAL_STATE)
  const { lines: priced, subtotal } = priceCart(lines)

  if (!hydrated) {
    return <div className="h-64 animate-pulse rounded-2xl bg-paper" aria-hidden="true" />
  }

  if (priced.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-12 text-center">
        <p className="mb-6 text-lg text-muted">Votre panier est vide.</p>
        <Link
          href="/plaques"
          className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
        >
          Découvrir les plaques
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <ul className="divide-y divide-line rounded-2xl border border-line">
        {priced.map(({ plate, quantity, lineTotal }) => (
          <li key={plate.slug} className="flex gap-4 p-4 sm:items-center">
            <Link href={`/plaques/${plate.slug}`} className="shrink-0">
              <Image
                src={plate.image}
                alt=""
                width={96}
                height={96}
                className="rounded-xl border border-line"
              />
            </Link>
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link href={`/plaques/${plate.slug}`} className="font-semibold hover:underline">
                  {plate.name}
                </Link>
                <p className="text-sm text-muted">{formatPrice(plate.unitAmount)} l’unité</p>
              </div>
              <div className="flex items-center gap-4">
                <QuantityInput
                  value={quantity}
                  min={1}
                  max={CART_LIMITS.maxQuantityPerLine}
                  onChange={(next) => cart.setQuantity(plate.slug, next)}
                  label={`Quantité de ${plate.name}`}
                />
                <span className="w-20 text-right font-semibold">{formatPrice(lineTotal)}</span>
                <button
                  type="button"
                  onClick={() => cart.remove(plate.slug)}
                  className="text-sm text-muted underline hover:text-ink"
                >
                  Retirer
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit space-y-4 rounded-2xl bg-paper p-6 ring-1 ring-line lg:sticky lg:top-24">
        <h2 className="text-lg font-semibold">Récapitulatif</h2>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt>Sous-total</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Livraison</dt>
            <dd>{SHIPPING.amount === 0 ? 'Offerte' : formatPrice(SHIPPING.amount)}</dd>
          </div>
          <div className="flex justify-between border-t border-line pt-2 text-base font-bold">
            <dt>Total TTC</dt>
            <dd>{formatPrice(subtotal + SHIPPING.amount)}</dd>
          </div>
        </dl>

        <form action={formAction}>
          <input type="hidden" name="cart" value={JSON.stringify(lines)} />
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 disabled:opacity-60"
          >
            {pending ? 'Redirection vers le paiement…' : 'Payer en toute sécurité'}
          </button>
        </form>
        {state.error && (
          <p role="alert" className="text-sm font-medium text-red-700">
            {state.error}
          </p>
        )}
        <p className="text-xs text-muted">
          Paiement par carte, Apple Pay ou Google Pay via Stripe. Code promo et numéro de TVA à
          saisir à l’étape suivante. En payant, vous acceptez nos{' '}
          <Link href="/cgv" className="underline">
            conditions générales de vente
          </Link>
          .
        </p>
      </aside>
    </div>
  )
}
