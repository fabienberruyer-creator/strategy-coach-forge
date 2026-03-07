import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Vision = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-8">
              Vision et <span className="text-fuchsia">méthode</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed mb-6">
              Le management n'est pas une simple compétence technique. C'est un art stratégique
              qui allie vision, exigence et intelligence relationnelle.
            </p>
            <p className="text-off-white/70 font-body text-lg leading-relaxed mb-6">
              Management Skills fonde sa méthode sur trois piliers :
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Rigueur analytique", desc: "Chaque accompagnement repose sur un diagnostic précis et une compréhension fine des enjeux de l'organisation." },
              { title: "Exigence opérationnelle", desc: "Nous ne nous contentons pas de théoriser. Nos interventions produisent des résultats mesurables et durables." },
              { title: "Vision stratégique", desc: "Prendre de la hauteur pour anticiper, décider et agir avec discernement dans un monde incertain." },
            ].map((item, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
