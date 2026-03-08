import { useParams, Link, Navigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { getThemeBySlug } from "@/data/themes";

const ThemeDetail = () => {
  useScrollAnimation();
  const { slug } = useParams<{ slug: string }>();
  const theme = slug ? getThemeBySlug(slug) : undefined;

  useSEO({
    title: theme
      ? `${theme.label} – Formations & Conférences – Management Skills`
      : "Thème introuvable – Management Skills",
    description: theme?.description ?? "",
  });

  if (!theme) return <Navigate to="/formations" replace />;

  const Icon = theme.icon;

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <Link
              to="/formations"
              className="inline-flex items-center gap-2 text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-6 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Formations & Conférences
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <Icon className="w-10 h-10 text-fuchsia" />
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-off-white">
                {theme.title}
              </h1>
            </div>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              {theme.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-foreground/80 font-body text-lg leading-relaxed mb-6">
              {theme.description}
            </p>
            {theme.paragraphs.map((p, i) => (
              <p key={i} className="text-foreground/80 font-body text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Points clés abordés
            </h2>
            <div className="space-y-4">
              {theme.keyPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card animate-on-scroll"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Formats disponibles
            </h2>
            <div className="flex flex-wrap gap-3">
              {theme.formats.map((f, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full font-heading font-semibold text-sm border border-primary/30 text-primary bg-primary/5"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container mx-auto max-w-2xl animate-on-scroll">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Intéressé par ce thème ?
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Échangeons sur vos besoins et construisons une intervention sur mesure
            autour de ce sujet.
          </p>
          <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
            Demander une intervention <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ThemeDetail;
