import Link from 'next/link'

import { PlateVisual } from '@/components/plate-visual'
import { QuickAdd } from '@/components/quick-add'
import { GOAL_LABELS, type Plate } from '@/config/catalog'
import { formatPrice } from '@/lib/format'

export function PlateCard({ plate, priority = false }: { plate: Plate; priority?: boolean }) {
  return (
    <article className="group flex flex-col gap-4 rounded-[28px] border border-line bg-white p-5 transition hover:shadow-xl hover:shadow-brand-900/10">
      <Link
        href={`/${plate.slug}`}
        className="relative flex h-72 items-center justify-center rounded-[20px]"
        style={{ background: plate.tint }}
        tabIndex={-1}
        aria-hidden="true"
      >
        <span className="absolute top-3.5 left-3.5 rounded-full bg-white px-3 py-1 text-[13px] font-bold">
          {GOAL_LABELS[plate.goal]}
        </span>
        <PlateVisual
          plate={plate}
          size={220}
          tilt="left"
          priority={priority}
          decorative
          className="transition duration-500 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-display text-xl font-extrabold">
          <Link href={`/${plate.slug}`} className="hover:text-brand-700">
            {plate.name}
          </Link>
        </h3>
        <p className="text-[15px] text-muted">{plate.tagline}</p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-2xl font-extrabold">
          {formatPrice(plate.unitAmount)}
        </span>
        <QuickAdd slug={plate.slug} name={plate.name} />
      </div>
    </article>
  )
}
