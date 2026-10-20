import 'server-only'

import Stripe from 'stripe'

import { env } from '@/env'

let client: Stripe | null = null

/**
 * Client Stripe partagé, ou `null` tant que `STRIPE_SECRET_KEY` n'est pas
 * renseignée : les appelants affichent alors un message d'indisponibilité.
 */
export function getStripe(): Stripe | null {
  if (!env.STRIPE_SECRET_KEY) return null
  client ??= new Stripe(env.STRIPE_SECRET_KEY, {
    appInfo: { name: 'Youzplate', url: 'https://www.youzoune.com' },
  })
  return client
}
