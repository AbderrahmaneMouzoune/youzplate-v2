import type { Metier } from './types'

export const METIERS_AUTO_SERVICES_SANTE: Metier[] = [
  // ─── Auto ────────────────────────────────────────────────────────────────
  {
    slug: 'garage',
    platform: 'google',
    family: 'auto',
    name: 'Garage automobile',
    h1: 'Plaque avis Google pour garage',
    where: 'dans votre garage',
    metaTitle: 'Plaque avis Google pour garage automobile',
    metaDescription:
      'Plaque avis Google pour garage : vos clients laissent un avis au retrait du véhicule, via NFC ou QR code. 29,90 € sans abonnement, lien modifiable à vie.',
    intro:
      'Une plaque avis Google posée au comptoir de votre garage permet au client de laisser un avis en approchant son téléphone ou en scannant le QR code, au moment où il récupère son véhicule. Pas d’application à installer ni d’abonnement : un paiement unique de 29,90 €, et le lien reste modifiable gratuitement.',
    spots: [
      {
        title: 'Comptoir de réception',
        text: 'C’est là que le client règle la facture et reprend ses clés. La plaque est sous ses yeux pendant que vous lui détaillez l’intervention réalisée.',
      },
      {
        title: 'Salle d’attente clients',
        text: 'Les clients qui patientent pendant une vidange ou un changement de pneus ont du temps devant eux. Une plaque près des sièges ou de la machine à café leur donne une occasion simple de s’exprimer.',
      },
      {
        title: 'Bureau du chef d’atelier',
        text: 'Lorsque vous présentez un devis ou commentez un diagnostic, la plaque posée sur le bureau rappelle discrètement que l’avis du client compte.',
      },
    ],
    moment:
      'Le meilleur moment est la restitution du véhicule, juste après avoir expliqué ce qui a été fait et rendu les clés. Le client constate que la panne est réglée et que la facture correspond au devis : sa satisfaction est alors la plus concrète.',
    script:
      'Votre voiture est prête ; si vous êtes satisfait de l’intervention, vous pouvez nous laisser un avis Google en approchant votre téléphone de cette plaque.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Mes clients sont pressés au retrait du véhicule, est-ce vraiment rapide ?',
        answer:
          'Oui : un geste du téléphone sur la plaque ou un scan du QR code ouvre directement le formulaire d’avis Google de votre garage. Le client n’a pas à chercher votre fiche ni à installer d’application.',
      },
      {
        question: 'Est-ce utile pour un garage indépendant ?',
        answer:
          'Oui : pour choisir un atelier près de chez lui, un automobiliste regarde souvent les avis Google parmi les premiers éléments. Des avis récents montrent concrètement votre sérieux et le respect de vos délais.',
      },
      {
        question: 'Puis-je offrir une remise sur la prochaine révision en échange d’un avis ?',
        answer:
          'Non, Google interdit les avis obtenus contre une contrepartie et peut les supprimer. Proposez simplement la plaque à tous vos clients, sans condition.',
      },
    ],
  },
  {
    slug: 'carrosserie',
    platform: 'google',
    family: 'auto',
    name: 'Carrosserie',
    h1: 'Plaque avis Google pour carrosserie',
    where: 'dans votre carrosserie',
    metaTitle: 'Plaque avis Google pour carrosserie et carrossier',
    metaDescription:
      'Plaque avis Google pour carrosserie : après la réparation, le client laisse son avis d’un geste grâce au NFC ou au QR code. Paiement unique, sans abonnement.',
    intro:
      'Une plaque avis Google dans votre carrosserie permet au client de donner son avis dès qu’il découvre la réparation, d’un simple geste avec son smartphone ou en scannant le QR code. Elle fonctionne sans application ni batterie, pour 29,90 € une seule fois et sans abonnement.',
    spots: [
      {
        title: 'Zone de livraison du véhicule',
        text: 'Quand le client fait le tour de sa voiture réparée avec vous, une plaque à proximité lui permet de réagir à chaud sur la teinte et les raccords.',
      },
      {
        title: 'Bureau d’accueil et d’expertise',
        text: 'C’est ici que se règlent les questions d’assurance et de franchise. La plaque reste visible pendant la signature des documents de restitution.',
      },
      {
        title: 'Retour du véhicule de courtoisie',
        text: 'Le client qui rend la voiture de prêt passe par un point précis de l’atelier. Une plaque à cet endroit lui offre un second rappel avant de repartir.',
      },
    ],
    moment:
      'Invitez le client juste après l’inspection finale, lorsqu’il constate que sa carrosserie a retrouvé son aspect d’origine. Après un accrochage ou un sinistre, ce soulagement visible est l’instant où il a le plus envie de partager son expérience.',
    script:
      'Si le résultat vous convient, vous pouvez scanner cette plaque pour laisser un avis Google sur notre carrosserie, cela aide d’autres automobilistes à nous trouver.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Beaucoup de mes clients sont orientés par leur assurance, est-ce utile ?',
        answer:
          'Oui : même orienté par son assureur, un automobiliste consulte souvent les avis Google avant de déposer son véhicule. Des avis récents rassurent ces nouveaux clients qui ne vous connaissent pas encore.',
      },
      {
        question: 'Dois-je proposer la plaque même pour une petite retouche ?',
        answer:
          'Oui, une rayure reprise ou un débosselage compte autant qu’un gros sinistre aux yeux des futurs clients. Des avis variés montrent l’étendue de votre savoir-faire.',
      },
      {
        question: 'Que se passe-t-il si je change de nom ou de fiche Google ?',
        answer:
          'Le lien de la plaque se modifie gratuitement à tout moment, sans changer de plaque. Vous la redirigez simplement vers votre nouvelle fiche.',
      },
    ],
  },
  {
    slug: 'auto-ecole',
    platform: 'google',
    family: 'auto',
    name: 'Auto-école',
    h1: 'Plaque avis Google pour auto-école',
    where: 'dans votre auto-école',
    metaTitle: 'Plaque avis Google pour auto-école',
    metaDescription:
      'Plaque avis Google pour auto-école : vos élèves laissent un avis en quelques secondes par NFC ou QR code, sans application. 29,90 € une fois, sans abonnement.',
    intro:
      'Une plaque avis Google à l’accueil de votre auto-école permet à vos élèves de laisser un avis en quelques secondes, par NFC ou QR code, sans application. Idéale pour recueillir le ressenti des nouveaux titulaires du permis, elle coûte 29,90 € en paiement unique, sans abonnement.',
    spots: [
      {
        title: 'Bureau d’inscription',
        text: 'Les élèves y passent pour réserver leurs leçons, régler un forfait ou récupérer leurs documents. C’est le point de passage obligé de l’agence.',
      },
      {
        title: 'Salle de code',
        text: 'Entre deux séries de questions, les élèves ont leur téléphone en main. Une plaque près de la porte de sortie se remarque naturellement.',
      },
      {
        title: 'Espace d’attente des leçons de conduite',
        text: 'Les élèves qui attendent leur moniteur avant de partir sur la route ont quelques minutes devant eux. La plaque leur permet de partager leur avis sur les leçons déjà suivies.',
      },
    ],
    moment:
      'Le moment idéal suit la réussite à l’examen, lorsque l’élève repasse à l’agence chercher ses documents ou remercier son moniteur. C’est l’aboutissement de plusieurs mois de formation, et il a alors une vision complète de son parcours.',
    script:
      'Félicitations pour votre permis ; si vous avez apprécié votre formation chez nous, vous pouvez laisser un avis Google en scannant cette plaque.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Faut-il attendre que l’élève ait obtenu son permis ?',
        answer:
          'Pas forcément : un élève qui vient de réussir son code ou qui progresse bien en conduite peut déjà partager son ressenti. L’essentiel est de proposer la plaque à tous, quel que soit le résultat.',
      },
      {
        question: 'Tous mes élèves ont-ils un téléphone compatible ?',
        answer:
          'La plaque fonctionne avec tout smartphone récent : le QR code se scanne avec l’appareil photo, et le NFC est pris en charge à partir de l’iPhone XS et sur la plupart des Android.',
      },
      {
        question: 'Les avis Google comptent-ils pour une auto-école ?',
        answer:
          'Avant de s’inscrire, beaucoup de futurs élèves et de parents comparent les auto-écoles du quartier sur Google. Des avis réguliers et récents donnent une image fidèle de votre enseignement.',
      },
    ],
  },
  {
    slug: 'lavage-auto',
    platform: 'google',
    family: 'auto',
    name: 'Station de lavage auto',
    h1: 'Plaque avis Google pour station de lavage auto',
    where: 'dans votre station de lavage',
    metaTitle: 'Plaque avis Google pour lavage auto et detailing',
    metaDescription:
      'Plaque avis Google pour lavage auto et detailing : le client donne son avis devant sa voiture propre, par NFC ou QR code. 29,90 € une fois, sans abonnement.',
    intro:
      'Une plaque avis Google dans votre station de lavage ou votre atelier de detailing permet au client de laisser un avis en approchant son téléphone ou en scannant le QR code, pendant qu’il admire son véhicule. Elle fonctionne sans batterie ni Wi-Fi, pour 29,90 € en paiement unique et sans abonnement.',
    spots: [
      {
        title: 'Caisse ou borne d’accueil',
        text: 'Le client y choisit sa formule et règle sa prestation. Placée à côté, la plaque est vue à chaque passage.',
      },
      {
        title: 'Zone de remise du véhicule',
        text: 'En detailing, la livraison se fait souvent en présence du client, qui inspecte l’habitacle et la carrosserie. La plaque posée à cet endroit tombe au bon moment.',
      },
      {
        title: 'Espace d’attente',
        text: 'Pendant un lavage à la main ou un nettoyage intérieur, certains clients patientent sur place. Une plaque sur la table ou près du distributeur occupe utilement ce temps.',
      },
    ],
    moment:
      'Proposez la plaque lorsque le client découvre le résultat : jantes brillantes, sièges nettoyés, vitres sans traces. L’effet avant-après est immédiat, et c’est à cet instant qu’il a envie d’en parler.',
    script:
      'Votre véhicule est prêt ; si le résultat vous plaît, vous pouvez nous laisser un avis Google directement avec cette plaque.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'Puis-je ajouter une plaque Instagram à côté de la plaque Google ?',
        answer:
          'Oui, le detailing se prête bien aux photos avant-après. Une plaque Instagram invite les clients à suivre vos réalisations, tandis que la plaque Google reste dédiée aux avis.',
      },
      {
        question: 'Ma station est en libre-service, sans personnel : ça marche quand même ?',
        answer:
          'Oui, la plaque se suffit à elle-même : le client la scanne ou approche son téléphone sans qu’un employé intervienne. Placez-la là où il s’arrête, par exemple près des aspirateurs ou de la borne de paiement.',
      },
      {
        question: 'Le client doit-il avoir un compte Google ?',
        answer:
          'Pour publier un avis, Google demande d’être connecté à un compte Google. La plaque ouvre directement le bon formulaire, et le reste se fait en quelques secondes.',
      },
    ],
  },

  // ─── Services ────────────────────────────────────────────────────────────
  {
    slug: 'salle-de-sport',
    platform: 'google',
    family: 'services',
    name: 'Salle de sport',
    h1: 'Plaque avis Google pour salle de sport',
    where: 'dans votre salle de sport',
    metaTitle: 'Plaque avis Google pour salle de sport et fitness',
    metaDescription:
      'Plaque avis Google pour salle de sport, fitness ou box : vos adhérents laissent un avis à l’accueil par NFC ou QR code. Paiement unique, sans abonnement.',
    intro:
      'Une plaque avis Google à l’accueil de votre salle de sport, de votre studio de fitness ou de votre box permet à vos adhérents de laisser un avis en un geste, par NFC ou QR code. Elle fonctionne sans application et s’achète une fois pour 29,90 €, sans abonnement.',
    spots: [
      {
        title: 'Comptoir d’accueil',
        text: 'Les adhérents y passent à chaque séance pour badger ou saluer l’équipe. La plaque profite de ce passage quotidien.',
      },
      {
        title: 'Zone d’étirements',
        text: 'En fin d’entraînement, les adhérents s’étirent et reprennent leur téléphone. C’est un moment calme, propice pour écrire quelques mots.',
      },
      {
        title: 'Sortie de la salle de cours collectifs',
        text: 'Dans un studio ou un box, une plaque près de la porte de la salle de cours capte l’énergie de fin de séance, quand le groupe se sépare.',
      },
    ],
    moment:
      'Le bon moment est la sortie d’une séance réussie ou d’un cours collectif, quand l’adhérent est fier de son effort. Évitez les tout premiers jours après l’inscription : attendez qu’il ait pris ses habitudes et puisse juger l’ambiance, le matériel et l’encadrement.',
    script:
      'Merci pour votre séance ; si vous vous plaisez chez nous, un avis Google nous aiderait beaucoup, il suffit d’approcher votre téléphone de la plaque à l’accueil.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'Puis-je offrir un mois gratuit en échange d’un avis ?',
        answer:
          'Non, Google interdit de récompenser un avis, même avec une séance offerte ou un goodie. Invitez simplement tous vos adhérents, sans contrepartie.',
      },
      {
        question: 'Ma salle est ouverte 24h/24 sans personnel, la plaque est-elle utile ?',
        answer:
          'Oui, elle n’a besoin ni d’un employé ni d’une connexion Wi-Fi : l’adhérent utilise son propre réseau mobile. Elle reste utile aux heures où l’accueil est fermé.',
      },
      {
        question: 'À quoi sert la plaque Instagram recommandée ?',
        answer:
          'Elle invite vos adhérents à suivre votre compte pour les plannings, les défis et les coulisses de la salle. Elle complète la plaque Google, qui reste réservée aux avis.',
      },
    ],
  },
  {
    slug: 'agence-immobiliere',
    platform: 'google',
    family: 'services',
    name: 'Agence immobilière',
    h1: 'Plaque avis Google pour agence immobilière',
    where: 'dans votre agence immobilière',
    metaTitle: 'Plaque avis Google pour agence immobilière',
    metaDescription:
      'Plaque avis Google pour agence immobilière : vendeurs, acquéreurs et locataires donnent leur avis par NFC ou QR code. 29,90 € une fois, sans abonnement.',
    intro:
      'Une plaque avis Google sur le bureau de votre agence immobilière permet à vos clients vendeurs, acquéreurs ou locataires de laisser un avis en quelques secondes, par NFC ou QR code. Pas d’application ni d’abonnement : 29,90 € une seule fois, et le lien reste modifiable gratuitement.',
    spots: [
      {
        title: 'Bureau des négociateurs',
        text: 'C’est là que se signent les mandats, les offres et les compromis. Le client y passe du temps assis, téléphone à portée de main.',
      },
      {
        title: 'Accueil de l’agence',
        text: 'Les visiteurs qui viennent déposer un dossier de location ou récupérer des clés croisent la plaque dès l’entrée.',
      },
      {
        title: 'Salle de rendez-vous',
        text: 'Si votre agence dispose d’une pièce dédiée aux rendez-vous importants, une plaque sur la table accompagne les moments clés du projet.',
      },
    ],
    moment:
      'Le moment le plus naturel est la remise des clés à l’agence, après une vente ou la signature d’un bail, quand le projet aboutit. Pour un vendeur, la signature du compromis est aussi un bon jalon : il a déjà pu juger votre estimation, vos visites et votre suivi.',
    script:
      'Merci de nous avoir fait confiance pour ce projet ; si vous le souhaitez, vous pouvez laisser un avis Google sur l’agence en scannant cette plaque.',
    alsoRecommended: [],
    faq: [
      {
        question: 'La vente se signe chez le notaire, quand proposer la plaque ?',
        answer:
          'Lors du dernier passage du client à l’agence, par exemple à la signature du compromis ou à la remise des clés. Il n’a pas besoin d’attendre l’acte authentique pour juger votre accompagnement.',
      },
      {
        question: 'Chaque négociateur peut-il avoir sa plaque ?',
        answer:
          'Oui, et toutes peuvent pointer vers la fiche Google de l’agence. Le pack de 5 plaques à −20 % équipe facilement une équipe entière.',
      },
      {
        question: 'Les clients en gestion locative sont-ils concernés ?',
        answer:
          'Oui, propriétaires bailleurs et locataires peuvent aussi donner leur avis sur votre gestion. La plaque de l’accueil leur sert lorsqu’ils passent déposer un document ou récupérer des clés.',
      },
    ],
  },
  {
    slug: 'toiletteur',
    platform: 'google',
    family: 'services',
    name: 'Toiletteur',
    h1: 'Plaque avis Google pour toiletteur',
    where: 'dans votre salon de toilettage',
    metaTitle: 'Plaque avis Google pour toiletteur canin et félin',
    metaDescription:
      'Plaque avis Google pour toiletteur : les maîtres laissent un avis en récupérant leur animal, par NFC ou QR code. 29,90 € en paiement unique, sans abonnement.',
    intro:
      'Une plaque avis Google au comptoir de votre salon de toilettage permet aux maîtres de laisser un avis au moment où ils récupèrent leur chien ou leur chat, d’un geste avec leur smartphone ou par QR code. Sans application ni abonnement, elle coûte 29,90 € en paiement unique.',
    spots: [
      {
        title: 'Comptoir de restitution',
        text: 'Le maître découvre son animal toiletté et règle la prestation. La plaque est juste devant lui, avant qu’il ne reprenne la laisse.',
      },
      {
        title: 'Coin d’attente des maîtres',
        text: 'Ceux qui patientent sur place pour une prestation courte, comme une coupe de griffes, peuvent laisser un avis sur leurs visites précédentes.',
      },
      {
        title: 'Présentoir de produits',
        text: 'Près des shampoings, friandises ou accessoires que vous vendez, la plaque attire le regard des clients qui flânent avant de repartir.',
      },
    ],
    moment:
      'Proposez la plaque à la restitution, quand le maître retrouve son animal propre, coiffé et détendu. La transformation se voit immédiatement, et il n’est pas rare qu’il sorte déjà son téléphone pour le photographier.',
    script:
      'Votre compagnon est tout beau ; si vous êtes content du toilettage, vous pouvez nous laisser un avis Google avec cette plaque.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'Le maître peut-il joindre une photo de son animal ?',
        answer:
          'Oui, le formulaire d’avis Google permet d’ajouter des photos. Un chien fraîchement toiletté est souvent la meilleure présentation de votre travail.',
      },
      {
        question: 'Je toilette à domicile ou en camion, est-ce adapté ?',
        answer:
          'Oui, la plaque ne demande ni batterie ni Wi-Fi : vous pouvez la présenter au client à la fin de la prestation, chez lui ou à la porte du camion.',
      },
      {
        question: 'Pourquoi associer une plaque Instagram ?',
        answer:
          'Les animaux toilettés sont très photogéniques : une plaque Instagram invite les maîtres à suivre vos avant-après. La plaque Google, elle, reste consacrée aux avis.',
      },
    ],
  },
  {
    slug: 'pressing',
    platform: 'google',
    family: 'services',
    name: 'Pressing',
    h1: 'Plaque avis Google pour pressing',
    where: 'dans votre pressing',
    metaTitle: 'Plaque avis Google pour pressing et laverie',
    metaDescription:
      'Plaque avis Google pour pressing et laverie : vos clients laissent un avis au retrait de leur linge, par NFC ou QR code. 29,90 € une fois, sans abonnement.',
    intro:
      'Une plaque avis Google posée sur le comptoir de votre pressing ou dans votre laverie permet aux clients de laisser un avis en approchant leur téléphone ou en scannant le QR code. Elle fonctionne sans application, sans batterie et sans abonnement, pour 29,90 € une fois.',
    spots: [
      {
        title: 'Comptoir de retrait',
        text: 'Le client y récupère ses chemises, son costume ou sa couette et vérifie le résultat. La plaque se trouve au bon endroit, au bon moment.',
      },
      {
        title: 'Table de pliage de la laverie',
        text: 'En libre-service, les clients attendent la fin du lavage ou du séchage. Une plaque près des séchoirs ou de la table de pliage occupe utilement ce temps.',
      },
      {
        title: 'Borne de paiement',
        text: 'Chaque client passe par la borne pour lancer sa machine. Une plaque juste à côté est vue à chaque visite, même en l’absence de personnel.',
      },
    ],
    moment:
      'Pour un pressing, le moment clé est le retrait, quand le client constate qu’une tache tenace a disparu ou qu’une robe délicate est impeccable. En laverie, c’est plutôt la fin du séchage, quand il plie son linge et dispose de quelques instants.',
    script:
      'Voici vos vêtements ; si vous êtes satisfait du nettoyage, vous pouvez nous laisser un avis Google en approchant votre téléphone d’ici.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Mes clients reviennent plusieurs jours après le dépôt, quand proposer l’avis ?',
        answer:
          'Au retrait plutôt qu’au dépôt : c’est seulement là que le client peut juger la qualité du nettoyage et du repassage. La plaque posée au comptoir suffit à le lui rappeler.',
      },
      {
        question: 'J’ai un pressing et une laverie séparée, que choisir ?',
        answer:
          'Si chaque lieu a sa propre fiche Google, prévoyez une plaque par établissement, chacune pointant vers la bonne fiche. Le pack de 2 plaques bénéficie de 10 % de remise.',
      },
      {
        question: 'Mes clients peu à l’aise avec le numérique sauront-ils l’utiliser ?',
        answer:
          'Le QR code se scanne avec l’appareil photo du téléphone, sans application à télécharger, et le NFC ne demande qu’un geste. Une démonstration au comptoir suffit, elle se retient facilement.',
      },
    ],
  },

  // ─── Santé (Doctolib : prise de rendez-vous) ─────────────────────────────
  {
    slug: 'medecin',
    platform: 'doctolib',
    family: 'sante',
    name: 'Médecin généraliste',
    h1: 'Plaque Doctolib pour médecin généraliste',
    where: 'dans votre cabinet',
    metaTitle: 'Plaque Doctolib pour cabinet de médecin généraliste',
    metaDescription:
      'Plaque Doctolib pour médecin généraliste : vos patients réservent leur prochaine consultation d’un geste, par NFC ou QR code. 29,90 €, sans abonnement.',
    intro:
      'Une plaque Doctolib dans votre cabinet de médecine générale ouvre votre page de prise de rendez-vous dès qu’un patient approche son téléphone ou scanne le QR code. Il réserve lui-même sa prochaine consultation, sans appeler le secrétariat. Paiement unique de 29,90 €, sans abonnement.',
    spots: [
      {
        title: 'Bureau de consultation',
        text: 'En fin de consultation, lorsque vous évoquez un contrôle ou un renouvellement, le patient peut réserver le créneau avant de se lever.',
      },
      {
        title: 'Salle d’attente',
        text: 'Une plaque bien visible montre aux patients qu’ils n’ont pas besoin de téléphoner pour le prochain rendez-vous. Ils peuvent le prévoir pendant leur attente.',
      },
      {
        title: 'Accueil ou secrétariat',
        text: 'Si votre cabinet a un secrétariat, la plaque au comptoir permet d’orienter vers la réservation autonome les patients qui le souhaitent lorsque la ligne est chargée.',
      },
    ],
    moment:
      'Le bon moment est la fin de la consultation, quand vous indiquez au patient qu’il faudra revenir pour un suivi, un résultat d’analyse ou un renouvellement. Il réserve alors pendant qu’il a encore l’indication en tête, plutôt que de rappeler plus tard.',
    script:
      'Pour le prochain rendez-vous, vous pouvez le réserver tout de suite sur Doctolib en approchant votre téléphone de cette plaque.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Certains patients n’utilisent pas Doctolib, est-ce un problème ?',
        answer:
          'La plaque ne remplace ni le téléphone ni le secrétariat : elle offre simplement une option de plus à ceux qui le souhaitent. Les autres patients continuent de prendre rendez-vous comme d’habitude.',
      },
      {
        question: 'Nous sommes plusieurs médecins dans le cabinet, comment faire ?',
        answer:
          'Chaque plaque peut ouvrir la page Doctolib d’un praticien ou celle du cabinet. Les packs de 2 plaques (−10 %) et de 5 plaques (−20 %) permettent d’équiper chaque bureau de consultation.',
      },
      {
        question: 'La plaque modifie-t-elle mon agenda Doctolib ?',
        answer:
          'Non, elle ouvre seulement votre page Doctolib publique. Les créneaux proposés, les motifs de consultation et les règles de réservation restent ceux que vous avez définis sur Doctolib.',
      },
    ],
  },
  {
    slug: 'osteopathe',
    platform: 'doctolib',
    family: 'sante',
    name: 'Ostéopathe',
    h1: 'Plaque Doctolib pour ostéopathe',
    where: 'dans votre cabinet d’ostéopathie',
    metaTitle: 'Plaque Doctolib pour ostéopathe et cabinet d’ostéo',
    metaDescription:
      'Plaque Doctolib pour ostéopathe : vos patients réservent leur séance de suivi en fin de rendez-vous, par NFC ou QR code. Paiement unique, sans abonnement.',
    intro:
      'Une plaque Doctolib pour ostéopathe permet à vos patients de réserver leur séance suivante en approchant leur téléphone ou en scannant le QR code, avant même de quitter le cabinet. Vous évitez de jongler avec l’agenda en fin de séance, sans abonnement : 29,90 € une seule fois.',
    spots: [
      {
        title: 'Bureau de règlement',
        text: 'Après la séance, le patient se rhabille puis règle au bureau. C’est là qu’il pense au créneau suivant, la plaque à portée de main.',
      },
      {
        title: 'Salle d’attente',
        text: 'Elle signale aux personnes qui accompagnent un patient, parents ou conjoints, qu’elles peuvent elles aussi réserver une séance en ligne.',
      },
      {
        title: 'Entrée du cabinet',
        text: 'Si vous exercez seul et sans secrétariat, une plaque près de l’entrée oriente vers votre agenda en ligne les personnes qui sonnent pour demander un rendez-vous.',
      },
    ],
    moment:
      'Invitez le patient à réserver juste après le règlement, si vous avez convenu ensemble d’une séance de contrôle. Il choisit lui-même le créneau adapté à son emploi du temps, pendant que vous préparez la salle pour le patient suivant.',
    script:
      'Si vous souhaitez revenir dans quelques semaines, vous pouvez choisir votre créneau sur Doctolib en scannant cette plaque.',
    alsoRecommended: [],
    faq: [
      {
        question: 'J’exerce seul, sans secrétaire : est-ce utile ?',
        answer:
          'C’est même là qu’elle sert le plus : vous n’avez pas à consulter votre agenda en fin de séance ni à rappeler les patients entre deux rendez-vous. Le patient réserve en autonomie.',
      },
      {
        question: 'J’exerce dans deux cabinets, que faire ?',
        answer:
          'Vous pouvez placer une plaque dans chaque cabinet, chacune pointant vers la page Doctolib correspondante. Deux plaques achetées ensemble coûtent 10 % de moins.',
      },
      {
        question: 'Le patient doit-il installer l’application Doctolib ?',
        answer:
          'Non, la plaque ouvre la page Doctolib dans le navigateur du téléphone. Le patient peut réserver depuis le site, que l’application soit installée ou non.',
      },
    ],
  },
  {
    slug: 'kinesitherapeute',
    platform: 'doctolib',
    family: 'sante',
    name: 'Kinésithérapeute',
    h1: 'Plaque Doctolib pour cabinet de kinésithérapie',
    where: 'dans votre cabinet de kinésithérapie',
    metaTitle: 'Plaque Doctolib pour kinésithérapeute',
    metaDescription:
      'Plaque Doctolib pour kinésithérapeute : vos patients planifient leurs séances de rééducation par NFC ou QR code, sans appeler. 29,90 €, sans abonnement.',
    intro:
      'Une plaque Doctolib dans votre cabinet de kinésithérapie permet à vos patients de planifier leurs prochaines séances en approchant leur téléphone ou en scannant le QR code. Pratique pour les rééducations en plusieurs séances, elle s’achète une fois pour 29,90 €, sans abonnement.',
    spots: [
      {
        title: 'Sortie du plateau technique',
        text: 'C’est là que le patient passe le plus de temps. Une plaque près de la sortie du plateau lui rappelle de caler les séances suivantes avant de partir.',
      },
      {
        title: 'Accueil du cabinet',
        text: 'Dans un cabinet de groupe, la plaque à l’accueil évite l’attente devant le planning ou le téléphone partagé aux heures de pointe.',
      },
      {
        title: 'Box de soin individuel',
        text: 'Pour les séances en box, une plaque près de la porte permet au patient de réserver pendant qu’il récupère ses affaires.',
      },
    ],
    moment:
      'Le moment idéal est la fin de séance, quand vous savez combien de séances restent prévues et à quel rythme. Le patient peut réserver les suivantes en une fois, en tenant compte de ses horaires de travail, au lieu de rappeler à chaque fois.',
    script:
      'Vos prochaines séances se réservent directement sur Doctolib : approchez votre téléphone de la plaque à l’accueil.',
    alsoRecommended: [],
    faq: [
      {
        question:
          'Mes patients ont plusieurs séances prescrites, peuvent-ils toutes les réserver ?',
        answer:
          'Ils peuvent réserver autant de séances que votre agenda Doctolib le permet, selon les règles que vous y avez fixées. La plaque se contente d’ouvrir votre page de réservation.',
      },
      {
        question: 'Le patient doit-il avoir un compte Doctolib ?',
        answer:
          'Pour confirmer une réservation, Doctolib demande de se connecter ou de créer un compte, directement depuis la page ouverte par la plaque. Le patient retrouve ensuite ses rendez-vous dans son espace.',
      },
      {
        question: 'Est-ce adapté à un cabinet avec beaucoup de passages ?',
        answer:
          'Oui : chaque patient utilise la plaque avec son propre téléphone, autant de fois que nécessaire. Plusieurs patients peuvent réserver en même temps sans file d’attente.',
      },
    ],
  },
  {
    slug: 'dentiste',
    platform: 'doctolib',
    family: 'sante',
    name: 'Chirurgien-dentiste',
    h1: 'Plaque Doctolib pour cabinet dentaire',
    where: 'dans votre cabinet dentaire',
    metaTitle: 'Plaque Doctolib pour dentiste et cabinet dentaire',
    metaDescription:
      'Plaque Doctolib pour cabinet dentaire : vos patients réservent contrôle ou suite de soins par NFC ou QR code, sans appeler. 29,90 €, sans abonnement.',
    intro:
      'Une plaque Doctolib dans votre cabinet dentaire permet à vos patients de réserver leur prochain rendez-vous, contrôle ou suite de soins, en approchant leur téléphone ou en scannant le QR code. Votre équipe d’accueil gagne du temps au comptoir, pour 29,90 € en paiement unique et sans abonnement.',
    spots: [
      {
        title: 'Comptoir d’accueil',
        text: 'Après le soin, le patient passe régler et fixer la suite. La plaque lui permet de choisir son créneau pendant que l’équipe gère l’encaissement.',
      },
      {
        title: 'Salle d’attente',
        text: 'Les parents qui accompagnent un enfant peuvent en profiter pour planifier leur propre contrôle, sans repasser par l’accueil.',
      },
      {
        title: 'Bureau de consultation',
        text: 'Lors de la présentation d’un plan de traitement, la plaque permet de réserver les étapes suivantes avant de quitter le bureau.',
      },
    ],
    moment:
      'Proposez la plaque à la fin du rendez-vous, une fois le plan de traitement ou la date du prochain contrôle évoqués. Le patient réserve tant que l’information est fraîche, au lieu de remettre l’appel à plus tard.',
    script:
      'Pour la suite de votre traitement, vous pouvez réserver vos prochains rendez-vous sur Doctolib en scannant cette plaque.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Notre cabinet compte plusieurs praticiens, comment organiser les plaques ?',
        answer:
          'Chaque plaque peut pointer vers une page Doctolib différente : celle du cabinet ou celle d’un praticien. Avec le pack de 5 plaques, chaque salle de soins peut avoir la sienne.',
      },
      {
        question: 'La plaque remplace-t-elle la carte de rendez-vous ?',
        answer:
          'Elle la complète : le patient choisit lui-même son créneau et reçoit ensuite les confirmations envoyées par Doctolib. Vous pouvez garder vos cartes si vos patients y sont attachés.',
      },
      {
        question: 'Est-ce compatible avec le téléphone de mes patients ?',
        answer:
          'Oui : le QR code se scanne avec l’appareil photo de n’importe quel smartphone récent, et le NFC fonctionne à partir de l’iPhone XS ainsi que sur la plupart des Android.',
      },
    ],
  },
  {
    slug: 'psychologue',
    platform: 'doctolib',
    family: 'sante',
    name: 'Psychologue',
    h1: 'Plaque Doctolib pour psychologue',
    where: 'dans votre cabinet',
    metaTitle: 'Plaque Doctolib pour psychologue en cabinet',
    metaDescription:
      'Plaque Doctolib pour psychologue : vos patients réservent leur prochaine séance en toute discrétion, par NFC ou QR code. 29,90 € une fois, sans abonnement.',
    intro:
      'Une plaque Doctolib pour psychologue permet à vos patients de réserver leur prochaine séance en toute discrétion, en approchant leur téléphone ou en scannant le QR code. Pas besoin d’en parler à voix haute ni d’appeler : 29,90 € une fois, sans abonnement.',
    spots: [
      {
        title: 'Près de la porte du bureau',
        text: 'La fin de séance est parfois chargée en émotions. Une plaque discrète près de la porte permet au patient de réserver sans que l’échange bascule sur l’agenda.',
      },
      {
        title: 'Salle d’attente partagée',
        text: 'Dans un cabinet partagé avec d’autres praticiens, une plaque à votre nom en salle d’attente évite toute confusion entre les agendas.',
      },
      {
        title: 'Espace de règlement',
        text: 'Si vos patients règlent la séance à un endroit précis du cabinet, la plaque y trouve naturellement sa place, au moment où ils pensent à la suite.',
      },
    ],
    moment:
      'Le plus simple est de convenir du rythme des séances en fin de rendez-vous, puis de laisser le patient choisir lui-même la date. Certains préfèrent réserver plus tard, au calme : la plaque reste disponible à chaque visite, sans aucune insistance.',
    script:
      'Quand vous le souhaitez, vous pouvez fixer notre prochaine séance sur Doctolib avec cette plaque, sans avoir besoin de m’appeler.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Certains patients préfèrent ne pas réserver devant moi, est-ce adapté ?',
        answer:
          'Oui, la plaque leur laisse le choix : réserver en partant, ou plus tard depuis Doctolib, à l’abri des regards. Rien ne les oblige à le faire pendant la séance.',
      },
      {
        question: 'Je consulte aussi en visio, la plaque peut-elle y renvoyer ?',
        answer:
          'La plaque ouvre votre page Doctolib : si vous y proposez des téléconsultations, le patient les voit parmi vos motifs. Vous gardez la main sur ce qui est affiché.',
      },
      {
        question: 'La plaque transmet-elle des informations sur mes patients ?',
        answer:
          'Non, la plaque contient seulement un lien vers votre page Doctolib. La réservation et les données associées sont gérées par Doctolib, comme si le patient passait par le site.',
      },
    ],
  },
  {
    slug: 'orthophoniste',
    platform: 'doctolib',
    family: 'sante',
    name: 'Orthophoniste',
    h1: 'Plaque Doctolib pour orthophoniste',
    where: 'dans votre cabinet d’orthophonie',
    metaTitle: 'Plaque Doctolib pour orthophoniste',
    metaDescription:
      'Plaque Doctolib pour orthophoniste : patients et parents réservent les séances suivantes par NFC ou QR code, sans téléphoner. 29,90 €, sans abonnement.',
    intro:
      'Une plaque Doctolib pour orthophoniste permet aux patients, ou aux parents des jeunes patients, d’ouvrir votre page de rendez-vous d’un geste ou d’un scan du QR code. Vous passez moins de temps au téléphone entre deux séances, pour 29,90 € une fois et sans abonnement.',
    spots: [
      {
        title: 'Salle d’attente des parents',
        text: 'Pendant la séance de leur enfant, les parents attendent souvent sur place. Ils peuvent planifier les séances suivantes sans attendre la fin.',
      },
      {
        title: 'Bureau de séance',
        text: 'Quand vous fixez avec la famille le rythme de la rééducation, la plaque posée sur le bureau permet de réserver avant de partir.',
      },
      {
        title: 'Porte du cabinet en maison de santé',
        text: 'En maison de santé pluriprofessionnelle, une plaque près de votre porte évite que les familles se trompent de praticien au moment de réserver.',
      },
    ],
    moment:
      'Le bon moment est la fin de séance, une fois le point fait avec le patient ou ses parents sur la suite de la rééducation. Les familles réservent alors en tenant compte des horaires d’école et des activités, sans avoir à vous joindre plus tard.',
    script:
      'Pour les séances à venir, les créneaux sont disponibles sur Doctolib : il suffit de scanner cette plaque avec votre téléphone.',
    alsoRecommended: [],
    faq: [
      {
        question:
          'Ma liste d’attente est longue, la plaque va-t-elle attirer des demandes que je ne peux pas prendre ?',
        answer:
          'La plaque n’affiche que ce que votre page Doctolib propose. Si vous avez réservé la prise de rendez-vous en ligne aux patients déjà suivis dans vos réglages Doctolib, c’est ce paramétrage qui s’applique.',
      },
      {
        question: 'Les parents peuvent-ils réserver pour leur enfant ?',
        answer:
          'Oui, Doctolib permet de prendre rendez-vous pour un proche depuis son propre compte. La plaque ouvre simplement votre page, où le parent choisit le patient concerné.',
      },
      {
        question: 'Faut-il une connexion Wi-Fi au cabinet ?',
        answer:
          'Non, la plaque n’a besoin ni de Wi-Fi ni de batterie : le téléphone lit la puce ou le QR code, puis utilise sa propre connexion pour ouvrir Doctolib.',
      },
    ],
  },
  {
    slug: 'podologue',
    platform: 'doctolib',
    family: 'sante',
    name: 'Pédicure-podologue',
    h1: 'Plaque Doctolib pour pédicure-podologue',
    where: 'dans votre cabinet de podologie',
    metaTitle: 'Plaque Doctolib pour pédicure-podologue',
    metaDescription:
      'Plaque Doctolib pour pédicure-podologue : vos patients réservent leur prochain soin par NFC ou QR code, sans appeler le cabinet. 29,90 €, sans abonnement.',
    intro:
      'Une plaque Doctolib pour pédicure-podologue permet à vos patients de réserver leur prochain soin ou le contrôle de leurs semelles en approchant leur téléphone ou en scannant le QR code. Sans application ni abonnement : 29,90 € en paiement unique.',
    spots: [
      {
        title: 'À côté du fauteuil de soins',
        text: 'Pendant que le patient remet ses chaussures en fin de soin, la plaque à côté du fauteuil lui laisse le temps de choisir son prochain créneau.',
      },
      {
        title: 'Comptoir de règlement',
        text: 'Le patient y règle son soin ou récupère ses orthèses plantaires : un passage naturel pour fixer la suite.',
      },
      {
        title: 'Salle d’attente',
        text: 'Les patients suivis régulièrement peuvent y planifier leur soin suivant avant même d’entrer en cabine.',
      },
    ],
    moment:
      'Proposez la plaque à la fin du soin, quand vous indiquez dans combien de temps revenir, ou à la remise des semelles, pour fixer le contrôle d’adaptation. Le patient repart avec une date plutôt qu’avec l’intention de rappeler.',
    script:
      'Nous nous revoyons dans quelques semaines ; vous pouvez choisir la date vous-même sur Doctolib grâce à cette plaque.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Peut-on l’utiliser pour le contrôle des semelles orthopédiques ?',
        answer:
          'Oui, si ce motif existe sur votre agenda Doctolib, le patient le sélectionne après avoir ouvert la page. La plaque ne fait que l’y conduire.',
      },
      {
        question: 'Combien de plaques prévoir pour mon cabinet ?',
        answer:
          'Une plaque à chaque endroit où le patient s’arrête suffit, par exemple près du fauteuil et au comptoir. Le pack de 2 plaques est remisé de 10 %.',
      },
      {
        question: 'Puis-je rediriger la plaque vers mon site plutôt que vers Doctolib ?',
        answer:
          'Oui, le lien est modifiable gratuitement à tout moment : vous pouvez pointer vers votre page Doctolib, votre site ou une autre page de réservation.',
      },
    ],
  },
  {
    slug: 'sage-femme',
    platform: 'doctolib',
    family: 'sante',
    name: 'Sage-femme',
    h1: 'Plaque Doctolib pour sage-femme',
    where: 'dans votre cabinet de sage-femme',
    metaTitle: 'Plaque Doctolib pour sage-femme libérale',
    metaDescription:
      'Plaque Doctolib pour sage-femme : vos patientes réservent suivi de grossesse ou rééducation par NFC ou QR code, sans appeler. 29,90 €, sans abonnement.',
    intro:
      'Une plaque Doctolib pour sage-femme permet à vos patientes de réserver leur prochain rendez-vous de suivi, de préparation à la naissance ou de rééducation périnéale en approchant leur téléphone ou en scannant le QR code. Moins d’appels à gérer entre deux consultations, pour 29,90 € une fois, sans abonnement.',
    spots: [
      {
        title: 'Salle de consultation',
        text: 'À la fin d’une consultation de suivi, la patiente peut réserver la suivante au moment où vous en fixez l’échéance.',
      },
      {
        title: 'Salle de préparation à la naissance',
        text: 'Après une séance collective, les futurs parents réservent la suivante d’un geste, sans faire la queue pour vous parler.',
      },
      {
        title: 'Salle d’attente',
        text: 'Les patientes viennent parfois accompagnées ; la plaque leur permet de planifier ensemble les prochains rendez-vous selon leurs disponibilités.',
      },
    ],
    moment:
      'Le moment idéal est la fin de chaque consultation, quand vous indiquez l’échéance du prochain rendez-vous selon le suivi ou le programme de séances. La patiente choisit un créneau compatible avec son travail ou la garde de ses enfants, sans devoir rappeler.',
    script:
      'Vous pouvez réserver notre prochaine consultation sur Doctolib dès maintenant, en approchant simplement votre téléphone de cette plaque.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Mes patientes viennent pour des motifs différents, est-ce gérable ?',
        answer:
          'Oui, la page Doctolib ouverte par la plaque affiche les motifs que vous y proposez : suivi de grossesse, préparation à la naissance, contraception ou rééducation. La patiente choisit celui qui la concerne.',
      },
      {
        question: 'Après la naissance, la plaque sert-elle encore ?',
        answer:
          'Oui, la même plaque sert pour la rééducation périnéale ou le suivi gynécologique qui prennent le relais. Seul le motif choisi sur Doctolib change.',
      },
      {
        question: 'La plaque convient-elle aux séances de préparation collectives ?',
        answer:
          'Oui, placée dans la salle de préparation, elle permet à chaque couple de réserver depuis son propre téléphone. Avec le QR code, plusieurs personnes peuvent scanner en même temps.',
      },
    ],
  },
]
