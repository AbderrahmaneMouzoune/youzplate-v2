// Ordre voulu : les valeurs par défaut sont posées avant la validation.
import './src/env-defaults'
import './src/env'

import { withPostHogConfig } from '@posthog/nextjs-config'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: __dirname,
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  // Proxy PostHog : le navigateur envoie ses événements à `/ingest`, sur notre
  // domaine, ce qui évite qu'un bloqueur de publicité ne les supprime.
  // `beforeFiles` : passe avant les routes dynamiques `/[slug]/[metier]`.
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/ingest/static/:path*',
          destination: 'https://eu-assets.i.posthog.com/static/:path*',
        },
        {
          source: '/ingest/array/:path*',
          destination: 'https://eu-assets.i.posthog.com/array/:path*',
        },
        { source: '/ingest/:path*', destination: 'https://eu.i.posthog.com/:path*' },
      ],
    }
  },
  // Les appels de PostHog se terminent parfois par un slash : pas de redirection.
  skipTrailingSlashRedirect: true,
  async redirects() {
    // Anciennes URLs : boutique youzoune.com (`/produits/…`) et première version
    // de cette boutique (`/plaques/…`). Les slugs renommés d'abord, puis les règles génériques.
    const renamed = [
      ['plaque-google', 'plaque-avis-google'],
      ['plaque-tripadvisor', 'plaque-avis-tripadvisor'],
    ]
    return [
      // `skipTrailingSlashRedirect` (pour PostHog) coupe la redirection native :
      // on la rétablit pour tout le site sauf `/ingest`, une seule URL par page.
      { source: '/:path((?!ingest/).*[^/])/', destination: '/:path', permanent: true },
      ...renamed.flatMap(([from, to]) => [
        { source: `/produits/${from}`, destination: `/${to}`, permanent: true },
        { source: `/plaques/${from}`, destination: `/${to}`, permanent: true },
      ]),
      { source: '/produits', destination: '/plaque-nfc', permanent: true },
      { source: '/plaques', destination: '/plaque-nfc', permanent: true },
      { source: '/produits/:slug(plaque-[a-z-]+)', destination: '/:slug', permanent: true },
      // Motif limité aux slugs produit : `/plaques/*.webp` sert les visuels.
      { source: '/plaques/:slug(plaque-[a-z-]+)', destination: '/:slug', permanent: true },
      { source: '/youzplate', destination: '/', permanent: true },
    ]
  },
}

/**
 * Envoi des source maps à PostHog au build, pour que l'Error tracking affiche
 * le code source plutôt que le JavaScript minifié. Actif seulement quand la clé
 * est fournie (Vercel) : les builds locaux et la CI tournent sans.
 * Clé personnelle PostHog, scopes « error tracking : write » et « organization : read ».
 */
const posthogApiKey = process.env.POSTHOG_PERSONAL_API_KEY

export default posthogApiKey
  ? withPostHogConfig(nextConfig, {
      personalApiKey: posthogApiKey,
      projectId: process.env.POSTHOG_PROJECT_ID ?? '317737',
      host: 'https://eu.posthog.com',
      sourcemaps: {
        releaseName: 'youzplate',
        releaseVersion: process.env.VERCEL_GIT_COMMIT_SHA,
        // Les .map ne sont pas servis publiquement : le code source reste privé.
        deleteAfterUpload: true,
      },
    })
  : nextConfig
