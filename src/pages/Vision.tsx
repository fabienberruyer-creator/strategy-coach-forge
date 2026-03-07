import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Crosshair, Compass } from "lucide-react";

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

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
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
