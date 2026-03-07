import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-leadership.jpg";
import {
  Target, TrendingUp, Shield, BarChart3,
  Lightbulb, Globe, Trophy, RefreshCw
} from "lucide-react";

const expertises = [
  { icon: Target, title: "Leadership et management stratégique", desc: "Développer un leadership structuré et un management de haute performance." },
  { icon: TrendingUp, title: "Stratégie d'entreprise et transformation", desc: "Accompagner les organisations dans leurs transformations stratégiques." },
  { icon: Shield, title: "Gestion de crise et prise de décision", desc: "Renforcer la capacité de décision en situation complexe." },
  { icon: BarChart3, title: "Performance commerciale", desc: "Value Selling, SPIN Selling et excellence commerciale." },
  { icon: Lightbulb, title: "Entrepreneuriat et innovation", desc: "Structurer et accélérer les projets entrepreneuriaux." },
  { icon: Globe, title: "Management interculturel et inclusion", desc: "Favoriser la diversité et l'inclusion dans les organisations." },
  { icon: Trophy, title: "Management du sport et performance", desc: "Transposer les pratiques du sport de haut niveau au management." },
  { icon: RefreshCw, title: "Transformation managériale", desc: "Moderniser les pratiques managériales des organisations." },
];

const Index = () => {
  useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-off-white mb-6 animate-fade-in-up">
            Former les leaders qui transforment les organisations
          </h1>
          <p className="text-off-white/70 text-lg md:text-xl font-body mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Leadership – Management – Stratégie – Entrepreneuriat – Transformation organisationnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/expertises" className="btn-hero-primary">Découvrir nos expertises</Link>
            <Link to="/contact" className="btn-hero-outline">Prendre contact</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="animate-on-scroll">
            <p className="text-lg md:text-xl font-body leading-relaxed text-foreground/80">
              Dans un environnement économique marqué par l'incertitude et les transformations rapides,
              les organisations ne manquent pas d'outils.
            </p>
            <p className="text-lg md:text-xl font-body leading-relaxed text-foreground/80 mt-4">
              Elles manquent souvent de <strong className="text-primary">leadership structuré</strong>,
              de <strong className="text-primary">vision stratégique</strong> et
              de <strong className="text-primary">méthodes managériales solides</strong>.
            </p>
            <p className="text-lg md:text-xl font-body leading-relaxed text-foreground/80 mt-4">
              Management Skills accompagne dirigeants, managers et entrepreneurs dans le développement
              d'un leadership exigeant, responsable et opérationnel.
            </p>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Domaines d'<span className="gradient-text">expertise</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Des compétences stratégiques au service de la performance des organisations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertises.map((exp, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <exp.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl text-center animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-off-white mb-6">
            Une expertise reconnue au niveau <span className="text-fuchsia">international</span>
          </h2>
          <p className="text-off-white/70 font-body text-lg leading-relaxed mb-4">
            Le dirigeant de Management Skills est certifié par les Nations Unies dans le domaine
            de la promotion de l'égalité des genres et de l'égalité professionnelle.
          </p>
          <p className="text-off-white/50 font-body">
            Cette certification renforce l'engagement du cabinet en faveur de l'égalité professionnelle,
            de la diversité et de l'inclusion.
          </p>
        </div>
      </section>

      {/* Citation */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="text-center px-6 max-w-3xl mx-auto animate-on-scroll">
          <blockquote className="font-heading text-2xl md:text-4xl font-bold text-off-white leading-snug mb-6">
            « Former des managers est utile.<br />
            Former des dirigeants responsables est indispensable. »
          </blockquote>
          <p className="text-fuchsia font-heading font-semibold text-lg">— Management Skills</p>
        </div>
      </section>
    </>
  );
};

export default Index;
