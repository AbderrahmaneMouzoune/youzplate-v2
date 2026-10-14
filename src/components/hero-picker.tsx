'use client'

import Link from 'next/link'
import { useState } from 'react'

import { TapScene } from '@/components/tap-scene'
import { PLATES, type PlateSlug } from '@/config/catalog'
import { formatPrice } from '@/lib/format'

/**
 * Hero de l'accueil : le visiteur choisit ce qu'il veut booster, la plaque et
 * le bouton d'achat suivent. Le choix ne change que le visuel et la cible du
 * lien : le titre et le texte indexables arrivent du serveur via `children`.
 */
export function HeroPicker({ children }: { children: React.ReactNode }) {
  const [slug, setSlug] = useState<PlateSlug>('plaque-avis-google')
  const plate = PLATES.find((item) => item.slug === slug)!

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="space-y-6">
        {children}
        <div>
          <p className="mb-3 text-sm font-semibold text-muted">Que voulez-vous booster ?</p>
          <div role="group" aria-label="Choisir une plateforme" className="flex flex-wrap gap-2">
            {PLATES.map((item) => {
              const active = item.slug === slug
              return (
                <button
                  key={item.slug}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSlug(item.slug)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-[15px] font-semibold transition ${
                    active
                      ? 'border-ink bg-ink text-white'
                      : 'border-[#D3D5E6] bg-white hover:border-brand-500'
                  }`}
                >
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: item.accent }}
                    aria-hidden="true"
                  />
                  {item.platformLabel}
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link
            href={`/${plate.slug}`}
            className="inline-flex min-h-15 items-center gap-3 rounded-full bg-brand-600 px-7 text-lg font-bold text-white shadow-[0_12px_28px_rgba(59,68,184,0.32)] transition hover:bg-brand-700"
          >
            Commander ma plaque {plate.platformLabel} · {formatPrice(plate.unitAmount)}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link href="/plaque-nfc#packs" className="text-sm font-semibold text-brand-600 underline">
            ou économisez jusqu’à 20 % en pack
          </Link>
        </div>
      </div>

      <TapScene plate={plate} priority />
    </div>
  )
}
