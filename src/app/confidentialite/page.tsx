import { LegalPage } from '@/components/legal-page'
import { LEGAL_ENTITY, SITE } from '@/config/site'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  alternates: { canonical: '/confidentialite' },
}

const PROCESSORS = [
  {
    name: 'Stripe Payments Europe Ltd.',
    purpose: 'Paiement, reçus et factures',
    location: 'Irlande',
  },
  {
    name: 'Vercel Inc.',
    purpose: 'Hébergement du site',
    location: 'États-Unis (clauses contractuelles types)',
  },
  {
    name: 'Resend',
    purpose: 'Notification interne des commandes',
    location: 'États-Unis (clauses contractuelles types)',
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Responsable du traitement</h2>
      <p>
        {LEGAL_ENTITY.legalName} ({LEGAL_ENTITY.tradeName}), {LEGAL_ENTITY.address}. Contact :{' '}
        <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
      </p>

      <h2>Données collectées</h2>
      <p>
        Lors d’une commande : nom, e-mail, téléphone, adresses de livraison et de facturation, nom
        de l’établissement et, le cas échéant, numéro de TVA. Ces données servent à traiter la
        commande, la livrer et la facturer (base légale : exécution du contrat), et sont conservées
        dix ans au titre des obligations comptables.
      </p>
      <p>
        Le panier est enregistré dans le stockage local de votre navigateur, sans cookie ni envoi à
        nos serveurs avant le paiement. Le site n’utilise aucun cookie publicitaire.
      </p>

      <h2>Sous-traitants</h2>
      <ul>
        {PROCESSORS.map((processor) => (
          <li key={processor.name}>
            <strong>{processor.name}</strong> : {processor.purpose} ({processor.location})
          </li>
        ))}
      </ul>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et
        d’opposition, à exercer par e-mail. Vous pouvez aussi introduire une réclamation auprès de
        la CNIL (<a href="https://www.cnil.fr/fr/plaintes">cnil.fr</a>).
      </p>
    </LegalPage>
  )
}
