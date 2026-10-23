'use client'

import Image from 'next/image'
import Link from 'next/link'
import posthog from 'posthog-js'
import { useEffect, useRef, useState, type MouseEvent } from 'react'

import { RESOURCES, type NavData } from '@/components/nav-data'

/**
 * Menu mobile : un tiroir plein écran avec des sections repliables. Le
 * contenu reste dans le HTML quand il est fermé, pour le maillage interne.
 */
export function MobileMenu({ data }: { data: NavData }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const trigger = triggerRef.current
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKeyDown)
      trigger?.focus()
    }
  }, [open])

  const closeOnLink = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest('a')) setOpen(false)
  }

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => {
          setOpen(true)
          posthog.capture('nav_menu_opened', { menu: 'mobile', panel: 'all', trigger: 'click' })
        }}
        className="grid size-11 place-items-center rounded-full border border-line"
      >
        <span className="sr-only">Ouvrir le menu</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        onClick={closeOnLink}
        className="fixed inset-0 z-50 overflow-y-auto bg-white"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="font-display text-xl font-extrabold">Menu</span>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="grid size-11 place-items-center rounded-full border border-line"
          >
            <span className="sr-only">Fermer le menu</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Navigation principale (mobile)" className="divide-y divide-line px-4">
          <details open className="group py-2">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between text-lg font-bold [&::-webkit-details-marker]:hidden">
              Les plaques
              <Chevron />
            </summary>
            <ul className="grid grid-cols-2 gap-2 pb-3">
              {data.plates.map((plate) => (
                <li key={plate.href}>
                  <Link
                    href={plate.href}
                    className="flex items-center gap-2.5 rounded-xl p-2 active:bg-paper"
                  >
                    <span
                      className="grid size-12 shrink-0 place-items-center rounded-lg"
                      style={{ background: plate.tint }}
                    >
                      <Image
                        src={plate.image}
                        alt=""
                        width={36}
                        height={36}
                        className="rounded-[4px]"
                      />
                    </span>
                    <span className="min-w-0 text-sm leading-tight">
                      <span className="block font-semibold">{plate.name}</span>
                      <span className="block text-muted">{plate.price}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/plaque-nfc#packs"
              className="mb-2 flex min-h-12 items-center justify-between rounded-xl bg-ink px-4 font-bold text-white"
            >
              Packs : −10 % dès 2, −20 % dès 5<span aria-hidden="true">→</span>
            </Link>
          </details>

          <details className="group py-2">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between text-lg font-bold [&::-webkit-details-marker]:hidden">
              Par métier
              <Chevron />
            </summary>
            <div className="space-y-4 pb-3">
              {data.metierColumns.flat().map((group) => (
                <div key={group.label}>
                  <p className="mb-1.5 text-xs font-bold tracking-[0.12em] text-muted uppercase">
                    {group.label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex min-h-10 items-center rounded-full border border-line px-3.5 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href="/metiers"
                className="inline-flex min-h-11 items-center font-semibold text-brand-600"
              >
                Tous les métiers ({data.metierCount}) →
              </Link>
            </div>
          </details>

          <details className="group py-2">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between text-lg font-bold [&::-webkit-details-marker]:hidden">
              Ressources
              <Chevron />
            </summary>
            <ul className="space-y-1 pb-3">
              {RESOURCES.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="block rounded-xl px-3 py-2.5 active:bg-paper"
                  >
                    <span className="block font-semibold">{resource.title}</span>
                    <span className="block text-sm text-muted">{resource.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </nav>

        <div className="px-4 py-6">
          <Link
            href="/plaque-avis-google"
            className="flex min-h-14 items-center justify-center rounded-full bg-brand-600 font-extrabold text-white"
          >
            Commander ma plaque Google
          </Link>
        </div>
      </div>
    </div>
  )
}

function Chevron() {
  return (
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
      className="transition group-open:rotate-180"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}
