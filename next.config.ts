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
    // URLs de l'ancienne boutique (youzoune.com/produits/…), si le domaine les reçoit encore.
    return [
      { source: '/produits', destination: '/plaques', permanent: true },
      { source: '/produits/:slug', destination: '/plaques/:slug', permanent: true },
      { source: '/youzplate', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
