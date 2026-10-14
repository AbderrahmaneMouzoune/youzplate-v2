import { LegalPage } from '@/components/legal-page'
import { LEGAL_ENTITY, SITE } from '@/config/site'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  alternates: { canonical: '/mentions-legales' },
}

export default function LegalNoticePage() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        {SITE.name} est une marque de <strong>{LEGAL_ENTITY.tradeName}</strong>, activité exercée
        par {LEGAL_ENTITY.legalName}, {LEGAL_ENTITY.legalForm}.
      </p>
      <ul>
        <li>SIREN : {LEGAL_ENTITY.siren}</li>
        <li>SIRET : {LEGAL_ENTITY.siret}</li>
        <li>TVA intracommunautaire : {LEGAL_ENTITY.vatNumber}</li>
        <li>Siège : {LEGAL_ENTITY.address}</li>
        <li>
          Contact : <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a> ·{' '}
          <a href={SITE.contact.phoneHref}>{SITE.contact.phone}</a>
        </li>
        <li>Directeur de la publication : {LEGAL_ENTITY.publicationDirector}</li>
      </ul>

      <h2>Hébergement</h2>
      <p>Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, visuels et le design des plaques sont la propriété de {LEGAL_ENTITY.tradeName}.
        Les marques Google, Instagram, TikTok, TripAdvisor, Doctolib et Snapchat appartiennent à
        leurs détenteurs respectifs ; elles sont citées pour indiquer la compatibilité des plaques,
        sans partenariat ni affiliation.
      </p>
    </LegalPage>
  )
}
