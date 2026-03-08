import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Rocket, Target, Presentation, Mic, Search, ArrowRight, CheckCircle, AlertTriangle, Flame, HelpCircle, DollarSign, Timer, MessageCircleWarning } from "lucide-react";
import { Link } from "react-router-dom";

const painPoints = [
  {
    icon: HelpCircle,
    pain: "Une idée prometteuse mais pas structurée",
    desc: "Vous avez la vision mais pas la méthode. L'offre reste floue, le modèle économique n'est pas validé.",
    impact: "Mois perdus à développer un produit que personne n'achètera. Trésorerie brûlée sans traction marché.",
  },
  {
    icon: MessageCircleWarning,
    pain: "Un pitch qui ne convainc pas",
    desc: "Face aux investisseurs, le message est confus, le storytelling absent, les objections déstabilisent.",
    impact: "Levées de fonds échouées, portes fermées et perte de crédibilité auprès de l'écosystème.",
  },
  {
    icon: DollarSign,
    pain: "Difficulté à trouver les bons investisseurs",
    desc: "Vous ne savez pas qui cibler, comment approcher et quoi leur montrer pour déclencher l'intérêt.",
    impact: "Temps gaspillé sur les mauvais interlocuteurs, valorisation sous-estimée et conditions défavorables.",
  },
  {
    icon: Timer,
    pain: "Un MVP qui n'avance pas",
    desc: "Le développement s'enlise, les priorités changent sans cesse, le produit ne sort jamais.",
    impact: "Time-to-market retardé, concurrents qui prennent l'avantage et démotivation de l'équipe fondatrice.",
  },
];

const accompagnements = [
  {
    icon: Target,
    title: "Structuration de l'offre",
    desc: "Clarifier votre proposition de valeur, segmenter votre marché et construire une offre lisible, différenciante et scalable. Nous vous aidons à passer de l'idée au modèle économique viable.",
  },
  {
    icon: Rocket,
    title: "Construction du MVP",
    desc: "Définir les fonctionnalités essentielles, prioriser le développement et lancer rapidement un produit minimum viable pour tester votre marché et collecter les premiers retours utilisateurs.",
  },
  {
    icon: Presentation,
    title: "Création du pitch deck",
    desc: "Concevoir un pitch deck percutant et professionnel qui raconte votre histoire, démontre votre traction et convainc les investisseurs de la solidité de votre projet.",
  },
  {
    icon: Mic,
    title: "Formation au pitch & storytelling",
    desc: "Maîtriser l'art du pitch : structure narrative, posture, gestion du temps, réponse aux objections. Apprendre à captiver un jury, un investisseur ou un partenaire en quelques minutes.",
  },
  {
    icon: Search,
    title: "Recherche d'investisseurs",
    desc: "Identifier les bons interlocuteurs — business angels, fonds d'amorçage, VCs — et préparer chaque rencontre avec une approche ciblée, professionnelle et stratégique.",
  },
];

const etapes = [
  "Diagnostic de votre projet et de votre positionnement",
  "Structuration de l'offre et du modèle économique",
  "Construction du MVP et validation marché",
  "Élaboration du pitch deck et entraînement intensif",
  "Stratégie de levée de fonds et mise en relation investisseurs",
  "Suivi post-levée et accompagnement à la croissance",
];

const Entrepreneuriat = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              De l'idée à la levée de fonds
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Accompagnement <span className="text-fuchsia">entrepreneurial</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Un accompagnement complet pour les entrepreneurs qui veulent structurer leur projet,
              convaincre les investisseurs et accélérer leur croissance.
            </p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-padding bg-destructive/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Constats</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Les freins qui bloquent les entrepreneurs
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Des obstacles récurrents qui, sans accompagnement adapté, peuvent faire échouer les projets les plus prometteurs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 border border-border animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.pain}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-2">{item.desc}</p>
                    <div className="flex items-start gap-2">
                      <Flame className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs font-body text-foreground/60">
                        <span className="font-semibold">Impact :</span> {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-on-scroll mb-12">
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              Entreprendre, c'est transformer une conviction en réalité économique. Mais entre l'intuition
              fondatrice et le premier euro levé, le chemin est semé d'arbitrages complexes, de pivots
              nécessaires et de présentations décisives.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80">
              Management Skills accompagne les entrepreneurs à chaque étape critique : de la clarification
              de l'offre à la recherche d'investisseurs, en passant par la construction du MVP et la
              maîtrise du pitch. Notre approche est exigeante, opérationnelle et orientée résultats.
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 animate-on-scroll">
            Nos domaines d'accompagnement
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {accompagnements.map((a, i) => (
              <div
                key={i}
                className="card-expertise animate-on-scroll"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <a.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 animate-on-scroll">
              Un parcours structuré en 6 étapes
            </h2>
            <div className="space-y-3">
              {etapes.map((e, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 animate-on-scroll"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <span className="text-primary font-heading font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="font-body text-foreground/80 text-lg">{e}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent/30 rounded-2xl p-8 md:p-10 animate-on-scroll mb-12">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              À qui s'adresse cet accompagnement ?
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Entrepreneurs en phase d'amorçage ou de pré-seed",
                "Porteurs de projet en recherche de structuration",
                "Startups préparant une levée de fonds",
                "Intrapreneurs développant un nouveau business unit",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center animate-on-scroll">
            <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
              Discuter de votre projet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Entrepreneuriat;
