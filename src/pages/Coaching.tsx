import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import { User, Compass, Briefcase, CheckCircle, ArrowRight, Shield, Users, RefreshCw, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const problematiques = [
  "Prise de fonction à un poste de direction",
  "Sentiment d'isolement face aux décisions stratégiques",
  "Arbitrages complexes et enjeux contradictoires",
  "Tensions internes au sein du CODIR",
  "Gouvernance fragile ou dysfonctionnelle",
  "Posture de leadership à affirmer ou à faire évoluer",
  "Transformations à piloter dans un contexte incertain",
  "Conflits à dénouer sans les laisser s'envenimer",
  "Crise organisationnelle nécessitant un regard extérieur",
  "Besoin d'un interlocuteur exigeant et confidentiel",
];

const apports = [
  "Clarifier la situation et identifier les vrais leviers d'action",
  "Prendre de la hauteur sur les enjeux stratégiques",
  "Structurer les décisions et renforcer leur cohérence",
  "Relire les dynamiques humaines et organisationnelles",
  "Sortir du brouillard décisionnel et de la surcharge opérationnelle",
  "Renforcer l'impact managérial et la posture de leadership",
  "Remettre du sens et de la méthode dans l'action quotidienne",
];

const formats = [
  { icon: User, title: "Coaching individuel", desc: "Un accompagnement confidentiel et structuré pour les dirigeants qui veulent renforcer leur posture, clarifier leur vision et maximiser leur impact. Travail en profondeur sur la décision, le leadership et la gestion des situations sensibles." },
  { icon: Compass, title: "Accompagnement de CODIR", desc: "Un travail collectif sur le fonctionnement du comité de direction : clarification des rôles, qualité des arbitrages, dynamique de groupe et cohérence stratégique. Parce qu'un CODIR qui fonctionne mal paralyse toute l'organisation." },
  { icon: Briefcase, title: "Accompagnement stratégique", desc: "Un regard extérieur expert et exigeant sur les décisions majeures : repositionnement, restructuration, gestion de crise, développement international. Pour les moments où l'enjeu est trop important pour improviser." },
];

const Coaching = () => {
  useScrollAnimation();
  useSEO({
    title: "Accompagnement de dirigeants – Coaching exécutif | Management Skills",
    description: "Coaching de dirigeants, accompagnement de CODIR et conseil stratégique. Un espace confidentiel pour les leaders qui refusent le statu quo. Lille, Hauts-de-France.",
  });

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Accompagnement</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Accompagnement des <span className="text-fuchsia">dirigeants</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Un accompagnement confidentiel, structuré et orienté résultats pour les dirigeants,
              cadres dirigeants et membres de CODIR qui veulent aller plus loin.
            </p>
          </div>
        </div>
      </section>

      {/* Contexte */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Pourquoi un accompagnement de dirigeant ?
            </h2>
            <div className="space-y-4 text-lg font-body leading-relaxed text-foreground/80">
              <p>
                Diriger, c'est décider. Et décider, c'est souvent être seul face à des enjeux
                qui engagent l'avenir d'une organisation, d'une équipe, d'une trajectoire professionnelle.
                Les dirigeants les plus lucides le savent : cette solitude décisionnelle n'est pas une fatalité.
                C'est un signal qu'il est temps de s'entourer d'un regard extérieur exigeant.
              </p>
              <p>
                Les conséquences d'un leadership qui s'essouffle sont rarement spectaculaires — elles sont insidieuses.
                Les équipes décrochent sans bruit. Les talents partent sans prévenir. Les décisions s'accumulent
                sans cohérence. Et un jour, le dirigeant réalise que son impact n'est plus à la hauteur de ses ambitions.
              </p>
              <p>
                Il y a aussi ces moments charnières — une prise de poste, un conflit de gouvernance,
                une restructuration, un pivot stratégique — où l'enjeu est trop important pour improviser.
                Ce sont des moments qui exigent de la méthode, du recul et une capacité à voir
                ce que l'on ne voit plus quand on est au cœur de l'action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problématiques */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Les situations qui appellent un accompagnement
              </h2>
              <div className="space-y-3">
                {problematiques.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <span className="font-body text-foreground/75 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "150ms" }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Ce que l'accompagnement permet
              </h2>
              <div className="space-y-3">
                {apports.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="font-body text-foreground/75 text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Formats d'accompagnement
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <f.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center animate-on-scroll">
            <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
              Réserver un échange <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coaching;
