import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin } from "lucide-react";
import fabienImage from "@/assets/fabien-portrait.jpg";

const About = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              À <span className="text-fuchsia">propos</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 animate-on-scroll">
              <img
                src={fabienImage}
                alt="Fabien Berruyer"
                className="w-full rounded-lg"
                style={{ boxShadow: "var(--shadow-card-hover)" }}
              />
            </div>
            <div className="md:col-span-3 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Fabien BERRUYER
              </h2>
              <p className="text-fuchsia font-heading font-semibold text-sm mb-6">
                Fondateur & Dirigeant
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                Fabien Berruyer est entrepreneur, formateur et consultant spécialisé dans le leadership,
                la stratégie et la transformation des organisations.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-8">
                Il intervient auprès de dirigeants, d'entrepreneurs, d'écoles de commerce
                et d'organisations souhaitant renforcer leurs pratiques managériales.
              </p>
              <a
                href="https://www.linkedin.com/in/fabienberruyer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Voir le profil LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
