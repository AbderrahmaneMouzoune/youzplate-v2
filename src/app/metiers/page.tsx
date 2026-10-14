import Link from 'next/link'

import { PlateVisual } from '@/components/plate-visual'
import { Breadcrumbs, SectionHeading } from '@/components/sections'
import { getPlateByPlatform } from '@/config/catalog'
import { metierPath, metiersByFamily } from '@/data/metiers'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plaque avis Google et Doctolib par métier',
  description:
    'Restaurant, coiffeur, hôtel, garage, ostéopathe… Où poser votre plaque NFC et QR code, à quel moment demander un avis et quoi dire : un guide par métier.',
  alternates: { canonical: '/metiers' },
}

export default function MetiersPage() {
  const groups = metiersByFamily()

  return (
    <>
      <Breadcrumbs items={[{ name: 'Par métier', href: '/metiers' }]} />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading
          as="h1"
          align="left"
          title="Une plaque pour chaque métier"
          text="Où la poser, à quel moment la proposer, quelle phrase dire : chaque page est pensée pour votre activité."
        />

        <div className="space-y-14">
          {groups.map((group) => {
            const plate = getPlateByPlatform(group.metiers[0].platform)
            return (
              <section key={group.family} aria-labelledby={`famille-${group.family}`}>
                <div className="mb-5 flex items-center gap-4">
                  <PlateVisual plate={plate} size={48} decorative />
                  <h2
                    id={`famille-${group.family}`}
                    className="font-display text-2xl font-extrabold"
                  >
                    {group.label}
                  </h2>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.metiers.map((metier) => (
                    <li key={metier.slug}>
                      <Link
                        href={metierPath(metier)}
                        className="flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-line bg-white px-5 py-4 transition hover:border-brand-500 hover:shadow-md"
                      >
                        <span>
                          <span className="block font-bold">{metier.name}</span>
                          <span className="block text-sm text-muted">{metier.h1}</span>
                        </span>
                        <span aria-hidden="true" className="text-brand-600">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}
