import Image from 'next/image'

import type { Plate } from '@/config/catalog'

type Props = {
  plate: Plate
  /** Largeur affichée en px (la plaque est carrée). */
  size: number
  /** Légère perspective 3D, pour les mises en scène. */
  tilt?: 'left' | 'right' | 'none'
  priority?: boolean
  /** `sizes` responsive ; par défaut, la largeur fixe. */
  sizes?: string
  className?: string
  /** Décorative quand un texte voisin nomme déjà la plaque. */
  decorative?: boolean
}

const TILT = {
  left: '[transform:perspective(1200px)_rotateY(-14deg)_rotateX(6deg)]',
  right: '[transform:perspective(1200px)_rotateY(12deg)_rotateX(6deg)]',
  none: '',
}

/**
 * Visuel officiel d'une plaque, avec reflet acrylique et ombre portée.
 * Les visuels sont les SVG de production, exportés en WebP (`public/plaques`).
 */
export function PlateVisual({
  plate,
  size,
  tilt = 'none',
  priority = false,
  sizes,
  className = '',
  decorative = false,
}: Props) {
  return (
    <div
      className={`${TILT[tilt]} drop-shadow-[0_24px_30px_rgba(20,22,46,0.25)] ${className}`}
      style={{ width: size, maxWidth: '100%' }}
    >
      <div className="relative aspect-square overflow-hidden rounded-[6%] bg-white">
        <Image
          src={plate.image}
          alt={decorative ? '' : plate.imageAlt}
          fill
          sizes={sizes ?? `${size}px`}
          priority={priority}
          className="object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_32%,rgba(255,255,255,0)_72%,rgba(255,255,255,0.14)_100%)] shadow-[inset_0_0_0_1.5px_rgba(20,22,46,0.08)]"
        />
      </div>
    </div>
  )
}
