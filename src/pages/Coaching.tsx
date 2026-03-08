import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Compass, Briefcase, CheckCircle, ArrowRight, AlertTriangle, Flame, Brain, HeartCrack, ShieldAlert, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const painPoints = [
  {
    icon: Brain,
    pain: "Solitude décisionnelle",
    desc: "Vous portez seul des décisions à fort enjeu, sans espace confidentiel pour challenger vos réflexions.",
    impact: "Risque de biais cognitifs, décisions sous-optimales et accumulation de stress pouvant mener à l'épuisement.",
  },
  {
    icon: HeartCrack,
    pain: "Perte d'impact managérial",
    desc: "Votre leadership s'essouffle : les équipes ne suivent plus, la mobilisation faiblit, le message ne passe plus.",
    impact: "Désengagement des collaborateurs, perte d'autorité naturelle et dégradation du climat social.",
  },
  {
    icon: ShieldAlert,
    pain: "Gestion des situations sensibles",
    desc: "Conflits, restructurations, pressions du board — vous manquez d'un regard extérieur pour naviguer ces eaux troubles.",
    impact: "Escalade des tensions, décisions précipitées et dommages relationnels parfois irréparables.",
  },
  {
    icon: Clock,
    pain: "Transitions professionnelles mal préparées",
    desc: "Prise de poste, changement de périmètre ou pivot de carrière — ces moments charnières sont souvent sous-estimés.",
    impact: "Échec d'intégration, perte de crédibilité dans les 100 premiers jours et opportunités manquées.",
  },
];

const formats = [
  { icon: User, title: "Coaching individuel", desc: "Un accompagnement confidentiel et personnalisé pour les dirigeants et managers qui souhaitent renforcer leur posture, clarifier leur vision et maximiser leur impact." },
  { icon: Compass, title: "Mentoring d'entrepreneurs", desc: "Un accompagnement expérimenté pour les entrepreneurs dans les phases clés de leur parcours : lancement, croissance, pivots stratégiques ou levées de fonds." },
  { icon: Briefcase, title: "Accompagnement stratégique", desc: "Un regard extérieur, expert et exigeant sur les décisions stratégiques majeures : repositionnement, restructuration, développement international." },
];

const benefices = [
  "Prendre du recul sur les enjeux stratégiques de votre organisation",
  "Clarifier vos décisions dans les moments d'incertitude ou de pression",
  "Renforcer votre impact managérial et votre leadership",
  "Gérer les situations sensibles avec discernement et assurance",
  "Développer votre intelligence relationnelle et politique",
  "Préparer les transitions professionnelles majeures",
];

const Coaching = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Accompagnement individuel</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Coaching <span className="text-fuchsia">exécutif</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Un espace confidentiel de réflexion, de prise de recul et de développement
              pour les dirigeants qui veulent aller plus loin.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              Diriger implique des décisions complexes, parfois solitaires, souvent à fort enjeu.
              Les dirigeants les plus performants sont ceux qui savent s'entourer d'un regard extérieur
              exigeant et bienveillant pour challenger leurs réflexions et renforcer leur leadership.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-10">
              Le coaching exécutif proposé par Management Skills est un accompagnement structuré,
              confidentiel et orienté résultats, conçu pour les dirigeants, cadres dirigeants et entrepreneurs
              qui refusent le statu quo.
            </p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-padding bg-destructive/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Pourquoi le coaching ?</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Les situations qui appellent un accompagnement
            </h2>
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
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 animate-on-scroll">
              Ce que le coaching vous apporte
            </h2>
            <div className="space-y-3">
              {benefices.map((b, i) => (
                <div key={i} className="flex items-start gap-3 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/80">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-6 animate-on-scroll">
            Nos formats d'accompagnement
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <div key={i} className="card-expertise text-center animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-on-scroll">
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
