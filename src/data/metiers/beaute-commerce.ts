import type { Metier } from './types'

export const METIERS_BEAUTE_COMMERCE: Metier[] = [
  {
    slug: 'coiffeur',
    platform: 'google',
    family: 'beaute',
    name: 'Coiffeur',
    h1: 'Plaque avis Google pour coiffeur',
    where: 'dans votre salon',
    metaTitle: 'Plaque avis Google pour coiffeur et salon de coiffure',
    metaDescription:
      'Plaque NFC et QR code pour salon de coiffure : vos clients laissent un avis Google en un geste, depuis le poste de coiffage ou la caisse. Sans abonnement.',
    intro:
      'Une plaque avis Google posée dans votre salon de coiffure permet à vos clients d’ouvrir votre fiche d’avis en approchant leur téléphone, sans application à installer. Elle donne les meilleurs résultats près de la caisse et des postes de coiffage, là où le client découvre sa nouvelle coupe et règle sa prestation.',
    spots: [
      {
        title: 'La caisse et la prise de rendez-vous',
        text: 'Au comptoir, le client sort déjà son téléphone pour payer ou noter son prochain rendez-vous. Le scan s’intègre naturellement à ce geste.',
      },
      {
        title: 'La tablette du poste de coiffage',
        text: 'Placée devant le miroir, la plaque reste visible pendant le coiffage final, au moment où le client commence à apprécier le résultat.',
      },
      {
        title: 'Le coin attente',
        text: 'Sur la table des magazines, elle rappelle aux habitués qu’ils peuvent partager leur expérience, même s’ils n’y ont pas pensé lors de leur dernière visite.',
      },
    ],
    moment:
      'Le moment idéal suit le coup de miroir de dos, quand vous présentez la coupe sous tous les angles. Le client est satisfait, la prestation est encore fraîche dans son esprit et il peut décrire précisément ce qu’il a aimé : la coupe, la couleur ou le conseil reçu.',
    script:
      'Si vous êtes content de votre coupe, il vous suffit d’approcher votre téléphone de la plaque : un petit avis sur Google aiderait beaucoup le salon.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'Combien de plaques prévoir pour un salon avec plusieurs postes ?',
        answer:
          'Une plaque à la caisse suffit pour démarrer. Si vous voulez en installer une par poste de coiffage, le pack de 2 plaques est à −10 % et celui de 5 plaques à −20 %.',
      },
      {
        question: 'La plaque peut-elle renvoyer vers la réservation en ligne du salon ?',
        answer:
          'Oui. Le lien se modifie gratuitement à tout moment : vous pouvez diriger la plaque vers votre page de prise de rendez-vous, puis revenir à votre fiche d’avis Google quand vous le souhaitez.',
      },
      {
        question: 'Puis-je offrir une remise sur la prochaine coupe contre un avis ?',
        answer:
          'Non. Google interdit toute contrepartie en échange d’un avis, qu’il s’agisse d’une réduction ou d’un soin offert. Contentez-vous d’inviter vos clients satisfaits : la plaque rend la démarche assez simple pour qu’ils la fassent d’eux-mêmes.',
      },
    ],
  },
  {
    slug: 'barbier',
    platform: 'google',
    family: 'beaute',
    name: 'Barbier',
    h1: 'Plaque avis Google pour barbier',
    where: 'dans votre barber shop',
    metaTitle: 'Plaque avis Google pour barbier et barber shop',
    metaDescription:
      'Plaque avis Google pour barbier : NFC et QR code pour récolter des avis après chaque taille de barbe ou dégradé. Paiement unique, sans abonnement, sans appli.',
    intro:
      'La plaque avis Google permet à chaque client de votre barber shop d’accéder à votre fiche d’avis en quelques secondes, par simple contact NFC ou scan du QR code. Elle est particulièrement efficace au fauteuil, juste après la finition, et à la caisse pour les clients de passage.',
    spots: [
      {
        title: 'Le plan de travail du fauteuil',
        text: 'À côté des tondeuses et des produits de finition, la plaque est sous les yeux du client quand il se relève et contrôle son dégradé dans le miroir.',
      },
      {
        title: 'Le comptoir d’encaissement',
        text: 'Les clients sans rendez-vous repartent vite : la plaque au moment du paiement leur permet de laisser un avis avant de franchir la porte.',
      },
      {
        title: 'La banquette d’attente',
        text: 'Ceux qui patientent pour leur tour ont le téléphone en main. Une plaque à côté d’eux invite les habitués à soutenir le shop pendant l’attente.',
      },
    ],
    moment:
      'Invitez le client après la dernière étape, serviette chaude ou application de l’huile à barbe, lorsqu’il passe la main sur sa barbe et valide le résultat. C’est le moment où il est le plus fier de sa coupe, avant qu’il ne reparte vers sa journée.',
    script:
      'Si la coupe vous plaît, approchez votre téléphone de la plaque pour nous laisser un avis Google, ça compte beaucoup pour le shop.',
    alsoRecommended: ['instagram', 'tiktok'],
    faq: [
      {
        question:
          'Mon barber shop fonctionne surtout sans rendez-vous, la plaque est-elle adaptée ?',
        answer:
          'Oui, c’est même là qu’elle est utile : un client de passage que vous ne reverrez pas forcément peut laisser son avis en quelques secondes, sans que vous ayez besoin de son adresse e-mail ou de son numéro.',
      },
      {
        question: 'Faut-il du Wi-Fi ou une prise électrique près du fauteuil ?',
        answer:
          'Non. La plaque n’a ni batterie ni besoin de Wi-Fi : c’est le téléphone du client qui ouvre la page avec sa propre connexion.',
      },
      {
        question: 'Avis Google ou abonnés Instagram : que privilégier pour un barbier ?',
        answer:
          'Les avis Google comptent pour apparaître quand on cherche un barbier à proximité, Instagram et TikTok servent à montrer vos dégradés. Beaucoup de shops placent une plaque Google à la caisse et une plaque Instagram ou TikTok près des fauteuils.',
      },
    ],
  },
  {
    slug: 'institut-de-beaute',
    platform: 'google',
    family: 'beaute',
    name: 'Institut de beauté',
    h1: 'Plaque avis Google pour institut de beauté',
    where: 'dans votre institut',
    metaTitle: 'Plaque avis Google pour institut de beauté',
    metaDescription:
      'Plaque avis Google pour institut de beauté : NFC et QR code à l’accueil ou en cabine, vos clientes donnent leur avis après un soin. Sans abonnement, sans appli.',
    intro:
      'Dans un institut de beauté, la plaque avis Google permet à vos clientes de partager leur ressenti après un soin, sans chercher votre établissement sur Google. Elle fonctionne le mieux à l’accueil, au moment de régler et de reprendre rendez-vous, une fois la cliente rhabillée et son téléphone récupéré.',
    spots: [
      {
        title: 'Le comptoir d’accueil',
        text: 'C’est là que la cliente règle son soin et réserve le suivant. La plaque posée à côté du terminal de paiement s’inscrit dans ce passage obligé.',
      },
      {
        title: 'La coiffeuse de la cabine',
        text: 'Près du miroir où la cliente se recoiffe après un soin du visage, elle découvre la plaque au moment où elle constate l’effet du soin sur sa peau.',
      },
      {
        title: 'Le salon de repos',
        text: 'Si vous servez une boisson après les soins longs, une plaque sur la table basse laisse la cliente donner son avis à son rythme, sans aucune pression.',
      },
    ],
    moment:
      'Le meilleur moment arrive à la fin du soin, une fois la cliente détendue et de retour à l’accueil. Évitez de solliciter pendant une épilation ou un soin en cabine : attendez qu’elle ait retrouvé ses affaires et son téléphone, quand elle exprime spontanément sa satisfaction.',
    script:
      'Si le soin vous a plu, vous pouvez scanner cette plaque pour laisser votre avis sur Google, cela aide d’autres clientes à nous trouver.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question:
          'Mes clientes laissent leur téléphone au vestiaire pendant le soin : où placer la plaque ?',
        answer:
          'Placez la plaque principale à l’accueil, sur le chemin de la sortie. C’est le premier endroit où la cliente a de nouveau son téléphone en main.',
      },
      {
        question: 'Puis-je offrir un soin à une cliente qui laisse un avis ?',
        answer:
          'Non, les règles de Google interdisent les avis obtenus contre une contrepartie, même modeste. Une simple invitation au bon moment reste la seule approche autorisée.',
      },
      {
        question: 'Une plaque par cabine, est-ce utile ?',
        answer:
          'Cela dépend de votre organisation : si plusieurs esthéticiennes travaillent en parallèle, une plaque par cabine permet à chacune d’inviter ses clientes. Les packs de 2 et 5 plaques bénéficient respectivement de −10 % et −20 %.',
      },
    ],
  },
  {
    slug: 'onglerie',
    platform: 'google',
    family: 'beaute',
    name: 'Onglerie',
    h1: 'Plaque avis Google pour onglerie',
    where: 'dans votre onglerie',
    metaTitle: 'Plaque avis Google pour onglerie et bar à ongles',
    metaDescription:
      'Plaque avis Google pour prothésiste ongulaire et bar à ongles : NFC et QR code pour un avis client après la pose. Achat unique, sans abonnement, sans appli.',
    intro:
      'La plaque avis Google aide les prothésistes ongulaires et les bars à ongles à transformer une pose réussie en avis visible sur leur fiche Google. Elle est la plus efficace une fois les ongles secs ou catalysés, quand la cliente peut manipuler son téléphone sans risque pour sa manucure.',
    spots: [
      {
        title: 'Le poste de séchage ou la lampe UV',
        text: 'Pendant les dernières secondes de catalyse ou de séchage, la cliente admire sa pose. Une plaque à côté de la lampe lui servira dès qu’elle a les mains libres.',
      },
      {
        title: 'La caisse',
        text: 'Au moment de payer, les ongles sont prêts et la cliente a son téléphone en main : c’est l’emplacement le plus sûr pour un vernis classique.',
      },
      {
        title: 'Le présentoir des nuanciers',
        text: 'Là où les clientes choisissent leur couleur, la plaque rappelle aux habituées qu’elles peuvent partager leur avis lors du remplissage suivant.',
      },
    ],
    moment:
      'Attendez que la pose soit totalement terminée, après la catalyse du gel ou le séchage du vernis. La cliente regarde ses mains, prend souvent une photo : c’est le moment de lui proposer de laisser aussi un avis, pendant que le résultat la rend fière.',
    script:
      'Vos ongles sont prêts ; si vous aimez le résultat, vous pouvez approcher votre téléphone de la plaque pour me laisser un avis Google.',
    alsoRecommended: ['instagram', 'tiktok'],
    faq: [
      {
        question: 'Ma cliente porte un vernis encore frais : comment fait-elle ?',
        answer:
          'Proposez-lui la plaque à la caisse, une fois le vernis sec. Avec la puce NFC, il suffit d’approcher le haut du téléphone de la plaque, sans rien toucher d’autre.',
      },
      {
        question: 'Je pratique aussi à domicile, puis-je utiliser la plaque en déplacement ?',
        answer:
          'Oui. La plaque fonctionne sans batterie ni Wi-Fi : elle s’utilise partout où le téléphone de votre cliente capte le réseau.',
      },
      {
        question: 'Google ou Instagram : quelle plaque pour une onglerie ?',
        answer:
          'Google sert à rassurer les nouvelles clientes qui cherchent une onglerie près de chez elles ; Instagram et TikTok servent à montrer votre nail art. Les deux plaques se complètent bien.',
      },
    ],
  },
  {
    slug: 'spa',
    platform: 'google',
    family: 'beaute',
    name: 'Spa',
    h1: 'Plaque avis Google pour spa et centre de massage',
    where: 'dans votre spa',
    metaTitle: 'Plaque avis Google pour spa et centre de massage',
    metaDescription:
      'Plaque avis Google pour spa et centre de massage : NFC et QR code discrets à la sortie, pour un avis après le soin. Sans abonnement, sans appli, sans batterie.',
    intro:
      'Dans un spa ou un centre de massage, la plaque avis Google permet de recueillir l’avis de vos clients sans rompre l’atmosphère de détente. Placée à la sortie du parcours, à l’accueil ou dans l’espace tisanerie, elle s’adresse au client au moment où il retrouve son téléphone.',
    spots: [
      {
        title: 'L’espace tisanerie',
        text: 'Après le massage, le client prend le temps de boire une infusion. Une plaque discrète sur le plateau l’invite à partager son expérience sans qu’on ait à le solliciter.',
      },
      {
        title: 'Le comptoir de l’accueil',
        text: 'Au moment de rendre le peignoir ou de régler un supplément, le client repasse par l’accueil, téléphone en main : un emplacement naturel en fin de parcours.',
      },
      {
        title: 'La sortie des vestiaires',
        text: 'Le téléphone reste souvent au casier pendant le soin. Une plaque à la sortie des vestiaires est le premier support que le client voit une fois rhabillé.',
      },
    ],
    moment:
      'Laissez au client le temps de redescendre doucement après son soin, puis invitez-le lors de son passage à l’accueil. Solliciter un avis en cabine ou pendant le parcours bien-être casserait la détente, alors qu’à la sortie il en garde un souvenir précis et apaisé.',
    script:
      'J’espère que vous avez passé un bon moment ; si vous souhaitez partager votre expérience, il vous suffit de scanner cette plaque avec votre téléphone.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'Comment demander un avis sans briser l’ambiance du spa ?',
        answer:
          'Laissez la plaque faire le travail : posée dans l’espace détente ou à l’accueil, elle invite sans interrompre. Une phrase douce au moment du départ suffit ensuite.',
      },
      {
        question: 'Les clients venus avec un bon cadeau peuvent-ils laisser un avis ?',
        answer:
          'Oui, toute personne qui a profité d’un soin peut donner son avis sur votre fiche Google, qu’elle ait payé elle-même ou non. Ces clients découvrent souvent votre spa pour la première fois.',
      },
      {
        question: 'Puis-je faire pointer la plaque vers mes offres de bons cadeaux ?',
        answer:
          'Oui, vous pouvez modifier le lien gratuitement à tout moment, par exemple avant les fêtes, puis revenir à votre fiche d’avis Google ensuite.',
      },
    ],
  },
  {
    slug: 'tatoueur',
    platform: 'google',
    family: 'beaute',
    name: 'Tatoueur',
    h1: 'Plaque avis Google pour tatoueur',
    where: 'dans votre salon de tatouage',
    metaTitle: 'Plaque avis Google pour tatoueur et salon de tatouage',
    metaDescription:
      'Plaque avis Google pour salon de tatouage : NFC et QR code pour que vos clients partagent leur avis après la séance. Paiement unique, sans abonnement ni appli.',
    intro:
      'Pour un tatoueur, la plaque avis Google permet aux clients de raconter leur séance sur votre fiche, là où les futurs clients comparent les salons avant de prendre contact. Elle fonctionne le mieux au comptoir, quand le client règle et reçoit ses consignes de soin.',
    spots: [
      {
        title: 'Le comptoir des soins et du paiement',
        text: 'C’est là que vous expliquez les soins de cicatrisation et encaissez la séance. Le client a le téléphone en main et du temps devant lui.',
      },
      {
        title: 'Le miroir de découverte',
        text: 'Devant le miroir où le client découvre son tatouage pour la première fois, la plaque profite de l’émotion de ce moment.',
      },
      {
        title: 'La table des books et des flashs',
        text: 'Les clients qui reviennent pour une retouche ou un nouveau projet feuillettent vos books. Une plaque à côté leur rappelle de partager leur expérience passée.',
      },
    ],
    moment:
      'Proposez l’avis une fois le tatouage protégé et les consignes de soin données, lorsque le client a fini de le photographier. Pour une grosse pièce en plusieurs séances, la dernière session ou la retouche sont les meilleurs moments : le client peut juger le projet dans son ensemble.',
    script:
      'Si vous êtes content de votre pièce, vous pouvez scanner la plaque pour laisser un avis Google, et n’hésitez pas à y ajouter une photo une fois cicatrisé.',
    alsoRecommended: ['instagram', 'tiktok'],
    faq: [
      {
        question: 'Vaut-il mieux demander l’avis à la fin de la séance ou après cicatrisation ?',
        answer:
          'Les deux se défendent : en fin de séance, le client est porté par l’émotion ; à la retouche, il peut juger le résultat cicatrisé. La plaque sur le comptoir sert aux deux occasions.',
      },
      {
        question: 'Mes clients peuvent-ils ajouter une photo de leur tatouage à leur avis ?',
        answer:
          'Oui, Google permet d’ajouter des photos à un avis. Pour un salon de tatouage, ces images montrent concrètement votre style aux personnes qui découvrent votre fiche.',
      },
      {
        question: 'Puis-je faire pointer la plaque vers mon portfolio pendant une convention ?',
        answer:
          'Oui, le lien se change gratuitement à tout moment. Vous pouvez la diriger vers votre portfolio le temps d’un salon, puis la remettre sur votre fiche d’avis Google au retour.',
      },
    ],
  },
  {
    slug: 'boutique',
    platform: 'google',
    family: 'commerce',
    name: 'Boutique de vêtements',
    h1: 'Plaque avis Google pour boutique de vêtements',
    where: 'dans votre boutique',
    metaTitle: 'Plaque avis Google pour boutique de vêtements',
    metaDescription:
      'Plaque avis Google pour boutique de prêt-à-porter : NFC et QR code en caisse ou en cabine, vos clients donnent leur avis en un geste. Sans abonnement ni appli.',
    intro:
      'Dans une boutique de prêt-à-porter, la plaque avis Google permet à vos clients de saluer la qualité de vos conseils et de votre sélection en quelques secondes. Elle donne les meilleurs résultats à la caisse, pendant que vous pliez les articles et préparez le sac.',
    spots: [
      {
        title: 'La caisse, à côté des sacs',
        text: 'Pendant que vous emballez les vêtements, le client attend avec son téléphone : quelques secondes suffisent pour approcher l’appareil de la plaque.',
      },
      {
        title: 'Les cabines d’essayage',
        text: 'Le client y passe plusieurs minutes et y prend souvent des photos de ses tenues. Une plaque discrète près du miroir l’invite à parler de votre boutique.',
      },
      {
        title: 'Le comptoir des retraits et retouches',
        text: 'Les clients qui récupèrent une commande réservée ou une retouche reviennent satisfaits d’un service rendu : c’est un bon endroit pour une seconde plaque.',
      },
    ],
    moment:
      'Le bon moment est celui où le client vient de trouver la pièce qu’il cherchait, souvent grâce à votre conseil, et passe en caisse. Il associe sa satisfaction à votre accompagnement, ce qui donne des avis plus détaillés qu’un simple « belle boutique ».',
    script:
      'Si vous avez trouvé votre bonheur, cette plaque vous permet de nous laisser un avis sur Google en quelques secondes.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'Peut-on rediriger la plaque vers notre boutique en ligne pendant les soldes ?',
        answer:
          'Oui, le lien est modifiable gratuitement à tout moment : vous pouvez pointer vers votre e-shop pendant une opération, puis revenir à votre fiche d’avis Google ensuite.',
      },
      {
        question: 'Faut-il une plaque en cabine d’essayage en plus de la caisse ?',
        answer:
          'La caisse reste l’emplacement prioritaire. Une plaque en cabine est utile si vous avez plusieurs cabines et beaucoup de passage ; le pack de 2 plaques est alors à −10 %.',
      },
      {
        question: 'La plaque Instagram a-t-elle du sens pour une boutique de mode ?',
        answer:
          'Oui, la mode se partage beaucoup en images. Une plaque Google à la caisse pour les avis et une plaque Instagram en cabine pour les abonnés couvrent les deux usages.',
      },
    ],
  },
  {
    slug: 'fleuriste',
    platform: 'google',
    family: 'commerce',
    name: 'Fleuriste',
    h1: 'Plaque avis Google pour fleuriste',
    where: 'dans votre boutique',
    metaTitle: 'Plaque avis Google pour fleuriste : NFC et QR code',
    metaDescription:
      'Plaque avis Google pour fleuriste : NFC et QR code au comptoir, vos clients laissent un avis pendant la composition du bouquet. Achat unique, sans abonnement.',
    intro:
      'Chez un fleuriste, la plaque avis Google profite d’un moment rare en commerce : le client attend pendant que vous composez son bouquet. Posée sur l’établi de composition ou à la caisse, elle lui permet de laisser un avis pendant ces quelques minutes, sans application.',
    spots: [
      {
        title: 'L’établi de composition',
        text: 'Le client regarde son bouquet prendre forme sous ses yeux. Une plaque à proximité lui donne de quoi occuper ces minutes d’attente.',
      },
      {
        title: 'La caisse et l’emballage',
        text: 'Pendant que vous ajoutez le papier, le ruban et la carte, le client prépare son paiement : son téléphone est déjà à portée de main.',
      },
      {
        title: 'Le comptoir de retrait des commandes',
        text: 'Les clients qui viennent chercher une commande pour un anniversaire ou un mariage découvrent le résultat sur place, souvent avec enthousiasme.',
      },
    ],
    moment:
      'Invitez le client quand vous lui présentez le bouquet terminé, juste avant l’emballage. Sa réaction est immédiate et sincère, et il peut évoquer la composition et le conseil reçu. Pour les commandes de deuil, restez discret et laissez simplement la plaque visible.',
    script:
      'Voici votre bouquet ; s’il vous plaît, vous pouvez approcher votre téléphone de la plaque pour nous laisser un avis sur Google.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'Faut-il proposer un avis lors d’une commande pour des obsèques ?',
        answer:
          'Mieux vaut ne pas le demander de vive voix dans ces circonstances. La plaque reste visible sur le comptoir, et le client l’utilisera s’il le souhaite, plus tard ou lors d’une autre visite.',
      },
      {
        question:
          'La plaque est-elle utile pendant les périodes chargées comme la Saint-Valentin ?',
        answer:
          'Oui : quand la file d’attente s’allonge, vous n’avez pas le temps d’expliquer comment laisser un avis. Les clients scannent la plaque pendant qu’ils patientent.',
      },
      {
        question: 'Puis-je diriger la plaque vers ma page de commande en ligne ?',
        answer:
          'Oui, le lien se change gratuitement à tout moment, par exemple vers votre page de commande avant la fête des mères, puis à nouveau vers votre fiche d’avis Google.',
      },
    ],
  },
  {
    slug: 'opticien',
    platform: 'google',
    family: 'commerce',
    name: 'Opticien',
    h1: 'Plaque avis Google pour opticien',
    where: 'dans votre magasin d’optique',
    metaTitle: 'Plaque avis Google pour opticien : NFC et QR code',
    metaDescription:
      'Plaque avis Google pour opticien : NFC et QR code à la remise des lunettes, vos clients notent votre accueil et vos conseils. Sans abonnement, sans application.',
    intro:
      'La plaque avis Google permet aux clients de votre magasin d’optique de saluer votre accueil, vos conseils de montures et la qualité de l’ajustage. Elle fonctionne le mieux sur la table de remise des équipements, quand le client repart avec ses nouvelles lunettes.',
    spots: [
      {
        title: 'La table d’ajustage et de remise',
        text: 'C’est là que vous ajustez les branches et remettez l’équipement. Le client essaie ses lunettes, se regarde et repart satisfait : la plaque est à portée de main.',
      },
      {
        title: 'La caisse',
        text: 'Au moment du règlement, le client a son téléphone en main. Une plaque à côté du terminal touche aussi ceux qui sont venus pour un accessoire ou des lentilles.',
      },
      {
        title: 'Le comptoir des petites réparations',
        text: 'Une vis resserrée ou une plaquette changée en quelques minutes laisse souvent un bon souvenir. Le client attend sur place, au bon endroit pour scanner.',
      },
    ],
    moment:
      'Le meilleur moment est la remise des lunettes, une fois l’ajustage terminé et le client à l’aise avec sa nouvelle monture. Il a suivi tout le parcours, du choix de la monture à la livraison, et peut décrire l’ensemble du service reçu.',
    script:
      'Vos lunettes sont prêtes et bien ajustées ; si vous avez été satisfait de notre accompagnement, vous pouvez scanner la plaque pour nous laisser un avis Google.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Vaut-il mieux demander un avis au choix de la monture ou à la remise ?',
        answer:
          'À la remise. Lors du choix, le client n’a pas encore vu le résultat final ; à la livraison, il juge l’ensemble du service, des conseils à l’ajustage.',
      },
      {
        question: 'Un client venu pour un simple réglage peut-il laisser un avis ?',
        answer:
          'Oui, et ces services rapides donnent souvent des avis positifs sur votre disponibilité. La plaque permet de les recueillir sans prolonger l’échange.',
      },
      {
        question: 'La plaque peut-elle renvoyer vers la prise de rendez-vous du magasin ?',
        answer:
          'Oui, vous pouvez changer le lien gratuitement à tout moment pour pointer vers votre page de rendez-vous, puis revenir à votre fiche d’avis Google.',
      },
    ],
  },
  {
    slug: 'caviste',
    platform: 'google',
    family: 'commerce',
    name: 'Caviste',
    h1: 'Plaque avis Google pour caviste',
    where: 'dans votre cave',
    metaTitle: 'Plaque avis Google pour caviste et cave à vin',
    metaDescription:
      'Plaque avis Google pour caviste : NFC et QR code sur le comptoir de dégustation ou en caisse, pour des avis sur vos conseils. Paiement unique, sans abonnement.',
    intro:
      'Chez un caviste, la plaque avis Google permet aux clients de saluer ce qui fait la différence avec la grande distribution : le conseil et la sélection. Elle donne les meilleurs résultats sur le comptoir, après une recommandation réussie ou une dégustation.',
    spots: [
      {
        title: 'Le comptoir de dégustation',
        text: 'Lors d’une dégustation, les clients prennent leur temps et échangent avec vous. Une plaque posée à côté des verres s’intègre à ce moment convivial.',
      },
      {
        title: 'La caisse, près du papier cadeau',
        text: 'Pendant que vous emballez une bouteille à offrir, le client attend quelques instants : il a le temps d’approcher son téléphone de la plaque.',
      },
      {
        title: 'Le rayon des coups de cœur',
        text: 'À côté de la sélection du moment, la plaque rappelle aux habitués qu’ils peuvent partager leur avis sur vos recommandations.',
      },
    ],
    moment:
      'Le moment le plus fort est souvent le retour du client, quand il vous dit que la bouteille conseillée a plu à ses invités. Sa satisfaction est confirmée par l’expérience : c’est l’instant idéal pour l’inviter à le dire aussi sur Google.',
    script:
      'Si la bouteille vous a plu et que vous voulez le partager, cette plaque vous mène directement à notre page d’avis Google.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Puis-je offrir un verre ou une remise en échange d’un avis ?',
        answer:
          'Non, Google n’autorise aucun avis obtenu contre une contrepartie. Invitez simplement les clients contents de vos conseils : ce sont eux qui écrivent les avis les plus utiles.',
      },
      {
        question: 'La plaque est-elle utile lors de mes soirées de dégustation ?',
        answer:
          'Oui, les participants sont détendus et ont le temps d’échanger. Une plaque sur le comptoir leur permet de laisser un avis sans interrompre la soirée.',
      },
      {
        question: 'Peut-on faire pointer la plaque vers l’inscription à nos dégustations ?',
        answer:
          'Oui, le lien se modifie gratuitement à tout moment. Vous pouvez la diriger vers votre page d’inscription quelques semaines, puis revenir à votre fiche d’avis Google.',
      },
    ],
  },
  {
    slug: 'epicerie',
    platform: 'google',
    family: 'commerce',
    name: 'Épicerie',
    h1: 'Plaque avis Google pour épicerie',
    where: 'dans votre épicerie',
    metaTitle: 'Plaque avis Google pour épicerie fine et de quartier',
    metaDescription:
      'Plaque avis Google pour épicerie fine ou de quartier : NFC et QR code en caisse ou au rayon coupe, vos clients donnent leur avis en un geste. Sans abonnement.',
    intro:
      'Pour une épicerie fine ou une épicerie de quartier, la plaque avis Google transforme la fidélité des habitués en avis visibles par les nouveaux venus du quartier. Elle fonctionne le mieux à la caisse et au comptoir de coupe, là où le client attend quelques instants.',
    spots: [
      {
        title: 'La caisse',
        text: 'Point de passage de tous les clients, la caisse est l’emplacement prioritaire. La plaque se scanne pendant que vous enregistrez les articles.',
      },
      {
        title: 'Le comptoir fromage et charcuterie',
        text: 'Pendant la coupe et la pesée, le client patiente et goûte parfois ce que vous lui proposez : le moment se prête bien à un avis.',
      },
      {
        title: 'Le rayon des coffrets cadeaux',
        text: 'Les clients qui composent un panier garni ou un coffret passent du temps à choisir et apprécient l’accompagnement. Une plaque à côté prolonge naturellement ce moment.',
      },
    ],
    moment:
      'Invitez le client après un conseil personnalisé, quand il découvre un produit sur votre recommandation ou revient vous dire qu’il l’a aimé. Avec les habitués, profitez d’un moment calme en caisse plutôt que de l’heure d’affluence du soir.',
    script:
      'Merci d’être fidèle à la boutique ; si vous avez un instant, approchez votre téléphone de la plaque pour nous laisser un avis sur Google, ça aide les nouveaux voisins à nous découvrir.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Mes clients sont surtout des habitués : la plaque est-elle utile ?',
        answer:
          'Oui, ce sont souvent eux qui écrivent les avis les plus détaillés, parce qu’ils connaissent vos produits. Leurs avis aident les personnes qui arrivent dans le quartier à vous choisir.',
      },
      {
        question: 'Puis-je renvoyer vers la commande de paniers garnis pendant les fêtes ?',
        answer:
          'Oui, le lien de la plaque se change gratuitement quand vous le voulez : vers votre page de commande en décembre, puis à nouveau vers votre fiche d’avis Google.',
      },
      {
        question: 'Mes clients peu à l’aise avec le smartphone sauront-ils l’utiliser ?',
        answer:
          'La plaque ne demande aucune application : il suffit d’ouvrir l’appareil photo pour lire le QR code, ou d’approcher le téléphone pour la puce NFC. Vous pouvez leur montrer le geste une fois.',
      },
    ],
  },
  {
    slug: 'librairie',
    platform: 'google',
    family: 'commerce',
    name: 'Librairie',
    h1: 'Plaque avis Google pour librairie',
    where: 'dans votre librairie',
    metaTitle: 'Plaque avis Google pour librairie indépendante',
    metaDescription:
      'Plaque avis Google pour librairie : NFC et QR code en caisse ou au retrait des commandes, vos lecteurs donnent leur avis en un geste. Sans abonnement ni appli.',
    intro:
      'Dans une librairie, la plaque avis Google permet à vos lecteurs de saluer vos conseils et l’atmosphère de la boutique, ce qui vous distingue des ventes en ligne. Elle est la plus efficace à la caisse et au comptoir de retrait des commandes.',
    spots: [
      {
        title: 'La caisse',
        text: 'Pendant que vous emballez un livre à offrir ou glissez un marque-page, le lecteur attend : la plaque est juste à côté de lui.',
      },
      {
        title: 'Le comptoir des commandes',
        text: 'Le client qui vient chercher un livre commandé repart avec un service rendu en quelques jours. C’est un moment propice pour l’inviter à en parler.',
      },
      {
        title: 'La table des coups de cœur',
        text: 'Près de vos recommandations manuscrites, la plaque invite les lecteurs à partager leur avis sur la librairie et la qualité de vos conseils.',
      },
    ],
    moment:
      'Le meilleur moment est le retour d’un lecteur qui a aimé un livre que vous lui aviez conseillé. Les rencontres et séances de dédicace s’y prêtent aussi : le public est nombreux et attaché au lieu.',
    script:
      'Si vous aimez venir chez nous, vous pouvez scanner la plaque pour laisser un avis Google ; c’est précieux pour une librairie indépendante.',
    alsoRecommended: ['instagram'],
    faq: [
      {
        question: 'Est-ce utile de placer la plaque pendant une séance de dédicace ?',
        answer:
          'Oui, les lecteurs patientent dans la file avant de rencontrer l’auteur. Une plaque sur la table de vente leur permet de laisser un avis pendant l’attente.',
      },
      {
        question: 'Puis-je faire pointer la plaque vers notre agenda de rencontres ?',
        answer:
          'Oui, le lien se change gratuitement à tout moment. Vous pouvez l’orienter vers votre programme d’événements, puis le remettre sur votre fiche d’avis Google.',
      },
      {
        question: 'Où placer la plaque dans une petite librairie ?',
        answer:
          'Si vous n’en installez qu’une, choisissez la caisse : c’est le seul endroit par lequel passent tous les clients, y compris ceux qui ne demandent pas de conseil.',
      },
    ],
  },
  {
    slug: 'cordonnerie',
    platform: 'google',
    family: 'commerce',
    name: 'Cordonnerie',
    h1: 'Plaque avis Google pour cordonnerie',
    where: 'dans votre cordonnerie',
    metaTitle: 'Plaque avis Google pour cordonnier et clé minute',
    metaDescription:
      'Plaque avis Google pour cordonnerie et clé minute : NFC et QR code au comptoir, vos clients laissent un avis pendant la reproduction d’une clé. Sans abonnement.',
    intro:
      'Pour un cordonnier ou un service clé minute, la plaque avis Google permet aux clients de saluer un travail souvent réalisé en quelques minutes, sous leurs yeux. Elle fonctionne le mieux sur le comptoir, pendant la reproduction d’une clé ou au retrait d’une réparation.',
    spots: [
      {
        title: 'Le comptoir de retrait',
        text: 'Quand le client récupère ses chaussures ressemelées ou son sac réparé, il constate le résultat sur place. La plaque à côté de lui transforme cette satisfaction en avis.',
      },
      {
        title: 'Près de la machine à clés',
        text: 'La reproduction d’une clé prend quelques minutes pendant lesquelles le client attend sans rien faire : le moment idéal pour scanner la plaque.',
      },
      {
        title: 'Le présentoir des produits d’entretien',
        text: 'À côté des cirages et des lacets, la plaque touche les clients venus pour un petit achat, qui n’ont pas eu besoin de vos services de réparation.',
      },
    ],
    moment:
      'Invitez le client au retrait, au moment où il découvre ses chaussures remises en état ou teste sa nouvelle clé. À la dépose, il n’a encore rien vu de votre travail ; au retrait, il peut juger la qualité de la réparation et le respect du délai.',
    script:
      'Voilà, c’est comme neuf ; si vous êtes satisfait, il vous suffit d’approcher votre téléphone de cette plaque pour nous laisser un avis Google.',
    alsoRecommended: [],
    faq: [
      {
        question: 'Faut-il demander un avis à la dépose ou au retrait ?',
        answer:
          'Au retrait. Le client voit alors le travail fini et peut parler concrètement de la réparation, ce qui rend son avis plus utile aux futurs clients.',
      },
      {
        question:
          'Mes services sont variés : clés, talons, gravure… une seule plaque suffit-elle ?',
        answer:
          'Oui, une seule plaque sur le comptoir mène à votre fiche d’avis Google, quel que soit le service rendu. Chaque client décrit ensuite librement ce que vous avez fait pour lui.',
      },
      {
        question:
          'La plaque fonctionne-t-elle dans une petite boutique de centre commercial sans Wi-Fi ?',
        answer:
          'Oui, elle n’a besoin ni de Wi-Fi ni de batterie. Le téléphone du client utilise sa propre connexion pour ouvrir votre page d’avis.',
      },
    ],
  },
]
