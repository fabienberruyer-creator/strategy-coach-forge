import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import { Eye, Crosshair, Compass, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Vision = () => {
  useScrollAnimation();
  useSEO({
    title: "Vision et Méthode – Management Skills | Approche du leadership et du management",
    description: "Découvrez la vision et la méthode de Management Skills : rigueur analytique, exigence opérationnelle et vision stratégique au service des dirigeants et des organisations.",
  });

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Notre approche</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-8">
              Vision et <span className="text-fuchsia">méthode</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Le management n'est pas une simple compétence technique. C'est un art stratégique
              qui allie vision, exigence et intelligence relationnelle. Les organisations qui performent
              durablement sont celles qui investissent dans la qualité de leur leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Constat terrain */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ce que nous observons sur le terrain
            </h2>
            <div className="space-y-4 text-lg font-body leading-relaxed text-foreground/80">
              <p>
                Après plus de quinze ans d'interventions auprès de dirigeants et d'organisations de toutes tailles,
                un constat s'impose : la plupart des difficultés que rencontrent les entreprises ne sont pas
                des problèmes de marché ou de technologie. Ce sont des problèmes de management.
              </p>
              <p>
                Des décisions stratégiques prises dans l'urgence, sans cadre d'analyse. Des managers promus
                pour leur expertise technique, mais jamais formés à diriger des équipes. Des organisations
                où chacun travaille beaucoup, mais où personne ne sait vraiment pourquoi.
              </p>
              <p>
                Plus inquiétant encore, ces dysfonctionnements passent souvent inaperçus. Ils sont masqués
                par l'activité quotidienne, par la pression des résultats à court terme, par l'habitude.
                Les dirigeants sentent que quelque chose ne fonctionne pas, mais peinent à mettre des mots
                sur le problème — et encore moins à le traiter à la racine.
              </p>
              <p>
                C'est précisément là que Management Skills intervient. Pas pour ajouter une couche
                de complexité supplémentaire, mais pour redonner de la clarté, de la structure
                et du sens à l'action managériale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 piliers */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trois piliers pour un leadership d'excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Crosshair, title: "Rigueur analytique", desc: "Chaque accompagnement commence par un diagnostic sans complaisance. Nous analysons les dynamiques réelles — pas les organigrammes théoriques — pour identifier les vrais leviers de progrès." },
              { icon: Eye, title: "Exigence opérationnelle", desc: "Nous ne produisons pas de rapports qui finissent dans un tiroir. Chaque intervention vise un changement observable : une équipe qui fonctionne mieux, un dirigeant qui décide avec plus de clarté." },
              { icon: Compass, title: "Vision stratégique", desc: "Prendre de la hauteur ne signifie pas s'abstraire du réel. C'est savoir lire les signaux faibles, anticiper les mutations et construire une vision qui mobilise — puis la déployer avec méthode." },
            ].map((item, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conviction */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl animate-on-scroll">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Notre conviction
          </h2>
          <div className="space-y-4 text-lg font-body leading-relaxed text-foreground/80">
            <p>
              Les entreprises les plus performantes ne sont pas celles qui ont les meilleurs outils
              ou les budgets les plus importants. Ce sont celles qui ont les meilleurs leaders.
              Le leadership ne se décrète pas : il se construit, se travaille et se perfectionne
              — avec méthode, avec exigence, et avec le bon accompagnement.
            </p>
            <p>
              C'est cette conviction qui guide chacune de nos interventions. Nous accompagnons
              des femmes et des hommes qui refusent la médiocrité managériale et veulent faire
              de leur leadership un véritable levier de transformation.
            </p>
          </div>
          <div className="mt-10">
            <Link to="/expertises" className="btn-hero-primary inline-flex items-center gap-2">
              Découvrir nos expertises <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
