import {
  Target, Users, Shield, BarChart3, Brain, Lightbulb, Mic, Scale, Globe, Award, BookOpen, Search, Building
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
    description: "Le leadership ne se décrète pas : il se construit, se structure et s'adapte. Dans un monde en mutation permanente, les modèles traditionnels d'autorité ne suffisent plus. Les organisations ont besoin de leaders capables de naviguer dans l'ambiguïté, de fédérer des équipes pluridisciplinaires et de porter une vision qui donne du sens à l'action collective.",
    paragraphs: [
      "Le leadership contemporain exige une capacité à naviguer dans la complexité, à fédérer des équipes diverses et à prendre des décisions dans l'incertitude. Il ne s'agit plus d'imposer une vision, mais de créer les conditions pour qu'une intelligence collective émerge. Le leader d'aujourd'hui est un architecte de sens : il clarifie la direction, aligne les énergies et crée un environnement propice à l'engagement.",
      "Les études récentes montrent que 70 % des managers considèrent ne pas avoir été suffisamment préparés à leur rôle de leader. Ce constat traverse toutes les organisations, des PME aux grands groupes. Le passage de l'expertise métier au leadership est un saut qualitatif qui nécessite un accompagnement structuré.",
      "Nous abordons le leadership comme une discipline exigeante qui combine lucidité stratégique, intelligence émotionnelle et capacité d'exécution. Chaque intervention est conçue pour provoquer une prise de conscience et initier un changement durable dans les pratiques managériales. Nos formats — de la conférence plénière à l'atelier en petit comité — sont adaptés au niveau de maturité et aux enjeux spécifiques de chaque organisation.",
    ],
    keyPoints: [
      "Les nouveaux paradigmes du leadership : du command & control au leadership facilitateur",
      "Leadership situationnel et adaptatif : ajuster sa posture selon les contextes",
      "Posture du dirigeant face à l'incertitude : décider sans certitude, agir sans garantie",
      "Construire et incarner une vision : donner du sens et embarquer les équipes",
      "Du manager au leader : trajectoire de développement et compétences clés",
      "Intelligence émotionnelle et leadership authentique",
    ],
    formats: ["Conférence", "Formation", "Masterclass", "Séminaire"],
  },
  {
    slug: "management-equipes",
    icon: Users,
    label: "Management des équipes",
    title: "Management des équipes",
    subtitle: "Structurer, mobiliser et faire grandir ses équipes",
    description: "Manager une équipe ne se résume pas à distribuer des tâches et contrôler des résultats. C'est un exercice quotidien de responsabilité, de communication et de prise de décision qui impacte directement la performance, l'engagement et la rétention des talents.",
    paragraphs: [
      "Le management des équipes est au cœur de la performance organisationnelle. Une équipe bien managée n'est pas seulement productive : elle est engagée, résiliente et capable de s'adapter aux changements. À l'inverse, un management défaillant génère du désengagement, des conflits larvés et un turnover coûteux.",
      "Les défis sont multiples : gérer des équipes hybrides (présentiel/distanciel), intégrer de nouvelles générations aux attentes différentes, maintenir la cohésion dans des contextes de transformation permanente. Le manager doit être à la fois un cadre structurant et un facilitateur de performance.",
      "Nous travaillons sur les fondamentaux du management opérationnel : fixer des objectifs clairs et mesurables, donner du feedback constructif et régulier, gérer les conflits avec méthode, développer l'autonomie et la responsabilisation, et créer un cadre de travail propice à la performance collective. Chaque intervention combine apport méthodologique et mise en pratique sur des cas concrets.",
    ],
    keyPoints: [
      "Les fondamentaux du management d'équipe : cadre, rôles, objectifs",
      "Feedback, reconnaissance et gestion constructive des conflits",
      "Développer l'autonomie et la responsabilisation des collaborateurs",
      "Management hybride et à distance : outils, rituels et postures",
      "Cohésion d'équipe et dynamiques collectives : diagnostic et leviers",
      "Manager les talents : identification, développement et fidélisation",
    ],
    formats: ["Formation", "Atelier stratégique", "Masterclass"],
  },
  {
    slug: "strategie-decision",
    icon: Shield,
    label: "Stratégie et prise de décision",
    title: "Stratégie et prise de décision",
    subtitle: "Décider avec lucidité dans un environnement complexe",
    description: "La stratégie n'est pas un exercice théorique réservé aux consultants. C'est la capacité à poser un diagnostic lucide, à arbitrer entre des options et à engager une organisation dans une direction claire. Dans un environnement économique marqué par la volatilité et l'incertitude, la qualité de la décision stratégique est devenue un avantage concurrentiel majeur.",
    paragraphs: [
      "La prise de décision stratégique est l'un des actes les plus engageants du dirigeant. Elle implique de traiter l'information avec rigueur, de gérer l'incertitude et d'assumer la responsabilité de ses choix. Trop souvent, les décisions sont prises sous l'effet de l'urgence, de la pression des parties prenantes ou de biais cognitifs non identifiés.",
      "Les études en sciences de la décision montrent que les dirigeants prennent en moyenne 35 000 décisions par jour. Parmi celles-ci, les décisions stratégiques — celles qui engagent l'avenir de l'organisation — représentent une fraction infime mais décisive. La qualité de ces décisions dépend autant de la méthode que de la posture du décideur.",
      "Nous abordons la stratégie de manière pragmatique : diagnostic de situation, analyse des forces en présence, construction de scénarios et mise en œuvre opérationnelle. Pas de frameworks théoriques déconnectés du réel, mais des outils concrets pour décider et agir. Nos interventions permettent aux dirigeants de structurer leur réflexion stratégique et de renforcer leur capacité à trancher dans l'incertitude.",
    ],
    keyPoints: [
      "Diagnostic stratégique et analyse de l'environnement concurrentiel",
      "Processus de décision sous incertitude : méthodes et outils",
      "Biais cognitifs et pièges décisionnels : les identifier et les neutraliser",
      "Alignement stratégie / exécution : du plan à l'action",
      "Gouvernance et comités de direction : structurer la décision collective",
      "Scénarios stratégiques et gestion des risques",
    ],
    formats: ["Conférence", "Séminaire", "Formation", "Masterclass"],
  },
  {
    slug: "recrutement-experience-candidat",
    icon: BarChart3,
    label: "Recrutement et expérience candidat",
    title: "Recrutement et expérience candidat",
    subtitle: "Attirer, évaluer et fidéliser les talents dans un marché en tension",
    description: "Le recrutement est un acte stratégique, pas une simple formalité administrative. La qualité d'un recrutement détermine la performance future d'une équipe et d'une organisation. Dans un marché du travail en tension, où les candidats qualifiés ont le choix, l'expérience de recrutement devient un levier de différenciation décisif.",
    paragraphs: [
      "Les organisations font face à un paradoxe : elles déclarent que le capital humain est leur principal actif, mais leurs processus de recrutement restent souvent approximatifs, déshumanisés et peu structurés. Les conséquences sont lourdes : erreurs de casting coûteuses, turnover précoce, perte de candidats de qualité au profit de concurrents plus agiles.",
      "L'expérience candidat est devenue un enjeu de marque employeur. Chaque interaction — de l'annonce à l'entretien, de la réponse au suivi — façonne la perception que le candidat a de l'organisation. Un processus mal géré ne fait pas que perdre un talent : il détériore la réputation de l'entreprise sur le marché.",
      "Nous travaillons sur l'ensemble du processus : définition précise du besoin, rédaction d'offres attractives, structuration de l'entretien avec des grilles d'évaluation objectives, assessment des compétences et des potentiels, décision finale argumentée et programme d'intégration. Chaque étape est conçue pour maximiser la qualité du recrutement et l'expérience vécue par le candidat.",
    ],
    keyPoints: [
      "Structurer un processus de recrutement performant et équitable",
      "L'entretien structuré : méthode, grilles d'évaluation et bonnes pratiques",
      "Expérience candidat et marque employeur : chaque détail compte",
      "Évaluer les soft skills, le potentiel et la compatibilité culturelle",
      "Onboarding et intégration réussie : les 90 premiers jours",
      "Diversité et inclusion dans le processus de recrutement",
    ],
    formats: ["Formation", "Atelier stratégique", "Masterclass"],
  },
  {
    slug: "management-ia",
    icon: Brain,
    label: "Management à l'ère de l'IA",
    title: "Management à l'ère de l'IA",
    subtitle: "Comprendre et intégrer l'intelligence artificielle dans les pratiques managériales",
    description: "L'intelligence artificielle transforme en profondeur les organisations, les métiers et les modes de travail. Le management ne peut pas rester en marge de cette révolution. Les dirigeants et managers doivent comprendre les opportunités et les risques de l'IA pour adapter leurs pratiques et préparer leurs équipes à cette transformation sans précédent.",
    paragraphs: [
      "L'IA ne remplace pas le manager : elle redéfinit son rôle. Les tâches routinières s'automatisent, les données deviennent omniprésentes et les équipes doivent s'adapter en permanence. Le manager de demain est celui qui sait articuler intelligence humaine et intelligence artificielle, en créant de la valeur là où la machine ne peut pas aller : la créativité, l'empathie, le jugement éthique et la vision stratégique.",
      "Selon les projections du World Economic Forum, 85 millions d'emplois seront transformés par l'IA d'ici 2030. Cette mutation concerne tous les secteurs et tous les niveaux hiérarchiques. Les organisations qui tardent à s'adapter risquent de perdre en compétitivité, en attractivité et en capacité d'innovation.",
      "Nous abordons l'IA non comme un sujet technique réservé aux DSI, mais comme un enjeu managérial et stratégique transversal : comment l'intégrer dans les processus de décision, comment accompagner les équipes dans la transition, comment prendre des décisions augmentées par la data, et comment préserver l'humain au centre des organisations. Nos interventions sont accessibles à tous les profils, sans prérequis technique.",
    ],
    keyPoints: [
      "Impact de l'IA sur les métiers, les compétences et les organisations",
      "Le manager augmenté : nouveaux rôles, nouvelles compétences",
      "Intégrer l'IA dans les processus décisionnels sans déshumaniser",
      "Accompagner les équipes dans la transformation digitale et culturelle",
      "Éthique, responsabilité et gouvernance de l'IA en entreprise",
      "Cas pratiques : l'IA appliquée au management, au recrutement et à la stratégie",
    ],
    formats: ["Conférence", "Keynote", "Formation", "Masterclass"],
  },
  {
    slug: "gouvernance-codir",
    icon: Lightbulb,
    label: "Gouvernance et CODIR",
    title: "Gouvernance et CODIR",
    subtitle: "Structurer et optimiser le fonctionnement des instances dirigeantes",
    description: "La qualité d'une organisation se mesure à la qualité de sa gouvernance. Un CODIR performant n'est pas un groupe de directeurs réunis autour d'une table : c'est une équipe alignée sur une vision commune, capable de décider vite, de trancher les désaccords et de porter collectivement la stratégie de l'entreprise.",
    paragraphs: [
      "La gouvernance d'entreprise est un sujet souvent négligé ou traité de manière formelle. Pourtant, c'est dans les instances de direction que se jouent les décisions les plus structurantes pour l'avenir d'une organisation. Un CODIR dysfonctionnel — où les non-dits s'accumulent, où les arbitrages sont repoussés, où chacun défend son périmètre plutôt que l'intérêt collectif — paralyse l'ensemble de l'organisation.",
      "Les symptômes sont bien connus : réunions interminables sans décision, sujets qui reviennent en boucle, silos entre directions, absence de vision partagée. Les conséquences se répercutent sur les équipes opérationnelles : injonctions contradictoires, manque de clarté sur les priorités, perte de confiance dans le management.",
      "Nous travaillons avec les équipes dirigeantes sur le fonctionnement de leur comité de direction : clarification des rôles et des périmètres, qualité des échanges et des débats, processus de décision collectif, gestion des désaccords de manière constructive et alignement stratégique durable. Un travail exigeant qui transforme profondément la dynamique de l'équipe dirigeante.",
    ],
    keyPoints: [
      "Structurer un CODIR performant : composition, rythme et rituels",
      "Rôles et responsabilités des membres : clarifier les périmètres",
      "Qualité des échanges et prise de décision collective efficace",
      "Alignement stratégique et cohérence managériale descendante",
      "Gestion des tensions et des désaccords constructifs",
      "Du CODIR opérationnel au CODIR stratégique : changer de posture",
    ],
    formats: ["Séminaire", "Atelier stratégique", "Formation"],
  },
  {
    slug: "entrepreneuriat",
    icon: Mic,
    label: "Entrepreneuriat",
    title: "Entrepreneuriat",
    subtitle: "Structurer, lancer et développer un projet entrepreneurial avec méthode",
    description: "Entreprendre, c'est transformer une idée en réalité économique. Mais entre l'intuition initiale et la réussite, il y a un chemin qui exige méthode, lucidité et persévérance. La majorité des échecs entrepreneuriaux ne sont pas dus à un manque d'idées, mais à un manque de structuration.",
    paragraphs: [
      "L'entrepreneuriat n'est pas réservé à quelques profils charismatiques ou visionnaires. C'est une discipline qui s'apprend, se structure et se perfectionne. De l'idéation au passage à l'échelle, chaque étape demande des compétences spécifiques : valider un marché, construire une offre, se positionner, vendre, recruter, piloter la croissance.",
      "Les statistiques sont parlantes : 50 % des entreprises ne passent pas le cap des 5 ans. Parmi les causes principales : un positionnement flou, une offre mal calibrée, une stratégie commerciale inexistante ou un leadership défaillant. Ces écueils ne sont pas des fatalités — ils sont le résultat d'un manque de préparation et d'accompagnement.",
      "Nous intervenons sur les fondamentaux de l'entrepreneuriat : validation de l'idée et étude de marché, construction du modèle économique, positionnement et proposition de valeur, stratégie de go-to-market, pitch et communication investisseurs, et développement du leadership entrepreneurial. Des interventions pragmatiques, ancrées dans la réalité du terrain, conçues pour accélérer la courbe d'apprentissage de l'entrepreneur.",
    ],
    keyPoints: [
      "De l'idée au business model : valider avant de construire",
      "Validation de marché, MVP et itération rapide",
      "Positionnement et proposition de valeur unique",
      "Pitch deck et communication investisseurs : convaincre avec méthode",
      "Stratégie de croissance et passage à l'échelle",
      "Leadership entrepreneurial : posture, résilience et prise de décision",
    ],
    formats: ["Formation", "Masterclass", "Intervention académique"],
  },
  {
    slug: "value-selling",
    icon: Scale,
    label: "Value Selling & SPIN Selling",
    title: "Value Selling & SPIN Selling",
    subtitle: "Vendre par la valeur, convaincre par la méthode",
    description: "La vente n'est pas une question de charisme ou de techniques de persuasion. C'est une discipline structurée qui repose sur la compréhension profonde des enjeux du client et la capacité à démontrer la valeur créée. Dans un environnement B2B de plus en plus exigeant, les approches transactionnelles ne suffisent plus.",
    paragraphs: [
      "Le Value Selling et le SPIN Selling sont des approches commerciales fondées sur la valeur plutôt que sur le prix. Elles permettent de structurer un entretien de vente, de qualifier les besoins réels du client et de construire une proposition qui répond à ses enjeux stratégiques. Ces méthodes, éprouvées depuis des décennies, restent les plus efficaces en vente complexe B2B.",
      "Le constat est récurrent dans les organisations : les cycles de vente s'allongent, les décisions se complexifient (multi-décideurs), les acheteurs sont mieux informés et plus exigeants. Les commerciaux qui continuent à vendre des caractéristiques produit plutôt que de la valeur business se retrouvent systématiquement en concurrence sur le prix — une guerre qu'ils ne peuvent que perdre.",
      "Nous formons les équipes commerciales et les dirigeants à ces méthodes éprouvées, en les adaptant au contexte spécifique de chaque organisation. L'objectif : vendre mieux, pas seulement vendre plus. Chaque formation combine apport méthodologique, jeux de rôle et travail sur les cas réels des participants pour garantir un transfert immédiat dans la pratique quotidienne.",
    ],
    keyPoints: [
      "Fondamentaux du Value Selling : vendre la valeur, pas le produit",
      "Méthode SPIN : Situation, Problème, Implication, Need-payoff",
      "Qualifier les besoins réels et les enjeux stratégiques du client",
      "Construire une proposition de valeur différenciante et chiffrée",
      "Négociation et closing orientés valeur : sortir de la guerre des prix",
      "Vente complexe et multi-décideurs : cartographier et influencer",
    ],
    formats: ["Formation", "Masterclass", "Atelier stratégique"],
  },
  {
    slug: "egalite-professionnelle",
    icon: Globe,
    label: "Égalité professionnelle",
    title: "Égalité professionnelle",
    subtitle: "Promouvoir l'égalité femmes-hommes comme levier de performance organisationnelle",
    description: "L'égalité professionnelle n'est pas une contrainte réglementaire : c'est un levier de performance, d'innovation et d'attractivité pour les organisations qui s'en saisissent avec conviction. Les entreprises les plus performantes sont celles qui ont intégré la diversité et l'inclusion dans leur ADN managérial.",
    paragraphs: [
      "Certifié par les Nations Unies en matière d'égalité femmes-hommes, Fabien Berruyer aborde ce sujet avec rigueur et pragmatisme. Loin des approches moralisatrices ou des postures militantes, il s'agit de comprendre les mécanismes systémiques qui produisent les inégalités et de mettre en place des actions concrètes, mesurables et durables.",
      "Les chiffres parlent d'eux-mêmes : les entreprises qui comptent au moins 30 % de femmes dans leurs instances dirigeantes affichent des performances financières supérieures de 15 % en moyenne. L'égalité professionnelle n'est pas un sujet « RH » périphérique — c'est un enjeu de gouvernance et de compétitivité.",
      "Nous intervenons sur la sensibilisation des équipes dirigeantes, la formation des managers aux biais inconscients, l'audit des pratiques de recrutement et de promotion, et la mise en place de politiques d'égalité professionnelle structurées. Un sujet central pour la gouvernance des organisations modernes qui ne peut plus être traité comme un simple exercice de conformité.",
    ],
    keyPoints: [
      "Comprendre les mécanismes systémiques des inégalités professionnelles",
      "Biais inconscients et stéréotypes de genre : les identifier et les neutraliser",
      "Mettre en place une politique d'égalité efficace et mesurable",
      "Certification Nations Unies et cadre international de référence",
      "Égalité comme levier de performance organisationnelle et d'attractivité",
      "Audit des pratiques RH et plan d'action opérationnel",
    ],
    formats: ["Conférence", "Formation", "Intervention académique"],
  },
  {
    slug: "management-ethique",
    icon: Award,
    label: "Management éthique",
    title: "Management éthique",
    subtitle: "Diriger avec responsabilité, intégrité et cohérence",
    description: "Le management éthique n'est pas un supplément d'âme : c'est le fondement d'une organisation durable, performante et respectée. Dans un contexte de défiance croissante envers les institutions, la question de l'éthique managériale est devenue un enjeu stratégique de premier plan.",
    paragraphs: [
      "Les scandales de gouvernance, les burn-out en série, les crises de confiance internes et les polémiques sur les conditions de travail révèlent un management qui a souvent perdu ses repères éthiques. Les collaborateurs ne croient plus aux discours — ils observent les actes. L'exemplarité managériale n'est plus un idéal : c'est une exigence.",
      "Le management éthique ne se réduit pas à la conformité réglementaire ou à la RSE. C'est une posture quotidienne qui irrigue toutes les dimensions de la pratique managériale : la manière de décider, de communiquer, de recruter, de sanctionner, de récompenser. C'est la cohérence entre ce que l'organisation dit et ce qu'elle fait réellement.",
      "Nous travaillons avec les dirigeants et les managers sur les dimensions éthiques de leur pratique : prise de décision responsable face aux dilemmes, construction d'une culture d'entreprise fondée sur des valeurs authentiques, gestion des zones grises, et développement d'une exemplarité managériale qui inspire confiance et engagement. Un travail de fond, exigeant et transformateur.",
    ],
    keyPoints: [
      "Les fondements du management éthique : principes, valeurs, pratiques",
      "Décision responsable et gestion des dilemmes éthiques en entreprise",
      "Culture d'entreprise et valeurs organisationnelles : de la déclaration à l'incarnation",
      "RSE et responsabilité sociétale du dirigeant : au-delà de la conformité",
      "Exemplarité et cohérence managériale : le leader comme modèle",
      "Prévention des risques psychosociaux et bien-être au travail",
    ],
    formats: ["Conférence", "Formation", "Séminaire"],
  },
  {
    slug: "culture-economique-manageriale-juridique",
    icon: BookOpen,
    label: "Culture économique, managériale et juridique",
    title: "Culture économique, managériale et juridique",
    subtitle: "Maîtriser les fondamentaux pour décider en connaissance de cause",
    description: "Un dirigeant ou un manager ne peut pas se permettre d'ignorer les fondamentaux économiques, managériaux et juridiques qui encadrent son action. Cette culture transversale est le socle de décisions éclairées et d'un dialogue efficace avec l'ensemble des parties prenantes.",
    paragraphs: [
      "La culture économique et juridique est un socle indispensable pour tout professionnel en responsabilité. Comprendre les mécanismes économiques, les cadres juridiques et les principes managériaux permet de prendre des décisions éclairées, d'anticiper les risques et de dialoguer efficacement avec les parties prenantes internes et externes.",
      "Trop de managers évoluent dans des environnements complexes sans maîtriser les fondamentaux qui conditionnent leurs décisions : droit du travail, principes de gouvernance, lecture financière, environnement réglementaire. Ce déficit de culture transversale conduit à des erreurs coûteuses, des conflits évitables et des décisions partielles.",
      "Nous proposons des formations qui couvrent les fondamentaux de l'économie d'entreprise, du droit du travail et des relations sociales, de la gouvernance et du management. Des interventions conçues pour donner aux participants les clés de compréhension indispensables à leur fonction, dans un format accessible et pragmatique qui privilégie les cas concrets et les mises en situation.",
    ],
    keyPoints: [
      "Fondamentaux de l'économie d'entreprise et des marchés",
      "Cadre juridique du travail et des relations sociales",
      "Gouvernance d'entreprise, responsabilités et compliance",
      "Lecture financière et indicateurs de performance clés",
      "Environnement réglementaire, conformité et gestion des risques",
      "Dialogue social et relations avec les instances représentatives",
    ],
    formats: ["Formation", "Intervention académique", "Masterclass"],
  },
  {
    slug: "negociation",
    icon: Scale,
    label: "Négociation",
    title: "Négociation",
    subtitle: "Négocier avec méthode, conclure avec intelligence",
    description: "La négociation est un art qui se structure. Ce n'est ni un rapport de force brut, ni un exercice de séduction : c'est une discipline qui combine préparation rigoureuse, écoute stratégique et construction méthodique d'un accord qui préserve la valeur et la relation.",
    paragraphs: [
      "Qu'il s'agisse de négociation commerciale, sociale, de partenariat ou de gestion de conflit, les principes fondamentaux restent les mêmes : comprendre les intérêts en jeu, préparer sa stratégie, gérer le rapport de force et construire un accord durable. La négociation est omniprésente dans la vie professionnelle — chaque manager négocie quotidiennement, souvent sans en avoir conscience.",
      "Les erreurs les plus fréquentes en négociation sont bien identifiées : préparer insuffisamment, se focaliser sur les positions plutôt que sur les intérêts, céder trop vite sous la pression, ou au contraire rigidifier les échanges au point de rompre la relation. Ces erreurs sont coûteuses — en valeur financière comme en capital relationnel.",
      "Nous formons les professionnels aux techniques de négociation avancées, en combinant approche théorique (négociation raisonnée de Harvard, BATNA, ancrage) et mises en situation pratiques sur des cas réels. L'objectif : développer une compétence de négociation structurée, adaptable à tous les contextes et capable de créer de la valeur pour toutes les parties prenantes.",
    ],
    keyPoints: [
      "Préparation et stratégie de négociation : la clé du succès",
      "Techniques de négociation raisonnée (méthode Harvard) et BATNA",
      "Gestion du rapport de force, des concessions et des contreparties",
      "Négociation commerciale et négociation sociale : spécificités et convergences",
      "Mises en situation et entraînement pratique sur cas réels",
      "Négociation multipartite et gestion des coalitions",
    ],
    formats: ["Formation", "Masterclass", "Atelier stratégique"],
  },
  {
    slug: "culture-generale-africaine",
    icon: Globe,
    label: "Culture générale africaine",
    title: "Culture générale africaine",
    subtitle: "Comprendre l'Afrique contemporaine dans ses dimensions économiques, culturelles et géopolitiques",
    description: "L'Afrique est un continent en transformation rapide, aux dynamiques économiques, démographiques et culturelles sans précédent. Avec 1,4 milliard d'habitants et une croissance parmi les plus dynamiques au monde, comprendre ces réalités est devenu indispensable pour tout professionnel à dimension internationale.",
    paragraphs: [
      "La culture générale africaine est un sujet transversal qui touche à l'économie, à la géopolitique, à l'histoire et aux dynamiques sociales contemporaines. C'est un champ de connaissance essentiel pour les professionnels qui travaillent avec le continent ou s'y intéressent, mais aussi pour tout citoyen soucieux de comprendre les grands équilibres du monde contemporain.",
      "L'Afrique concentre aujourd'hui les plus fortes dynamiques de croissance démographique et économique de la planète. Elle est aussi le théâtre d'innovations majeures — fintech, mobile banking, e-commerce, énergies renouvelables — qui redéfinissent les modèles économiques traditionnels. Ignorer ces transformations, c'est passer à côté d'un continent qui façonnera le XXIe siècle.",
      "Nous proposons des interventions qui couvrent les grandes tendances de l'Afrique contemporaine : croissance économique et émergence de nouvelles puissances, innovation technologique et transformation digitale, défis démographiques et urbanisation accélérée, enjeux de gouvernance et relations internationales, richesse culturelle et diversité du continent. Des clés de lecture indispensables pour comprendre un continent en mouvement.",
    ],
    keyPoints: [
      "Dynamiques économiques et émergence de nouvelles puissances africaines",
      "Innovation, transformation digitale et écosystèmes tech africains",
      "Enjeux démographiques, urbanisation et classe moyenne émergente",
      "Géopolitique, relations internationales et nouveaux partenariats",
      "Richesse culturelle, diversité linguistique et soft power africain",
      "Opportunités stratégiques pour les entreprises et institutions",
    ],
    formats: ["Conférence", "Intervention académique", "Formation"],
  },
];

export const getThemeBySlug = (slug: string): ThemeData | undefined =>
  themesData.find((t) => t.slug === slug);
