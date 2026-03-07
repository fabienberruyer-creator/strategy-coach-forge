import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Pourquoi les organisations tolèrent trop longtemps les mauvais managers",
    excerpt: "Une analyse des mécanismes organisationnels qui protègent l'incompétence managériale et des leviers pour y remédier.",
    date: "Mars 2026",
    category: "Management",
  },
  {
    title: "Leadership et sport de haut niveau : les leçons du collectif",
    excerpt: "Ce que les dirigeants peuvent apprendre des équipes sportives de haut niveau en matière de leadership et de performance collective.",
    date: "Février 2026",
    category: "Leadership",
  },
  {
    title: "Les nouvelles responsabilités des dirigeants dans un monde incertain",
    excerpt: "Face à la complexité croissante, les dirigeants doivent repenser leur rôle et leurs responsabilités.",
    date: "Janvier 2026",
    category: "Stratégie",
  },
  {
    title: "La stratégie d'entreprise à l'ère de l'incertitude",
    excerpt: "Comment construire une stratégie robuste quand l'environnement devient imprévisible.",
    date: "Décembre 2025",
    category: "Stratégie",
  },
];

const Blog = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Blog / <span className="text-fuchsia">Réflexions</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg">
              Analyses et réflexions sur le leadership, le management et la stratégie.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {articles.map((article, i) => (
              <article
                key={i}
                className="card-expertise group cursor-pointer animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-heading font-semibold text-fuchsia uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-body">{article.date}</span>
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground font-body mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-primary">
                  Lire l'article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
