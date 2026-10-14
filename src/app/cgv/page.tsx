import { LegalPage } from '@/components/legal-page'
import { LEGAL_ENTITY, SHIPPING, SITE } from '@/config/site'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  alternates: { canonical: '/cgv' },
}

/*
 * TODO(juridique) : trame rédigée à partir des usages de la vente en ligne de
 * biens. À faire relire avant la mise en ligne, notamment si la boutique vise
 * aussi les particuliers (droit de rétractation, médiateur de la consommation).
 */
export default function TermsOfSalePage() {
  return (
    <LegalPage title="Conditions générales de vente">
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions régissent la vente en ligne des plaques {SITE.name} (plaques NFC et
        QR code) par {LEGAL_ENTITY.tradeName}, {LEGAL_ENTITY.legalName}, SIRET {LEGAL_ENTITY.siret},{' '}
        {LEGAL_ENTITY.address}. Toute commande vaut acceptation de ces conditions.
      </p>

      <h2>2. Produits</h2>
      <p>
        Chaque plaque comporte une puce NFC et un QR code renvoyant vers une adresse de redirection
        gérée par {LEGAL_ENTITY.tradeName}, que le client associe à la page de son choix. Le service
        de redirection est inclus dans le prix, sans abonnement. La modification du lien associé est
        gratuite.
      </p>

      <h2>3. Prix et paiement</h2>
      <p>
        Les prix sont indiqués en euros, toutes taxes comprises. Le paiement s’effectue en ligne, au
        moment de la commande, par l’intermédiaire de Stripe. {LEGAL_ENTITY.tradeName} n’a jamais
        accès aux données de carte bancaire. Une facture est émise pour chaque commande.
      </p>

      <h2>4. Livraison</h2>
      <p>
        Les plaques sont livrées en {SHIPPING.zoneLabel}. Les commandes sont expédiées sous 48
        heures ouvrées et livrées en {SHIPPING.minBusinessDays} à {SHIPPING.maxBusinessDays} jours
        ouvrés, à titre indicatif. Les frais de livraison sont indiqués avant le paiement.
      </p>

      <h2>5. Droit de rétractation</h2>
      <p>
        Le client consommateur dispose d’un délai de quatorze jours à compter de la réception pour
        exercer son droit de rétractation, sans avoir à se justifier, en écrivant à{' '}
        <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>. Les plaques doivent être
        retournées dans leur état d’origine ; les frais de retour sont à la charge du client. Le
        remboursement intervient dans les quatorze jours suivant la réception du retour. Ce droit ne
        s’applique pas aux achats effectués par un professionnel pour les besoins de son activité.
      </p>

      <h2>6. Garantie</h2>
      <p>
        Les plaques bénéficient de la garantie légale de conformité et de la garantie des vices
        cachés. Une plaque défectueuse à réception est remplacée gratuitement sur simple demande
        accompagnée d’une photo.
      </p>

      <h2>7. Service de redirection</h2>
      <p>
        {LEGAL_ENTITY.tradeName} assure la redirection des plaques vers le lien choisi par le
        client. Le client reste seul responsable du contenu de la page vers laquelle il redirige et
        du respect des règles des plateformes concernées, notamment l’interdiction de rémunérer ou
        de récompenser un avis.
      </p>

      <h2>8. Données personnelles</h2>
      <p>
        Les données collectées lors de la commande servent à son traitement, à la livraison et à la
        facturation. Voir notre <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>9. Litiges</h2>
      <p>
        Les présentes conditions sont soumises au droit français. En cas de litige, une solution
        amiable sera recherchée avant toute action. Le consommateur peut recourir gratuitement à un
        médiateur de la consommation.
      </p>
    </LegalPage>
  )
}
