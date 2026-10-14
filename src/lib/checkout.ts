import { SHIPPING, SITE } from '@/config/site'
import { priceCart, type CartLine } from '@/lib/cart'

import type Stripe from 'stripe'

/**
 * Construit les paramètres de la session Stripe Checkout à partir du panier.
 *
 * Fonction pure, séparée de l'appel réseau pour être testée : c'est ici que se
 * joue la règle « le prix vient du serveur, jamais du navigateur ».
 */
export function buildCheckoutSessionParams(cart: CartLine[]): Stripe.Checkout.SessionCreateParams {
  const { lines } = priceCart(cart)

  return {
    mode: 'payment',
    locale: 'fr',
    line_items: lines.map(({ plate, quantity }) => ({
      quantity,
      price_data: {
        currency: 'eur',
        unit_amount: plate.unitAmount,
        product_data: {
          name: plate.name,
          description: plate.tagline,
          images: [`${SITE.url}${plate.image}`],
          metadata: { slug: plate.slug, platform: plate.platform },
        },
      },
    })),
    shipping_address_collection: { allowed_countries: [...SHIPPING.countries] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          display_name: SHIPPING.label,
          fixed_amount: { amount: SHIPPING.amount, currency: 'eur' },
          delivery_estimate: {
            minimum: { unit: 'business_day', value: SHIPPING.minBusinessDays },
            maximum: { unit: 'business_day', value: SHIPPING.maxBusinessDays },
          },
        },
      },
    ],
    // Le nom de l'établissement aide à préparer et à configurer les plaques.
    custom_fields: [
      {
        key: 'etablissement',
        label: { type: 'custom', custom: 'Nom de votre établissement' },
        type: 'text',
        optional: true,
      },
    ],
    phone_number_collection: { enabled: true },
    billing_address_collection: 'required',
    // Clientèle majoritairement professionnelle : numéro de TVA et facture PDF.
    tax_id_collection: { enabled: true },
    invoice_creation: { enabled: true },
    allow_promotion_codes: true,
    // Résumé lisible dans le dashboard Stripe, sans avoir à ouvrir les lignes.
    metadata: {
      cart: lines.map(({ plate, quantity }) => `${plate.platform}x${quantity}`).join(','),
    },
    success_url: `${SITE.url}/commande/confirmation?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${SITE.url}/panier`,
  }
}
