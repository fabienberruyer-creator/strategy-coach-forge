import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import heroImage from "@/assets/hero-leadership.jpg";
import fabienImage from "@/assets/fabien-portrait.jpg";
import {
  Target, TrendingUp, Shield, BarChart3, Lightbulb, Globe,
  RefreshCw, Award, Users, ArrowRight, BookOpen, Briefcase,
  Mic, UserCheck, Scale, Brain, Crosshair, MessageSquare,
  GraduationCap, Building2, ChevronDown
} from "lucide-react";
import { useState } from "react";

const expertises = [
  { icon: Target, title: "Leadership", desc: "Développer un leadership structuré, incarné et mobilisateur pour diriger avec clarté et cohérence." },
  { icon: TrendingUp, title: "Stratégie d'entreprise", desc: "Analyser, positionner et piloter la trajectoire stratégique de l'organisation." },
  { icon: Users, title: "Management des équipes", desc: "Structurer les pratiques managériales pour renforcer l'engagement et la performance collective." },
  { icon: Briefcase, title: "Gouvernance & CODIR", desc: "Clarifier les rôles, fluidifier la prise de décision et renforcer le fonctionnement des instances dirigeantes." },
  { icon: UserCheck, title: "Recrutement & expérience candidat", desc: "Attirer, évaluer et fidéliser les talents avec une approche structurée et différenciante." },
  { icon: Lightbulb, title: "Entrepreneuriat", desc: "Accompagner les fondateurs dans la structuration, le positionnement et la croissance de leur activité." },
  { icon: Shield, title: "Gestion de crise", desc: "Décider avec méthode en situation d'incertitude, de pression et de complexité organisationnelle." },
  { icon: BarChart3, title: "Value Selling", desc: "Structurer l'approche commerciale autour de la création de valeur plutôt que du prix." },
  { icon: Crosshair, title: "Méthode SPIN", desc: "Maîtriser le questionnement stratégique pour identifier les vrais enjeux des clients." },
  { icon: Scale, title: "Management éthique", desc: "Intégrer la responsabilité, l'équité et la transparence au cœur des pratiques managériales." },
  { icon: Globe, title: "Égalité professionnelle", desc: "Promouvoir l'égalité femmes-hommes comme levier de performance et d'attractivité." },
  { icon: Brain, title: "IA & transformation du travail", desc: "Comprendre et anticiper l'impact de l'intelligence artificielle sur le management et les organisations." },
];

const methode = [
  { step: "01", title: "Diagnostic stratégique", desc: "Analyse approfondie de la situation, des dynamiques internes et du contexte concurrentiel." },
  { step: "02", title: "Clarification des enjeux", desc: "Identification des priorités réelles, des angles morts et des leviers de progrès." },
  { step: "03", title: "Analyse des dynamiques humaines", desc: "Lecture des relations, des résistances et des modes de fonctionnement organisationnels." },
  { step: "04", title: "Construction du plan d'action", desc: "Élaboration d'une feuille de route concrète, séquencée et adaptée aux ressources disponibles." },
  { step: "05", title: "Suivi et mise en mouvement", desc: "Accompagnement dans la durée, ajustements et mesure des résultats obtenus." },
];

const faqItems = [
  { q: "En quoi consiste un accompagnement de dirigeant ?", a: "Il s'agit d'un travail confidentiel et structuré sur la posture, la décision et l'impact. L'accompagnement permet de clarifier les enjeux, de prendre du recul et de renforcer la cohérence managériale — dans un cadre exigeant et bienveillant." },
  { q: "À qui s'adresse Management Skills ?", a: "Aux dirigeants, membres de CODIR, entrepreneurs, cadres en transition, écoles de commerce et institutions qui cherchent un regard expert sur leurs enjeux de management, de leadership ou de transformation." },
  { q: "Quels sujets de conférence proposez-vous ?", a: "Leadership contemporain, management à l'ère de l'IA, gouvernance, recrutement, Value Selling, management éthique, égalité professionnelle, gestion de crise et entrepreneuriat." },
  { q: "Intervenez-vous en entreprise et dans les écoles ?", a: "Oui. Management Skills intervient aussi bien en entreprise (séminaires, formations, ateliers stratégiques) que dans l'enseignement supérieur (écoles de commerce, universités, institutions)." },
  { q: "Proposez-vous des formations en leadership et management ?", a: "Oui. Management Skills est un organisme de formation déclaré (n° 32 59 13455 59). Nos formations couvrent le leadership, la stratégie, le management, l'entrepreneuriat et la performance commerciale." },
  { q: "Où êtes-vous basé et intervenez-vous partout en France ?", a: "Basé à Lille (Hauts-de-France), Management Skills intervient sur l'ensemble du territoire français et à l'international." },
];

const Index = () => {
  useScrollAnimation();
  useSEO({
    title: "Management Skills – Coach dirigeant, consultant stratégie et management | Lille, Hauts-de-France",
    description: "Cabinet d'expertise en leadership, stratégie et management. Accompagnement de dirigeants, entrepreneurs et organisations. Conseil, formation, coaching exécutif. Lille, Hauts-de-France.",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-off-white mb-6 animate-fade-in-up tracking-tight">
            LEADERSHIP <span className="text-fuchsia">•</span> STRATÉGIE <span className="text-fuchsia">•</span> MANAGEMENT
          </h1>
          <p className="text-off-white/80 text-lg md:text-xl font-body mb-10 animate-fade-in-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.15s" }}>
            J'accompagne dirigeants, entrepreneurs et organisations à prendre des décisions stratégiques dans des environnements complexes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <Link to="/contact" className="btn-hero-primary">Prendre contact</Link>
            <Link to="/expertises" className="btn-hero-outline">Découvrir les expertises</Link>
          </div>
        </div>
      </section>

      {/* A. Clarification */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll text-center">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-4">Le cabinet</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Expertise en management, leadership et stratégie
            </h2>
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              Management Skills accompagne les dirigeants, entrepreneurs et organisations confrontés à des enjeux
              de management, de leadership, de stratégie, de gouvernance et de transformation.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80">
              L'approche repose sur l'expérience terrain, la compréhension des dynamiques humaines,
              l'analyse stratégique et l'exigence intellectuelle — pas sur des recettes toutes faites
              ni des promesses sans substance.
            </p>
          </div>
        </div>
      </section>

      {/* B. Pour qui */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Pour qui</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              À qui s'adresse <span className="gradient-text">Management Skills</span> ?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Dirigeants & membres de CODIR",
                items: ["Prise de recul et arbitrages complexes", "Posture de leadership et gouvernance", "Tensions internes et crises organisationnelles", "Pilotage de transformations stratégiques"],
                link: "/coaching",
                cta: "Découvrir l'accompagnement",
              },
              {
                icon: Lightbulb,
                title: "Entrepreneurs & porteurs de projet",
                items: ["Positionnement et structuration de l'offre", "Développement commercial et croissance", "Leadership entrepreneurial", "Business model et stratégie de développement"],
                link: "/entrepreneuriat",
                cta: "En savoir plus",
              },
              {
                icon: GraduationCap,
                title: "Écoles, institutions & organisations",
                items: ["Conférences et interventions académiques", "Formations sur mesure", "Décryptage des transformations du management", "Apport d'expertise et pédagogie"],
                link: "/formations",
                cta: "Demander une intervention",
              },
            ].map((bloc, i) => (
              <div key={i} className="card-expertise flex flex-col animate-on-scroll" style={{ transitionDelay: `${i * 120}ms` }}>
                <bloc.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">{bloc.title}</h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {bloc.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/75 font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={bloc.link} className="text-primary font-heading font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  {bloc.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. Domaines d'expertise */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Savoir-faire</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Domaines d'<span className="gradient-text">expertise</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Des compétences stratégiques et opérationnelles au service de la performance des organisations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {expertises.map((exp, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 50}ms` }}>
                <exp.icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-heading text-sm font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/expertises" className="btn-hero-primary inline-flex items-center gap-2">
              Explorer toutes les expertises <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* D. Méthode */}
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Notre démarche</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-off-white">
              Une méthode d'accompagnement <span className="text-fuchsia">rigoureuse</span>
            </h2>
          </div>
          <div className="space-y-0">
            {methode.map((m, i) => (
              <div key={i} className="flex items-start gap-6 animate-on-scroll py-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-fuchsia/30 flex items-center justify-center">
                  <span className="font-heading font-bold text-fuchsia text-lg">{m.step}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-off-white text-lg mb-1">{m.title}</h3>
                  <p className="text-off-white/60 font-body leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. Fondateur */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 animate-on-scroll">
              <img src={fabienImage} alt="Fabien Berruyer, fondateur de Management Skills, consultant en management et coach de dirigeants à Lille" className="w-full rounded-lg" style={{ boxShadow: "var(--shadow-card-hover)" }} />
            </div>
            <div className="md:col-span-3 animate-on-scroll" style={{ transitionDelay: "150ms" }}>
              <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Le fondateur</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Fabien Berruyer</h2>
              <p className="text-primary font-heading font-medium text-sm mb-6">
                Coach de dirigeants · Consultant en stratégie · Conférencier · Formateur
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                Plus de 15 ans d'expérience dans l'accompagnement de dirigeants, d'entrepreneurs et d'organisations
                en transformation. Une approche fondée sur l'exigence intellectuelle, le pragmatisme opérationnel
                et la compréhension fine des dynamiques humaines.
              </p>
              <p className="text-foreground/70 font-body leading-relaxed mb-6">
                Certifié par les Nations Unies pour la promotion de l'égalité femmes-hommes.
                Intervenant en écoles de commerce et institutions. Basé à Lille (Hauts-de-France).
              </p>
              <Link to="/a-propos" className="text-primary font-heading font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                Découvrir le parcours complet <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* F. Prises de parole */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Transmission</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Formations, conférences & <span className="gradient-text">interventions</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Mic, title: "Conférences & keynotes", desc: "Des prises de parole structurées sur les enjeux contemporains du management, du leadership et de la transformation des organisations." },
              { icon: BookOpen, title: "Formations professionnelles", desc: "Des programmes de formation certifiés, conçus pour développer les compétences managériales et stratégiques des dirigeants et cadres." },
              { icon: GraduationCap, title: "Interventions académiques", desc: "Des cours et ateliers dans l'enseignement supérieur — écoles de commerce, universités, programmes exécutifs." },
            ].map((item, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <item.icon className="w-9 h-9 text-primary mb-4" />
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <Link to="/formations" className="btn-hero-primary inline-flex items-center gap-2">
              Demander une intervention <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Organisme de formation */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8 animate-on-scroll">
            <Award className="w-16 h-16 text-primary-foreground/80 flex-shrink-0" />
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                Organisme de formation déclaré
              </h3>
              <p className="text-primary-foreground/70 font-body">
                N° 32 59 13455 59 — Préfecture des Hauts-de-France. Certifié par les Nations Unies pour la promotion de l'égalité professionnelle.
                Éligible OPCO et plans de développement des compétences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* G. Réassurance */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Confiance</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Ils font appel à <span className="gradient-text">Management Skills</span>
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
              Dirigeants, entrepreneurs, écoles de commerce, institutions et organisations
              font confiance à Management Skills pour leurs enjeux de leadership et de transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building2, label: "Entreprises & organisations", text: "Accompagnement stratégique, formations et coaching de comités de direction." },
              { icon: GraduationCap, label: "Écoles & universités", text: "Interventions académiques et programmes de formation au leadership." },
              { icon: Users, label: "Dirigeants & entrepreneurs", text: "Coaching individuel, mentoring et accompagnement à la prise de décision." },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-lg border border-border bg-card animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-foreground text-sm mb-2">{item.label}</h3>
                <p className="text-xs text-muted-foreground font-body">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground font-body mt-8 animate-on-scroll">
            Témoignages et références disponibles sur demande.
          </p>
        </div>
      </section>

      {/* Citation */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="text-center px-6 max-w-3xl mx-auto animate-on-scroll">
          <blockquote className="font-heading text-2xl md:text-4xl font-bold text-off-white leading-snug mb-6">
            « Le management n'est pas une théorie abstraite.<br />
            C'est une discipline de décision, de responsabilité et de lucidité. »
          </blockquote>
          <p className="text-fuchsia font-heading font-semibold">— Fabien Berruyer</p>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg bg-card animate-on-scroll" style={{ transitionDelay: `${i * 50}ms` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-heading font-semibold text-foreground text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-foreground/75 font-body leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H. CTA final */}
      <section className="section-padding text-center">
        <div className="container mx-auto max-w-2xl animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vous cherchez un regard stratégique, exigeant et humain ?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8">
            Parlons de vos enjeux de management, de leadership ou de transformation.
          </p>
          <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
            Prendre contact <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Management Skills",
            description: "Cabinet d'expertise en leadership, stratégie et management. Accompagnement de dirigeants, entrepreneurs et organisations.",
            url: "https://strategy-coach-forge.lovable.app",
            founder: {
              "@type": "Person",
              name: "Fabien Berruyer",
              jobTitle: "Consultant en management et coach de dirigeants",
              sameAs: "https://www.linkedin.com/in/fabienberruyer",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lille",
              addressRegion: "Hauts-de-France",
              postalCode: "59840",
              addressCountry: "FR",
            },
            telephone: "+33781333909",
            email: "hello@mmanagement.fr",
            areaServed: ["Lille", "Pérenchies", "Hauts-de-France", "France"],
            serviceType: ["Coaching de dirigeants", "Conseil en stratégie", "Formation en leadership", "Conférences management"],
          }),
        }}
      />
    </>
  );
};

export default Index;
