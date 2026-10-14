import Link from 'next/link'

import { AddBundle } from '@/components/add-bundle'
import { DeliveryEstimate } from '@/components/delivery-estimate'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { PlateVisual } from '@/components/plate-visual'
import { Breadcrumbs, CheckList, PROMISES } from '@/components/sections'
import { getPlate } from '@/config/catalog'
import { SITE } from '@/config/site'
import { formatPrice } from '@/lib/format'
import { discountedUnitAmount, formatRate, tierFor } from '@/lib/pricing'

import type { Metadata } from 'next'

const google = getPlate('plaque-avis-google')!
const instagram = getPlate('plaque-instagram')!
const full = google.unitAmount + instagram.unitAmount
const price =
  discountedUnitAmount(google.unitAmount, 2) + discountedUnitAmount(instagram.unitAmount, 2)
const tier = tierFor(2)!

export const metadata: Metadata = {
  title: `Pack plaques avis Google + Instagram · ${formatRate(tier.rate)}`,
  description: `Les plaques NFC et QR code avis Google et Instagram ensemble : des avis et des abonnés pour ${formatPrice(price)} au lieu de ${formatPrice(full)}. Sans abonnement, livraison offerte.`,
  alternates: { canonical: '/plaque-avis-google-instagram' },
}

const FAQ = [
  {
    question: 'Puis-je remplacer Instagram par une autre plateforme ?',
    answer:
      'Oui : la remise s’applique à partir de 2 plaques, quelles qu’elles soient. Ajoutez simplement les deux plaques de votre choix au panier.',
  },
  {
    question: 'Les deux plaques pointent-elles vers des liens différents ?',
    answer:
      'Oui. La plaque Google ouvre la fenêtre d’avis de votre fiche, la plaque Instagram ouvre votre profil. Chaque lien se modifie séparément.',
  },
  {
    question: 'Où poser chacune des deux plaques ?',
    answer:
      'La plaque Google là où le client règle (caisse, porte-addition), la plaque Instagram là où il attend ou prend une photo (tables, comptoir, vitrine).',
  },
]

export default function DuoPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Les plaques', href: '/plaque-nfc' },
          { name: 'Pack Google + Instagram', href: '/plaque-avis-google-instagram' },
        ]}
      />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-6 pb-16 lg:grid-cols-2">
        <div className="relative flex min-h-[440px] items-center justify-center gap-4 rounded-[32px] bg-brand-100 p-8">
          <PlateVisual plate={google} size={250} tilt="left" priority />
          <PlateVisual plate={instagram} size={210} tilt="right" priority className="mt-16" />
        </div>
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-star px-3.5 py-1.5 text-sm font-extrabold">
            {tier.label} · {formatRate(tier.rate)}
          </p>
          <h1 className="font-display text-[clamp(34px,4.5vw,50px)] leading-[1.05] font-extrabold tracking-tight">
            Pack plaques avis Google + Instagram
          </h1>
          <p className="text-lg text-muted">
            Des avis pour rassurer les nouveaux clients, des abonnés pour faire revenir les anciens.
            Les deux plaques NFC + QR code, à poser là où vos clients passent.
          </p>
          <p className="flex items-baseline gap-3">
            <span className="font-display text-4xl font-extrabold">{formatPrice(price)}</span>
            <span className="text-lg text-muted line-through">{formatPrice(full)}</span>
          </p>
          <AddBundle
            slugs={[google.slug, instagram.slug]}
            label={`Ajouter le pack · ${formatPrice(price)}`}
          />
          <DeliveryEstimate />
          <CheckList items={PROMISES} />
          <p className="text-sm text-muted">
            Une autre paire ? La remise s’applique dès 2 plaques :{' '}
            <Link href="/plaque-nfc" className="font-semibold text-brand-600 underline">
              composez votre pack
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="mb-6 font-display text-3xl font-extrabold">Questions fréquentes</h2>
        <FaqList items={FAQ} />
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Pack plaques avis Google + Instagram',
          image: [`${SITE.url}${google.image}`, `${SITE.url}${instagram.image}`],
          brand: { '@type': 'Brand', name: SITE.name },
          offers: {
            '@type': 'Offer',
            url: `${SITE.url}/plaque-avis-google-instagram`,
            price: (price / 100).toFixed(2),
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
    </>
  )
}
