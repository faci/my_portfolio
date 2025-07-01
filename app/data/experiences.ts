import { Experience } from '@/app/lib/types/experience'

export const experiences: Experience[] = [
  {
    id: 0,
    title: 'Avasport',
    subtitle: 'Freelance (php symfony, Vuejs)',
    cover: '/ava_sport_logo.jpeg',
    description: "J’ai accompagné Avasport, un SaaS dédié aux professeurs d’EPS, dans l’évolution de sa plateforme pédagogique. Mon rôle a été à la fois stratégique et opérationnel, allant de la conception fonctionnelle au développement.",
    rex: "Cette mission m’a permis de contribuer à une solution concrète au service de l’éducation, avec une forte autonomie et un vrai impact produit.",
    mission: "<ul><li> Mise en place de la gestion des élèves dans les groupes existants</li> <br /> \
      <li> Ajout de la gestion des compétences individuelles par élève, avec validation par niveaux</li> <br /> \
      <li> Conception d’un système flexible de compétences : possibilité d’utiliser des compétences génériques (créées depuis le backoffice) ou des compétences spécifiques à chaque groupe</li> <br /> \
      <li> Conception et développement de la roadmap produit en collaboration avec le client</li> <br /> \
      <li> Création et évolution du modèle de données pour supporter les nouvelles fonctionnalités</li> <br /> \
      <li> Intégration dans le backoffice d’un module complet de gestion des compétences (ajout, édition, suppression)</li> <br /> \
      <li> Design et développement full stack (front & back)</li></ul>",
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
    description: "Skello est une Scale Up, qui accompagne les entreprises de terrain en développent une solution SAAS pour toute la gestion RH de l'entreprise, allant de la création de planning à la gestion des paies.",
    rex: "Chez Skello, j’ai plongé dans un environnement tech exigeant et stimulant, où j’ai découvert les microservices, exploré le serverless, et passé plusieurs certifications pour monter en compétence. \
      Mais ce que je retiens surtout, ce sont les équipes : bienveillantes, passionnées, et toujours prêtes à partager. Une expérience aussi formatrice que humaine.",
    mission: "Mes principales contributions ont été les suivantes : <br/>\
      <ul><li><b>Mise en place d'un Design System :</b> Conception et implémentation d'un design système basé sur Vue.js, en migrant des composants clés tels que les menus déroulants, boutons, champs de saisie, et la typographie. Création d'un Storybook pour aligner les équipes produit et design, garantissant ainsi une uniformité. Enfin, direction d'une équipe de 4 développeurs pour intégrer ce système de manière fluide, en minimisant les risques de régression.</li> \
      <ul><li><b>Microservice communication :</b> Développement d'un microservice pour la gestion des emails, SMS et notifications push en utilisant AWS SQS et Lambdas, le tout surveillé via CloudWatch. Construction d'une API sécurisée pour les SMS via API Gateway, et supervision de la migration en utilisant des feature flags afin d'assurer une transition en douceur avec des sessions de QA hebdomadaires.</li> \
      <ul><li><b>Microservice de planification de la charge de travail :</b> Création d'une fonctionnalité de prédiction de la charge de travail pour les managers, intégrant ApexCharts pour la visualisation des données et un popover personnalisé avec Popper.js pour fournir des informations détaillées. Déploiement d'un backend sans serveur avec API Gateway, Lambdas, DynamoDB et SQS pour la gestion des données et le basculement en cas de panne.</li> \
      <ul><li><b>Synchronisation de données en fan-out :</b> Mise en place d'une architecture fan-out avec SNS et SQS pour la synchronisation des données en temps réel entre les microservices, garantissant ainsi la cohérence des bases de données.</li>",
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
    description: "Je suis partie d'un constat simple : aujourd'hui, pour percer en tant qu'artiste musical, il faut être partout, tout le temps. Créer, poster, performer… et jongler avec les algorithmes des réseaux sociaux. Beaucoup de talents restent dans l'ombre, non pas par manque de qualité, mais par manque de visibilité. C'est de là qu'est née Nohyia : une application mobile pensée pour mettre en lumière les artistes émergents, à travers des extraits musicaux de 30 secondes, géolocalisés. Un format court, authentique, pensé pour l'écoute locale et la découverte. Je suis partie d'un constat simple : aujourd'hui, pour percer en tant qu'artiste musical, il faut être partout, tout le temps. Créer, poster, performer… et jongler avec les algorithmes des réseaux sociaux. Beaucoup de talents restent dans l'ombre, non pas par manque de qualité, mais par manque de visibilité. C'est de là qu'est née Nohyia : une application mobile pensée pour mettre en lumière les artistes émergents, à travers des extraits musicaux de 30 secondes, géolocalisés. Un format court, authentique, pensé pour l'écoute locale et la découverte. ",
    rex: "Nohyia, c’est un projet tech, mais surtout une aventure humaine : celle de créer un outil qui respecte le rythme des artistes, qui valorise leur univers, et qui leur offre une scène à leur mesure.",
    mission: "J’ai porté ce projet de A à Z : \
      Conception et développement de l’application mobile en Flutter \
      Création de l’identité de marque (logo, ligne graphique, ton éditorial) \
      Développement du site vitrine, pour expliquer la vision et embarquer les premiers utilisateurs \
      Prospection terrain et lancement d’une bêta, avec écoute active des retours artistes \
      Itérations produit rapides, pour affiner l’expérience et coller aux vrais besoins",
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
    subtitle: 'Developpeur web',
    cover: '/prestakids_logo.jpg',
    description: "Presta’Kids est née d’un besoin simple mais essentiel : permettre aux parents de profiter pleinement de leurs événements (mariage, baptême, anniversaire…) en confiant leurs enfants à des professionnels de confiance. L’objectif du site était double : valoriser l’univers chaleureux et rassurant de l’agence, et simplifier la prise de contact avec les familles. \
          J’ai accompagné la fondatrice dans la structuration de son offre en ligne, pour créer un site clair, esthétique et efficace, centré sur la prise de devis.",
    rex: "Presta’Kids, c’est un projet où le digital est mis au service du concret : créer un site simple, professionnel, qui inspire confiance aux parents dès la première visite. En partant d’une feuille blanche, j’ai structuré l’information, imaginé une identité visuelle douce et accueillante, et conçu une interface fluide, intuitive et responsive. L’objectif : offrir à la fondatrice un vrai outil de prospection, qu’elle puisse utiliser dès la première prise de contact client.",
    mission: "J’ai pris en charge le projet de A à Z : \
      Analyse de la concurrence & cadrage des besoins avec la fondatrice \
      Conception des maquettes sur Figma \
      Développement du site vitrine en responsive design \
      Intégration d’un formulaire de contact pour la demande de devis \
      Mise en place d’un SEO simple et efficace pour améliorer la visibilité locale",
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
    subtitle: 'Developpeur web',
    cover: '/french_tech_logo.jpeg',
    description: "La French Tech Méditerranée avait besoin d’un outil centralisé pour gérer ses événements, vendre des billets en ligne, publier du contenu et fluidifier l’organisation interne. Le défi : concevoir une application SaaS robuste, intuitive, et accessible, à destination de l’écosystème tech local. J’ai participé à la conception et au développement complet de cette plateforme, en étroite collaboration avec l’équipe projet.",
    rex: "Ce projet alliait des enjeux techniques concrets (paiement, gestion de contenu, sécurité des transactions) à une forte exigence UX. J’ai mis en place un système de paiement fiable via Stripe, un backoffice personnalisé pour l’équipe French Tech, ainsi qu’une interface responsive agréable à utiliser côté utilisateur. Grâce à une architecture solide (TypeScript, Express.js, TSOA côté back, Vue.js et Vuex côté front), la plateforme est devenue un outil clé dans l’organisation des événements et la gestion de la communauté.",
    mission: "Ma mission a couvert l’ensemble du cycle de développement : \
      Développement d’une application SaaS responsive en Vue.js, avec Vuex pour la gestion d’état \
      Conception de l’API backend en TypeScript avec Express.js et TSOA, pour une documentation claire et une architecture scalable \
      Intégration de Stripe pour la vente de billets, avec gestion des paiements et des stocks en temps réel \
      Création d’un backoffice sur-mesure pour permettre à l’équipe d’ajouter des événements, gérer les tarifs et publier du contenu \
      Collaboration avec l’équipe pour assurer des itérations rapides et une prise en main fluide de l’outil",
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