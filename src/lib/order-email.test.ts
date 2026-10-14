import { describe, expect, test } from 'bun:test'

import { buildOrderNotification } from '@/lib/order-email'

import type Stripe from 'stripe'

describe('buildOrderNotification', () => {
  const session = {
    id: 'cs_test_123',
    amount_total: 8970,
    customer_details: { name: 'Jean <script>', email: 'jean@example.com', phone: '+33600000000' },
    collected_information: {
      shipping_details: {
        name: 'Jean Dupont',
        address: { line1: '1 rue de la Paix', postal_code: '75002', city: 'Paris', country: 'FR' },
      },
    },
    custom_fields: [{ key: 'etablissement', text: { value: 'Chez Jean' } }],
  } as unknown as Stripe.Checkout.Session

  const lineItems = [
    { quantity: 3, description: 'Plaque avis Google', amount_total: 8970 },
  ] as unknown as Stripe.LineItem[]

  const { subject, html, text } = buildOrderNotification(session, lineItems)

  test('résume la commande dans le sujet', () => {
    expect(subject).toContain('3 plaques')
    expect(subject).toContain('89,70')
  })

  test('liste l’établissement et l’adresse de livraison', () => {
    expect(text).toContain('Chez Jean')
    expect(text).toContain('75002 Paris')
  })

  test('échappe le texte saisi par le client', () => {
    expect(html).not.toContain('<script>')
    expect(html).toContain('Jean &lt;script&gt;')
  })
})
