import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-leadership.jpg";
import fabienImage from "@/assets/fabien-portrait.jpg";
import {
  Target, TrendingUp, Shield, BarChart3,
  Lightbulb, Globe, Trophy, RefreshCw, Award, Users, ArrowRight
} from "lucide-react";

const expertises = [
  { icon: Target, title: "Leadership et management stratégique", desc: "Construire un leadership structuré, développer les postures managériales et installer une culture de la performance durable au sein des équipes dirigeantes." },
  { icon: TrendingUp, title: "Stratégie d'entreprise et transformation", desc: "Conduire des diagnostics stratégiques, définir des plans de développement et piloter les transformations organisationnelles à fort enjeu." },
  { icon: Shield, title: "Gestion de crise et prise de décision", desc: "Préparer les dirigeants à décider sous pression, structurer la réflexion en situation d'incertitude et renforcer la résilience organisationnelle." },
  { icon: BarChart3, title: "Performance commerciale", desc: "Déployer les méthodologies Value Selling et SPIN Selling pour structurer l'approche commerciale et maximiser la création de valeur client." },
  { icon: Lightbulb, title: "Entrepreneuriat et innovation", desc: "Accompagner les porteurs de projets, structurer les business models et accélérer le passage de l'idée au marché." },
  { icon: Globe, title: "Management interculturel et inclusion", desc: "Intégrer la diversité culturelle comme levier stratégique et promouvoir des pratiques managériales inclusives et équitables." },
  { icon: Trophy, title: "Management du sport et performance collective", desc: "Appliquer les principes du sport de haut niveau — cohésion, exigence, préparation mentale — au management des équipes et des organisations." },
  { icon: RefreshCw, title: "Transformation managériale", desc: "Moderniser les pratiques managériales, accompagner les transitions culturelles et faire évoluer les modèles d'organisation vers plus d'agilité." },
];

const chiffres = [
  { value: "15+", label: "années d'expérience" },
  { value: "200+", label: "dirigeants accompagnés" },
  { value: "50+", label: "organisations partenaires" },
  { value: "8", label: "domaines d'expertise" },
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
          <p className="text-fuchsia font-heading font-semibold text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-in-up">
            Conseil · Formation · Coaching exécutif
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-off-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Former les leaders qui transforment les organisations
          </h1>
          <p className="text-off-white/70 text-lg md:text-xl font-body mb-10 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
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
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 animate-on-scroll">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Le leadership au cœur de la <span className="gradient-text">performance</span>
              </h2>
              <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
                Dans un environnement économique marqué par l'incertitude et les transformations rapides,
                les organisations ne manquent pas d'outils. Elles manquent souvent de <strong className="text-primary">leadership structuré</strong>,
                de <strong className="text-primary">vision stratégique</strong> et
                de <strong className="text-primary">méthodes managériales solides</strong>.
              </p>
              <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
                Management Skills accompagne dirigeants, managers et entrepreneurs dans le développement
                d'un leadership exigeant, responsable et opérationnel. Notre approche combine rigueur intellectuelle,
                ancrage terrain et engagement pour des résultats durables.
              </p>
              <p className="text-lg font-body leading-relaxed text-foreground/80">
                Nous ne formons pas des techniciens du management. Nous formons des <strong className="text-primary">leaders capables de transformer les organisations</strong>,
                de prendre des décisions structurantes et de fédérer leurs équipes autour d'une vision ambitieuse.
              </p>
            </div>
            <div className="md:col-span-2 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <img src={fabienImage} alt="Fabien Berruyer, dirigeant Management Skills" className="w-full rounded-lg" style={{ boxShadow: "var(--shadow-card-hover)" }} />
              <p className="text-sm text-muted-foreground font-body mt-3 text-center">
                Fabien Berruyer — Fondateur & Dirigeant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {chiffres.map((c, i) => (
              <div key={i} className="text-center animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-1">{c.value}</p>
                <p className="text-primary-foreground/70 font-body text-sm">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Ce que nous apportons</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Domaines d'<span className="gradient-text">expertise</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Des compétences stratégiques, opérationnelles et humaines au service de la performance
              et de la transformation des organisations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertises.map((exp, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <exp.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/expertises" className="btn-hero-primary inline-flex items-center gap-2">
              Explorer toutes nos expertises <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-4xl animate-on-scroll">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-1 flex justify-center">
              <Award className="w-20 h-20 text-fuchsia" />
            </div>
            <div className="md:col-span-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-off-white mb-6">
                Une expertise reconnue au niveau <span className="text-fuchsia">international</span>
              </h2>
              <p className="text-off-white/70 font-body text-lg leading-relaxed mb-4">
                Le dirigeant de Management Skills est certifié par les <strong className="text-off-white">Nations Unies</strong> dans le domaine
                de la promotion de l'égalité des genres et de l'égalité professionnelle.
              </p>
              <p className="text-off-white/50 font-body leading-relaxed mb-4">
                Cette certification internationale atteste d'une expertise reconnue en matière d'égalité professionnelle,
                de diversité et d'inclusion — des enjeux devenus centraux dans la gouvernance des organisations modernes.
              </p>
              <p className="text-off-white/50 font-body leading-relaxed">
                Elle renforce l'engagement de Management Skills à promouvoir un leadership responsable,
                éthique et inclusif auprès de l'ensemble de ses clients et partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos publics */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Pour qui</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              À qui s'adresse <span className="gradient-text">Management Skills</span> ?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Dirigeants & cadres dirigeants", desc: "Renforcer votre leadership, structurer votre vision stratégique et améliorer votre impact managérial au quotidien." },
              { icon: Target, title: "Managers & chefs de projet", desc: "Développer vos compétences managériales, apprendre à fédérer vos équipes et piloter la performance avec méthode." },
              { icon: Lightbulb, title: "Entrepreneurs", desc: "Structurer votre projet, accélérer votre développement et acquérir les réflexes managériaux des organisations performantes." },
              { icon: Globe, title: "Institutions & collectivités", desc: "Moderniser les pratiques managériales, accompagner les transformations et développer une culture de l'excellence." },
              { icon: Trophy, title: "Écoles de commerce", desc: "Des interventions académiques de haut niveau sur le leadership, la stratégie et l'entrepreneuriat." },
              { icon: TrendingUp, title: "Organisations en transformation", desc: "Un accompagnement stratégique et opérationnel pour réussir vos transitions organisationnelles majeures." },
            ].map((item, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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

      {/* CTA final */}
      <section className="section-padding text-center">
        <div className="container mx-auto max-w-2xl animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prêt à transformer votre organisation ?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8">
            Échangeons sur vos enjeux stratégiques et découvrez comment Management Skills peut vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-hero-primary">Prendre contact</Link>
            <Link to="/a-propos" className="inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-heading font-semibold transition-all duration-300 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Découvrir le cabinet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
