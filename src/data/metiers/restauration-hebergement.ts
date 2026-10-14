import type { Metier } from './types'

export const METIERS_RESTAURATION_HEBERGEMENT: Metier[] = [
  {
    slug: 'restaurant',
    platform: 'google',
    family: 'restauration',
    name: 'Restaurant',
    h1: 'Plaque avis Google pour restaurant',
    where: 'dans votre restaurant',
    metaTitle: 'Plaque avis Google restaurant : NFC et QR code',
    metaDescription:
      'Plaque avis Google NFC et QR code pour restaurant : vos clients notent leur repas en un geste au moment de l’addition. Paiement unique, sans abonnement.',
    intro:
      'La plaque Youzplate ouvre directement la page d’avis Google de votre restaurant dès qu’un client en approche son téléphone ou scanne son QR code. Elle donne le meilleur d’elle-même en fin de repas, quand l’addition arrive et que le plat et le service sont encore en tête. Aucun nom à chercher, aucune application à installer : l’avis se rédige en quelques secondes.',
    spots: [
      {
        title: 'Dans le porte-addition',
        text: 'Glissée à côté du ticket, la plaque arrive au moment précis où le client fait le bilan de son repas. Le serveur n’a qu’à la mentionner en déposant l’addition.',
      },
      {
        title: 'Au comptoir de caisse',
        text: 'Pour les clients qui règlent debout en partant, une plaque posée près du terminal de paiement rattrape ceux qui n’ont pas eu l’addition à table.',
      },
      {
        title: 'Sur les tables de terrasse',
        text: 'En saison, quelques plaques sur les tables extérieures touchent les clients qui s’attardent après le café, sans qu’ils aient à repasser par la salle.',
      },
    ],
    moment:
      'Le bon moment se situe entre le dessert et le paiement, quand le client se détend et repense à son repas. Plus tôt, il est encore occupé à manger ; une fois la porte franchie, la demande est oubliée. La personne qui apporte l’addition est la mieux placée pour en parler.',
    script:
      'Si vous avez apprécié votre repas, il vous suffit d’approcher votre téléphone de cette plaque pour nous laisser un avis sur Google, cela nous aide beaucoup.',
    alsoRecommended: ['tripadvisor'],
    faq: [
      {
        question: 'Combien de plaques prévoir pour un restaurant ?',
        answer:
          'L’idéal est une plaque par porte-addition en circulation, plus une au comptoir de caisse. Les packs de 2 plaques (−10 %) et de 5 plaques (−20 %) permettent d’équiper toute la salle à moindre coût.',
      },
      {
        question: 'Puis-je offrir un café ou un dessert contre un avis ?',
        answer:
          'Non : Google interdit de récompenser un avis, sous peine de voir les avis concernés supprimés. Demandez simplement, la plaque se charge de rendre le geste facile.',
      },
      {
        question: 'Et si je change de nom ou de fiche Google ?',
        answer:
          'Le lien de la plaque se modifie gratuitement, à tout moment. Vous gardez les mêmes plaques sur vos tables, elles pointent simplement vers la nouvelle fiche.',
      },
    ],
  },
  {
    slug: 'pizzeria',
    platform: 'google',
    family: 'restauration',
    name: 'Pizzeria',
    h1: 'Plaque avis Google pour pizzeria',
    where: 'dans votre pizzeria',
    metaTitle: 'Plaque avis Google pizzeria, sur place et à emporter',
    metaDescription:
      'Plaque avis Google pour pizzeria : NFC et QR code au comptoir de retrait ou en salle, pour des avis pendant la cuisson. Paiement unique, sans abonnement.',
    intro:
      'Dans une pizzeria, une bonne partie des clients ne s’assoit jamais : ils viennent chercher leur pizza à emporter. La plaque Youzplate leur permet de laisser un avis Google pendant l’attente au comptoir, par NFC ou QR code, tout comme aux clients servis en salle. Elle est particulièrement utile auprès des habitués du soir, qui commandent régulièrement sans jamais penser à vous noter.',
    spots: [
      {
        title: 'Au comptoir de retrait',
        text: 'C’est là que patientent les clients à emporter, téléphone en main, pendant que leur pizza cuit. Une plaque bien visible transforme ces minutes d’attente en occasion de donner leur avis.',
      },
      {
        title: 'Sur les tables, près des condiments',
        text: 'À côté de l’huile pimentée et du poivre, la plaque reste sous les yeux des clients en salle pendant tout le repas.',
      },
      {
        title: 'Près de la porte d’entrée',
        text: 'Pour les clients pressés qui récupèrent leur commande et repartent aussitôt, une plaque près de la sortie constitue un dernier rappel avant de quitter les lieux.',
      },
    ],
    moment:
      'Pour la vente à emporter, sollicitez le client pendant qu’il attend sa pizza plutôt qu’au moment où il part, les mains prises par les boîtes. En salle, le moment idéal arrive après la pizza, quand la table hésite sur le dessert ou demande l’addition.',
    script:
      'Pendant que votre pizza cuit, vous pouvez scanner la plaque ici pour nous laisser un avis sur Google, ça ne prend qu’une minute.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'La plaque marche-t-elle pour la vente à emporter ?',
        answer:
          'Oui, c’est même l’un de ses meilleurs usages : le client attend au comptoir avec son téléphone et n’a rien d’autre à faire. Un scan du QR code ou un contact NFC suffit.',
      },
      {
        question: 'Mes clients en livraison peuvent-ils l’utiliser ?',
        answer:
          'La plaque est un objet physique : elle s’adresse aux clients présents dans la pizzeria. Réservez-la au comptoir et à la salle, là où elle est vue.',
      },
      {
        question: 'Faut-il du Wi-Fi ou une prise près du comptoir ?',
        answer:
          'Non, la plaque n’a ni batterie ni connexion : c’est le téléphone du client qui ouvre la page d’avis. Elle se pose où vous voulez sur le comptoir, sans aucun branchement.',
      },
    ],
  },
  {
    slug: 'bar',
    platform: 'google',
    family: 'restauration',
    name: 'Bar',
    h1: 'Plaque avis Google pour bar',
    where: 'dans votre bar',
    metaTitle: 'Plaque avis Google pour bar : un avis depuis le zinc',
    metaDescription:
      'Plaque avis Google pour bar, NFC et QR code : posée sur le zinc, elle ouvre votre fiche en un geste, même en salle tamisée. Paiement unique, sans abonnement.',
    intro:
      'Au bar, la plaque Youzplate permet à vos clients d’ouvrir votre fiche Google et de laisser un avis d’un simple contact NFC ou d’un scan de QR code, sans couper la soirée. Elle fonctionne le mieux posée sur le zinc, là où l’on commande et où l’on règle sa tournée. Dans une ambiance tamisée où un QR code se lit moins facilement, le contact NFC prend le relais.',
    spots: [
      {
        title: 'Sur le zinc, près du terminal',
        text: 'C’est le passage obligé pour commander et payer. Une plaque à côté du terminal de paiement est vue par chaque client qui règle sa consommation.',
      },
      {
        title: 'Sur les tables hautes',
        text: 'Les groupes s’y installent entre deux verres, téléphone posé devant eux. Une plaque à portée de main y trouve naturellement son public.',
      },
      {
        title: 'En terrasse',
        text: 'Aux beaux jours, la terrasse accueille des clients de passage qui découvrent votre bar pour la première fois : leur avis aidera les suivants à s’arrêter.',
      },
    ],
    moment:
      'Le meilleur moment arrive après la deuxième consommation ou au règlement, quand le client a eu le temps d’apprécier l’ambiance. Évitez les heures de rush : un barman débordé n’a pas le temps d’en parler, et le client non plus.',
    script:
      'Si la soirée vous plaît, la petite plaque sur le comptoir vous permet de nous laisser un avis Google en approchant simplement votre téléphone.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'La plaque fonctionne-t-elle dans un bar peu éclairé ?',
        answer:
          'Oui : le contact NFC n’a pas besoin de lumière, il suffit d’approcher un smartphone récent de la plaque. Le QR code reste disponible pour les téléphones sans NFC.',
      },
      {
        question: 'Peut-on aussi renvoyer les clients vers Instagram ?',
        answer:
          'Il existe une plaque Instagram dédiée, à placer à côté de la plaque avis Google sur le comptoir. Chacune garde ainsi un rôle clair pour vos clients.',
      },
      {
        question: 'Mon équipe doit-elle entretenir quoi que ce soit ?',
        answer:
          'Non, il n’y a rien à recharger ni à configurer : pas de batterie, pas de Wi-Fi. Le personnel n’a qu’à indiquer la plaque au client au bon moment.',
      },
    ],
  },
  {
    slug: 'cafe',
    platform: 'google',
    family: 'restauration',
    name: 'Café et salon de thé',
    h1: 'Plaque avis Google pour café et salon de thé',
    where: 'dans votre café',
    metaTitle: 'Plaque avis Google pour café et salon de thé',
    metaDescription:
      'Plaque avis Google pour café et salon de thé : NFC et QR code sur les tables pour un avis pendant la pause. Achat unique sans abonnement, lien modifiable.',
    intro:
      'Dans un café ou un salon de thé, les clients restent assis un moment, souvent avec leur téléphone à portée de main : c’est un cadre idéal pour une plaque avis Google. Un contact NFC ou un scan du QR code ouvre directement votre fiche, sans application. Elle trouve sa place sur les tables, au comptoir de commande et près de la vitrine des gâteaux.',
    spots: [
      {
        title: 'Sur les tables',
        text: 'Posée à côté du sucrier ou du porte-menu, la plaque accompagne le client pendant toute sa pause, qu’il lise, travaille ou discute.',
      },
      {
        title: 'Au comptoir de commande',
        text: 'Là où l’on commande au comptoir, la plaque se voit pendant la préparation de la boisson, une attente courte mais bien réelle.',
      },
      {
        title: 'Devant la vitrine des gâteaux',
        text: 'Les clients s’y arrêtent pour choisir leur part de tarte ou leur scone : la plaque leur rappelle qu’ils pourront donner leur avis une fois servis.',
      },
    ],
    moment:
      'Invitez le client lorsqu’il a terminé sa tasse et range ses affaires, ou lorsqu’il revient au comptoir pour une deuxième commande. Il a alors goûté ce que vous servez et profité du lieu, deux choses qu’il décrira dans son avis.',
    script:
      'Si vous avez passé un bon moment chez nous, vous pouvez nous laisser un petit avis Google avec la plaque posée sur votre table.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'Les clients en télétravail sont-ils une bonne cible ?',
        answer:
          'Oui, ils restent longtemps avec leur téléphone ou leur ordinateur à proximité. Une plaque sur leur table leur permet de laisser un avis sans interrompre leur travail.',
      },
      {
        question: 'Puis-je mettre une plaque sur chaque table ?',
        answer:
          'C’est possible, et pertinent dans une petite salle. Le pack de 5 plaques à −20 % permet d’équiper plusieurs tables sans multiplier la dépense.',
      },
      {
        question: 'La plaque fonctionne-t-elle avec tous les téléphones ?',
        answer:
          'Le QR code se lit avec l’appareil photo de n’importe quel smartphone récent. Le contact NFC fonctionne à partir de l’iPhone XS et sur la plupart des Android.',
      },
    ],
  },
  {
    slug: 'boulangerie',
    platform: 'google',
    family: 'restauration',
    name: 'Boulangerie-pâtisserie',
    h1: 'Plaque avis Google pour boulangerie-pâtisserie',
    where: 'dans votre boulangerie',
    metaTitle: 'Plaque avis Google pour boulangerie-pâtisserie',
    metaDescription:
      'Plaque avis Google pour boulangerie : NFC et QR code près de la caisse, vos clients laissent un avis sans ralentir la file. Paiement unique, sans abonnement.',
    intro:
      'En boulangerie, le passage en caisse dure quelques secondes : la plaque Youzplate permet à vos clients de laisser un avis Google d’un geste, par NFC ou QR code, sans ralentir la file. Elle est idéale près du terminal de paiement et dans la file du matin ou du dimanche, quand les clients patientent téléphone en main.',
    spots: [
      {
        title: 'À côté du terminal de paiement',
        text: 'Le client a déjà son téléphone ou sa carte en main pour payer : approcher son téléphone de la plaque devient un geste naturel.',
      },
      {
        title: 'Sur la vitrine réfrigérée',
        text: 'Pendant que le client hésite entre deux entremets ou deux tartelettes, une plaque posée sur le haut de la vitrine attire son regard sans gêner la vente.',
      },
      {
        title: 'Au coin snacking',
        text: 'Si vous proposez sandwichs et formules à consommer sur place, une plaque sur le mange-debout touche les clients du midi, qui ont un peu plus de temps.',
      },
    ],
    moment:
      'Le meilleur moment est l’attente dans la file, surtout aux heures d’affluence où chacun patiente quelques minutes. Pour un gâteau sur commande, parlez-en au retrait : il accompagne souvent un anniversaire ou une fête, et le client aura envie de raconter comment il a été reçu.',
    script:
      'Si vous aimez notre pain, vous pouvez nous laisser un avis Google en approchant votre téléphone de la plaque près de la caisse.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'La plaque ne va-t-elle pas ralentir la file d’attente ?',
        answer:
          'Non, le client n’a pas à rédiger son avis devant le comptoir : le contact ouvre la page d’avis, qu’il peut compléter en sortant. La vente reste aussi rapide qu’avant.',
      },
      {
        question: 'Où la placer quand le comptoir est déjà encombré ?',
        answer:
          'Privilégiez l’espace juste à côté du terminal de paiement, que tous les clients regardent. Si la place manque, le haut de la vitrine est une bonne alternative.',
      },
      {
        question: 'J’ai deux boutiques, comment faire ?',
        answer:
          'Chaque boutique a en principe sa propre fiche Google : prévoyez des plaques pour chacune et associez-les à la bonne fiche. Le lien se modifie gratuitement en cas d’erreur ou de changement.',
      },
    ],
  },
  {
    slug: 'fast-food',
    platform: 'google',
    family: 'restauration',
    name: 'Snack et fast-food',
    h1: 'Plaque avis Google pour fast-food et snack',
    where: 'dans votre snack',
    metaTitle: 'Plaque avis Google pour fast-food, snack et kebab',
    metaDescription:
      'Plaque avis Google pour snack, kebab ou burger : NFC et QR code au comptoir, un avis pendant la préparation de la commande. Sans abonnement, paiement unique.',
    intro:
      'Dans un fast-food, un kebab ou un restaurant de burgers, le client attend sa commande quelques minutes au comptoir : c’est là que la plaque Youzplate fait son travail. Un contact NFC ou un scan du QR code ouvre votre fiche Google, et l’avis peut être rédigé pendant la préparation ou à table en mangeant.',
    spots: [
      {
        title: 'Au comptoir de commande',
        text: 'Le client y passe forcément, puis attend souvent que son numéro soit appelé : la plaque occupe utilement ce temps mort.',
      },
      {
        title: 'Sur les tables de la salle',
        text: 'Pour ceux qui mangent sur place, une plaque sur la table reste visible de la première à la dernière frite.',
      },
      {
        title: 'Près de l’écran d’appel des commandes',
        text: 'Les clients gardent les yeux sur l’écran qui affiche les numéros prêts : une plaque juste en dessous profite de ce regard.',
      },
    ],
    moment:
      'Sollicitez le client en lui remettant son plateau ou son sac : il vient de vivre l’accueil et l’attente, et goûtera dans la foulée, téléphone souvent posé à côté. Pour ceux qui mangent sur place, un mot au moment de débarrasser fonctionne aussi.',
    script:
      'Bon appétit, et si c’était bon, vous pouvez scanner la plaque sur le comptoir pour nous laisser un avis Google.',
    alsoRecommended: ['tiktok'],
    faq: [
      {
        question: 'Ma clientèle est surtout à emporter, est-ce utile ?',
        answer:
          'Oui, car l’attente au comptoir existe aussi pour la vente à emporter. Le client peut toucher la plaque pendant la préparation et terminer son avis une fois chez lui.',
      },
      {
        question: 'Et pour les commandes passées sur les applications de livraison ?',
        answer:
          'Ce sont les livreurs qui récupèrent ces commandes, pas les clients : la plaque ne les concerne pas. Elle sert aux clients qui viennent sur place et découvrent votre accueil.',
      },
      {
        question: 'Combien de plaques pour un snack ?',
        answer:
          'Une plaque au comptoir suffit pour commencer ; ajoutez-en sur les tables si vous avez une salle. Le pack de 2 plaques bénéficie de −10 %.',
      },
    ],
  },
  {
    slug: 'food-truck',
    platform: 'google',
    family: 'restauration',
    name: 'Food truck',
    h1: 'Plaque avis Google pour food truck',
    where: 'sur votre food truck',
    metaTitle: 'Plaque avis Google pour food truck, sans Wi-Fi',
    metaDescription:
      'Plaque avis Google pour food truck : NFC et QR code sans batterie ni Wi-Fi, elle vous suit sur chaque emplacement. Paiement unique, sans abonnement.',
    intro:
      'Pour un food truck qui change d’emplacement selon les jours, la fiche Google est souvent le moyen par lequel les clients vous retrouvent. La plaque Youzplate, posée sur la tablette du camion, leur permet de laisser un avis par NFC ou QR code pendant qu’ils attendent leur commande. Sans batterie ni Wi-Fi, elle fonctionne aussi bien sur un marché que sur un parking d’entreprise.',
    spots: [
      {
        title: 'Sur la tablette de service',
        text: 'Tout passe par cette ouverture : commande, paiement, remise du plat. Une plaque posée sur la tablette est vue par chaque client.',
      },
      {
        title: 'À côté de l’ardoise du menu',
        text: 'Les clients lisent la carte en faisant la queue : une plaque près de l’ardoise leur laisse le temps d’agir avant d’arriver au guichet.',
      },
      {
        title: 'Sur les mange-debout',
        text: 'Si vous installez quelques tables autour du camion, une plaque sur chacune touche ceux qui mangent sur place.',
      },
    ],
    moment:
      'La file d’attente est votre meilleure alliée : les clients patientent devant le camion sans autre occupation. Au moment de remettre le plat, un mot rapide suffit, car beaucoup mangent à quelques mètres et peuvent écrire leur avis entre deux bouchées.',
    script:
      'Merci et régalez-vous ; si vous voulez aider d’autres gens à nous trouver, la plaque ici vous permet de nous laisser un avis Google.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'La plaque fonctionne-t-elle sans Wi-Fi sur place ?',
        answer:
          'Oui, la plaque n’a besoin d’aucune connexion : elle transmet simplement le lien au téléphone du client, qui utilise son propre réseau mobile. Rien à brancher dans le camion.',
      },
      {
        question: 'Je change d’emplacement chaque jour, la plaque reste-t-elle valable ?',
        answer:
          'Oui, la plaque pointe vers votre fiche Google, pas vers un lieu : elle vous suit partout où le camion s’installe.',
      },
      {
        question: 'Puis-je aussi faire suivre mon compte Instagram ?',
        answer:
          'Si vous annoncez vos emplacements sur Instagram, une plaque Instagram placée à côté de la plaque avis aide les clients à suivre votre tournée. Chaque plaque garde ainsi un rôle clair.',
      },
    ],
  },
  {
    slug: 'hotel',
    platform: 'google',
    family: 'hebergement',
    name: 'Hôtel',
    h1: 'Plaque avis Google pour hôtel',
    where: 'dans votre hôtel',
    metaTitle: 'Plaque avis Google pour hôtel : avis au check-out',
    metaDescription:
      'Plaque avis Google pour hôtel : NFC et QR code à la réception ou en chambre, vos clients laissent un avis au check-out. Paiement unique, sans abonnement.',
    intro:
      'À l’hôtel, la plaque Youzplate permet à vos clients d’ouvrir votre fiche Google et de laisser un avis par NFC ou QR code, sans chercher le nom de l’établissement. Elle est la plus efficace à la réception, au moment du départ, quand le séjour est complet et encore frais. Elle complète les sollicitations envoyées par e-mail, avec l’avantage d’arriver pendant que le client est encore sur place.',
    spots: [
      {
        title: 'Sur le comptoir de la réception',
        text: 'C’est là que se fait le check-out : la plaque accompagne la remise de la facture et le dernier échange avec le personnel.',
      },
      {
        title: 'Dans la chambre',
        text: 'Posée sur le bureau ou près du livret d’accueil, elle permet au client de laisser son avis le soir, au calme, sans attendre le départ.',
      },
      {
        title: 'En salle de petit-déjeuner',
        text: 'Le dernier matin, les clients prennent leur temps devant leur café, téléphone sur la table : une plaque sur le buffet tombe au bon moment.',
      },
    ],
    moment:
      'Le check-out est le moment clé : le client a vécu tout son séjour, de l’arrivée à la nuit, et règle sa note face à vous. Posez-lui d’abord la question de son séjour, puis présentez la plaque, pour qu’une réponse positive mène naturellement vers l’avis.',
    script:
      'Nous espérons que votre séjour s’est bien passé ; si vous avez une minute, cette plaque vous permet de nous laisser un avis sur Google.',
    alsoRecommended: ['tripadvisor'],
    faq: [
      {
        question: 'Faut-il une plaque dans chaque chambre ?',
        answer:
          'Ce n’est pas indispensable : une plaque à la réception touche déjà chaque client au départ. Les chambres peuvent être équipées progressivement, par exemple avec le pack de 5 plaques à −20 %.',
      },
      {
        question: 'Faut-il former l’équipe de réception ?',
        answer:
          'Il n’y a rien de technique à expliquer : le personnel indique simplement la plaque au moment du départ. Une phrase suffit, la plaque fait le reste.',
      },
      {
        question: 'Les avis sur les sites de réservation ne suffisent-ils pas ?',
        answer:
          'Les avis laissés sur les sites de réservation restent sur ces sites. Les avis Google, eux, s’affichent sur votre fiche dans la recherche et sur Google Maps, là où un voyageur compare les hôtels du quartier.',
      },
    ],
  },
  {
    slug: 'chambre-d-hotes',
    platform: 'google',
    family: 'hebergement',
    name: 'Chambres d’hôtes et gîte',
    h1: 'Plaque avis Google pour chambres d’hôtes et gîte',
    where: 'dans vos chambres d’hôtes',
    metaTitle: 'Plaque avis Google pour chambres d’hôtes et gîte',
    metaDescription:
      'Plaque avis Google pour chambres d’hôtes et gîte : NFC et QR code près du livret d’accueil, pour un avis avant le départ. Sans abonnement, paiement unique.',
    intro:
      'Pour une maison d’hôtes ou un gîte, la fiche Google est souvent ce qu’un voyageur consulte avant de réserver. La plaque Youzplate permet à vos hôtes d’y laisser leur avis par NFC ou QR code, directement depuis la maison, sans chercher votre nom. Elle s’intègre naturellement au livret d’accueil et à la table du petit-déjeuner.',
    spots: [
      {
        title: 'Avec le livret d’accueil',
        text: 'Posée à côté du livret qui présente la maison, les codes et les bonnes adresses, la plaque est découverte dès l’arrivée et retrouvée pendant tout le séjour.',
      },
      {
        title: 'Sur la table du petit-déjeuner',
        text: 'C’est le moment où vous échangez avec vos hôtes et où ils planifient leur journée : la plaque y trouve un cadre convivial, loin de toute démarche commerciale.',
      },
      {
        title: 'Près de la porte du gîte',
        text: 'Pour un gîte loué sans votre présence, une plaque près de l’entrée ou de la boîte à clés est vue au départ, au moment de rendre les lieux.',
      },
    ],
    moment:
      'Le dernier petit-déjeuner, ou l’instant où vous dites au revoir, est idéal : la relation est directe et vos hôtes ont profité de tout le séjour. Pour un gîte en autonomie, mentionnez la plaque dans votre message de bienvenue afin que vos locataires sachent où la trouver.',
    script:
      'Nous avons été ravis de vous recevoir ; si le séjour vous a plu, vous pouvez nous laisser un avis Google grâce à la plaque près du livret d’accueil.',
    alsoRecommended: ['tripadvisor'],
    faq: [
      {
        question: 'Je ne rencontre pas mes locataires, la plaque est-elle utile ?',
        answer:
          'Oui, c’est même là qu’elle remplace le mieux la demande de vive voix. Placée près du livret d’accueil ou de la sortie, elle rappelle l’avis sans que vous ayez à relancer.',
      },
      {
        question: 'J’ai plusieurs chambres, faut-il une plaque par chambre ?',
        answer:
          'Une plaque dans l’espace commun ou sur la table du petit-déjeuner suffit souvent. Si chaque chambre a son entrée indépendante, les packs de 2 ou 5 plaques permettent d’en équiper plusieurs.',
      },
      {
        question: 'Je loue aussi via des plateformes de location, est-ce compatible ?',
        answer:
          'Oui, la plaque renvoie vers votre fiche Google, quelle que soit la plateforme utilisée pour réserver. Les avis des deux côtés se complètent.',
      },
    ],
  },
  {
    slug: 'camping',
    platform: 'google',
    family: 'hebergement',
    name: 'Camping',
    h1: 'Plaque avis Google pour camping',
    where: 'dans votre camping',
    metaTitle: 'Plaque avis Google pour camping : accueil et sanitaires',
    metaDescription:
      'Plaque avis Google pour camping : NFC et QR code à l’accueil, au snack ou aux sanitaires, sans électricité ni Wi-Fi. Paiement unique, sans abonnement.',
    intro:
      'Dans un camping, les vacanciers restent plusieurs jours et repassent sans cesse par les mêmes lieux : accueil, sanitaires, snack ou piscine. La plaque Youzplate, placée à ces points de passage, leur permet de laisser un avis Google par NFC ou QR code au moment où ils ont du temps. Elle fonctionne sans électricité ni Wi-Fi, même loin de l’accueil.',
    spots: [
      {
        title: 'Au bureau d’accueil',
        text: 'Les campeurs y passent à l’arrivée, au départ et pour toutes leurs questions : la plaque sur le comptoir est vue plusieurs fois pendant le séjour.',
      },
      {
        title: 'À l’entrée du bloc sanitaire',
        text: 'Le passage y est quotidien, des tentes aux camping-cars : une plaque à cet endroit touche aussi les clients qui ne reviennent jamais à l’accueil.',
      },
      {
        title: 'Au snack ou près de la piscine',
        text: 'Ces lieux de détente rassemblent les vacanciers en fin de journée, téléphone en main. Une plaque sur le comptoir du snack y trouve un public disponible.',
      },
    ],
    moment:
      'Le jour du départ, quand le client rend la clé du mobil-home ou le badge de la barrière, est le plus naturel : le séjour est complet et il se trouve face à votre équipe. Pour les longs séjours, une invitation en milieu de semaine, après une soirée animée réussie, fonctionne aussi.',
    script:
      'Merci d’avoir passé vos vacances chez nous ; si elles vous ont plu, cette plaque vous permet de nous laisser un avis sur Google avant de reprendre la route.',
    alsoRecommended: ['tripadvisor', 'instagram'],
    faq: [
      {
        question: 'Combien de plaques pour un camping ?',
        answer:
          'Comptez une plaque à l’accueil, puis une par lieu de passage important : bloc sanitaire, snack, piscine. Le pack de 5 plaques à −20 % couvre l’essentiel de ces points.',
      },
      {
        question: 'Et sur les emplacements éloignés, sans réseau ?',
        answer:
          'La plaque elle-même n’a besoin ni de courant ni de Wi-Fi. Le client doit en revanche disposer d’une connexion mobile ou du Wi-Fi du camping pour envoyer son avis.',
      },
      {
        question: 'Mes campeurs étrangers sauront-ils l’utiliser ?',
        answer:
          'Oui, scanner un QR code ou approcher son téléphone d’une plaque ne demande pas de parler français. L’avis peut ensuite être rédigé dans la langue de leur choix.',
      },
    ],
  },
]
