import djibsAudio from "@/assets/podcast-djibs.mp3.asset.json";
import segmentationAudio from "@/assets/podcast-segmentation.mp3.asset.json";

export const podcasts = [
  {
    number: 1,
    title: "Du diagnostic stratégique aux orientations commerciales",
    category: "Stratégie commerciale",
    duration: "6 min 14 s",
    audio: djibsAudio.url,
    description: "Une analyse stratégique ne prend tout son sens que lorsqu’elle éclaire les décisions commerciales. À partir de l’étude de cas de l’entreprise Djibs, cet épisode déroule la démarche complète : délimiter un domaine d’activité stratégique (DAS), examiner l’environnement avec le PESTEL et analyser les forces concurrentielles de Porter.",
    takeaway: "Le diagnostic est ensuite traduit en un SWOT scoré pour hiérarchiser les enjeux et formuler des orientations commerciales cohérentes. Une mise en perspective des outils, de leur articulation et de leur utilité pour la décision.",
    topics: ["Cas Djibs", "DAS", "PESTEL", "Porter", "SWOT scoré", "Orientations commerciales"],
  },
  {
    number: 2,
    title: "Segmentation commerciale : de la théorie à la pratique",
    category: "Développement commercial",
    duration: "6 min 34 s",
    audio: segmentationAudio.url,
    description: "S’adresser à un marché ne signifie pas s’adresser à tous ses clients de la même façon. Cet épisode explore la segmentation commerciale et les notions d’IPO et d’IPA pour éclairer la manière de structurer l’analyse des clients et les choix de ciblage.",
    takeaway: "Il revient également sur la différence entre ICP et persona : distinguer le profil de client idéal de la compréhension des interlocuteurs permet de relier les priorités commerciales à une connaissance plus précise des clients.",
    topics: ["Segmentation commerciale", "IPO", "IPA", "ICP", "Persona"],
  },
];