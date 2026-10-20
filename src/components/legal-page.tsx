import { LEGAL_LAST_UPDATED } from '@/config/site'

/** Gabarit commun aux pages légales : titre, date de révision, prose. */
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  const updated = new Date(LEGAL_LAST_UPDATED).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-2 text-sm text-muted">Dernière mise à jour : {updated}</p>
      <div className="mt-10 space-y-4 text-muted [&_a]:text-brand-600 [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink">
        {children}
      </div>
    </article>
  )
}
