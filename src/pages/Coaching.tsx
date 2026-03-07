import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Compass, Briefcase } from "lucide-react";

const formats = [
  { icon: User, title: "Coaching individuel", desc: "Un accompagnement personnalisé pour les dirigeants et managers." },
  { icon: Compass, title: "Mentoring d'entrepreneurs", desc: "Guider les entrepreneurs dans les phases clés de leur parcours." },
  { icon: Briefcase, title: "Accompagnement stratégique", desc: "Un regard extérieur et expert sur les décisions stratégiques." },
];

const Coaching = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Coaching <span className="text-fuchsia">exécutif</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              Diriger implique des décisions complexes et parfois solitaires.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-10">
              Le coaching de dirigeants permet de prendre du recul stratégique, clarifier les décisions,
              renforcer l'impact managérial et gérer les situations sensibles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <div key={i} className="card-expertise text-center animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Coaching;
