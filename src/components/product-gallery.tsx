'use client'

import { useState } from 'react'

import { PlateVisual } from '@/components/plate-visual'
import { TapScene } from '@/components/tap-scene'

import type { Plate } from '@/config/catalog'

const VIEWS = [
  { id: 'scene', label: 'En situation' },
  { id: 'face', label: 'De face' },
] as const

export function ProductGallery({ plate }: { plate: Plate }) {
  const [view, setView] = useState<(typeof VIEWS)[number]['id']>('scene')

  return (
    <div className="space-y-3">
      <div
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[32px] p-6"
        style={{ background: plate.tint }}
      >
        <span className="absolute top-4 left-4 z-10 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-bold">
          NFC + QR code
        </span>
        {view === 'scene' ? (
          <TapScene plate={plate} priority />
        ) : (
          <PlateVisual plate={plate} size={460} priority sizes="(min-width: 1024px) 460px, 85vw" />
        )}
      </div>
      <div role="group" aria-label="Vues du produit" className="grid grid-cols-2 gap-3">
        {VIEWS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={view === item.id}
            onClick={() => setView(item.id)}
            className={`min-h-12 rounded-2xl border-2 font-semibold transition ${
              view === item.id
                ? 'border-ink bg-ink text-white'
                : 'border-line bg-white hover:border-brand-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
