import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Award, BookOpen, Users, Briefcase } from "lucide-react";
import fabienImage from "@/assets/fabien-portrait.jpg";

const About = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Le cabinet</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              À <span className="text-fuchsia">propos</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Management Skills est un cabinet de conseil, de formation et de coaching exécutif
              dédié aux dirigeants, managers et entrepreneurs qui veulent faire de leur leadership
              un véritable levier de transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 animate-on-scroll">
              <img
                src={fabienImage}
                alt="Fabien Berruyer, fondateur de Management Skills"
                className="w-full rounded-lg"
                style={{ boxShadow: "var(--shadow-card-hover)" }}
              />
            </div>
            <div className="md:col-span-3 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Fabien BERRUYER
              </h2>
              <p className="text-fuchsia font-heading font-semibold text-sm mb-6">
                Fondateur & Dirigeant — Management Skills
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                Fabien Berruyer est entrepreneur, formateur et consultant spécialisé dans le leadership,
                la stratégie d'entreprise et la transformation des organisations. Fort de plus de 15 années
                d'expérience dans le conseil et l'accompagnement de dirigeants, il a développé une expertise
                reconnue dans le pilotage de la performance managériale.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                Il intervient auprès de dirigeants d'entreprise, d'entrepreneurs, d'écoles de commerce,
                d'institutions et d'organisations en transformation, avec une conviction forte : le leadership
                n'est pas un talent inné, mais une discipline qui s'apprend, se structure et se perfectionne.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                Certifié par les Nations Unies en matière de promotion de l'égalité des genres,
                Fabien Berruyer porte un engagement fort en faveur d'un management responsable, inclusif et éthique.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-8">
                Sa méthode repose sur l'alliance entre exigence intellectuelle, pragmatisme opérationnel
                et accompagnement humain de qualité.
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

      {/* Valeurs */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Nos engagements</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Les valeurs de <span className="gradient-text">Management Skills</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "Une exigence constante dans la qualité de nos interventions, de nos contenus et de nos résultats." },
              { icon: BookOpen, title: "Rigueur intellectuelle", desc: "Chaque accompagnement repose sur des fondements solides, des méthodologies éprouvées et une analyse fine des enjeux." },
              { icon: Users, title: "Responsabilité", desc: "Un engagement en faveur d'un leadership éthique, inclusif et respectueux des personnes et des organisations." },
              { icon: Briefcase, title: "Impact opérationnel", desc: "Nous ne théorisons pas. Nous produisons des résultats mesurables et des transformations durables." },
            ].map((v, i) => (
              <div key={i} className="card-expertise text-center animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
