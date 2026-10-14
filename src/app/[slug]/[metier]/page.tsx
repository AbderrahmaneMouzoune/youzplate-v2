import Link from 'next/link'
import { notFound } from 'next/navigation'

import { FaqList } from '@/components/faq-list'
import { GuideCard } from '@/components/guide-card'
import { JsonLd } from '@/components/json-ld'
import { PlateCard } from '@/components/plate-card'
import { PlateVisual } from '@/components/plate-visual'
import { Breadcrumbs, CheckList, PROMISES, SectionHeading } from '@/components/sections'
import { getPlateByPlatform } from '@/config/catalog'
import { getMetier, METIERS, metierPath, metierPlateSlug } from '@/data/metiers'
import { formatPrice } from '@/lib/format'
import { discountedUnitAmount } from '@/lib/pricing'

import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string; metier: string }> }

export function generateStaticParams() {
  return METIERS.map((metier) => ({ slug: metierPlateSlug(metier), metier: metier.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, metier: metierSlug } = await params
  const metier = getMetier(slug, metierSlug)
  if (!metier) notFound()
  const plate = getPlateByPlatform(metier.platform)
  return {
    title: metier.metaTitle,
    description: metier.metaDescription,
    alternates: { canonical: metierPath(metier) },
    openGraph: { images: [{ url: plate.image, width: 1000, height: 1000, alt: plate.imageAlt }] },
  }
}

export default async function MetierPage({ params }: Props) {
  const { slug, metier: metierSlug } = await params
  const metier = getMetier(slug, metierSlug)
  if (!metier) notFound()

  const plate = getPlateByPlatform(metier.platform)
  const companions = metier.alsoRecommended.map(getPlateByPlatform)
  const siblings = METIERS.filter(
    (other) => other.family === metier.family && other.slug !== metier.slug
  )
  const duoPrice = discountedUnitAmount(plate.unitAmount, 2) * 2
  const isReview = metier.platform === 'google'

  return (
    <>
      <Breadcrumbs
        items={[
          { name: plate.name, href: `/${plate.slug}` },
          { name: metier.name, href: metierPath(metier) },
        ]}
      />

      {/* Réponse directe + achat */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-6 pb-16 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-display text-[clamp(34px,5vw,54px)] leading-[1.04] font-extrabold tracking-tight text-balance">
            {metier.h1}
          </h1>
          <p className="text-lg leading-relaxed text-[#33364F]">{metier.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${plate.slug}#acheter`}
              className="inline-flex min-h-14 items-center rounded-full bg-brand-600 px-7 text-[17px] font-extrabold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
            >
              Commander · {formatPrice(plate.unitAmount)}
            </Link>
            <Link
              href={`/${plate.slug}#acheter`}
              className="inline-flex min-h-14 items-center rounded-full border-2 border-ink px-6 font-bold transition hover:bg-ink hover:text-white"
            >
              2 plaques · {formatPrice(duoPrice)}
            </Link>
          </div>
          <CheckList items={PROMISES.slice(0, 3)} />
        </div>
        <div
          className="relative flex min-h-[420px] items-end justify-center gap-5 overflow-hidden rounded-[32px] px-6 pt-16 pb-14"
          style={{ background: plate.tint }}
        >
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-ink/8" />
          <PlateVisual
            plate={plate}
            size={250}
            tilt="left"
            priority
            sizes="(min-width: 1024px) 250px, 55vw"
          />
          {companions[0] && (
            <PlateVisual
              plate={companions[0]}
              size={170}
              tilt="right"
              decorative
              className="hidden sm:block"
            />
          )}
        </div>
      </section>

      {/* Emplacements */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionHeading align="left" title={`Où placer la plaque ${metier.where}`} />
          <ol className="grid gap-5 md:grid-cols-3">
            {metier.spots.map((spot, index) => (
              <li key={spot.title} className="flex flex-col gap-2.5 rounded-3xl bg-white p-7">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-100 font-extrabold text-brand-700">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{spot.title}</h3>
                <p className="leading-relaxed text-muted">{spot.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Moment + phrase */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-20 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-display text-[clamp(28px,3.5vw,38px)] font-extrabold tracking-tight">
            {isReview ? 'Le bon moment pour demander un avis' : 'Le bon moment pour en parler'}
          </h2>
          <p className="text-lg leading-relaxed text-[#33364F]">{metier.moment}</p>
        </div>
        <figure className="flex flex-col gap-4 rounded-[28px] bg-ink p-8 text-white">
          <figcaption className="text-sm font-bold tracking-[0.12em] text-star uppercase">
            La phrase qui marche
          </figcaption>
          <blockquote className="font-display text-[26px] leading-snug">
            « {metier.script} »
          </blockquote>
          {isReview && (
            <p className="text-[15px] text-brand-200">
              Jamais de contrepartie contre un avis : Google l’interdit et peut supprimer votre
              fiche.
            </p>
          )}
        </figure>
      </section>

      {/* Plaques recommandées */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionHeading
            align="left"
            title={
              companions.length > 0 ? 'Les plaques qu’on recommande' : 'La plaque qu’on recommande'
            }
            text={
              companions.length > 0
                ? 'Dès 2 plaques dans le panier, toutes plateformes confondues : −10 %.'
                : undefined
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[plate, ...companions].map((item) => (
              <PlateCard key={item.slug} plate={item} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="mb-6 font-display text-3xl font-extrabold">Questions fréquentes</h2>
        <FaqList items={metier.faq} />
      </section>

      {/* Maillage */}
      <section className="mx-auto grid max-w-6xl gap-8 border-t border-line px-4 py-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="mb-4 text-xl font-bold">{plate.name} pour d’autres métiers</h2>
          <ul className="flex flex-wrap gap-2.5">
            {siblings.map((other) => (
              <li key={other.slug}>
                <Link
                  href={metierPath(other)}
                  className="inline-flex min-h-11 items-center rounded-full border border-[#D3D5E6] px-4 font-medium transition hover:border-brand-500 hover:text-brand-700"
                >
                  {other.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/metiers"
                className="inline-flex min-h-11 items-center px-2 font-bold text-brand-600"
              >
                Tous les métiers →
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <GuideCard slug={plate.guide} eyebrow={`Guide ${plate.platformLabel}`} />
          {isReview && (
            <Link
              href="/qr-code-avis-google"
              className="block rounded-2xl bg-green-50 px-6 py-5 text-[#0B5C3C] transition hover:bg-green-100"
            >
              <strong className="block">
                Pas encore prêt ? Créez votre QR code avis Google gratuit
              </strong>
              <span>Outil en ligne, sans inscription →</span>
            </Link>
          )}
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: metier.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
    </>
  )
}
