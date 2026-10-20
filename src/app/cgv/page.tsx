import Link from 'next/link'

import { LegalPage } from '@/components/legal-page'
import { CONSUMER_MEDIATOR, LEGAL_ENTITY, SHIPPING, SITE, VAT_MENTION } from '@/config/site'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  alternates: { canonical: '/cgv' },
}

const mailto = `mailto:${SITE.contact.email}`

/*
 * CGV de vente à distance de biens, rédigées pour une clientèle mixte
 * (consommateurs et professionnels). Le vendeur est une micro-entreprise en
 * franchise en base de TVA. Les articles cités sont ceux du Code de la
 * consommation et du Code civil en vigueur au moment de la rédaction.
 */
export default function TermsOfSalePage() {
  return (
    <LegalPage title="Conditions générales de vente">
      <h2>1. Vendeur</h2>
      <p>
        Les plaques {SITE.name} sont vendues par <strong>{LEGAL_ENTITY.tradeName}</strong>, activité
        exercée par {LEGAL_ENTITY.legalName}, {LEGAL_ENTITY.legalForm}.
      </p>
      <ul>
        <li>SIRET : {LEGAL_ENTITY.siret}</li>
        <li>Adresse : {LEGAL_ENTITY.address}</li>
        <li>
          Contact : <a href={mailto}>{SITE.contact.email}</a> ·{' '}
          <a href={SITE.contact.phoneHref}>{SITE.contact.phone}</a>
        </li>
      </ul>

      <h2>2. Champ d’application</h2>
      <p>
        Les présentes conditions générales de vente (CGV) régissent toute commande passée sur{' '}
        {SITE.url.replace(/^https?:\/\//, '')}, par un consommateur ou par un professionnel. Le
        client les accepte en procédant au paiement. Elles prévalent sur tout autre document du
        client. Les CGV applicables sont celles en vigueur à la date de la commande ; elles peuvent
        être téléchargées ou imprimées depuis cette page.
      </p>
      <p>
        Les dispositions signalées « consommateurs » ne s’appliquent qu’aux personnes physiques
        agissant à des fins qui n’entrent pas dans le cadre de leur activité professionnelle.
      </p>

      <h2>3. Produits</h2>
      <p>
        Chaque plaque comporte une puce NFC et un QR code qui renvoient vers une adresse de
        redirection gérée par {LEGAL_ENTITY.tradeName}. À réception, le client associe à sa plaque
        la page de son choix (fiche d’avis Google, TripAdvisor, Doctolib, profil Instagram, TikTok,
        Snapchat…). Les caractéristiques essentielles de chaque plaque sont présentées sur sa fiche
        produit. Les photographies sont aussi fidèles que possible mais n’ont pas de valeur
        contractuelle pour les nuances de couleur.
      </p>
      <p>
        Les plaques sont des produits standard, non personnalisés : le lien est associé par le
        client après la livraison.
      </p>

      <h2>4. Commande</h2>
      <p>
        Le client ajoute les plaques de son choix au panier, vérifie son contenu et le prix total,
        puis est redirigé vers la page de paiement sécurisée où il renseigne ses coordonnées, son
        adresse de livraison et, s’il le souhaite, un code promotionnel ou son numéro de TVA. La
        commande est définitive après la validation du paiement. Un e-mail de confirmation
        récapitulant la commande est alors envoyé au client.
      </p>
      <p>
        {LEGAL_ENTITY.tradeName} peut refuser ou annuler une commande en cas de litige antérieur
        avec le client, de suspicion de fraude ou de demande anormale ; le client est alors
        intégralement remboursé.
      </p>

      <h2>5. Prix</h2>
      <p>
        Les prix sont indiqués en euros. {LEGAL_ENTITY.tradeName} relève du régime de la franchise
        en base de TVA : <strong>{VAT_MENTION}</strong>. Le prix affiché est donc le prix final payé
        par le client, sans TVA à ajouter ni à récupérer.
      </p>
      <p>
        Des remises de volume s’appliquent automatiquement selon le nombre total de plaques du
        panier, comme indiqué sur le site. Les frais de livraison sont indiqués avant le paiement ;
        la livraison est actuellement offerte. Le prix applicable est celui affiché au moment de la
        commande.
      </p>

      <h2>6. Paiement</h2>
      <p>
        Le paiement est exigible à la commande. Il s’effectue par carte bancaire, Apple Pay, Google
        Pay ou tout autre moyen proposé sur la page de paiement, opérée par la société Stripe.{' '}
        {LEGAL_ENTITY.tradeName} n’a jamais accès aux données bancaires du client. Une facture est
        émise pour chaque commande et envoyée par e-mail.
      </p>

      <h2>7. Livraison</h2>
      <p>
        Les plaques sont livrées en {SHIPPING.zoneLabel}, à l’adresse indiquée lors de la commande,
        par lettre suivie. Elles sont expédiées sous 48 heures ouvrées après le paiement et livrées
        habituellement en {SHIPPING.minBusinessDays} à {SHIPPING.maxBusinessDays} jours ouvrés. Sauf
        indication contraire, la livraison intervient au plus tard dans les trente jours suivant la
        commande.
      </p>
      <p>
        <strong>Consommateurs.</strong> En cas de dépassement de ce délai, le consommateur peut,
        après avoir enjoint {LEGAL_ENTITY.tradeName} d’effectuer la livraison dans un délai
        supplémentaire raisonnable resté sans effet, résoudre le contrat par écrit et obtenir le
        remboursement des sommes versées au plus tard dans les quatorze jours (art. L216-6 et
        suivants du Code de la consommation). Le risque de perte ou d’endommagement des plaques est
        transféré au consommateur au moment où il en prend physiquement possession.
      </p>
      <p>
        <strong>Professionnels.</strong> Les délais sont indicatifs et leur dépassement ne peut
        donner lieu à des dommages et intérêts ni à l’annulation de la commande, sauf retard
        supérieur à trente jours.
      </p>
      <p>
        Le client vérifie l’état du colis à réception. Tout colis perdu, endommagé ou incomplet est
        à signaler à <a href={mailto}>{SITE.contact.email}</a>, avec une photo si possible, afin
        qu’une solution (renvoi ou remboursement) soit trouvée rapidement.
      </p>

      <h2>8. Droit de rétractation (consommateurs)</h2>
      <p>
        Le consommateur dispose d’un délai de <strong>quatorze jours</strong> à compter de la
        réception des plaques pour exercer son droit de rétractation, sans avoir à motiver sa
        décision ni à payer de pénalité (art. L221-18 du Code de la consommation). Pour l’exercer,
        il adresse avant l’expiration de ce délai une déclaration dénuée d’ambiguïté par e-mail à{' '}
        <a href={mailto}>{SITE.contact.email}</a> ou par courrier à {LEGAL_ENTITY.address}. Il peut
        utiliser le modèle de formulaire ci-dessous, sans que ce soit obligatoire.
      </p>
      <p>
        Les plaques sont renvoyées au plus tard quatorze jours après la communication de la décision
        de rétractation, à l’adresse ci-dessus. Les frais de retour sont à la charge du
        consommateur. Le remboursement de la totalité des sommes versées, y compris les frais de
        livraison initiaux, intervient dans les quatorze jours suivant la réception de la décision
        de rétractation, par le même moyen de paiement que celui utilisé pour la commande.{' '}
        {LEGAL_ENTITY.tradeName} peut différer le remboursement jusqu’à la réception des plaques ou
        de la preuve de leur expédition. La responsabilité du consommateur peut être engagée en cas
        de dépréciation des plaques résultant de manipulations autres que celles nécessaires pour en
        établir la nature, les caractéristiques et le bon fonctionnement (plaque collée, rayée,
        découpée…).
      </p>
      <p>
        Le droit de rétractation ne s’applique pas aux achats effectués par un professionnel pour
        les besoins de son activité.
      </p>
      <p>
        <strong>Modèle de formulaire de rétractation</strong> (à compléter et renvoyer uniquement si
        vous souhaitez vous rétracter) :
      </p>
      <blockquote className="border-l-4 border-line pl-4 italic">
        À l’attention de {LEGAL_ENTITY.tradeName}, {LEGAL_ENTITY.address}, {SITE.contact.email} : je
        vous notifie par la présente ma rétractation du contrat portant sur la vente des biens
        ci-dessous : [désignation des plaques] — commandées le [date] / reçues le [date] — Nom du
        consommateur — Adresse du consommateur — Signature (en cas d’envoi papier) — Date.
      </blockquote>

      <h2>9. Garanties légales</h2>
      <p>
        Indépendamment de tout geste commercial, les plaques bénéficient de la garantie légale de
        conformité et de la garantie des vices cachés. Une plaque défectueuse ou non conforme à
        réception est remplacée gratuitement sur simple demande accompagnée d’une photo, adressée à{' '}
        <a href={mailto}>{SITE.contact.email}</a>.
      </p>
      <p>
        <strong>Consommateurs.</strong> Le consommateur dispose d’un délai de deux ans à compter de
        la délivrance du bien pour obtenir la mise en œuvre de la garantie légale de conformité en
        cas d’apparition d’un défaut de conformité. Durant ce délai, il n’est tenu d’établir que
        l’existence du défaut et non la date de son apparition. La garantie légale de conformité
        emporte le droit à la réparation ou au remplacement du bien dans un délai de trente jours
        suivant la demande, sans frais ni inconvénient majeur pour le consommateur. Le consommateur
        peut obtenir une réduction du prix ou mettre fin au contrat en étant remboursé, en
        restituant le bien, si le vendeur refuse de réparer ou remplacer le bien, si la réparation
        ou le remplacement n’intervient pas dans les trente jours, s’ils occasionnent un
        inconvénient majeur, si la non-conformité persiste malgré une tentative de mise en
        conformité restée infructueuse, ou si le défaut est d’une gravité telle qu’il justifie une
        réduction de prix ou la résolution immédiate du contrat. Le consommateur n’est alors pas
        tenu de demander au préalable la réparation ou le remplacement du bien. Le consommateur n’a
        pas droit à la résolution de la vente si le défaut de conformité est mineur. Toute période
        d’immobilisation du bien en vue de sa réparation ou de son remplacement suspend la garantie
        qui restait à courir jusqu’à la délivrance du bien remis en état. Les droits mentionnés
        ci-dessus résultent des articles L217-1 à L217-32 du Code de la consommation. Le vendeur qui
        fait obstacle de mauvaise foi à la mise en œuvre de la garantie légale de conformité encourt
        une amende civile d’un montant maximal de 300 000 euros, qui peut être porté jusqu’à 10 % du
        chiffre d’affaires moyen annuel (art. L241-5 du Code de la consommation).
      </p>
      <p>
        Le consommateur bénéficie également de la garantie légale des vices cachés en application
        des articles 1641 à 1649 du Code civil, pendant une durée de deux ans à compter de la
        découverte du défaut. Cette garantie donne droit à une réduction de prix si le bien est
        conservé ou à un remboursement intégral contre restitution du bien.
      </p>
      <p>
        <strong>Professionnels.</strong> Seule la garantie des vices cachés du Code civil
        s’applique, ainsi que le remplacement gratuit d’une plaque défectueuse signalée dans les
        trente jours suivant la réception.
      </p>
      <p>
        Les garanties ne couvrent pas l’usure normale, ni les dommages causés par une mauvaise
        utilisation, un choc, une exposition prolongée à la chaleur ou à l’humidité, ou une
        modification de la plaque.
      </p>

      <h2>10. Service de redirection</h2>
      <p>
        La redirection de la plaque vers le lien choisi par le client est incluse dans le prix, sans
        abonnement ni frais de modification. {LEGAL_ENTITY.tradeName} s’engage à maintenir ce
        service tant qu’il exerce son activité et met en œuvre les moyens raisonnables pour en
        assurer la disponibilité ; des interruptions ponctuelles pour maintenance ou en cas
        d’incident chez un hébergeur restent possibles. En cas d’arrêt définitif de l’activité, les
        clients seront prévenus au moins trois mois à l’avance afin de pouvoir récupérer le lien de
        leur page et le QR code correspondant.
      </p>
      <p>
        Le client reste seul responsable du contenu de la page vers laquelle il redirige et du
        respect des conditions des plateformes concernées, notamment de l’interdiction de rémunérer,
        récompenser ou filtrer les avis. {LEGAL_ENTITY.tradeName} n’est pas responsable des
        modifications, suspensions ou évolutions de ces plateformes tierces (Google, TripAdvisor,
        Doctolib, Instagram, TikTok, Snapchat…), qui ne sont ni partenaires ni affiliées.{' '}
        {LEGAL_ENTITY.tradeName} peut suspendre la redirection d’une plaque pointant vers un contenu
        illicite.
      </p>

      <h2>11. Responsabilité</h2>
      <p>
        {LEGAL_ENTITY.tradeName} est responsable de la bonne exécution de la commande, sauf en cas
        de faute du client, de fait imprévisible et insurmontable d’un tiers ou de force majeure.
        Envers les professionnels, sa responsabilité est limitée au montant de la commande concernée
        et exclut les dommages indirects (perte de chiffre d’affaires, de clientèle ou d’image).
        Cette limitation ne s’applique pas aux consommateurs.
      </p>

      <h2>12. Propriété intellectuelle</h2>
      <p>
        Les textes, visuels, logos et le design des plaques sont la propriété de{' '}
        {LEGAL_ENTITY.tradeName}. L’achat d’une plaque ne confère aucun droit de reproduction. Les
        marques des plateformes citées appartiennent à leurs détenteurs respectifs.
      </p>

      <h2>13. Données personnelles</h2>
      <p>
        Les données collectées lors de la commande servent à son traitement, à la livraison, à la
        facturation et au service client. Le client dispose d’un droit d’accès, de rectification et
        d’effacement. Voir notre <Link href="/confidentialite">politique de confidentialité</Link>.
      </p>

      <h2>14. Service client et réclamations</h2>
      <p>
        Pour toute question ou réclamation : <a href={mailto}>{SITE.contact.email}</a> ou{' '}
        <a href={SITE.contact.phoneHref}>{SITE.contact.phone}</a>. Une réponse est apportée sous
        deux jours ouvrés.
      </p>

      <h2>15. Médiation de la consommation</h2>
      <p>
        Conformément aux articles L611-1 et suivants du Code de la consommation, le consommateur
        peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable
        d’un litige, après avoir tenté de le résoudre directement par une réclamation écrite auprès
        de {LEGAL_ENTITY.tradeName}, et au plus tard un an après cette réclamation.
      </p>
      {CONSUMER_MEDIATOR ? (
        <p>
          Médiateur compétent : <strong>{CONSUMER_MEDIATOR.name}</strong>,{' '}
          {CONSUMER_MEDIATOR.address} — <a href={CONSUMER_MEDIATOR.url}>{CONSUMER_MEDIATOR.url}</a>.
        </p>
      ) : (
        <p>
          Les coordonnées du médiateur sont communiquées sur simple demande à{' '}
          <a href={mailto}>{SITE.contact.email}</a>.
        </p>
      )}

      <h2>16. Droit applicable et litiges</h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable
        est recherchée en priorité. À défaut, le consommateur peut saisir la juridiction du lieu où
        il demeurait au moment de la commande ou de la survenance du fait dommageable. Pour les
        litiges avec un professionnel, compétence est attribuée aux tribunaux du ressort du siège de{' '}
        {LEGAL_ENTITY.tradeName}.
      </p>
    </LegalPage>
  )
}
