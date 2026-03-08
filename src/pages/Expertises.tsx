import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Target, TrendingUp, Shield, BarChart3,
  Lightbulb, Globe, Trophy, RefreshCw,
  AlertTriangle, UserX, Clock, Ban, Flame, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const expertises = [
  {
    icon: Target,
    title: "Leadership et management stratégique",
    desc: "Développer les compétences de leadership et construire des pratiques managériales performantes et responsables.",
    pain: "Managers promus sans préparation, équipes sans cap clair, décisions incohérentes.",
    impact: "Perte de confiance des équipes, désengagement et turnover des meilleurs éléments.",
  },
  {
    icon: TrendingUp,
    title: "Stratégie d'entreprise et transformation organisationnelle",
    desc: "Accompagner les organisations dans l'analyse stratégique, le positionnement et la conduite du changement.",
    pain: "Stratégie floue ou inexistante, résistance au changement, silos organisationnels.",
    impact: "Stagnation de l'activité, perte de parts de marché et épuisement des équipes dans des projets sans direction.",
  },
  {
    icon: Shield,
    title: "Gestion de crise et prise de décision",
    desc: "Former les dirigeants à la décision en situation d'incertitude, de pression et de complexité.",
    pain: "Paralysie face aux crises, décisions tardives ou émotionnelles, absence de protocole.",
    impact: "Aggravation des situations critiques, perte de crédibilité et dommages réputationnels irréversibles.",
  },
  {
    icon: BarChart3,
    title: "Performance commerciale",
    desc: "Méthodes Value Selling et SPIN Selling pour structurer et optimiser la performance commerciale.",
    pain: "Cycles de vente trop longs, taux de conversion faibles, discours commercial générique.",
    impact: "Chiffre d'affaires en berne, marges compressées et dépendance à quelques clients historiques.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneuriat et innovation",
    desc: "Accompagner les porteurs de projets et les intrapreneurs dans la structuration et le développement de leurs initiatives.",
    pain: "Idée prometteuse mais non structurée, difficulté à convaincre les investisseurs, pivots mal gérés.",
    impact: "Projets abandonnés prématurément, burn de trésorerie sans traction et opportunités de marché manquées.",
  },
  {
    icon: Globe,
    title: "Management interculturel et inclusion",
    desc: "Intégrer la diversité culturelle et promouvoir l'inclusion comme leviers de performance.",
    pain: "Incompréhensions culturelles, tensions dans les équipes internationales, sentiment d'exclusion.",
    impact: "Collaboration dégradée, échec de projets internationaux et atteinte à la marque employeur.",
  },
  {
    icon: Trophy,
    title: "Management du sport et performance collective",
    desc: "Transposer les pratiques du sport de haut niveau dans le management des équipes et des organisations.",
    pain: "Manque de cohésion d'équipe, absence de culture de la performance, individualisme.",
    impact: "Résultats collectifs en deçà du potentiel, frustration des talents et incapacité à atteindre les objectifs ambitieux.",
  },
  {
    icon: RefreshCw,
    title: "Transformation managériale",
    desc: "Moderniser les cultures managériales pour répondre aux défis contemporains des organisations.",
    pain: "Pratiques managériales obsolètes, déconnexion avec les nouvelles générations, rigidité organisationnelle.",
    impact: "Fuite des talents, image d'entreprise vieillissante et incapacité à attirer les profils clés.",
  },
];

const Expertises = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Nos <span className="text-fuchsia">expertises</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Des expertises stratégiques pour accompagner les organisations dans leurs enjeux les plus complexes.
              Chaque expertise répond à des problématiques concrètes que nous observons au quotidien chez nos clients.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {expertises.map((exp, i) => (
              <div key={i} className="card-expertise animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}>
                <exp.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{exp.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">{exp.desc}</p>
                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-body text-foreground/70">
                      <span className="font-semibold">Problème :</span> {exp.pain}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Flame className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-body text-foreground/70">
                      <span className="font-semibold">Impact :</span> {exp.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-on-scroll">
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
