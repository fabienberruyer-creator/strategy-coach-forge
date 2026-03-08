import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import networkImage from "@/assets/network-experts.jpg";

const domaines = [
  { title: "Stratégie commerciale", desc: "Structuration de l'offre, conquête de marchés, optimisation de la performance commerciale." },
  { title: "Transformation digitale", desc: "Accompagnement des organisations dans leur transition numérique et l'adoption de nouveaux outils." },
  { title: "Ressources humaines", desc: "Politique RH, gestion des talents, développement des compétences et engagement collaborateur." },
  { title: "Innovation", desc: "Méthodologies d'innovation, design thinking, intrapreneuriat et création de valeur." },
  { title: "Gouvernance", desc: "Structuration de la gouvernance, organisation des instances décisionnelles et pilotage stratégique." },
];

const Reseau = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Notre écosystème</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Un réseau d'<span className="text-fuchsia">experts</span> métiers
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Pour répondre aux problématiques les plus complexes, Management Skills s'appuie sur un réseau
              de professionnels reconnus dans leurs domaines respectifs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
                Les organisations font face à des défis multidimensionnels qui nécessitent des expertises
                complémentaires. Management Skills peut mobiliser un réseau d'experts sélectionnés pour leur excellence
                et leur capacité à produire des résultats concrets.
              </p>
              <p className="text-lg font-body leading-relaxed text-foreground/80 mb-8">
                Ce réseau permet de construire des dispositifs d'accompagnement sur mesure,
                combinant vision stratégique et expertise sectorielle.
              </p>
              <div className="space-y-5">
                {domaines.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-sm">{d.title}</h3>
                      <p className="text-sm text-muted-foreground font-body">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
                  Nous contacter <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
