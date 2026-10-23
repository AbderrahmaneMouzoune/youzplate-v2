/**
 * Remet en forme l'URL du site telle qu'on la saisit dans un tableau de bord :
 * espaces et guillemets retirés, `https://` ajouté s'il manque, slash final
 * supprimé. `youzplate.fr` comme `"https://youzplate.fr/ "` donnent
 * `https://youzplate.fr`. Une valeur vide reste vide, pour que la validation
 * la signale comme manquante.
 */
export function normalizeSiteUrl(raw: unknown): unknown {
  if (typeof raw !== 'string') return raw
  const value = raw
    .trim()
    .replace(/^["']+|["']+$/g, '')
    .trim()
  if (!value) return undefined
  const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(value) ? value : `https://${value}`
  return withScheme.replace(/\/+$/, '')
}

/**
 * URL publique déduite de Vercel quand `NEXT_PUBLIC_SITE_URL` n'est pas
 * renseignée : le domaine de production, à défaut l'URL du déploiement.
 */
export function vercelSiteUrl(env: Record<string, string | undefined>): string | undefined {
  const host = env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL
  return host ? `https://${host}` : undefined
}
