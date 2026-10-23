import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { normalizeSiteUrl } from './lib/site-url'

export const env = createEnv({
  /**
   * Variables serveur : jamais exposées au navigateur.
   */
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    /**
     * Clé secrète Stripe (`sk_test_…` en préproduction, `sk_live_…` en production).
     * Optionnelle pour que le site démarre sans Stripe : le bouton de paiement
     * répond alors par un message d'indisponibilité au lieu de planter.
     */
    STRIPE_SECRET_KEY: z.string().startsWith('sk_').optional(),
    /** Secret de signature du webhook Stripe (`whsec_…`), fourni par le dashboard ou `stripe listen`. */
    STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_').optional(),
    /** Clé API Resend pour l'e-mail de notification de commande. Optionnelle. */
    RESEND_API_KEY: z.string().min(1).optional(),
    /** Expéditeur vérifié dans Resend, par ex. « Youzplate <commandes@youzoune.com> ». */
    ORDER_EMAIL_FROM: z.string().min(1).optional(),
    /** Adresse qui reçoit chaque nouvelle commande payée (l'équipe qui expédie). */
    ORDER_EMAIL_TO: z.string().email().optional(),
    /**
     * Autorise l'indexation par les moteurs de recherche. Doit valoir
     * exactement `'true'` : toute autre valeur rend le site non indexable, ce qui
     * protège par défaut les previews et la préproduction (même règle que la vitrine).
     */
    IS_INDEXABLE: z
      .string()
      .optional()
      .transform((value) => value === 'true'),
  },

  client: {
    /**
     * URL publique de la boutique (ex. `https://youzplate.fr`). Tolère une saisie
     * sans `https://`, avec espaces ou slash final : voir `normalizeSiteUrl`.
     */
    NEXT_PUBLIC_SITE_URL: z.preprocess(
      normalizeSiteUrl,
      z
        .string(
          'NEXT_PUBLIC_SITE_URL est manquante : indiquez l’URL du site, par exemple https://youzplate.fr'
        )
        .url('NEXT_PUBLIC_SITE_URL doit être une URL complète, par exemple https://youzplate.fr')
    ),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    ORDER_EMAIL_FROM: process.env.ORDER_EMAIL_FROM,
    ORDER_EMAIL_TO: process.env.ORDER_EMAIL_TO,
    IS_INDEXABLE: process.env.IS_INDEXABLE,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },

  emptyStringAsUndefined: true,
})
