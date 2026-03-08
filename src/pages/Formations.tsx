import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import {
  Mic, BookOpen, GraduationCap, Users, Lightbulb, ArrowRight,
  Award, Target, Brain, Shield, BarChart3, Scale, Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const formats = [
  { icon: Mic, title: "Conférence", desc: "Prise de parole structurée devant un public large. Format adapté aux événements d'entreprise, séminaires et assemblées." },
  { icon: Lightbulb, title: "Keynote", desc: "Intervention de cadrage sur un sujet stratégique. Format court et percutant pour ouvrir ou clore un événement." },
  { icon: BookOpen, title: "Formation", desc: "Programme structuré de montée en compétences. De une journée à plusieurs semaines selon les objectifs." },
  { icon: Users, title: "Masterclass", desc: "Session approfondie sur un thème spécifique. Format interactif combinant apport théorique et mise en pratique." },
  { icon: Target, title: "Séminaire & atelier stratégique", desc: "Travail collectif sur les enjeux d'une organisation. Format participatif orienté vers la prise de décision." },
  { icon: GraduationCap, title: "Intervention académique", desc: "Cours et ateliers en écoles de commerce, universités et programmes de formation continue." },
];

const themes = [
  { icon: Target, label: "Leadership contemporain" },
  { icon: Users, label: "Management des équipes" },
  { icon: Shield, label: "Stratégie et prise de décision" },
  { icon: BarChart3, label: "Recrutement et expérience candidat" },
  { icon: Brain, label: "Management à l'ère de l'IA" },
  { icon: Lightbulb, label: "Gouvernance et CODIR" },
  { icon: Mic, label: "Entrepreneuriat" },
  { icon: Scale, label: "Value Selling & SPIN Selling" },
  { icon: Globe, label: "Égalité professionnelle" },
  { icon: Award, label: "Management éthique" },
  { icon: BookOpen, label: "Culture économique, managériale et juridique" },
  { icon: Scale, label: "Négociation" },
  { icon: BarChart3, label: "Value Selling" },
  { icon: Globe, label: "Culture générale africaine" },
];

const Formations = () => {
  useScrollAnimation();
  useSEO({
    title: "Formations & Conférences – Management Skills | Leadership, management, stratégie",
    description: "Conférences, formations, masterclass et interventions académiques en leadership, management, stratégie, IA et gouvernance. Organisme de formation déclaré. Lille, Hauts-de-France.",
  });

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Transmission</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Formations & <span className="text-fuchsia">Conférences</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Fabien Berruyer intervient en tant que conférencier, formateur et intervenant académique
              sur les enjeux contemporains du management, du leadership et de la transformation des organisations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll mb-12">
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              La transmission est au cœur de la démarche de Management Skills. Pas une transmission descendante
              et théorique, mais un partage d'expérience structuré, ancré dans les réalités du terrain
              et conçu pour provoquer une prise de conscience et une mise en mouvement.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80">
              Chaque intervention est conçue sur mesure, adaptée au public, au contexte et aux objectifs
              de l'organisation. Le format varie — de la conférence plénière à l'atelier stratégique en petit comité —
              mais l'exigence reste la même : apporter de la substance, de la clarté et de la valeur.
            </p>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Formats d'intervention
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <f.icon className="w-9 h-9 text-primary mb-4" />
                <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thèmes */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Thèmes d'intervention
            </h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
              Chaque thème peut être traité en conférence, formation, atelier ou intervention académique,
              selon les besoins et le contexte.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {themes.map((t, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card animate-on-scroll" style={{ transitionDelay: `${i * 50}ms` }}>
                <t.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-heading font-semibold text-foreground text-sm">{t.label}</span>
              </div>
            ))}
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

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container mx-auto max-w-2xl animate-on-scroll">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vous souhaitez organiser une intervention ?
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Conférence, formation, masterclass ou atelier stratégique — échangeons sur vos besoins
            et construisons une intervention adaptée à votre contexte.
          </p>
          <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
            Demander une intervention <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Formations;
