import { describe, expect, test } from 'bun:test'

import { normalizeSiteUrl, vercelSiteUrl } from '@/lib/site-url'

describe('normalizeSiteUrl', () => {
  test('ajoute https:// et retire le slash final', () => {
    expect(normalizeSiteUrl('youzplate.fr')).toBe('https://youzplate.fr')
    expect(normalizeSiteUrl('https://youzplate.fr/')).toBe('https://youzplate.fr')
  })

  test('retire espaces et guillemets copiés par erreur', () => {
    expect(normalizeSiteUrl('  "https://youzplate.fr" ')).toBe('https://youzplate.fr')
    expect(normalizeSiteUrl("'youzplate.fr/'")).toBe('https://youzplate.fr')
  })

  test('passe http:// en https:// hors local', () => {
    expect(normalizeSiteUrl('http://www.youzplate.fr')).toBe('https://www.youzplate.fr')
    expect(normalizeSiteUrl('HTTP://youzplate.fr/')).toBe('https://youzplate.fr')
  })

  test('garde http:// en local et laisse vide ce qui est vide', () => {
    expect(normalizeSiteUrl('http://localhost:3000')).toBe('http://localhost:3000')
    expect(normalizeSiteUrl('http://127.0.0.1:3123')).toBe('http://127.0.0.1:3123')
    expect(normalizeSiteUrl('   ')).toBeUndefined()
    expect(normalizeSiteUrl(undefined)).toBeUndefined()
  })
})

describe('vercelSiteUrl', () => {
  test('préfère le domaine de production au domaine du déploiement', () => {
    expect(
      vercelSiteUrl({
        VERCEL_PROJECT_PRODUCTION_URL: 'youzplate.fr',
        VERCEL_URL: 'x.vercel.app',
      })
    ).toBe('https://youzplate.fr')
    expect(vercelSiteUrl({ VERCEL_URL: 'x.vercel.app' })).toBe('https://x.vercel.app')
    expect(vercelSiteUrl({})).toBeUndefined()
  })
})
