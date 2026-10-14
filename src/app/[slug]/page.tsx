import Link from 'next/link'
import { notFound } from 'next/navigation'

import { BuyBox } from '@/components/buy-box'
import { DeliveryEstimate } from '@/components/delivery-estimate'
import { FaqList } from '@/components/faq-list'
import { GuideCard } from '@/components/guide-card'
import { JsonLd } from '@/components/json-ld'
import { PlateCard } from '@/components/plate-card'
import { ProductGallery } from '@/components/product-gallery'
import {
  Breadcrumbs,
  CheckList,
  ClientView,
  PlatformLinks,
  PROMISES,
  SectionHeading,
} from '@/components/sections'
import { GOAL_LABELS, getPlate, PLATES, type Plate } from '@/config/catalog'
import { FAQ } from '@/config/faq'
import { SHIPPING, SITE } from '@/config/site'
import { metierPath, metiersForPlate } from '@/data/metiers'
import { formatPrice } from '@/lib/format'

import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PLATES.map((plate) => ({ slug: plate.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const plate = getPlate((await params).slug)
  if (!plate) notFound()
  return {
    title: plate.metaTitle,
    description: plate.metaDescription,
    alternates: { canonical: `/${plate.slug}` },
    openGraph: { images: [{ url: plate.image, width: 1000, height: 1000, alt: plate.imageAlt }] },
  }
}

/** Questions générales reprises sur chaque fiche (le reste vit sur l'accueil). */
const PRODUCT_FAQ = FAQ.filter((item) =>
  [
    'Faut-il payer un abonnement ?',
    'Comment j’associe ma page à la plaque ?',
    'Puis-je changer le lien plus tard ?',
    'Est-ce compatible avec tous les téléphones ?',
  ].includes(item.question)
)

export default async function PlatePage({ params }: Props) {
  const plate = getPlate((await params).slug)
  if (!plate) notFound()

  const metiers = metiersForPlate(plate.slug)
  const others = PLATES.filter((other) => other.slug !== plate.slug).slice(0, 3)

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Les plaques', href: '/plaque-nfc' },
          { name: plate.name, href: `/${plate.slug}` },
        ]}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-6 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <ProductGallery plate={plate} />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p
              className="text-sm font-bold tracking-[0.1em] uppercase"
              style={{ color: plate.accent === '#010101' ? undefined : plate.accent }}
            >
              {GOAL_LABELS[plate.goal]} sur {plate.platformLabel}
            </p>
            <h1 className="font-display text-[clamp(34px,4.5vw,48px)] leading-[1.05] font-extrabold tracking-tight">
              {plate.name} NFC et QR code
            </h1>
            <p className="text-lg text-muted">{plate.tagline}</p>
            <p className="font-display text-3xl font-extrabold">
              {formatPrice(plate.unitAmount)}
              <span className="ml-2 font-sans text-base font-normal text-muted">
                TTC l’unité · sans abonnement
              </span>
            </p>
          </div>

          <PlatformLinks current={plate} />
          <BuyBox slug={plate.slug} unitAmount={plate.unitAmount} />
          <DeliveryEstimate />
          <CheckList items={PROMISES} className="flex-col sm:flex-row" />

          <div className="divide-y divide-line border-y border-line">
            <details open className="py-4">
              <summary className="cursor-pointer text-[17px] font-bold">
                Ce que vous recevez
              </summary>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
                <li>Votre {plate.name.toLowerCase()} avec puce NFC et QR code</li>
                <li>L’activation en ligne : vous associez {plate.linkTarget} en 2 minutes</li>
                <li>La modification du lien, gratuite et à vie</li>
              </ul>
            </details>
            <details className="py-4">
              <summary className="cursor-pointer text-[17px] font-bold">
                Activation en 2 minutes
              </summary>
              <p className="mt-3 text-muted">
                À réception, scannez la plaque : une page s’ouvre. Indiquez l’e-mail de la commande
                et {plate.linkTarget}. Vous ne savez pas où le trouver ? Notre guide vous montre le
                chemin.
              </p>
            </details>
            <details className="py-4">
              <summary className="cursor-pointer text-[17px] font-bold">
                Livraison et retours
              </summary>
              <p className="mt-3 text-muted">
                Livraison offerte en {SHIPPING.zoneLabel}, en {SHIPPING.minBusinessDays} à{' '}
                {SHIPPING.maxBusinessDays} jours ouvrés. Plaque défectueuse remplacée gratuitement.
                Détails dans nos{' '}
                <Link href="/cgv" className="underline">
                  conditions de vente
                </Link>
                .
              </p>
            </details>
          </div>

          <div className="space-y-4 text-muted">
            {plate.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <ClientView plate={plate} />

      <IdealFor
        plate={plate}
        metierLinks={metiers.map((m) => ({ name: m.name, href: metierPath(m) }))}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-5 font-display text-3xl font-extrabold">Caractéristiques</h2>
          <dl className="grid grid-cols-[1fr_2fr] border-t border-line text-[15px]">
            {[
              ['Technologie', 'Puce NFC + QR code imprimé'],
              [
                'Compatibilité',
                'iPhone XS et plus récents, Android avec NFC ; QR code lisible par tout smartphone',
              ],
              ['Alimentation', 'Aucune : ni pile, ni Wi-Fi'],
              ['Destination', plate.linkTarget.charAt(0).toUpperCase() + plate.linkTarget.slice(1)],
              ['Abonnement', 'Aucun'],
            ].map(([term, value]) => (
              <div key={term} className="contents">
                <dt className="border-b border-line py-3.5 font-semibold">{term}</dt>
                <dd className="border-b border-line py-3.5 text-muted">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-3xl bg-paper p-8">
          <h2 className="font-display text-2xl font-extrabold">
            Préparez votre lien dès maintenant
          </h2>
          <GuideCard slug={plate.guide} eyebrow={`Guide ${plate.platformLabel}`} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="mb-6 font-display text-3xl font-extrabold">Questions fréquentes</h2>
        <FaqList items={PRODUCT_FAQ} />
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-8 font-display text-3xl font-extrabold">
            Complétez avec une autre plaque
          </h2>
          <p className="-mt-5 mb-8 text-muted">
            Dès 2 plaques dans le panier, toutes plateformes confondues : −10 %.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <PlateCard key={other.slug} plate={other} />
            ))}
          </div>
        </div>
      </section>

      <StickyBuy plate={plate} />

      <JsonLd data={productJsonLd(plate)} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: PRODUCT_FAQ.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
    </>
  )
}

function IdealFor({
  plate,
  metierLinks,
}: {
  plate: Plate
  metierLinks: { name: string; href: string }[]
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16">
      <SectionHeading
        align="left"
        eyebrow="Idéale pour"
        title={`Où poser votre ${plate.name.toLowerCase()}`}
        text={
          metierLinks.length > 0
            ? 'Emplacements, bon moment et phrase à dire : un guide par métier.'
            : undefined
        }
      />
      <ul className="-mt-4 flex flex-wrap gap-2.5">
        {metierLinks.length > 0
          ? metierLinks.map((metier) => (
              <li key={metier.href}>
                <Link
                  href={metier.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-[#D3D5E6] px-4 font-medium transition hover:border-brand-500 hover:text-brand-700"
                >
                  {metier.name}
                </Link>
              </li>
            ))
          : plate.sectors.map((sector) => (
              <li
                key={sector}
                className="rounded-full bg-paper px-4 py-2.5 font-medium ring-1 ring-line"
              >
                {sector}
              </li>
            ))}
      </ul>
    </section>
  )
}

/** Barre d'achat mobile, toujours au pouce. */
function StickyBuy({ plate }: { plate: Plate }) {
  return (
    <div className="sticky bottom-0 z-30 border-t border-line bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(20,22,46,0.08)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <div className="flex flex-1 flex-col">
          <span className="text-[13px] text-muted">{plate.name}</span>
          <strong className="text-lg">{formatPrice(plate.unitAmount)}</strong>
        </div>
        <a
          href="#acheter"
          className="inline-flex min-h-13 items-center rounded-full bg-brand-600 px-6 font-extrabold text-white"
        >
          Choisir ma quantité
        </a>
      </div>
    </div>
  )
}

function productJsonLd(plate: Plate) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: plate.name,
    description: plate.metaDescription,
    image: `${SITE.url}${plate.image}`,
    sku: plate.slug,
    brand: { '@type': 'Brand', name: SITE.name },
    offers: {
      '@type': 'Offer',
      url: `${SITE.url}/${plate.slug}`,
      price: (plate.unitAmount / 100).toFixed(2),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: SHIPPING.amount / 100, currency: 'EUR' },
        shippingDestination: SHIPPING.countries.map((country) => ({
          '@type': 'DefinedRegion',
          addressCountry: country,
        })),
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 2, unitCode: 'DAY' },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: SHIPPING.minBusinessDays,
            maxValue: SHIPPING.maxBusinessDays,
            unitCode: 'DAY',
          },
        },
      },
    },
  }
}
