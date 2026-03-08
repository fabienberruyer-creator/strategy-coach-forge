import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import {
  Target, TrendingUp, Shield, BarChart3, Lightbulb, Globe,
  RefreshCw, ArrowRight, Users, Briefcase, UserCheck, Scale, Brain, Crosshair, BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

const expertises = [
  {
    slug: "leadership",
    icon: Target,
    title: "Leadership",
    problems: "Trop de managers accèdent à des postes de direction sans y avoir été préparés. Ils maîtrisent leur métier, mais pas l'art de diriger. Les décisions manquent de cap, les équipes perdent en cohésion, le turnover s'installe.",
    benefits: "Développer un leadership structuré, incarné et mobilisateur. Clarifier la posture managériale, renforcer la capacité à fédérer et à porter une vision claire auprès des équipes.",
  },
  {
    slug: "strategie-entreprise",
    icon: TrendingUp,
    title: "Stratégie d'entreprise",
    problems: "Beaucoup d'organisations confondent agitation et stratégie. Elles multiplient les projets sans hiérarchiser, s'épuisent dans l'opérationnel et finissent par perdre de vue leur cap.",
    benefits: "Construire un diagnostic stratégique lucide, définir un positionnement clair et piloter la trajectoire de l'organisation avec méthode et cohérence.",
  },
  {
    slug: "management-equipes",
    icon: Users,
    title: "Management des équipes",
    problems: "Les équipes fonctionnent en silo, les tensions s'accumulent, l'engagement baisse. Les managers gèrent au jour le jour sans cadre structurant. Les meilleurs partent, les projets s'enlisent.",
    benefits: "Installer des pratiques managériales performantes, développer la cohésion d'équipe et créer les conditions d'un engagement durable et d'une performance collective.",
  },
  {
    slug: "gouvernance-codir",
    icon: Briefcase,
    title: "Gouvernance & CODIR",
    problems: "Les comités de direction se réunissent sans réellement décider. Les rôles sont flous, les arbitrages tardent, les non-dits polluent le fonctionnement collectif.",
    benefits: "Clarifier les rôles et les périmètres, structurer la prise de décision collective, renforcer la dynamique du CODIR et transformer les instances dirigeantes en véritables organes de pilotage.",
  },
  {
    slug: "recrutement-experience-candidat",
    icon: UserCheck,
    title: "Recrutement & expérience candidat",
    problems: "Les processus de recrutement sont longs, coûteux et souvent inefficaces. Les meilleurs candidats se détournent d'expériences de recrutement déshumanisées ou mal structurées.",
    benefits: "Structurer le processus de recrutement, améliorer l'expérience candidat, développer la marque employeur et sécuriser l'intégration des talents dans l'organisation.",
  },
  {
    slug: "entrepreneuriat",
    icon: Lightbulb,
    title: "Entrepreneuriat",
    problems: "L'idée est là, la conviction aussi. Mais entre l'intuition fondatrice et le premier client, les obstacles s'accumulent : positionnement flou, offre mal calibrée, manque de structuration.",
    benefits: "Accompagner les fondateurs dans la clarification de leur offre, la construction de leur modèle économique et le développement de leur leadership entrepreneurial.",
  },
  {
    slug: "gestion-crise",
    icon: Shield,
    title: "Gestion de crise",
    problems: "En période de crise, les réflexes habituels ne fonctionnent plus. La pression monte, l'information est incomplète, les décisions émotionnelles aggravent la situation.",
    benefits: "Former les dirigeants à décider avec méthode en situation de pression et d'incertitude. Transformer la crise en moment de leadership et de réaffirmation stratégique.",
  },
  {
    slug: "value-selling",
    icon: BarChart3,
    title: "Value Selling",
    problems: "Les cycles de vente s'allongent, les taux de conversion stagnent. Les équipes commerciales peinent à justifier la valeur de leur offre face à des acheteurs exigeants. La guerre des prix devient le réflexe par défaut.",
    benefits: "Déployer la méthodologie Value Selling pour structurer l'approche commerciale autour de la création de valeur et sortir définitivement de la logique du prix le plus bas.",
  },
  {
    slug: "methode-spin",
    icon: Crosshair,
    title: "Méthode SPIN",
    problems: "Les commerciaux parlent trop et écoutent trop peu. Ils présentent des solutions avant d'avoir compris les vrais enjeux du client. Le taux de conversion stagne, les opportunités se ferment.",
    benefits: "Maîtriser le questionnement SPIN (Situation, Problème, Implication, Need-payoff) pour identifier les enjeux profonds du client et construire des propositions réellement différenciantes.",
  },
  {
    slug: "management-ethique",
    icon: Scale,
    title: "Management éthique",
    problems: "Les scandales de gouvernance, les burn-out en série et les crises de confiance internes révèlent un management qui a perdu ses repères éthiques. Les équipes ne croient plus aux discours.",
    benefits: "Intégrer la responsabilité, l'équité et la transparence au cœur des pratiques managériales. Construire une culture de management fondée sur la confiance et la cohérence.",
  },
  {
    slug: "egalite-professionnelle",
    icon: Globe,
    title: "Égalité professionnelle femmes-hommes",
    problems: "Malgré les déclarations d'intention, les inégalités persistent dans l'accès aux responsabilités, les rémunérations et les modes de management. Les talents féminins se heurtent à des plafonds invisibles.",
    benefits: "Promouvoir concrètement l'égalité professionnelle comme levier de performance et d'attractivité. Identifier et corriger les biais, structurer des politiques inclusives et mesurables.",
  },
  {
    slug: "ia-transformation",
    icon: Brain,
    title: "IA & transformation du travail",
    problems: "L'intelligence artificielle transforme les métiers, les compétences et les modes d'organisation. La plupart des dirigeants n'ont ni la grille de lecture ni le recul nécessaires pour anticiper ces mutations.",
    benefits: "Comprendre l'impact de l'IA sur le management et les organisations. Préparer les équipes, adapter les pratiques et transformer la disruption technologique en avantage stratégique.",
  },
  {
    slug: "culture-economique",
    icon: BookOpen,
    title: "Culture économique, managériale et juridique",
    problems: "Les décideurs évoluent dans des environnements de plus en plus complexes où les dimensions économiques, managériales et juridiques s'entremêlent. Un déficit de culture transversale conduit à des décisions partielles et risquées.",
    benefits: "Développer une vision intégrée des enjeux économiques, managériaux et juridiques. Former les dirigeants et étudiants à une lecture systémique des organisations et de leur environnement.",
  },
  {
    slug: "negociation",
    icon: Crosshair,
    title: "Négociation",
    problems: "La négociation est souvent réduite à un rapport de force ou à une simple question de prix. Les équipes manquent de méthode, cèdent trop vite ou rigidifient les échanges au détriment de la relation commerciale.",
    benefits: "Structurer les approches de négociation, développer l'écoute stratégique et la capacité à construire des accords durables qui préservent la valeur et la relation.",
  },
  {
    slug: "culture-africaine",
    icon: Globe,
    title: "Culture générale africaine",
    problems: "L'Afrique est un continent en transformation rapide, mais les cadres dirigeants et les étudiants en manquent souvent une compréhension fine : dynamiques économiques, enjeux géopolitiques, diversité culturelle et opportunités stratégiques restent méconnus.",
    benefits: "Développer une connaissance approfondie des réalités africaines contemporaines : économie, gouvernance, entrepreneuriat, cultures et dynamiques sociales. Un atout stratégique pour les organisations tournées vers l'international.",
  },
];

const Expertises = () => {
  useScrollAnimation();
  useSEO({
    title: "Expertises – Management Skills | Leadership, stratégie, management, gouvernance",
    description: "12 domaines d'expertise : leadership, stratégie, management, gouvernance, recrutement, entrepreneuriat, gestion de crise, Value Selling, SPIN, management éthique, égalité professionnelle, IA.",
  });

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Savoir-faire</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Nos <span className="text-fuchsia">expertises</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Chaque expertise que nous déployons répond à des problématiques réelles,
              observées sur le terrain auprès de dirigeants, d'entrepreneurs et d'organisations.
              Pas de théorie déconnectée : des réponses concrètes à des enjeux concrets.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {expertises.map((exp, i) => (
              <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-1 flex md:justify-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="md:col-span-11">
                    <h2 className="font-heading text-xl font-bold text-foreground mb-4">{exp.title}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-heading font-semibold text-primary uppercase tracking-wider mb-2">Problématiques</p>
                        <p className="text-foreground/70 font-body leading-relaxed text-sm">{exp.problems}</p>
                      </div>
                      <div>
                        <p className="text-xs font-heading font-semibold text-secondary uppercase tracking-wider mb-2">Bénéfices de l'accompagnement</p>
                        <p className="text-foreground/70 font-body leading-relaxed text-sm">{exp.benefits}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {i < expertises.length - 1 && <div className="border-b border-border mt-10" />}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-on-scroll">
            <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
              Échanger sur vos enjeux <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertises;
