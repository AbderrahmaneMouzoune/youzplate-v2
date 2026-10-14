import Link from 'next/link'

import { JsonLd } from '@/components/json-ld'
import { PlateVisual } from '@/components/plate-visual'
import { PLATES, type Plate } from '@/config/catalog'
import { SHIPPING, SITE } from '@/config/site'

export function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
  align = 'center',
  as: Tag = 'h2',
}: {
  eyebrow?: string
  title: string
  text?: string
  dark?: boolean
  align?: 'center' | 'left'
  as?: 'h1' | 'h2'
}) {
  return (
    <div className={`mb-10 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-bold tracking-[0.12em] uppercase ${dark ? 'text-star' : 'text-brand-600'}`}
        >
          {eyebrow}
        </p>
      )}
      <Tag className="font-display text-[clamp(30px,4vw,44px)] leading-[1.08] font-extrabold tracking-tight text-balance">
        {title}
      </Tag>
      {text && <p className={`mt-3 text-lg ${dark ? 'text-brand-100' : 'text-muted'}`}>{text}</p>}
    </div>
  )
}

export type Crumb = { name: string; href: string }

/** Fil d'Ariane visible + BreadcrumbList. Le dernier élément est la page courante. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: 'Accueil', href: '/' }, ...items]
  return (
    <>
      <nav aria-label="Fil d’Ariane" className="mx-auto max-w-6xl px-4 pt-5 text-sm text-muted">
        <ol className="flex flex-wrap gap-x-2 gap-y-1">
          {all.map((item, index) =>
            index === all.length - 1 ? (
              <li key={item.href} aria-current="page" className="text-ink">
                {item.name}
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.name}
                </Link>{' '}
                /
              </li>
            )
          )}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE.url}${item.href === '/' ? '' : item.href}`,
          })),
        }}
      />
    </>
  )
}

const CHECK = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0F7B4F"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export const PROMISES = [
  'Paiement unique, sans abonnement',
  'Lien modifiable gratuitement, à vie',
  `Livraison offerte en ${SHIPPING.minBusinessDays} à ${SHIPPING.maxBusinessDays} jours`,
  'Sans application pour vos clients',
]

export function CheckList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2.5 text-[15px] font-medium ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          {CHECK}
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Puces de plateforme : de vrais liens, pour le maillage entre fiches. */
export function PlatformLinks({
  current,
  label = 'Plateforme',
}: {
  current?: Plate
  label?: string
}) {
  return (
    <nav aria-label={label}>
      <p className="mb-2.5 text-sm font-bold">
        {label}
        {current ? ` : ${current.platformLabel}` : ''}
      </p>
      <ul className="flex flex-wrap gap-2">
        {PLATES.map((plate) => {
          const active = plate.slug === current?.slug
          return (
            <li key={plate.slug}>
              <Link
                href={`/${plate.slug}`}
                aria-current={active ? 'page' : undefined}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition ${
                  active
                    ? 'border-ink bg-ink text-white'
                    : 'border-[#D3D5E6] bg-white hover:border-brand-500'
                }`}
              >
                <span
                  className="size-2.5 rounded-full"
                  style={{ background: plate.accent }}
                  aria-hidden="true"
                />
                {plate.platformLabel}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/** « Côté client » : les trois écrans que voit la personne qui scanne. */
export function ClientView({ plate }: { plate: Plate }) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          eyebrow="Côté client"
          title="Trois secondes, zéro application."
          dark
          align="left"
        />
        <ol className="grid gap-10 sm:grid-cols-3">
          <Phone caption="Il approche son téléphone" sub="ou scanne le QR code">
            <div className="flex h-full items-center justify-center bg-paper">
              <PlateVisual plate={plate} size={120} decorative />
            </div>
          </Phone>
          <Phone caption="Votre page s’ouvre" sub="directement au bon endroit">
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-white p-4 text-ink">
              <span className="size-12 rounded-xl" style={{ background: plate.accent }} />
              <span className="text-2xl tracking-widest text-star">★★★★★</span>
              <span className="h-12 w-full rounded-lg border border-line" />
              <span className="w-full rounded-lg bg-brand-600 py-2 text-center text-xs font-bold text-white">
                {plate.demo.action}
              </span>
            </div>
          </Phone>
          <Phone caption="C’est fait" sub="pendant qu’il est encore chez vous">
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-white text-ink">
              <span className="grid size-16 place-items-center rounded-full bg-green-50">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0F7B4F"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <strong className="text-sm">{plate.demo.done}</strong>
            </div>
          </Phone>
        </ol>
      </div>
    </section>
  )
}

function Phone({
  caption,
  sub,
  children,
}: {
  caption: string
  sub: string
  children: React.ReactNode
}) {
  return (
    <li className="flex flex-col items-center gap-5 text-center">
      <div aria-hidden="true" className="h-[340px] w-[180px] rounded-[34px] bg-[#2A2D4F] p-2.5">
        <div className="h-full overflow-hidden rounded-[26px]">{children}</div>
      </div>
      <p className="text-lg">
        <strong>{caption}</strong>
        <br />
        <span className="text-brand-200">{sub}</span>
      </p>
    </li>
  )
}
