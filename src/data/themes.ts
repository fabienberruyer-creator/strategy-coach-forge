import {
  Target, Users, Shield, BarChart3, Brain, Lightbulb, Mic, Scale, Globe, Award, BookOpen
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ThemeData {
  slug: string;
  icon: LucideIcon;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  paragraphs: string[];
  keyPoints: string[];
  formats: string[];
}

export const themesData: ThemeData[] = [
  {
    slug: "leadership-contemporain",
    icon: Target,
    label: "Leadership contemporain",
    title: "Leadership contemporain",
    subtitle: "Repenser le leadership à l'aune des transformations actuelles",
    description: "Le leadership ne se décrète pas : il se construit, se structure et s'adapte. Dans un monde en mutation permanente, les modèles traditionnels d'autorité ne suffisent plus.",
    paragraphs: [
      "Le leadership contemporain exige une capacité à naviguer dans la complexité, à fédérer des équipes diverses et à prendre des décisions dans l'incertitude. Il ne s'agit plus d'imposer une vision, mais de créer les conditions pour qu'une intelligence collective émerge.",
      "Nous abordons le leadership comme une discipline exigeante qui combine lucidité stratégique, intelligence émotionnelle et capacité d'exécution. Chaque intervention est conçue pour provoquer une prise de conscience et initier un changement durable dans les pratiques managériales.",
    ],
    keyPoints: [
      "Les nouveaux paradigmes du leadership",
      "Leadership situationnel et adaptatif",
      "Posture du dirigeant face à l'incertitude",
      "Construire et incarner une vision",
      "Du manager au leader : trajectoire et compétences",
    ],
    formats: ["Conférence", "Formation", "Masterclass", "Séminaire"],
  },
  {
    slug: "management-equipes",
    icon: Users,
    label: "Management des équipes",
    title: "Management des équipes",
    subtitle: "Structurer, mobiliser et faire grandir ses équipes",
    description: "Manager une équipe ne se résume pas à distribuer des tâches et contrôler des résultats. C'est un exercice quotidien de responsabilité, de communication et de prise de décision.",
    paragraphs: [
      "Le management des équipes est au cœur de la performance organisationnelle. Une équipe bien managée n'est pas seulement productive : elle est engagée, résiliente et capable de s'adapter aux changements.",
      "Nous travaillons sur les fondamentaux du management opérationnel : fixer des objectifs clairs, donner du feedback constructif, gérer les conflits, développer l'autonomie et créer un cadre de travail propice à la performance collective.",
    ],
    keyPoints: [
      "Les fondamentaux du management d'équipe",
      "Feedback, reconnaissance et gestion des conflits",
      "Développer l'autonomie et la responsabilisation",
      "Management hybride et à distance",
      "Cohésion d'équipe et dynamiques collectives",
    ],
    formats: ["Formation", "Atelier stratégique", "Masterclass"],
  },
  {
    slug: "strategie-decision",
    icon: Shield,
    label: "Stratégie et prise de décision",
    title: "Stratégie et prise de décision",
    subtitle: "Décider avec lucidité dans un environnement complexe",
    description: "La stratégie n'est pas un exercice théorique réservé aux consultants. C'est la capacité à poser un diagnostic lucide, à arbitrer entre des options et à engager une organisation dans une direction claire.",
    paragraphs: [
      "La prise de décision stratégique est l'un des actes les plus engageants du dirigeant. Elle implique de traiter l'information avec rigueur, de gérer l'incertitude et d'assumer la responsabilité de ses choix.",
      "Nous abordons la stratégie de manière pragmatique : diagnostic de situation, analyse des forces en présence, construction de scénarios et mise en œuvre opérationnelle. Pas de frameworks théoriques déconnectés du réel, mais des outils concrets pour décider et agir.",
    ],
    keyPoints: [
      "Diagnostic stratégique et analyse de l'environnement",
      "Processus de décision sous incertitude",
      "Biais cognitifs et pièges décisionnels",
      "Alignement stratégie / exécution",
      "Gouvernance et comités de direction",
    ],
    formats: ["Conférence", "Séminaire", "Formation", "Masterclass"],
  },
  {
    slug: "recrutement-experience-candidat",
    icon: BarChart3,
    label: "Recrutement et expérience candidat",
    title: "Recrutement et expérience candidat",
    subtitle: "Attirer, évaluer et fidéliser les talents",
    description: "Le recrutement est un acte stratégique, pas une simple formalité administrative. La qualité d'un recrutement détermine la performance future d'une équipe et d'une organisation.",
    paragraphs: [
      "Dans un marché du travail en tension, les entreprises doivent repenser leur approche du recrutement. Il ne s'agit plus seulement de pourvoir un poste, mais de construire une expérience candidat qui reflète les valeurs et l'exigence de l'organisation.",
      "Nous travaillons sur l'ensemble du processus : définition du besoin, structuration de l'entretien, évaluation des compétences et des potentiels, décision finale et intégration. Chaque étape est conçue pour maximiser la qualité du recrutement.",
    ],
    keyPoints: [
      "Structurer un processus de recrutement performant",
      "L'entretien structuré : méthode et bonnes pratiques",
      "Expérience candidat et marque employeur",
      "Évaluer les soft skills et le potentiel",
      "Onboarding et intégration réussie",
    ],
    formats: ["Formation", "Atelier stratégique", "Masterclass"],
  },
  {
    slug: "management-ia",
    icon: Brain,
    label: "Management à l'ère de l'IA",
    title: "Management à l'ère de l'IA",
    subtitle: "Comprendre et intégrer l'intelligence artificielle dans les pratiques managériales",
    description: "L'intelligence artificielle transforme en profondeur les organisations, les métiers et les modes de travail. Le management ne peut pas rester en marge de cette révolution.",
    paragraphs: [
      "L'IA ne remplace pas le manager : elle redéfinit son rôle. Les tâches routinières s'automatisent, les données deviennent omniprésentes et les équipes doivent s'adapter en permanence. Le manager de demain est celui qui sait articuler intelligence humaine et intelligence artificielle.",
      "Nous abordons l'IA non comme un sujet technique, mais comme un enjeu managérial et stratégique : comment l'intégrer dans les processus, comment accompagner les équipes dans la transition, comment prendre des décisions augmentées par la data.",
    ],
    keyPoints: [
      "Impact de l'IA sur les métiers et les organisations",
      "Le manager augmenté : nouveaux rôles et compétences",
      "Intégrer l'IA dans les processus décisionnels",
      "Accompagner les équipes dans la transformation digitale",
      "Éthique et responsabilité face à l'IA",
    ],
    formats: ["Conférence", "Keynote", "Formation", "Masterclass"],
  },
  {
    slug: "gouvernance-codir",
    icon: Lightbulb,
    label: "Gouvernance et CODIR",
    title: "Gouvernance et CODIR",
    subtitle: "Structurer et optimiser le fonctionnement des instances dirigeantes",
    description: "La qualité d'une organisation se mesure à la qualité de sa gouvernance. Un CODIR performant n'est pas un groupe de directeurs réunis autour d'une table : c'est une équipe alignée sur une vision commune.",
    paragraphs: [
      "La gouvernance d'entreprise est un sujet souvent négligé ou traité de manière formelle. Pourtant, c'est dans les instances de direction que se jouent les décisions les plus structurantes pour l'avenir d'une organisation.",
      "Nous travaillons avec les équipes dirigeantes sur le fonctionnement de leur comité de direction : clarification des rôles, qualité des échanges, processus de décision, gestion des désaccords et alignement stratégique.",
    ],
    keyPoints: [
      "Structurer un CODIR performant",
      "Rôles et responsabilités des membres",
      "Qualité des échanges et prise de décision collective",
      "Alignement stratégique et cohérence managériale",
      "Gestion des tensions et des désaccords constructifs",
    ],
    formats: ["Séminaire", "Atelier stratégique", "Formation"],
  },
  {
    slug: "entrepreneuriat",
    icon: Mic,
    label: "Entrepreneuriat",
    title: "Entrepreneuriat",
    subtitle: "Structurer, lancer et développer un projet entrepreneurial",
    description: "Entreprendre, c'est transformer une idée en réalité économique. Mais entre l'intuition initiale et la réussite, il y a un chemin qui exige méthode, lucidité et persévérance.",
    paragraphs: [
      "L'entrepreneuriat n'est pas réservé à quelques profils charismatiques ou visionnaires. C'est une discipline qui s'apprend, se structure et se perfectionne. De l'idéation au passage à l'échelle, chaque étape demande des compétences spécifiques.",
      "Nous intervenons sur les fondamentaux de l'entrepreneuriat : validation de l'idée, construction du modèle économique, positionnement, stratégie de go-to-market, pitch et levée de fonds. Des interventions pragmatiques, ancrées dans la réalité du terrain.",
    ],
    keyPoints: [
      "De l'idée au business model",
      "Validation de marché et MVP",
      "Positionnement et proposition de valeur",
      "Pitch deck et communication investisseurs",
      "Stratégie de croissance et passage à l'échelle",
    ],
    formats: ["Formation", "Masterclass", "Intervention académique"],
  },
  {
    slug: "value-selling",
    icon: Scale,
    label: "Value Selling & SPIN Selling",
    title: "Value Selling & SPIN Selling",
    subtitle: "Vendre par la valeur, convaincre par la méthode",
    description: "La vente n'est pas une question de charisme ou de techniques de persuasion. C'est une discipline structurée qui repose sur la compréhension profonde des enjeux du client.",
    paragraphs: [
      "Le Value Selling et le SPIN Selling sont des approches commerciales fondées sur la valeur plutôt que sur le prix. Elles permettent de structurer un entretien de vente, de qualifier les besoins réels du client et de construire une proposition qui répond à ses enjeux stratégiques.",
      "Nous formons les équipes commerciales et les dirigeants à ces méthodes éprouvées, en les adaptant au contexte spécifique de chaque organisation. L'objectif : vendre mieux, pas seulement vendre plus.",
    ],
    keyPoints: [
      "Fondamentaux du Value Selling",
      "Méthode SPIN : Situation, Problème, Implication, Need-payoff",
      "Qualifier les besoins et les enjeux clients",
      "Construire une proposition de valeur différenciante",
      "Négociation et closing orientés valeur",
    ],
    formats: ["Formation", "Masterclass", "Atelier stratégique"],
  },
  {
    slug: "egalite-professionnelle",
    icon: Globe,
    label: "Égalité professionnelle",
    title: "Égalité professionnelle",
    subtitle: "Promouvoir l'égalité femmes-hommes comme levier de performance",
    description: "L'égalité professionnelle n'est pas une contrainte réglementaire : c'est un levier de performance, d'innovation et d'attractivité pour les organisations qui s'en saisissent avec conviction.",
    paragraphs: [
      "Certifié par les Nations Unies en matière d'égalité femmes-hommes, Fabien Berruyer aborde ce sujet avec rigueur et pragmatisme. Loin des approches moralisatrices, il s'agit de comprendre les mécanismes qui produisent les inégalités et de mettre en place des actions concrètes.",
      "Nous intervenons sur la sensibilisation des équipes dirigeantes, la formation des managers et la mise en place de politiques d'égalité professionnelle. Un sujet central pour la gouvernance des organisations modernes.",
    ],
    keyPoints: [
      "Comprendre les mécanismes des inégalités professionnelles",
      "Biais inconscients et stéréotypes de genre",
      "Mettre en place une politique d'égalité efficace",
      "Certification Nations Unies et cadre international",
      "Égalité comme levier de performance organisationnelle",
    ],
    formats: ["Conférence", "Formation", "Intervention académique"],
  },
  {
    slug: "management-ethique",
    icon: Award,
    label: "Management éthique",
    title: "Management éthique",
    subtitle: "Diriger avec responsabilité et intégrité",
    description: "Le management éthique n'est pas un supplément d'âme : c'est le fondement d'une organisation durable, performante et respectée.",
    paragraphs: [
      "Dans un contexte où la confiance dans les institutions et les entreprises est fragilisée, le management éthique devient un enjeu stratégique. Il ne s'agit pas de moraliser, mais de construire des pratiques managériales fondées sur la responsabilité, la transparence et le respect.",
      "Nous travaillons avec les dirigeants et les managers sur les dimensions éthiques de leur pratique : prise de décision responsable, gestion des dilemmes, culture d'entreprise et exemplarité managériale.",
    ],
    keyPoints: [
      "Les fondements du management éthique",
      "Décision responsable et gestion des dilemmes",
      "Culture d'entreprise et valeurs organisationnelles",
      "RSE et responsabilité sociétale du dirigeant",
      "Exemplarité et cohérence managériale",
    ],
    formats: ["Conférence", "Formation", "Séminaire"],
  },
  {
    slug: "culture-economique-manageriale-juridique",
    icon: BookOpen,
    label: "Culture économique, managériale et juridique",
    title: "Culture économique, managériale et juridique",
    subtitle: "Maîtriser les fondamentaux pour décider en connaissance de cause",
    description: "Un dirigeant ou un manager ne peut pas se permettre d'ignorer les fondamentaux économiques, managériaux et juridiques qui encadrent son action.",
    paragraphs: [
      "La culture économique et juridique est un socle indispensable pour tout professionnel en responsabilité. Comprendre les mécanismes économiques, les cadres juridiques et les principes managériaux permet de prendre des décisions éclairées et de dialoguer efficacement avec les parties prenantes.",
      "Nous proposons des formations qui couvrent les fondamentaux de l'économie d'entreprise, du droit du travail, de la gouvernance et du management. Des interventions conçues pour donner aux participants les clés de compréhension indispensables à leur fonction.",
    ],
    keyPoints: [
      "Fondamentaux de l'économie d'entreprise",
      "Cadre juridique du travail et des relations sociales",
      "Gouvernance d'entreprise et responsabilités",
      "Lecture financière et indicateurs de performance",
      "Environnement réglementaire et conformité",
    ],
    formats: ["Formation", "Intervention académique", "Masterclass"],
  },
  {
    slug: "negociation",
    icon: Scale,
    label: "Négociation",
    title: "Négociation",
    subtitle: "Négocier avec méthode, conclure avec intelligence",
    description: "La négociation est un art qui se structure. Ce n'est ni un rapport de force brut, ni un exercice de séduction : c'est une discipline qui combine préparation, écoute et stratégie.",
    paragraphs: [
      "Qu'il s'agisse de négociation commerciale, sociale ou de partenariat, les principes fondamentaux restent les mêmes : comprendre les intérêts en jeu, préparer sa stratégie, gérer le rapport de force et construire un accord durable.",
      "Nous formons les professionnels aux techniques de négociation avancées, en combinant approche théorique et mises en situation pratiques. L'objectif : développer une compétence de négociation structurée et adaptable à tous les contextes.",
    ],
    keyPoints: [
      "Préparation et stratégie de négociation",
      "Techniques de négociation raisonnée (Harvard)",
      "Gestion du rapport de force et des concessions",
      "Négociation commerciale et négociation sociale",
      "Mises en situation et entraînement pratique",
    ],
    formats: ["Formation", "Masterclass", "Atelier stratégique"],
  },
  {
    slug: "culture-generale-africaine",
    icon: Globe,
    label: "Culture générale africaine",
    title: "Culture générale africaine",
    subtitle: "Comprendre l'Afrique contemporaine dans ses dimensions économiques, culturelles et géopolitiques",
    description: "L'Afrique est un continent en transformation rapide, aux dynamiques économiques, démographiques et culturelles sans précédent. Comprendre ces réalités est devenu indispensable pour tout professionnel à dimension internationale.",
    paragraphs: [
      "La culture générale africaine est un sujet transversal qui touche à l'économie, à la géopolitique, à l'histoire et aux dynamiques sociales contemporaines. C'est un champ de connaissance essentiel pour les professionnels qui travaillent avec le continent ou s'y intéressent.",
      "Nous proposons des interventions qui couvrent les grandes tendances de l'Afrique contemporaine : croissance économique, innovation technologique, défis démographiques, enjeux de gouvernance et richesse culturelle. Des clés de lecture indispensables pour comprendre un continent en mouvement.",
    ],
    keyPoints: [
      "Dynamiques économiques et croissance africaine",
      "Innovation et transformation digitale en Afrique",
      "Enjeux démographiques et urbanisation",
      "Géopolitique et relations internationales",
      "Richesse culturelle et diversité du continent",
    ],
    formats: ["Conférence", "Intervention académique", "Formation"],
  },
];

export const getThemeBySlug = (slug: string): ThemeData | undefined =>
  themesData.find((t) => t.slug === slug);
