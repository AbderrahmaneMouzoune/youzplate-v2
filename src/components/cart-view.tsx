'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import { useActionState, useSyncExternalStore } from 'react'

import { startCheckout, type CheckoutState } from '@/app/actions/checkout'
import { PlateVisual } from '@/components/plate-visual'
import { QuantityInput } from '@/components/quantity-input'
import { PLATES } from '@/config/catalog'
import { CART_LIMITS, SHIPPING, VAT_MENTION } from '@/config/site'
import {
  attachPostHogIdentity,
  cartProperties,
  plateProperties,
  trackAddToCart,
} from '@/lib/analytics'
import { priceCart } from '@/lib/cart'
import { cart, useCart } from '@/lib/cart-store'
import { formatPrice } from '@/lib/format'
import { discountedUnitAmount, formatRate, nextTier, VOLUME_TIERS } from '@/lib/pricing'

const INITIAL_STATE: CheckoutState = { error: null }
const BEST_TIER = VOLUME_TIERS[0]

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
  const priced = priceCart(lines)

  if (!hydrated) {
    return <div className="h-64 animate-pulse rounded-3xl bg-paper" aria-hidden="true" />
  }

  if (priced.lines.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-line p-12 text-center">
        <p className="mb-6 text-lg text-muted">Votre panier est vide.</p>
        <Link
          href="/plaque-nfc"
          className="inline-flex min-h-13 items-center rounded-full bg-brand-600 px-7 font-bold text-white transition hover:bg-brand-700"
        >
          Découvrir les plaques
        </Link>
      </div>
    )
  }

  const upcoming = nextTier(priced.quantity)
  const missing = upcoming ? upcoming.minQuantity - priced.quantity : 0
  const progress = Math.min(1, priced.quantity / BEST_TIER.minQuantity)
  const inCart = new Set(priced.lines.map((line) => line.slug))
  const suggestions = PLATES.filter((plate) => !inCart.has(plate.slug)).slice(0, 2)
  // Prix unitaire d'une plaque de plus : c'est ce que coûte réellement l'ajout suggéré.
  const nextUnit = (amount: number) => discountedUnitAmount(amount, priced.quantity + 1)

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <div className="space-y-6">
        {/* Palier de remise */}
        <div className="space-y-2.5 rounded-3xl bg-brand-50 p-5">
          <p className="text-[15px]">
            {priced.tier ? (
              <>
                <strong>
                  {priced.tier.label} activé : {formatRate(priced.tier.rate)}.
                </strong>{' '}
              </>
            ) : null}
            {upcoming ? (
              <>
                Encore {missing} plaque{missing > 1 ? 's' : ''} pour passer à{' '}
                <strong>{formatRate(upcoming.rate)}</strong> sur tout le panier.
              </>
            ) : (
              'Vous profitez de la meilleure remise.'
            )}
          </p>
          <div
            role="progressbar"
            aria-label={`Progression vers le ${BEST_TIER.label}`}
            aria-valuemin={0}
            aria-valuemax={BEST_TIER.minQuantity}
            aria-valuenow={Math.min(priced.quantity, BEST_TIER.minQuantity)}
            className="h-2 overflow-hidden rounded-full bg-brand-200"
          >
            <div
              className="h-full rounded-full bg-brand-600 transition-all"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs font-semibold text-muted">
            <span>1</span>
            {[...VOLUME_TIERS].reverse().map((tier) => (
              <span key={tier.minQuantity}>
                {tier.minQuantity} · {formatRate(tier.rate)}
              </span>
            ))}
          </div>
        </div>

        <ul className="divide-y divide-line rounded-3xl border border-line">
          {priced.lines.map(({ plate, quantity, lineTotal, unitAmount }) => (
            <li key={plate.slug} className="flex gap-4 p-4 sm:items-center">
              <Link
                href={`/${plate.slug}`}
                className="shrink-0 rounded-2xl p-2"
                style={{ background: plate.tint }}
              >
                <PlateVisual plate={plate} size={72} decorative />
              </Link>
              <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Link href={`/${plate.slug}`} className="font-semibold hover:underline">
                    {plate.name}
                  </Link>
                  <p className="text-sm text-muted">
                    {formatPrice(unitAmount)} l’unité
                    {unitAmount < plate.unitAmount && (
                      <span className="ml-1.5 line-through">{formatPrice(plate.unitAmount)}</span>
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <QuantityInput
                    value={quantity}
                    min={1}
                    max={CART_LIMITS.maxQuantityPerLine}
                    onChange={(next) => {
                      cart.setQuantity(plate.slug, next)
                      posthog.capture('cart_quantity_changed', {
                        ...plateProperties(plate.slug),
                        previous_quantity: quantity,
                        quantity: next,
                        ...cartProperties(),
                      })
                    }}
                    label={`Quantité de ${plate.name}`}
                  />
                  <span className="w-20 text-right font-semibold">{formatPrice(lineTotal)}</span>
                  <button
                    type="button"
                    onClick={() => {
                      cart.remove(plate.slug)
                      posthog.capture('product_removed_from_cart', {
                        ...plateProperties(plate.slug),
                        quantity,
                        value: lineTotal / 100,
                        ...cartProperties(),
                      })
                    }}
                    className="text-sm text-muted underline hover:text-ink"
                  >
                    Retirer
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {suggestions.length > 0 && (
          <div className="space-y-3">
            <h2 className="font-semibold">Complétez votre panier</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {suggestions.map((plate) => (
                <li
                  key={plate.slug}
                  className="flex items-center gap-3.5 rounded-2xl border border-dashed border-brand-200 p-3.5"
                >
                  <span className="rounded-xl p-1.5" style={{ background: plate.tint }}>
                    <PlateVisual plate={plate} size={52} decorative />
                  </span>
                  <span className="flex flex-1 flex-col">
                    <strong className="text-[15px]">{plate.name}</strong>
                    <span className="text-[13px] text-muted">{plate.tagline}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      cart.add(plate.slug, 1)
                      trackAddToCart([{ slug: plate.slug, quantity: 1 }], 'cart_upsell')
                    }}
                    aria-label={`Ajouter ${plate.name} pour ${formatPrice(nextUnit(plate.unitAmount))}`}
                    className="min-h-11 shrink-0 rounded-full bg-ink px-4 text-sm font-bold text-white transition hover:bg-brand-700"
                  >
                    + {formatPrice(nextUnit(plate.unitAmount))}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <aside className="h-fit space-y-4 rounded-3xl bg-paper p-6 ring-1 ring-line lg:sticky lg:top-28">
        <h2 className="text-lg font-semibold">Récapitulatif</h2>
        <dl className="space-y-2 text-[15px]">
          <div className="flex justify-between">
            <dt>Sous-total</dt>
            <dd>{formatPrice(priced.subtotal)}</dd>
          </div>
          {priced.discount > 0 && priced.tier && (
            <div className="flex justify-between font-semibold text-green-800">
              <dt>
                {priced.tier.label} ({formatRate(priced.tier.rate)})
              </dt>
              <dd>−{formatPrice(priced.discount)}</dd>
            </div>
          )}
          <div className="flex justify-between">
            <dt>Livraison</dt>
            <dd className="font-semibold">
              {SHIPPING.amount === 0 ? 'Offerte' : formatPrice(SHIPPING.amount)}
            </dd>
          </div>
          <div className="flex justify-between border-t border-line pt-2.5 text-lg font-extrabold">
            <dt>Total</dt>
            <dd>{formatPrice(priced.total + SHIPPING.amount)}</dd>
          </div>
        </dl>

        <form
          action={(formData) => {
            posthog.capture('checkout_started', {
              ...cartProperties(lines),
              plate_slugs: priced.lines.map((line) => line.slug),
            })
            attachPostHogIdentity(formData)
            formAction(formData)
          }}
        >
          <input type="hidden" name="cart" value={JSON.stringify(lines)} />
          <button
            type="submit"
            disabled={pending}
            className="flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-brand-600 px-6 font-extrabold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700 disabled:opacity-60"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            {pending
              ? 'Redirection vers le paiement…'
              : `Paiement sécurisé · ${formatPrice(priced.total + SHIPPING.amount)}`}
          </button>
        </form>
        {state.error && (
          <p role="alert" className="text-sm font-medium text-red-700">
            {state.error}
          </p>
        )}
        <p className="text-xs leading-relaxed text-muted">
          {VAT_MENTION}. Carte, Apple Pay ou Google Pay via Stripe. Code promo et numéro de TVA à
          l’étape suivante. Rien à préparer maintenant : vous associerez votre lien en scannant la
          plaque à réception. En payant, vous acceptez nos{' '}
          <Link href="/cgv" className="underline">
            conditions générales de vente
          </Link>
          .
        </p>
      </aside>
    </div>
  )
}
