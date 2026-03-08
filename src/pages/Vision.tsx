import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Crosshair, Compass, AlertTriangle, TrendingDown, Users, ShieldOff, Zap, Target } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    pain: "Des décisions prises dans l'urgence, sans vision claire",
    impact: "Dispersion des ressources, incohérences stratégiques et perte de crédibilité auprès des équipes et des parties prenantes.",
  },
  {
    icon: TrendingDown,
    pain: "Un management qui stagne face à la complexité",
    impact: "Démotivation des talents, turnover accéléré et dégradation progressive de la performance collective.",
  },
  {
    icon: Users,
    pain: "Des équipes désalignées sur les priorités",
    impact: "Conflits internes, doublons opérationnels et perte d'efficacité qui freinent la croissance de l'organisation.",
  },
  {
    icon: ShieldOff,
    pain: "Un leadership fragile en période de crise",
    impact: "Paralysie décisionnelle, perte de confiance des équipes et vulnérabilité face aux concurrents plus agiles.",
  },
];

const Vision = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Notre approche</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-8">
              Vision et <span className="text-fuchsia">méthode</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed mb-6">
              Le management n'est pas une simple compétence technique. C'est un art stratégique
              qui allie vision, exigence et intelligence relationnelle. Les organisations qui performent
              durablement sont celles qui investissent dans la qualité de leur leadership.
            </p>
            <p className="text-off-white/70 font-body text-lg leading-relaxed mb-6">
              Chez Management Skills, nous considérons que chaque leader est unique, mais que les fondamentaux
              du management d'excellence sont universels. Notre méthode repose sur trois piliers fondateurs :
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
              Les douleurs que nous observons chez nos clients
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Des problématiques récurrentes qui, non traitées, compromettent durablement la performance et la cohésion des organisations.
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
                    <h3 className="font-heading font-bold text-foreground mb-2">{item.pain}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      <span className="font-semibold text-foreground/70">Impact :</span> {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution: 3 pillars */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Notre réponse</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Trois piliers pour un leadership d'excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Crosshair, title: "Rigueur analytique", desc: "Chaque accompagnement commence par un diagnostic précis. Nous analysons les enjeux organisationnels, les dynamiques d'équipe et les défis stratégiques pour construire un plan d'action sur mesure, ancré dans la réalité du terrain." },
              { icon: Eye, title: "Exigence opérationnelle", desc: "Nous ne nous contentons pas de théoriser. Nos interventions sont conçues pour produire des résultats mesurables et durables. Chaque module, chaque coaching, chaque conseil vise un impact concret sur la performance." },
              { icon: Compass, title: "Vision stratégique", desc: "Prendre de la hauteur pour anticiper, décider et agir avec discernement dans un monde incertain. Nous aidons les dirigeants à construire une vision claire et à la déployer avec méthode au sein de leur organisation." },
            ].map((item, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conviction */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-3xl animate-on-scroll">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Notre conviction
          </h2>
          <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
            Les entreprises les plus performantes ne sont pas celles qui ont les meilleurs outils,
            mais celles qui ont les meilleurs leaders. Le leadership ne se décrète pas : il se construit,
            se travaille et se perfectionne avec méthode et engagement.
          </p>
          <p className="text-lg font-body leading-relaxed text-foreground/80">
            C'est cette conviction qui guide chacune de nos interventions. Nous accompagnons des femmes et
            des hommes exigeants, qui refusent la médiocrité managériale et veulent faire de leur leadership
            un véritable levier de transformation pour leur organisation.
          </p>
        </div>
      </section>
    </>
  );
};

export default Vision;
