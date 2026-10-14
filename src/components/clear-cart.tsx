'use client'

import { useEffect } from 'react'

import { cart } from '@/lib/cart-store'

/** Vide le panier une fois la commande confirmée payée. */
export function ClearCart() {
  useEffect(() => {
    cart.clear()
  }, [])
  return null
}
