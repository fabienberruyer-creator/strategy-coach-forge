import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import {
  GraduationCap, BookOpen, Users, Brain, Globe, Mic,
  ArrowRight, Award, Target, Lightbulb, CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const disciplines = [
  { icon: Target, title: "Leadership & management", desc: "Cours et séminaires sur le leadership contemporain, le management des équipes et la posture managériale. Des interventions qui préparent les étudiants aux réalités du terrain." },
  { icon: Brain, title: "Intelligence artificielle & management", desc: "Décryptage de l'impact de l'IA sur les métiers, les organisations et les pratiques managériales. Un sujet transversal qui concerne toutes les filières." },
  { icon: Mic, title: "Entrepreneuriat & innovation", desc: "Accompagnement des projets entrepreneuriaux étudiants : du business model au pitch deck, en passant par la validation de marché et le positionnement." },
  { icon: Lightbulb, title: "Stratégie d'entreprise", desc: "Analyse stratégique, diagnostic concurrentiel, prise de décision et gouvernance. Des cas pratiques ancrés dans les réalités économiques contemporaines." },
  { icon: Globe, title: "Égalité professionnelle & management éthique", desc: "Sensibilisation aux enjeux d'égalité, de diversité et de responsabilité managériale. Certification Nations Unies à l'appui." },
  { icon: BookOpen, title: "Culture économique, managériale et juridique", desc: "Fondamentaux de l'économie d'entreprise, du droit du travail et de la gouvernance. Un socle indispensable pour les futurs décideurs." },
  { icon: Users, title: "Négociation & performance commerciale", desc: "Techniques de négociation avancées, Value Selling, SPIN Selling. Des méthodes éprouvées pour former les futurs commerciaux et managers." },
  { icon: Globe, title: "Culture générale africaine", desc: "Dynamiques économiques, géopolitiques et culturelles du continent africain. Un savoir transversal pour les étudiants à dimension internationale." },
];

const atouts = [
  "Plus de 15 ans d'expérience en management et coaching de dirigeants",
  "Intervenant reconnu en écoles de commerce et universités",
  "Approche terrain : cas réels, mises en situation, retours d'expérience",
  "Certifié Nations Unies en égalité professionnelle",
  "Reconnu parmi les coachs carrière les plus influents de France (Favikon 2025)",
  "Organisme de formation déclaré (N° 32 59 13455 59)",
];

const formats = [
  { title: "Cours magistraux & séminaires", desc: "Interventions structurées sur un ou plusieurs modules, intégrées dans le programme académique. De 2h à plusieurs jours selon les besoins." },
  { title: "Ateliers pratiques", desc: "Sessions interactives centrées sur la mise en pratique : jeux de rôle, études de cas, simulations de négociation, travail sur des projets réels." },
  { title: "Conférences & keynotes", desc: "Prises de parole devant des promotions entières ou lors d'événements académiques. Format percutant pour ouvrir des perspectives et susciter la réflexion." },
  { title: "Accompagnement de projets", desc: "Suivi et coaching de projets entrepreneuriaux étudiants : incubateurs, concours de pitch, projets de fin d'études." },
];

const Universites = () => {
  useScrollAnimation();
  useSEO({
    title: "Universités & Business Schools – Management Skills | Interventions académiques",
    description: "Interventions académiques en écoles de commerce, universités et programmes de formation continue. Leadership, management, entrepreneuriat, IA, stratégie. Lille, Hauts-de-France.",
  });

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Enseignement supérieur</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Universités & <span className="text-fuchsia">Business Schools</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Management Skills intervient dans l'enseignement supérieur — écoles de commerce, universités,
              programmes exécutifs et formations continues — pour transmettre une expertise ancrée dans la réalité
              du terrain et préparer les futurs leaders aux défis du monde professionnel.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Une approche pédagogique <span className="gradient-text">exigeante</span>
            </h2>
            <div className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed">
              <p>
                Nos interventions académiques ne sont pas des cours théoriques déconnectés du réel. Elles sont
                construites sur une conviction : les étudiants d'aujourd'hui seront les dirigeants de demain,
                et ils méritent d'être confrontés à la réalité du management, pas à une version édulcorée.
              </p>
              <p>
                Chaque intervention combine apport conceptuel rigoureux, cas pratiques issus de situations réelles,
                mises en situation et retours d'expérience de plus de 15 ans d'accompagnement de dirigeants
                et d'entrepreneurs. L'objectif : former des professionnels lucides, structurés et opérationnels.
              </p>
              <p>
                Nous travaillons en étroite collaboration avec les équipes pédagogiques pour intégrer nos interventions
                dans les parcours académiques de manière cohérente et complémentaire. Chaque module est conçu sur mesure,
                adapté au niveau des étudiants, aux objectifs du programme et aux compétences visées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Disciplines & thématiques
            </h2>
            <p className="text-muted-foreground font-body mt-3 max-w-2xl mx-auto">
              Des interventions couvrant l'ensemble des compétences managériales et stratégiques
              nécessaires aux futurs décideurs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map((d, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <d.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-foreground text-sm mb-2">{d.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Formats d'intervention
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {formats.map((f, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <h3 className="font-heading font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Pourquoi faire appel à <span className="gradient-text">Management Skills</span> ?
            </h2>
            <div className="space-y-4">
              {atouts.map((a, i) => (
                <div key={i} className="flex items-start gap-4 animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/80">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organisme */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8 animate-on-scroll">
            <Award className="w-16 h-16 text-primary-foreground/80 flex-shrink-0" />
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                Organisme de formation déclaré
              </h3>
              <p className="text-primary-foreground/70 font-body">
                N° 32 59 13455 59 — Préfecture des Hauts-de-France.
                Éligible OPCO et plans de développement des compétences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lien formations */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center animate-on-scroll">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Découvrir tous nos thèmes d'intervention
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Retrouvez l'ensemble de nos thématiques de formation et de conférence,
            détaillées et adaptables à vos besoins pédagogiques.
          </p>
          <Link to="/formations" className="btn-hero-primary inline-flex items-center gap-2">
            Voir les formations & conférences <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-light text-center">
        <div className="container mx-auto max-w-2xl animate-on-scroll">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vous souhaitez intégrer une intervention dans votre programme ?
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Parlons de vos objectifs pédagogiques, de votre public et de la manière
            dont nous pouvons construire ensemble une intervention sur mesure.
          </p>
          <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
            Nous contacter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Universites;
