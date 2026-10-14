import Link from 'next/link'

import { FaqList } from '@/components/faq-list'
import { GuideCard } from '@/components/guide-card'
import { HeroPicker } from '@/components/hero-picker'
import { JsonLd } from '@/components/json-ld'
import { Packs } from '@/components/packs'
import { PlateCard } from '@/components/plate-card'
import { PlateVisual } from '@/components/plate-visual'
import { CheckList, PROMISES, SectionHeading } from '@/components/sections'
import { getPlate, PLATES } from '@/config/catalog'
import { FAQ } from '@/config/faq'
import { SITE } from '@/config/site'
import { FEATURED_METIERS } from '@/data/metiers'
import { formatPrice } from '@/lib/format'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Plaque avis Google NFC et QR code, sans abonnement | Youzplate' },
  alternates: { canonical: '/' },
}

const STEPS = [
  [
    'Commandez',
    'Choisissez votre plateforme. Paiement sécurisé, livraison offerte en 3 à 7 jours ouvrés.',
  ],
  [
    'Activez en 2 minutes',
    'Scannez la plaque à réception, collez le lien de votre page. Un guide vous montre où le trouver.',
  ],
  [
    'Récoltez',
    'Un geste du téléphone ou un scan du QR code : la page s’ouvre, l’avis ou l’abonnement suit.',
  ],
]

const COMPARISON = [
  ['Prix', '29,90 € une fois', 'Abonnement mensuel'],
  ['NFC + QR code', 'Oui', 'Selon l’offre'],
  ['Changer de lien', 'Gratuit, à vie', 'Tant que vous payez'],
  ['Si vous arrêtez de payer', 'Elle continue de marcher', 'Elle peut s’éteindre'],
]

const google = getPlate('plaque-avis-google')!
const instagram = getPlate('plaque-instagram')!
const tripadvisor = getPlate('plaque-avis-tripadvisor')!

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <HeroPicker>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold">
              <span aria-hidden="true" className="tracking-[2px] text-[#E09A00]">
                ★★★★★
              </span>
              Plaques NFC &amp; QR code
            </p>
            <h1 className="font-display text-[clamp(40px,6vw,64px)] leading-[1.02] font-extrabold tracking-[-0.03em] text-balance">
              Vos clients contents, transformés en{' '}
              <span className="text-brand-600">avis 5 étoiles.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Une plaque avis Google posée sur votre comptoir. Vos clients approchent leur téléphone
              ou scannent le QR code : votre page s’ouvre, ils laissent un avis en moins de 30
              secondes.
            </p>
          </HeroPicker>
          <CheckList items={PROMISES} className="mt-10 text-[#33364F]" />
        </div>
      </section>

      {/* Comment ça marche */}
      <section
        id="comment-ca-marche"
        className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 md:py-24"
      >
        <SectionHeading
          eyebrow="Comment ça marche"
          title="Un client content repart sans rien dire. Un client mécontent, lui, écrit."
          text="La plaque rééquilibre la balance : elle demande l’avis au bon moment, quand votre client est encore devant vous."
        />
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map(([title, text], index) => (
            <li key={title} className="flex flex-col gap-3.5 rounded-3xl bg-paper p-8">
              <span className="grid size-11 place-items-center rounded-full bg-star text-lg font-extrabold">
                {index + 1}
              </span>
              <h3 className="font-display text-2xl font-extrabold">{title}</h3>
              <p className="leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Catalogue */}
      <section id="plaques" className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-bold tracking-[0.12em] text-brand-600 uppercase">
                Les plaques
              </p>
              <h2 className="font-display text-[clamp(30px,4vw,44px)] font-extrabold tracking-tight">
                Une plaque par objectif
              </h2>
            </div>
            <p className="max-w-md text-muted">
              NFC + QR code sur chaque plaque. Toutes à {formatPrice(google.unitAmount)}, scans
              illimités, lien modifiable gratuitement.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLATES.map((plate) => (
              <PlateCard key={plate.slug} plate={plate} />
            ))}
          </div>
        </div>
      </section>

      {/* Packs */}
      <section id="packs" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 md:py-24">
        <SectionHeading
          eyebrow="Packs"
          title="Couvrez tout votre établissement"
          text="Une plaque au comptoir, une sur les tables, une en vitrine : plus de points de contact, plus d’avis."
        />
        <Packs />
      </section>

      {/* Comparatif */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-20 md:py-24">
          <SectionHeading title="Pourquoi payer tous les mois pour un lien ?" />
          <div className="overflow-x-auto rounded-3xl border border-line bg-white">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  <th scope="col" className="p-5 text-left" />
                  <th scope="col" className="p-5 font-display text-xl text-brand-600">
                    Youzplate
                  </th>
                  <th scope="col" className="p-5 font-semibold text-muted">
                    Plaques sur abonnement
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([label, ours, theirs]) => (
                  <tr key={label} className="border-t border-line">
                    <th scope="row" className="p-5 text-left font-medium">
                      {label}
                    </th>
                    <td className="p-5 text-center font-bold">{ours}</td>
                    <td className="p-5 text-center text-muted">{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-center text-muted">
            Vous hésitez avec une plaque importée ?{' '}
            <Link
              href="/plaque-avis-google-francaise"
              className="font-semibold text-brand-600 underline"
            >
              Lisez notre comparatif honnête
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Par métier */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <SectionHeading
          eyebrow="Par métier"
          title="Où la poser, quand la proposer, quoi dire"
          text="Un guide par métier, pour tirer le maximum de votre plaque dès le premier jour."
        />
        <ul className="flex flex-wrap justify-center gap-3">
          {FEATURED_METIERS.map((metier) => (
            <li key={metier.path}>
              <Link
                href={metier.path}
                className="inline-flex min-h-12 items-center rounded-full border border-[#D3D5E6] px-5 font-semibold transition hover:border-brand-500 hover:text-brand-700"
              >
                {metier.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/metiers"
              className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 font-bold text-white"
            >
              Tous les métiers →
            </Link>
          </li>
        </ul>
      </section>

      {/* Garantie + FAQ */}
      <section id="faq" className="scroll-mt-28 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:py-24 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            <h2 className="font-display text-[clamp(30px,4vw,40px)] leading-tight font-extrabold tracking-tight">
              Les questions qu’on nous pose avant d’acheter
            </h2>
            <div className="flex items-start gap-4 rounded-3xl bg-white p-7">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-brand-600)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div>
                <p className="mb-1.5 text-lg font-bold">Garantie Youzplate</p>
                <p className="leading-relaxed text-muted">
                  Plaque défectueuse remplacée gratuitement. Lien modifiable à vie, même si vous
                  changez de fiche ou d’établissement.
                </p>
              </div>
            </div>
            <GuideCard slug="recuperer-lien-google-business" eyebrow="Guide" />
            <p className="text-muted">
              Une autre question ?{' '}
              <a href={`mailto:${SITE.contact.email}`} className="font-semibold text-brand-600">
                {SITE.contact.email}
              </a>{' '}
              · {SITE.contact.phone}
            </p>
          </div>
          <FaqList items={FAQ} />
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-4 pt-20">
        <div className="flex flex-wrap items-center justify-between gap-10 overflow-hidden rounded-[36px] bg-brand-600 p-8 text-white sm:p-14">
          <div className="min-w-0 flex-[1_1_420px] space-y-6">
            <h2 className="font-display text-[clamp(32px,4.5vw,48px)] leading-[1.05] font-extrabold tracking-tight">
              Vos clients sont contents. Donnez-leur un moyen de le dire.
            </h2>
            <Link
              href={`/${google.slug}`}
              className="inline-flex min-h-15 items-center rounded-full bg-star px-8 text-lg font-extrabold text-ink"
            >
              Commander ma plaque · {formatPrice(google.unitAmount)}
            </Link>
          </div>
          <div className="mx-auto flex items-center" aria-hidden="true">
            <PlateVisual
              plate={instagram}
              size={170}
              decorative
              className="translate-x-8 -rotate-[8deg]"
            />
            <PlateVisual plate={google} size={200} decorative className="z-10 rotate-[4deg]" />
            <PlateVisual
              plate={tripadvisor}
              size={170}
              decorative
              className="-translate-x-8 rotate-[10deg]"
            />
          </div>
        </div>
      </section>

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
