import djibsAudio from "@/assets/podcast-djibs.mp3.asset.json";
import segmentationAudio from "@/assets/podcast-segmentation.mp3.asset.json";
import fondementsAudio from "@/assets/podcast-management-fondements.mp3.asset.json";
import individusAudio from "@/assets/podcast-management-individus.mp3.asset.json";
import adaptationAudio from "@/assets/podcast-management-adaptation.mp3.asset.json";

export type PodcastRubrique = "Stratégie commerciale" | "Management";

export interface PodcastEpisode {
  id: string;
  number: number;
  rubrique: PodcastRubrique;
  title: string;
  category: string;
  duration: string;
  audio: string;
  source?: string;
  description: string;
  takeaway: string;
  topics: string[];
}

export const rubriques: Array<{ name: PodcastRubrique; id: string; intro: string }> = [
  {
    name: "Stratégie commerciale",
    id: "strategie-commerciale",
    intro: "Du diagnostic stratégique à la segmentation : des outils mis en perspective à partir de l’étude de cas Djibs.",
  },
  {
    name: "Management",
    id: "management",
    intro: "Fonction managériale, motivation et compréhension des individus : les fondamentaux du management, à partir des séances de formation.",
  },
];

export const podcasts: PodcastEpisode[] = [
  {
    id: "strategie-1",
    number: 1,
    rubrique: "Stratégie commerciale",
    title: "Du diagnostic stratégique aux orientations commerciales",
    category: "Stratégie commerciale",
    duration: "6 min 14 s",
    audio: djibsAudio.url,
    description: "Une analyse stratégique ne prend tout son sens que lorsqu’elle éclaire les décisions commerciales. À partir de l’étude de cas de l’entreprise Djibs, cet épisode déroule la démarche complète : délimiter un domaine d’activité stratégique (DAS), examiner l’environnement avec le PESTEL et analyser les forces concurrentielles de Porter.",
    takeaway: "Le diagnostic est ensuite traduit en un SWOT scoré pour hiérarchiser les enjeux et formuler des orientations commerciales cohérentes. Une mise en perspective des outils, de leur articulation et de leur utilité pour la décision.",
    topics: ["Cas Djibs", "DAS", "PESTEL", "Porter", "SWOT scoré", "Orientations commerciales"],
  },
  {
    id: "strategie-2",
    number: 2,
    rubrique: "Stratégie commerciale",
    title: "Segmentation commerciale : de la théorie à la pratique",
    category: "Stratégie commerciale",
    duration: "6 min 34 s",
    audio: segmentationAudio.url,
    description: "S’adresser à un marché ne signifie pas s’adresser à tous ses clients de la même façon. Poursuivant l’analyse conduite sur le cas Djibs, cet épisode explore la segmentation commerciale et les notions d’IPO et d’IPA pour éclairer la manière de structurer l’analyse des clients et les choix de ciblage.",
    takeaway: "Il revient également sur la différence entre ICP et persona : distinguer le profil de client idéal de la compréhension des interlocuteurs permet de relier les priorités commerciales à une connaissance plus précise des clients.",
    topics: ["Cas Djibs", "Segmentation commerciale", "IPO", "IPA", "ICP", "Persona"],
  },
  {
    id: "management-1",
    number: 1,
    rubrique: "Management",
    title: "Les Fondements du Management",
    category: "Management",
    duration: "7 min 32 s",
    audio: fondementsAudio.url,
    source: "Séance 1 · Fonction et posture managériales",
    description: "Le meilleur technicien n’est pas nécessairement un bon manager : la promotion d’un expert à une fonction d’encadrement est un piège classique. Cet épisode revient sur les trois compétences décrites par Robert Katz — techniques, humaines et conceptuelles — et sur l’évolution de la fonction managériale, des cinq fonctions de Fayol aux dix rôles de Mintzberg.",
    takeaway: "Il distingue ensuite le manager du leader (Kotter), examine les sources du pouvoir (Weber, French et Raven), puis confronte les théories X et Y de McGregor à la grille managériale de Blake et Mouton pour éclairer la posture du manager.",
    topics: ["Katz", "Fayol", "Mintzberg", "Manager et leader", "Kotter", "Sources du pouvoir", "Théories X et Y", "Blake et Mouton"],
  },
  {
    id: "management-2",
    number: 2,
    rubrique: "Management",
    title: "L’Art de Manager des Individus",
    category: "Management",
    duration: "9 min 40 s",
    audio: individusAudio.url,
    source: "Séance 2 · Comprendre les individus",
    description: "Manager, c’est d’abord comprendre ce qui détermine un comportement : compétences, motivations, perceptions et contexte. Cet épisode pose cette formule et met en garde contre l’erreur fondamentale d’attribution décrite par Ross, qui conduit à expliquer les conduites par la personne plutôt que par la situation.",
    takeaway: "Il passe en revue les grandes théories de la motivation — Maslow, Herzberg, Deci et Ryan, Vroom, Adams — les illustre par des cas d’entreprises (Netflix, Microsoft, Toyota) et oppose gestion individuelle et gestion systémique.",
    topics: ["Comportement", "Erreur d’attribution", "Maslow", "Herzberg", "Deci et Ryan", "Vroom", "Adams", "Netflix", "Microsoft", "Toyota"],
  },
  {
    id: "management-3",
    number: 3,
    rubrique: "Management",
    title: "L’Art de l’Adaptation Managériale",
    category: "Management",
    duration: "5 min 52 s",
    audio: adaptationAudio.url,
    description: "Il n’existe pas de style de management absolument bon : l’efficacité dépend de la situation. Cet épisode s’appuie sur cette logique contingente et sur le management situationnel de Hersey et Blanchard, qui adapte le style à la compétence et à l’engagement de chaque collaborateur.",
    takeaway: "Il détaille ensuite la délégation professionnelle autour de six paramètres — objet, objectif, périmètre, moyens, reporting et régulation —, distingue contrôle et micromanagement, illustre la confiance formalisée par le cas MAIF, puis présente le modèle de Vroom et Yetton et le management différencié.",
    topics: ["Logique contingente", "Hersey et Blanchard", "Délégation", "Contrôle et micromanagement", "Cas MAIF", "Vroom et Yetton", "Management différencié"],
  },
];
