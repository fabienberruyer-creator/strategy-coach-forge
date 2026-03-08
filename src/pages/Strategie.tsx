import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, ArrowRight, AlertTriangle, Flame, Search, Map, Rocket, Settings, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: Search,
    title: "Analyse stratégique",
    desc: "Diagnostic de l'environnement concurrentiel, identification des forces et des vulnérabilités, cartographie des opportunités.",
    pain: "Décisions basées sur l'intuition, méconnaissance du paysage concurrentiel, angles morts stratégiques.",
    impact: "Investissements mal orientés, positionnement fragile et vulnérabilité face aux disruptions du marché.",
  },
  {
    icon: Map,
    title: "Positionnement concurrentiel",
    desc: "Définition d'un positionnement différenciant et construction d'avantages compétitifs durables.",
    pain: "Offre indifférenciée, guerre des prix, difficulté à justifier la valeur ajoutée.",
    impact: "Érosion des marges, perte de clients au profit de concurrents mieux positionnés et image de marque diluée.",
  },
  {
    icon: Rocket,
    title: "Développement d'activité",
    desc: "Structuration de plans de croissance, diversification des revenus et conquête de nouveaux marchés.",
    pain: "Croissance en plateau, dépendance à un seul marché ou client, difficulté à scaler.",
    impact: "Stagnation du chiffre d'affaires, fragilité économique et incapacité à financer l'innovation.",
  },
  {
    icon: Settings,
    title: "Structuration des organisations",
    desc: "Optimisation des structures organisationnelles, clarification des rôles et mise en place de processus de gouvernance efficaces.",
    pain: "Rôles flous, doublons de responsabilités, gouvernance informelle et décisions opaques.",
    impact: "Conflits internes, lenteur d'exécution et frustration des équipes qui ne savent pas qui décide quoi.",
  },
  {
    icon: RefreshCw,
    title: "Pilotage de transformation",
    desc: "Conduite du changement, gestion des résistances et déploiement de nouvelles pratiques à l'échelle de l'organisation.",
    pain: "Résistance au changement, projets de transformation enlisés, fatigue organisationnelle.",
    impact: "Transformations avortées, investissements perdus et cynisme généralisé face aux projets futurs.",
  },
];

const Strategie = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Conseil stratégique</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Stratégie et transformation <span className="text-fuchsia">des organisations</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Aider les dirigeants à penser, structurer et piloter la stratégie de leur organisation
              dans un environnement complexe et en constante mutation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-on-scroll">
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              La stratégie ne se limite pas à un exercice intellectuel. Elle consiste à analyser un environnement complexe,
              prendre des décisions structurantes et mobiliser les équipes autour d'une vision claire et partagée.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              Trop d'organisations confondent activité et stratégie. Elles multiplient les projets sans hiérarchiser,
              s'épuisent dans l'opérationnel sans prendre de recul. Management Skills intervient pour redonner du sens,
              de la structure et de la direction.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-10">
              Management Skills accompagne les organisations dans cinq dimensions clés :
            </p>
          </div>

          <div className="space-y-6">
            {items.map((item, i) => (
              <div key={i} className="bg-background rounded-2xl border border-border p-6 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 pl-16">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-body text-foreground/70">
                      <span className="font-semibold">Problème :</span> {item.pain}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Flame className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-body text-foreground/70">
                      <span className="font-semibold">Impact :</span> {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 animate-on-scroll">
            <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
              Discuter de votre stratégie <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategie;
