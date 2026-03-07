import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import networkImage from "@/assets/network-experts.jpg";

const domaines = [
  "Stratégie commerciale",
  "Transformation digitale",
  "Ressources humaines",
  "Innovation",
  "Gouvernance",
];

const Reseau = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Un réseau d'<span className="text-fuchsia">experts</span> métiers
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <p className="text-lg font-body leading-relaxed text-foreground/80 mb-8">
                Management Skills peut mobiliser un réseau d'experts afin d'accompagner
                les organisations sur des problématiques complexes.
              </p>
              <ul className="space-y-3">
                {domaines.map((d, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-body text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-on-scroll rounded-lg overflow-hidden" style={{ transitionDelay: "200ms" }}>
              <img src={networkImage} alt="Réseau d'experts interconnectés" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reseau;
