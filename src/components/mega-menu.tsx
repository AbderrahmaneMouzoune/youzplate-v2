'use client'

import Image from 'next/image'
import Link from 'next/link'
import posthog from 'posthog-js'
import { useEffect, useRef, useState, type MouseEvent } from 'react'

import { RESOURCES, type NavData } from '@/components/nav-data'

type PanelId = 'plaques' | 'metiers' | 'ressources'

const PANELS: { id: PanelId; label: string }[] = [
  { id: 'plaques', label: 'Les plaques' },
  { id: 'metiers', label: 'Par métier' },
  { id: 'ressources', label: 'Ressources' },
]

/** Délai avant fermeture au survol : laisse le temps de descendre dans le panneau. */
const HOVER_CLOSE_DELAY = 140

/**
 * Méga menu desktop. Les panneaux s'ouvrent au clic, au clavier ou au survol
 * (souris uniquement), se ferment avec Échap, un clic à l'extérieur ou le
 * choix d'un lien. Ils restent dans le HTML quand ils sont fermés (`hidden`),
 * pour que leurs liens comptent dans le maillage interne.
 */
export function MegaMenu({ data }: { data: NavData }) {
  const [open, setOpen] = useState<PanelId | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Panneau ouvert par le survol : le clic de la souris qui suit ne doit pas le refermer.
  const hoverOpened = useRef<PanelId | null>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(null)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(null)
      document.getElementById(`menu-trigger-${open}`)?.focus()
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(null), HOVER_CLOSE_DELAY)
  }
  const openPanel = (id: PanelId, trigger: 'click' | 'hover') => {
    hoverOpened.current = trigger === 'hover' ? id : null
    setOpen(id)
    posthog.capture('nav_menu_opened', { menu: 'desktop', panel: id, trigger })
  }
  // Un lien choisi ferme le menu : la navigation client ne recharge pas le header.
  const closeOnLink = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest('a')) setOpen(null)
  }

  return (
    <div
      ref={rootRef}
      className="hidden lg:block"
      onPointerLeave={(event) => event.pointerType === 'mouse' && scheduleClose()}
      onPointerEnter={cancelClose}
    >
      <nav aria-label="Navigation principale">
        <ul className="flex items-center gap-1 text-[15px] font-medium">
          {PANELS.map((panel) => {
            const isOpen = open === panel.id
            return (
              <li key={panel.id}>
                <button
                  id={`menu-trigger-${panel.id}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`menu-panel-${panel.id}`}
                  onClick={() => {
                    const keepOpen = isOpen && hoverOpened.current === panel.id
                    hoverOpened.current = null
                    if (keepOpen) return
                    if (isOpen) setOpen(null)
                    else openPanel(panel.id, 'click')
                  }}
                  onPointerEnter={(event) => {
                    if (event.pointerType !== 'mouse') return
                    cancelClose()
                    if (!isOpen) openPanel(panel.id, 'hover')
                  }}
                  className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-3.5 transition ${
                    isOpen ? 'bg-brand-50 text-brand-700' : 'hover:text-brand-600'
                  }`}
                >
                  {panel.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`transition ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </li>
            )
          })}
          <li>
            <Link
              href="/plaque-nfc#packs"
              className="inline-flex min-h-11 items-center rounded-full px-3.5 transition hover:text-brand-600"
            >
              Packs
              <span className="ml-1.5 rounded-full bg-star px-1.5 py-0.5 text-[11px] font-extrabold text-ink">
                −20 %
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <div onClick={closeOnLink}>
        <Panel id="plaques" open={open}>
          <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.12em] text-muted uppercase">
                Une plaque par plateforme · NFC + QR code
              </p>
              <ul className="grid grid-cols-3 gap-3">
                {data.plates.map((plate) => (
                  <li key={plate.href}>
                    <Link
                      href={plate.href}
                      className="group flex items-center gap-3 rounded-2xl p-2.5 transition hover:bg-paper"
                    >
                      <span
                        className="grid size-16 shrink-0 place-items-center rounded-xl"
                        style={{ background: plate.tint }}
                      >
                        <Image
                          src={plate.image}
                          alt=""
                          width={48}
                          height={48}
                          className="rounded-[6px] shadow-sm transition group-hover:scale-105"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold group-hover:text-brand-700">
                          {plate.name}
                        </span>
                        <span className="block text-[13px] text-muted">
                          {plate.goal} · {plate.price}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/plaque-nfc"
                className="mt-4 inline-flex min-h-11 items-center font-semibold text-brand-600 hover:underline"
              >
                Comparer toutes les plaques →
              </Link>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl bg-ink p-6 text-white">
              <p className="text-xs font-bold tracking-[0.12em] text-star uppercase">Packs</p>
              <p className="font-display text-2xl leading-tight font-extrabold">
                −10 % dès 2 plaques, −20 % dès 5
              </p>
              <p className="text-sm text-brand-200">
                Toutes plateformes confondues, la remise s’applique au panier.
              </p>
              <Link
                href="/plaque-avis-google-instagram"
                className="mt-auto inline-flex min-h-11 items-center justify-center rounded-full bg-star px-5 font-extrabold text-ink"
              >
                Pack Google + Instagram
              </Link>
              <Link
                href="/plaque-nfc#packs"
                className="text-center text-sm font-semibold underline"
              >
                Voir les packs
              </Link>
            </div>
          </div>
        </Panel>

        <Panel id="metiers" open={open}>
          <div className="grid grid-cols-4 gap-8">
            {data.metierColumns.map((column, index) => (
              <div key={index} className="flex flex-col gap-6">
                {column.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-xs font-bold tracking-[0.12em] text-muted uppercase">
                      {group.label}
                    </p>
                    <ul className="space-y-0.5">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="-mx-2 block rounded-lg px-2 py-1.5 text-[15px] transition hover:bg-paper hover:text-brand-700"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
            <p className="text-sm text-muted">
              Où poser la plaque, quand la proposer, quoi dire : un guide par métier.
            </p>
            <Link href="/metiers" className="font-semibold text-brand-600 hover:underline">
              Tous les métiers ({data.metierCount}) →
            </Link>
          </div>
        </Panel>

        <Panel id="ressources" open={open}>
          <ul className="grid grid-cols-4 gap-4">
            {RESOURCES.map((resource) => (
              <li key={resource.href}>
                <Link
                  href={resource.href}
                  className="flex h-full flex-col gap-1.5 rounded-2xl border border-line p-5 transition hover:border-brand-200 hover:bg-paper"
                >
                  <span className="font-semibold">{resource.title}</span>
                  <span className="text-sm text-muted">{resource.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  )
}

function Panel({
  id,
  open,
  children,
}: {
  id: PanelId
  open: PanelId | null
  children: React.ReactNode
}) {
  return (
    <div
      id={`menu-panel-${id}`}
      hidden={open !== id}
      className="absolute inset-x-0 top-full border-y border-line bg-white shadow-[0_24px_48px_rgba(20,22,46,0.12)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
    </div>
  )
}
