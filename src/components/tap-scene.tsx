import { PlateVisual } from '@/components/plate-visual'

import type { Plate } from '@/config/catalog'

/**
 * Démo animée : un téléphone vient toucher la plaque, une notification apparaît.
 * CSS seulement (classes `yzp-*` dans `globals.css`), coupée si l'utilisateur
 * demande moins d'animations.
 */
export function TapScene({ plate, priority = false }: { plate: Plate; priority?: boolean }) {
  return (
    <div className="relative mx-auto aspect-[27/28] w-full max-w-[540px]">
      <div className="absolute inset-[4%] rounded-full bg-brand-100/70" aria-hidden="true" />
      <div className="yzp-float absolute top-[14%] left-[7%] w-[70%]">
        <PlateVisual
          plate={plate}
          size={380}
          tilt="left"
          priority={priority}
          sizes="(min-width: 1024px) 380px, 70vw"
        />
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 160 160"
        className="yzp-wave absolute top-[59%] left-[13%] w-[30%]"
      >
        <circle
          cx="80"
          cy="80"
          r="40"
          fill="none"
          stroke="var(--color-brand-600)"
          strokeWidth="3"
        />
        <circle
          cx="80"
          cy="80"
          r="62"
          fill="none"
          stroke="var(--color-brand-600)"
          strokeWidth="2"
          opacity=".5"
        />
      </svg>

      <div
        aria-hidden="true"
        className="yzp-phone absolute top-[54%] left-[28%] flex aspect-[1/2] w-[24%] rounded-[22%/11%] bg-ink p-[2.5%] shadow-2xl"
      >
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-[18%/9%] bg-white p-2">
          <span className="aspect-square w-[28%] rounded-lg" style={{ background: plate.accent }} />
          <span className="text-[clamp(10px,1.6vw,15px)] tracking-wide text-star">★★★★★</span>
          <span className="h-1.5 w-4/5 rounded bg-line" />
          <span className="w-4/5 rounded-md bg-brand-600 py-1 text-center text-[clamp(7px,1vw,9px)] font-bold text-white">
            {plate.demo.action}
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="yzp-toast absolute top-[6%] right-0 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl"
      >
        <span className="grid size-10 place-items-center rounded-xl bg-green-50" aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0F7B4F"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <span>
          <span className="block text-[15px] font-bold">{plate.demo.toast}</span>
          <span className="block text-[13px] text-muted">à l’instant · via votre plaque</span>
        </span>
      </div>
    </div>
  )
}
