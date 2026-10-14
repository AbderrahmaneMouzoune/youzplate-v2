import Image from 'next/image'
import Link from 'next/link'

import { FaqList } from '@/components/faq-list'
import { GuideCard } from '@/components/guide-card'
import { JsonLd } from '@/components/json-ld'
import { PlateCard } from '@/components/plate-card'
import { PLATES } from '@/config/catalog'
import { FAQ } from '@/config/faq'
import { SITE } from '@/config/site'
import { formatPrice } from '@/lib/format'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} · ${SITE.tagline}` },
  alternates: { canonical: '/' },
}

const PROMISES = [
  { title: 'Sans abonnement', text: 'Un seul paiement, scans illimités.' },
  { title: 'Lien modifiable', text: 'Gratuitement, à vie.' },
  { title: 'Sans pile ni Wi-Fi', text: 'Rien à brancher ni recharger.' },
  { title: 'Livraison offerte', text: 'Expédiée sous 48 h ouvrées.' },
]

const STEPS = [
  {
    title: 'Choisissez votre plaque',
    text: 'Google, Instagram, TikTok, TripAdvisor, Doctolib ou Snapchat : une plaque par objectif, à poser où vos clients passent.',
  },
  {
    title: 'Associez votre lien',
    text: 'À réception, scannez la plaque et indiquez le lien de votre page. Nos guides vous montrent où le trouver.',
  },
  {
    title: 'Vos clients scannent',
    text: 'Un geste avec le téléphone, ou le QR code avec l’appareil photo : votre page s’ouvre, l’avis ou l’abonnement suit.',
  },
]

const REASONS = [
  {
    title: 'Le bon moment',
    text: 'Un client satisfait est prêt à laisser un avis… tant qu’il est encore chez vous. Une fois parti, l’intention retombe. La plaque capte ce moment.',
  },
  {
    title: 'Zéro friction',
    text: 'Pas de recherche, pas de lien à taper, pas d’application à installer. Chaque étape supprimée, ce sont des avis en plus.',
  },
  {
    title: 'Votre lien, pas le nôtre',
    text: 'La plaque ouvre directement votre fiche ou votre profil. Vous gardez la main sur la destination et pouvez la changer quand vous voulez.',
  },
]

const lowestPrice = Math.min(...PLATES.map((plate) => plate.unitAmount))

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-700 shadow-sm">
              <span aria-hidden="true" className="text-star">
                ★★★★★
              </span>
              Plaques NFC &amp; QR code
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Plus d’avis, plus d’abonnés, <span className="text-brand-600">sans abonnement.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Posez une Youzplate sur votre comptoir : vos clients laissent un avis Google ou vous
              suivent sur Instagram en moins de 30 secondes, d’un simple geste avec leur téléphone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/plaques"
                className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
              >
                Choisir ma plaque · dès {formatPrice(lowestPrice)}
              </Link>
              <Link
                href="#comment-ca-marche"
                className="rounded-full border border-line bg-white px-6 py-3 font-semibold transition hover:border-brand-200"
              >
                Comment ça marche
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src="/plaques/instagram.webp"
              alt=""
              width={500}
              height={500}
              sizes="(min-width: 1024px) 320px, 60vw"
              className="absolute top-0 right-0 w-[68%] rotate-6 rounded-3xl shadow-2xl"
              priority
            />
            <Image
              src="/plaques/google.webp"
              alt="Plaque Youzplate Google « Laissez-nous un avis » avec zone NFC et QR code"
              width={500}
              height={500}
              sizes="(min-width: 1024px) 340px, 65vw"
              className="absolute bottom-0 left-0 w-[72%] -rotate-3 rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>

        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 pb-14 md:grid-cols-4">
          {PROMISES.map((promise) => (
            <li key={promise.title} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-line">
              <p className="font-semibold">{promise.title}</p>
              <p className="text-sm text-muted">{promise.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Catalogue */}
      <section id="plaques" className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="Les plaques"
          title="Une plaque pour chaque objectif"
          text="Des avis pour rassurer, des abonnés pour fidéliser, des rendez-vous pour remplir l’agenda."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLATES.map((plate) => (
            <PlateCard key={plate.slug} plate={plate} />
          ))}
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="scroll-mt-20 bg-brand-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionHeading eyebrow="Comment ça marche" title="Prête en trois étapes" dark />
          <ol className="grid gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <span className="mb-4 grid size-10 place-items-center rounded-full bg-star font-bold text-ink">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-brand-100">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          eyebrow="Pourquoi ça marche"
          title="Un avis se demande au bon moment"
          text="La plupart des clients satisfaits ne laissent jamais d’avis. Pas par manque d’envie : par manque d’occasion."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title} className="rounded-2xl border border-line p-6">
              <h3 className="mb-2 text-lg font-semibold">{reason.title}</h3>
              <p className="text-muted">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionHeading
            eyebrow="Guides"
            title="Trouvez le bon lien à associer"
            text="Lien d’avis Google, page TripAdvisor, nom d’utilisateur Instagram… nos guides détaillent chaque plateforme, étape par étape."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <GuideCard slug="recuperer-lien-google-business" eyebrow="Google" />
            <GuideCard slug="trouver-nom-utilisateur-instagram" eyebrow="Instagram" />
            <GuideCard slug="trouver-lien-tripadvisor" eyebrow="TripAdvisor" />
          </div>
          <p className="mt-8 text-center">
            <Link href="/guides" className="font-semibold text-brand-600 hover:underline">
              Tous les guides →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
        <FaqList items={FAQ} />
        <p className="mt-6 text-center text-muted">
          Une autre question ?{' '}
          <a href={`mailto:${SITE.contact.email}`} className="font-semibold text-brand-600">
            {SITE.contact.email}
          </a>
        </p>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-600 px-6 py-14 text-center text-white">
          <h2 className="max-w-2xl text-3xl font-bold text-balance">
            Vos clients sont contents. Donnez-leur un moyen de le dire.
          </h2>
          <Link
            href="/plaques"
            className="rounded-full bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Voir les plaques
          </Link>
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

function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string
  title: string
  text?: string
  dark?: boolean
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p
        className={`mb-2 text-sm font-semibold tracking-wide uppercase ${dark ? 'text-star' : 'text-brand-600'}`}
      >
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-balance">{title}</h2>
      {text && <p className={`mt-3 ${dark ? 'text-brand-100' : 'text-muted'}`}>{text}</p>}
    </div>
  )
}
