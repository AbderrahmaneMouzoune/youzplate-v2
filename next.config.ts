import './src/env'

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
  async redirects() {
    // Anciennes URLs : boutique youzoune.com (`/produits/…`) et première version
    // de cette boutique (`/plaques/…`). Les slugs renommés d'abord, puis les règles génériques.
    const renamed = [
      ['plaque-google', 'plaque-avis-google'],
      ['plaque-tripadvisor', 'plaque-avis-tripadvisor'],
    ]
    return [
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

export default nextConfig
