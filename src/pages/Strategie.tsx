import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { title: "Analyse stratégique", desc: "Diagnostic de l'environnement concurrentiel, identification des forces et des vulnérabilités, cartographie des opportunités." },
  { title: "Positionnement concurrentiel", desc: "Définition d'un positionnement différenciant et construction d'avantages compétitifs durables." },
  { title: "Développement d'activité", desc: "Structuration de plans de croissance, diversification des revenus et conquête de nouveaux marchés." },
  { title: "Structuration des organisations", desc: "Optimisation des structures organisationnelles, clarification des rôles et mise en place de processus de gouvernance efficaces." },
  { title: "Pilotage de transformation", desc: "Conduite du changement, gestion des résistances et déploiement de nouvelles pratiques à l'échelle de l'organisation." },
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
        <div className="container mx-auto max-w-3xl">
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
            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
