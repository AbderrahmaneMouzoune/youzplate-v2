'use client'

import { useSyncExternalStore } from 'react'

import { CART_LIMITS } from '@/config/site'
import { normalizeCart, parseCart, type CartLine } from '@/lib/cart'

import type { PlateSlug } from '@/config/catalog'

/**
 * Panier côté navigateur, persisté dans le localStorage.
 *
 * Un store externe plutôt qu'un contexte React : `useSyncExternalStore` gère
 * proprement l'hydratation (panier vide au rendu serveur, panier réel ensuite)
 * et la synchronisation entre onglets via l'événement `storage`.
 */

const STORAGE_KEY = 'youzplate:cart'
const EMPTY: CartLine[] = []

let lines: CartLine[] = EMPTY
let loaded = false
const listeners = new Set<() => void>()

function read(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? parseCart(JSON.parse(raw)) : EMPTY
  } catch {
    // Navigation privée, stockage bloqué ou JSON corrompu : on repart à vide.
    return EMPTY
  }
}

function ensureLoaded() {
  if (loaded || typeof window === 'undefined') return
  lines = read()
  loaded = true
}

function commit(next: CartLine[]) {
  lines = next.length > 0 ? normalizeCart(next) : EMPTY
  try {
    if (lines.length > 0) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    else window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Le panier reste utilisable pour la session même sans persistance.
  }
  listeners.forEach((listener) => listener())
}

function onStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY) return
  lines = read()
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  ensureLoaded()
  if (listeners.size === 0) window.addEventListener('storage', onStorage)
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) window.removeEventListener('storage', onStorage)
  }
}

function getSnapshot() {
  ensureLoaded()
  return lines
}

export const cart = {
  add(slug: PlateSlug, quantity = 1) {
    ensureLoaded()
    commit([...lines, { slug, quantity }])
  },
  setQuantity(slug: PlateSlug, quantity: number) {
    ensureLoaded()
    const clamped = Math.min(Math.max(0, Math.floor(quantity)), CART_LIMITS.maxQuantityPerLine)
    commit(
      clamped === 0
        ? lines.filter((line) => line.slug !== slug)
        : lines.map((line) => (line.slug === slug ? { ...line, quantity: clamped } : line))
    )
  },
  remove(slug: PlateSlug) {
    ensureLoaded()
    commit(lines.filter((line) => line.slug !== slug))
  },
  clear() {
    commit(EMPTY)
  },
}

export function useCart(): CartLine[] {
  return useSyncExternalStore(subscribe, getSnapshot, () => EMPTY)
}
