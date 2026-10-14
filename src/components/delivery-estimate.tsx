'use client'

import { useSyncExternalStore } from 'react'

import { SHIPPING } from '@/config/site'

/** Ajoute `days` jours ouvrés (lundi-vendredi) à `from`. */
export function addBusinessDays(from: Date, days: number): Date {
  const date = new Date(from)
  let added = 0
  while (added < days) {
    date.setDate(date.getDate() + 1)
    const day = date.getDay()
    if (day !== 0 && day !== 6) added++
  }
  return date
}

const FORMAT = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })

function getWindow(): string {
  const now = new Date()
  const from = FORMAT.format(addBusinessDays(now, SHIPPING.minBusinessDays))
  const to = FORMAT.format(addBusinessDays(now, SHIPPING.maxBusinessDays))
  return `${from}|${to}`
}

const noop = () => () => {}

/**
 * Fenêtre de livraison calculée dans le navigateur : la date dépend du jour de
 * la visite, elle ne peut pas être figée au build.
 */
export function DeliveryEstimate() {
  const range = useSyncExternalStore(noop, getWindow, () => null)
  const [from, to] = range?.split('|') ?? []

  return (
    <p className="flex items-center gap-3 rounded-2xl bg-green-50 px-4 py-3 text-[15px]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0F7B4F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </svg>
      {from ? (
        <span>
          Livraison offerte entre le <strong>{from}</strong> et le <strong>{to}</strong>.
        </span>
      ) : (
        <span>
          Livraison offerte en {SHIPPING.minBusinessDays} à {SHIPPING.maxBusinessDays} jours ouvrés.
        </span>
      )}
    </p>
  )
}
