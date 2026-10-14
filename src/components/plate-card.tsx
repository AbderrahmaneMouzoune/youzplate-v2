import Image from 'next/image'
import Link from 'next/link'

import { GOAL_LABELS, type Plate } from '@/config/catalog'
import { formatPrice } from '@/lib/format'

export function PlateCard({ plate, priority = false }: { plate: Plate; priority?: boolean }) {
  return (
    <Link
      href={`/plaques/${plate.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <div className="relative aspect-square bg-paper">
        <Image
          src={plate.image}
          alt={plate.imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
        <span
          className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold shadow-sm"
          style={{ color: plate.accent === '#010101' ? undefined : plate.accent }}
        >
          {GOAL_LABELS[plate.goal]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold">{plate.name}</h3>
        <p className="flex-1 text-sm text-muted">{plate.tagline}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">{formatPrice(plate.unitAmount)}</span>
          <span className="text-sm font-semibold text-brand-600 group-hover:underline">
            Voir la plaque →
          </span>
        </div>
      </div>
    </Link>
  )
}
