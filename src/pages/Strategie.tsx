import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Search, Map, Rocket, Settings, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: Search,
    title: "Analyse stratégique",
    text: "Beaucoup de dirigeants prennent des décisions stratégiques sur la base d'intuitions ou d'informations parcellaires. Ils connaissent leur métier, mais pas nécessairement leur environnement concurrentiel réel. Les angles morts s'accumulent — et quand la disruption arrive, il est souvent trop tard pour réagir. Nous réalisons un diagnostic complet de l'environnement concurrentiel, identifions les forces et les vulnérabilités, et cartographions les opportunités avant que d'autres ne les saisissent.",
  },
  {
    icon: Map,
    title: "Positionnement concurrentiel",
    text: "Quand une entreprise ne sait pas expliquer en une phrase pourquoi un client devrait la choisir plutôt qu'un concurrent, elle a un problème de positionnement. Et ce problème se traduit mécaniquement par une guerre des prix, une érosion des marges et une image de marque qui se dilue. Nous travaillons avec les dirigeants pour définir un positionnement clair, différenciant et défendable — un positionnement qui crée de la valeur au lieu de courir après le volume.",
  },
  {
    icon: Rocket,
    title: "Développement d'activité",
    text: "La croissance ne se décrète pas. Pourtant, de nombreuses organisations restent dépendantes d'un seul marché, d'un seul client historique ou d'un modèle économique qui ne scale pas. Quand le marché se retourne, la fragilité devient visible. Nous structurons des plans de croissance réalistes et ambitieux — diversification des revenus, conquête de nouveaux marchés, montée en gamme — pour construire une trajectoire de développement solide et durable.",
  },
  {
    icon: Settings,
    title: "Structuration des organisations",
    text: "Dans beaucoup d'entreprises en croissance, l'organisation n'a pas suivi le rythme. Les rôles se chevauchent, la gouvernance reste informelle, et personne ne sait vraiment qui décide quoi. Le résultat : des conflits larvés, une lenteur d'exécution et une frustration qui mine la motivation des équipes. Nous clarifions les structures, les rôles et les processus de gouvernance — pour que l'organisation devienne un accélérateur de performance, pas un frein.",
  },
  {
    icon: RefreshCw,
    title: "Pilotage de transformation",
    text: "Les projets de transformation échouent rarement par manque de vision. Ils échouent parce que les résistances n'ont pas été anticipées, parce que le rythme de déploiement est inadapté, ou parce que les équipes n'ont pas été embarquées. Et chaque transformation ratée rend la suivante plus difficile — le cynisme s'installe, la confiance s'érode. Nous pilotons le changement avec méthode : diagnostic des résistances, séquençage des étapes, mobilisation des relais internes et accompagnement dans la durée.",
  },
];

const Strategie = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Conseil stratégique</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Stratégie et transformation <span className="text-fuchsia">des organisations</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Aider les dirigeants à penser, structurer et piloter la stratégie de leur organisation
              dans un environnement complexe et en constante mutation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll mb-12">
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              La stratégie ne se limite pas à un exercice intellectuel réalisé une fois par an en séminaire. Elle consiste à analyser un environnement en permanence, prendre des décisions structurantes — parfois inconfortables — et mobiliser les équipes autour d'une direction claire.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80">
              Or, trop d'organisations confondent activité et stratégie. Elles multiplient les projets sans hiérarchiser, s'épuisent dans l'opérationnel sans jamais prendre de recul. Quand la question « quelle est notre stratégie ? » met mal à l'aise un comité de direction, c'est le signe qu'il est temps d'agir.
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 animate-on-scroll">
            Cinq dimensions clés d'accompagnement
          </h2>

          <div className="space-y-8">
            {items.map((item, i) => (
              <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mt-1">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
                    <p className="text-foreground/75 font-body leading-relaxed">{item.text}</p>
                  </div>
                </div>
                {i < items.length - 1 && <div className="border-b border-border mt-8" />}
              </div>
            ))}
          </div>

          <div className="mt-14 animate-on-scroll">
            <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
              Discuter de votre stratégie <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategie;
