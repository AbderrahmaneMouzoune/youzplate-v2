import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { AddToCart } from '@/components/add-to-cart'
import { GuideCard } from '@/components/guide-card'
import { JsonLd } from '@/components/json-ld'
import { PlateCard } from '@/components/plate-card'
import { GOAL_LABELS, getPlate, PLATES } from '@/config/catalog'
import { SHIPPING, SITE } from '@/config/site'
import { formatPrice } from '@/lib/format'

import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PLATES.map((plate) => ({ slug: plate.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const plate = getPlate((await params).slug)
  if (!plate) return {}
  return {
    title: plate.metaTitle,
    description: plate.metaDescription,
    alternates: { canonical: `/plaques/${plate.slug}` },
    openGraph: { images: [{ url: plate.image, width: 1000, height: 1000, alt: plate.imageAlt }] },
  }
}

const REASSURANCE = [
  'Puce NFC + QR code',
  'Sans abonnement, scans illimités',
  'Lien modifiable gratuitement',
  `Livraison offerte en ${SHIPPING.minBusinessDays} à ${SHIPPING.maxBusinessDays} jours ouvrés`,
  'Paiement sécurisé par Stripe',
  'Facture avec TVA intracommunautaire',
]

export default async function PlatePage({ params }: Props) {
  const plate = getPlate((await params).slug)
  if (!plate) notFound()

  const others = PLATES.filter((other) => other.slug !== plate.slug).slice(0, 3)

  return (
    <>
      <nav aria-label="Fil d’Ariane" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-muted">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/">Accueil</Link> /
          </li>
          <li>
            <Link href="/plaques">Les plaques</Link> /
          </li>
          <li aria-current="page" className="text-ink">
            {plate.name}
          </li>
        </ol>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Image
            src={plate.image}
            alt={plate.imageAlt}
            width={1000}
            height={1000}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="w-full rounded-3xl border border-line shadow-xl shadow-brand-900/10"
            priority
          />
        </div>

        <div>
          <p
            className="mb-3 text-sm font-semibold tracking-wide uppercase"
            style={{ color: plate.accent }}
          >
            {GOAL_LABELS[plate.goal]} sur {plate.platformLabel}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight">{plate.name}</h1>
          <p className="mt-3 text-lg text-muted">{plate.tagline}</p>
          <p className="mt-6 text-3xl font-bold">
            {formatPrice(plate.unitAmount)}
            <span className="ml-2 text-base font-normal text-muted">TTC, livraison offerte</span>
          </p>

          <div className="mt-6">
            <AddToCart slug={plate.slug} unitAmount={plate.unitAmount} />
          </div>

          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {REASSURANCE.map((item) => (
              <li key={item} className="flex gap-2 text-sm">
                <span aria-hidden="true" className="text-brand-600">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-4 text-muted">
            {plate.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="mb-3 font-semibold">Idéale pour</h2>
            <ul className="flex flex-wrap gap-2">
              {plate.sectors.map((sector) => (
                <li
                  key={sector}
                  className="rounded-full bg-paper px-3 py-1 text-sm ring-1 ring-line"
                >
                  {sector}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-2xl bg-brand-50 p-6">
            <h2 className="mb-2 font-semibold">Après l’achat : associez {plate.linkTarget}</h2>
            <p className="mb-4 text-sm text-muted">
              À réception, scannez la plaque et collez votre lien dans la page qui s’ouvre. Vous ne
              savez pas où le trouver ? Notre guide vous montre le chemin, étape par étape.
            </p>
            <GuideCard slug={plate.guide} eyebrow={`Guide ${plate.platformLabel}`} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-2xl font-bold">Les autres plaques</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <PlateCard key={other.slug} plate={other} />
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: plate.name,
          description: plate.metaDescription,
          image: `${SITE.url}${plate.image}`,
          sku: plate.slug,
          brand: { '@type': 'Brand', name: SITE.name },
          offers: {
            '@type': 'Offer',
            url: `${SITE.url}/plaques/${plate.slug}`,
            price: (plate.unitAmount / 100).toFixed(2),
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              shippingRate: {
                '@type': 'MonetaryAmount',
                value: SHIPPING.amount / 100,
                currency: 'EUR',
              },
              shippingDestination: SHIPPING.countries.map((country) => ({
                '@type': 'DefinedRegion',
                addressCountry: country,
              })),
              deliveryTime: {
                '@type': 'ShippingDeliveryTime',
                handlingTime: {
                  '@type': 'QuantitativeValue',
                  minValue: 0,
                  maxValue: 2,
                  unitCode: 'DAY',
                },
                transitTime: {
                  '@type': 'QuantitativeValue',
                  minValue: SHIPPING.minBusinessDays,
                  maxValue: SHIPPING.maxBusinessDays,
                  unitCode: 'DAY',
                },
              },
            },
          },
        }}
      />
    </>
  )
}
