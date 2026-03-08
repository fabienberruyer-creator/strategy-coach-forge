import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import { Linkedin, Award, BookOpen, Users, Briefcase, Target, Globe, ArrowRight, CheckCircle, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import fabienImage from "@/assets/fabien-portrait.jpg";

const About = () => {
  useScrollAnimation();
  useSEO({
    title: "À propos – Fabien Berruyer | Management Skills – Expert management & coach dirigeant",
    description: "Découvrez le parcours de Fabien Berruyer, fondateur de Management Skills. Coach de dirigeants, consultant en stratégie, conférencier et formateur. Certifié Nations Unies. Lille, Hauts-de-France.",
  });

  return (
    <>
      {/* Header */}
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Le cabinet</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              À <span className="text-fuchsia">propos</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Management Skills n'est pas un énième cabinet de coaching générique.
              C'est une structure d'expertise fondée sur une conviction : le management est une discipline
              qui exige de la rigueur, de la lucidité et un ancrage profond dans le réel.
            </p>
          </div>
        </div>
      </section>

      {/* A. Portrait + B. Texte structuré */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 animate-on-scroll">
              <img
                src={fabienImage}
                alt="Fabien Berruyer, fondateur de Management Skills, consultant en management et coach de dirigeants"
                className="w-full rounded-lg"
                style={{ boxShadow: "var(--shadow-card-hover)" }}
              />
              <div className="mt-6 space-y-3">
                <a
                  href="https://www.linkedin.com/in/fabienberruyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-primary w-full inline-flex items-center justify-center gap-2 text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  Profil LinkedIn
                </a>
                <a
                  href="https://wa.me/33781333909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-sm px-6 py-3 rounded-md font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5b] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="mailto:direction@mmanagement.fr"
                  className="w-full inline-flex items-center justify-center gap-2 text-sm px-6 py-3 rounded-md font-semibold text-white bg-[#EA4335] hover:bg-[#d33426] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
            <div className="md:col-span-3 animate-on-scroll" style={{ transitionDelay: "150ms" }}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                Fabien Berruyer
              </h2>
              <p className="text-primary font-heading font-semibold text-sm mb-6">
                Coach de dirigeants · Consultant en stratégie · Expert en management · Conférencier · Formateur
              </p>

              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                Fabien Berruyer accompagne depuis plus de 15 ans des dirigeants, des entrepreneurs et des organisations
                confrontés à des enjeux de management, de stratégie et de transformation. Reconnu en 2025 parmi les coachs carrière
                les plus influents de France (classement Favikon), son parcours ne se résume pas
                à une expertise théorique : il s'est construit dans le terrain, au contact des réalités opérationnelles
                des entreprises et des institutions.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                Il travaille avec des dirigeants d'entreprise et des membres de CODIR sur leurs enjeux de posture,
                de gouvernance et de prise de décision. Il accompagne des entrepreneurs dans la structuration
                de leur activité, la clarification de leur positionnement et le développement de leur leadership.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                Parallèlement, il intervient en tant que formateur et conférencier dans des écoles de commerce,
                des universités et des institutions — sur des sujets comme le leadership contemporain, la stratégie
                d'entreprise, le management à l'ère de l'intelligence artificielle et le recrutement.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                Sa méthode repose sur l'alliance entre exigence intellectuelle, pragmatisme opérationnel
                et compréhension fine des dynamiques humaines. Il ne théorise pas : il écoute, il analyse,
                il structure et il accompagne la mise en mouvement.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed">
                Basé à Lille (Hauts-de-France), il intervient sur l'ensemble
                du territoire français et à l'international.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rôles */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Un professionnel aux <span className="gradient-text">multiples expertises</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Coach de dirigeants", desc: "Accompagnement confidentiel de dirigeants et membres de CODIR sur la posture, la décision et l'impact managérial." },
              { icon: Target, title: "Consultant en stratégie", desc: "Diagnostic, positionnement, conduite du changement et structuration organisationnelle." },
              { icon: BookOpen, title: "Formateur", desc: "Programmes de formation en leadership, management, entrepreneuriat et performance commerciale." },
              { icon: Briefcase, title: "Conférencier", desc: "Prises de parole sur le leadership, la gouvernance, l'IA et les transformations du management." },
              { icon: Globe, title: "Intervenant académique", desc: "Cours et ateliers en écoles de commerce, universités et programmes de formation continue." },
              { icon: Award, title: "Accompagnateur d'entrepreneurs", desc: "Structuration d'activité, positionnement, value selling et développement commercial." },
            ].map((role, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <role.icon className="w-9 h-9 text-primary mb-4" />
                <h3 className="font-heading font-bold text-foreground text-sm mb-2">{role.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. Vision du management */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Convictions</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Une vision exigeante du management
            </h2>
            <div className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed">
              <p>
                Le management n'est pas un vernis. Ce n'est pas une posture que l'on adopte
                en réunion et que l'on oublie dans le couloir. C'est une discipline quotidienne
                qui engage la responsabilité de celui qui la pratique.
              </p>
              <p>
                Le leadership n'est pas un talent inné réservé à quelques tempéraments charismatiques.
                C'est une compétence qui se construit, se structure et se perfectionne — avec méthode,
                avec humilité et avec un regard lucide sur soi-même.
              </p>
              <p>
                La stratégie ne vaut rien sans exécution et sans compréhension humaine.
                Un plan stratégique brillant sur le papier mais déconnecté des réalités du terrain
                ne produira jamais de résultats. Les organisations ont besoin de lucidité,
                de décision et de cohérence.
              </p>
              <p>
                C'est cette exigence qui guide chaque intervention de Management Skills.
                Pas les effets de mode. Pas les promesses faciles. La rigueur et l'impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D. Citation */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="text-center px-6 max-w-3xl mx-auto animate-on-scroll">
          <blockquote className="font-heading text-2xl md:text-3xl font-bold text-off-white leading-snug mb-6">
            « Le management n'est pas une théorie abstraite.<br />
            C'est une discipline de décision, de responsabilité et de lucidité. »
          </blockquote>
          <p className="text-fuchsia font-heading font-semibold">— Fabien Berruyer</p>
        </div>
      </section>

      {/* E. Engagement éthique */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Engagement</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Management éthique & responsabilité
            </h2>
            <div className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed mb-8">
              <p>
                Fabien Berruyer est certifié par les <strong className="text-foreground">Nations Unies</strong> dans le domaine
                de la promotion de l'égalité femmes-hommes et de l'égalité professionnelle.
                Cette certification atteste d'une expertise reconnue à l'international
                sur des enjeux devenus centraux dans la gouvernance des organisations modernes.
              </p>
              <p>
                Cet engagement se traduit concrètement dans chaque intervention :
                attention aux dynamiques humaines, promotion d'un management inclusif,
                lutte contre les approches discriminatoires ou simplistes,
                et conviction que la diversité est un levier de performance — pas une contrainte réglementaire.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Promotion de l'égalité femmes-hommes dans les organisations",
                "Management éthique et responsable",
                "Attention aux dynamiques humaines et relationnelles",
                "Lutte contre les biais et les approches discriminatoires",
                "Certification Nations Unies en matière d'égalité professionnelle",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/75">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container mx-auto max-w-2xl animate-on-scroll">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Envie d'échanger sur vos enjeux ?
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Parlons de votre situation, de vos défis et de la manière dont Management Skills
            peut vous apporter un regard utile.
          </p>
          <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
            Prendre contact <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
