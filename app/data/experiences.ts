import { Experience } from '@/app/lib/types/experience'

export const experiences: Experience[] = [
  {
    id: 0,
    title: 'Avasport',
    subtitle: 'Freelance (php symfony, Vuejs)',
    cover: '/ava_sport_logo.jpeg',
    description: "<b>💻 Développement et évolution d’un SaaS éducatif</b>\
      <span>J’ai accompagné Avasport, une plateforme SaaS dédiée aux enseignants d’EPS, dans l’évolution de son application web.</span> \
      <span>Mon rôle a été à la fois stratégique et opérationnel, de la conception fonctionnelle jusqu’au développement full stack des nouvelles fonctionnalités.</span>",
    rex: "Cette mission m’a permis de contribuer à une solution concrète au service de l’éducation, avec une forte autonomie et un vrai impact produit.",
    mission: "<b>🔧 Ma mission sur ce projet</b> \
      <ul><li>🔄 Mise en place de la gestion des élèves dans les groupes existants</li> \
      <li>🎯 Ajout d’un système de compétences individuelles par élève, avec validation par niveaux</li> \
      <li>🧩 Conception d’un système flexible de gestion des compétences, permettant : \
        <ul><li>l’utilisation de compétences génériques (créées depuis le backoffice)</li> \
        <li>ou spécifiques à chaque groupe</li></ul> \
      </li> \
      <li>🗺️ Définition et développement de la roadmap produit, en collaboration directe avec le client</li> \
      <li>🧱 Création et évolution du modèle de données pour supporter ces nouvelles logiques métiers</li> \
      <li>🛠️ Intégration d’un module complet dans le backoffice : gestion des compétences (ajout, édition, suppression)</li> \
      <li>🧑‍💻 Développement full stack (front-end & back-end)</li></ul> \
      <b>✅ Résultats & retours</b>\
      <ul><li>Un module de compétences plus flexible, parfaitement intégré aux usages métiers des enseignants</li>\
      <li>Une interface de gestion plus intuitive, facilitant le quotidien des utilisateurs</li> \
      <li>Une roadmap claire, structurée autour des vrais besoins terrain</li></ul>\
      ",
    type: 'Freelance',
    duration: '3 mois',
    website: 'https://www.ava-sport.fr/',
    skills: [
      '/symfony_logo.png',
      '/vuejs_logo.png',
      '/docker_logo.webp',
      '/typescript_logo.png',
    ],
    screenShot: '/screen_shots/ava-sport_competence.png',
    screenShot1: '/screen_shots/ava-sport_login.png',
    screenShot2: '/screen_shots/ava-sport_menu.png',
    isMobile: false
  },
  {
    id: 1,
    title: 'Skello',
    subtitle: 'CDI (ruby on rails, Vuejs, AWS)',
    cover: '/skello_logo.png',
    description: "<b>🏢 Scale-up RH – SaaS de gestion des équipes terrain</b> \
      <span>Skello est une scale-up qui propose une solution SaaS complète pour la gestion RH des entreprises terrain (planning, paie, communication interne, etc.).</span>  \
      <span>J’ai rejoint l’équipe tech pour renforcer la cohérence produit, améliorer l’expérience développeur et participer à la mise en place d’architectures scalables.</span>",
    rex: "Chez Skello, j’ai plongé dans un environnement tech exigeant et stimulant, où j’ai découvert les microservices, exploré le serverless, et passé plusieurs certifications pour monter en compétence. \
      Mais ce que je retiens surtout, ce sont les équipes : bienveillantes, passionnées, et toujours prêtes à partager. Une expérience aussi formatrice que humaine.",
    mission: "<b>🔧 Ma mission sur ce projet</b>  \
      <b>🧱 Mise en place d’un Design System unifié</b>  \
      <ul><li>Conception et développement d’un design system basé sur Vue.js</li> \
      <li>Migration de composants clés : menus déroulants, boutons, champs de saisie, typographie</li> \
      <li>Création d’un Storybook pour aligner les équipes produit et design</li> \
      <li>Coordination d’une équipe de 4 développeurs pour intégrer ce système de manière fluide, avec un risque de régression minimal</li></ul> \
      <b>📬 Microservice de communication interne</b>  \
      <ul><li>Développement d’un microservice dédié à la gestion des emails, SMS et notifications push</li> \
      <li>Stack AWS : SQS, Lambda, API Gateway, CloudWatch</li> \
      <li>Mise en place d’un système de feature flags pour assurer une migration progressive et sécurisée</li> \
      <li>Animation de sessions QA hebdo pour garantir la stabilité</li></ul> \
      <b>📊 Module de planification intelligente</b>  \
      <ul><li>Création d’une fonctionnalité de prédiction de charge de travail, pensée pour les managers terrain</li> \
      <li>Visualisation des données via ApexCharts, enrichies avec des popovers personnalisés (Popper.js)</li> \
      <li>Backend serverless : API Gateway, Lambda, DynamoDB, SQS</li></ul> \
      <b>🔄 Architecture fan-out pour la synchronisation des données</b>  \
      <ul><li>Mise en place d’une architecture de synchronisation en temps réel entre microservices</li> \
      <li>Utilisation de SNS + SQS pour garantir la cohérence des données et la résilience des flux</li></ul> \
      <b>✅ Résultats & retours</b> \
      <ul><li>Un design system scalable et adopté par les équipes produit & tech</li>\
      <li>Des microservices robustes, bien monitorés, avec une transition sans régression</li> \
      <li>Une expérience managériale enrichie grâce à la visualisation de données en temps réel</li>\
      <li>Une architecture distribuée fiable, capable de suivre la croissance de la plateforme</li></ul> \
    ",
    type: 'CDI',
    duration: '3 ans et 3 mois',
    website: 'https://skello.io',
    skills: [
      '/aws_logo.png',
      '/typescript_logo.png',
      '/vuejs_logo.png',
      '/ruby_logo.png',
    ],
    screenShot: '/screen_shots/skello_blue.jpeg',
    screenShot1: '/screen_shots/skello_main.jpg',
    screenShot2: '/screen_shots/skello_yellow.jpeg',
    isMobile: false
  },
  {
    id: 2,
    title: 'Nohyia',
    subtitle: 'Entrepreneur (Flutter, Firebase)',
    cover: '/nohyia_logo.png',
    description: "<b>📱 Développement d’une application mobile Flutter + stratégie produit \
      <span>J’ai conçu et développé Nohyia, une application mobile destinée aux artistes émergents qui souhaitent gagner en visibilité en partageant des extraits musicaux géolocalisés.</span>",
    rex: "Nohyia, c’est un projet tech, mais surtout une aventure humaine : celle de créer un outil qui respecte le rythme des artistes, qui valorise leur univers, et qui leur offre une scène à leur mesure.",
    mission: "<b>🔧 Ma mission sur ce projet</b>  \
      <ul><li>Développement complet de l’application mobile en Flutter (iOS + Android)</li> \
      <li>Création de l’identité de marque : logo, ligne graphique, ton éditorial</li> \
      <li>Mise en place d’un backend scalable avec Firebase (auth, stockage, base de données temps réel)</li> \
      <li>Développement du site vitrine (VueJs) pour expliquer la vision produit et convertir les premiers utilisateurs</li> \
      <li>Lancement d’une bêta test avec des artistes locaux, via de la prospection terrain</li> \
      <li>Recueil de feedbacks utilisateurs + itérations rapides pour améliorer l’expérience</li></ul> \
      \
      <b>✅ Résultats & retours</b>\
      <ul><li>Une première communauté d’utilisateurs engagés en France</li> \
      <li>Des retours très positifs sur l’UX, la simplicité de l’interface et la pertinence de l’outil pour les artistes indépendants </li>\
      <li>Une base solide pour continuer à itérer et scaler l’application</li></ul>",
    type: 'Entrepreneur',
    duration: '1 an',
    website: 'https://nohyia.com',
    skills: [
      '/flutter_logo.png',
      '/firebas_logo.webp',
    ],
    screenShot: '/screen_shots/nohyia_profile.png',
    screenShot1: '/screen_shots/nohyia_main.png',
    screenShot2: '/screen_shots/nohyia_create.png',
    isMobile: true
  },
  {
    id: 3,
    title: "Prestakid's",
    subtitle: 'Freelance',
    cover: '/prestakids_logo.jpg',
    description: "<b>🎯 Création d’un site orienté conversion & visibilité locale</b> \
      <span>Presta’Kids est une agence qui propose un service essentiel : permettre aux parents de profiter pleinement de leurs événements (mariages, anniversaires, baptêmes...) en confiant leurs enfants à des professionnels de confiance. </span> \
      <span>L’objectif du site était double : valoriser l’univers rassurant et chaleureux de l’agence, et générer des demandes de devis rapidement et simplement. </span> \
      <span>J’ai accompagné la fondatrice sur l’ensemble du projet, de la stratégie à la réalisation technique.</span> \
    ",
    rex: "PrestaKid's, c’est un projet où le digital est mis au service du concret : créer un site simple, professionnel, qui inspire confiance aux parents dès la première visite. En partant d’une feuille blanche, j’ai structuré l’information, imaginé une identité visuelle douce et accueillante, et conçu une interface fluide, intuitive et responsive. L’objectif : offrir à la fondatrice un vrai outil de prospection, qu’elle puisse utiliser dès la première prise de contact client.",
    mission: "<b>🔧 Ma mission sur ce projet</b>  \
      <ul><li>🔍 Analyse de la concurrence et cadrage des besoins avec la fondatrice</li> \
      <li>🧭 Aide à la structuration de l’offre pour clarifier la proposition de valeur</li> \
      <li>🎨 Conception des maquettes sur Figma, avec un univers visuel doux et rassurant</li> \
      <li>💻 Développement du site vitrine responsive (mobile + desktop)</li> \
      <li>✉️ Intégration d’un formulaire de contact optimisé pour la demande de devis</li> \
      <li>🔍 Mise en place d’un SEO local simple et efficace pour améliorer la visibilité sur les recherches régionales</li></ul> \
      <b>✅ Résultats & retours</b> \
      <ul><li>Un site vitrine esthétique, clair et professionnel, aligné avec l’image de marque de Presta’Kids</li> \
      <li>Un taux de conversion élevé dès les premières semaines grâce à un tunnel de demande de devis fluide</li>\
      <li>Une visibilité locale accrue via des optimisations SEO sur des mots-clés comme “garde enfants mariage [ville]“</li></ul>",
    type: 'Freelance',
    duration: '1 mois',
    website: 'https://www.prestakids.fr/',
    skills: [],
    screenShot: '/screen_shots/prestakids_services.png',
    screenShot1: '/screen_shots/prestakids_main.png',
    screenShot2: '/screen_shots/prestakids_activities.png',
    isMobile: false
  },
  {
    id: 4,
    title: "French tech mediteranné",
    subtitle: 'Freelance',
    cover: '/french_tech_logo.jpeg',
    description: "<b>🎟️ Création d’un outil tout-en-un pour l’écosystème tech local</b> \
      <span>La French Tech Méditerranée avait besoin d’une plateforme unique pour organiser ses événements, gérer les inscriptions et la billetterie, publier du contenu, et fluidifier la gestion interne. </span> \
      <span>Le défi : concevoir un outil SaaS robuste et intuitif, accessible à toute la communauté tech locale.</span> \
      <span>J’ai participé à l’ensemble du projet, de la conception fonctionnelle au développement full stack, en collaboration étroite avec l’équipe.</span> \
    ",
    rex: "Ce projet alliait des enjeux techniques concrets (paiement, gestion de contenu, sécurité des transactions) à une forte exigence UX. J’ai mis en place un système de paiement fiable via Stripe, un backoffice personnalisé pour l’équipe French Tech, ainsi qu’une interface responsive agréable à utiliser côté utilisateur. Grâce à une architecture solide (TypeScript, Express.js, TSOA côté back, Vue.js et Vuex côté front), la plateforme est devenue un outil clé dans l’organisation des événements et la gestion de la communauté.",
    mission: "<b>🔧 Ma mission sur ce projet</b>  \
      <ul><li>💻 Développement d’une application SaaS responsive en Vue.js, avec Vuex pour la gestion d’état</li> \
      <li>🤝 Collaboration directe avec l’équipe projet pour assurer des itérations rapides et une prise en main fluide de la plateforme</li> \
      <li>🧩 Conception d’une API backend scalable en TypeScript, avec Express.js et TSOA pour une documentation automatique claire</li> \
      <li>💳 Intégration de Stripe pour la vente de billets en ligne, avec gestion des paiements et du stock en temps réel</li> \
      <li>🛠️ Développement d’un backoffice sur-mesure pour : \
        <ul><li>créer et modifier des événements</li> \
        <li>gérer les tarifs et les stocks</li> \
        <li>publier du contenu éditorial</li></ul> \
      </li></ul> \
      <b>✅ Résultats & retours</b>\
      <ul><li>Une plateforme tout-en-un permettant de centraliser la gestion des événements tech</li> \
      <li>Un outil SaaS scalable et maintenable, avec une UX claire pour les équipes comme pour les utilisateurs</li>\
      <li>Une expérience de vente fluide (paiement, inscriptions, gestion de stock) intégrée en temps réel</li></ul>",
    type: 'Freelance',
    duration: '3 mois',
    website: 'https://www.lafrenchtechmed.com/',
    skills: [],
    screenShot: '/screen_shots/french_tech_blog.png',
    screenShot1: '/screen_shots/french_tech_main.png',
    screenShot2: '/screen_shots/french_tech_page.png',
    isMobile: false
  },
];

export function getExperience(id: number): Experience | null {
  const experience: Experience | undefined = experiences.find(experience => experience.id == id);
  if (!experience) return null;

  return experience;
}

export function getOtherExperiences(id: number): Experience[] {
  return experiences.filter(experience => experience.id !== Number(id));
}