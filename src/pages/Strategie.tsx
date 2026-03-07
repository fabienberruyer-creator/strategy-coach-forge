import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const items = [
  "Analyse stratégique",
  "Positionnement concurrentiel",
  "Développement d'activité",
  "Structuration des organisations",
  "Pilotage de transformation",
];

const Strategie = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Stratégie et transformation <span className="text-fuchsia">des organisations</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-8">
              La stratégie consiste à analyser un environnement complexe, prendre des décisions
              structurantes et mobiliser les équipes autour d'une vision claire.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-10">
              Management Skills accompagne les organisations dans :
            </p>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-body text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategie;
