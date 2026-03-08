import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Rocket, Target, Presentation, Mic, Search, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const accompagnements = [
  {
    icon: Target,
    title: "Structuration de l'offre",
    text: "Avoir une bonne idée ne suffit pas. Encore faut-il savoir la formuler clairement, identifier à qui elle s'adresse vraiment, et construire un modèle économique qui tient la route. Trop de projets prometteurs échouent parce que l'offre reste floue, le marché mal segmenté, et la proposition de valeur impossible à résumer en une phrase. Nous travaillons avec les entrepreneurs pour transformer l'intuition en architecture business lisible, différenciante et scalable.",
  },
  {
    icon: Rocket,
    title: "Construction du MVP",
    text: "Le piège classique de l'entrepreneur : vouloir tout construire avant de lancer. Le produit parfait n'existe pas — et chaque mois passé à le peaufiner est un mois où le marché avance sans vous. À l'inverse, lancer trop vite un produit bâclé détruit la crédibilité. Nous aidons les fondateurs à trouver le bon curseur : définir les fonctionnalités essentielles, prioriser le développement et mettre rapidement un produit viable entre les mains de vrais utilisateurs.",
  },
  {
    icon: Presentation,
    title: "Création du pitch deck",
    text: "Un investisseur voit des dizaines de projets par semaine. En cinq slides, il sait si le vôtre mérite son attention. Un pitch deck qui se contente de décrire le produit sans raconter l'histoire, sans démontrer la traction, sans expliquer pourquoi cette équipe est la bonne — c'est un pitch deck qui finit dans la corbeille. Nous concevons des decks qui captent l'attention, structurent le récit et donnent envie d'en savoir plus.",
  },
  {
    icon: Mic,
    title: "Formation au pitch & storytelling",
    text: "Le meilleur deck du monde ne compensera jamais un fondateur qui hésite, qui noie son audience dans les détails techniques, ou qui panique face à la première objection. L'art du pitch, c'est la capacité à transmettre une conviction en quelques minutes — avec clarté, avec énergie, avec maîtrise. Nous entraînons les entrepreneurs à pitcher comme des professionnels : structure narrative, posture, gestion du temps, anticipation des questions difficiles.",
  },
  {
    icon: Search,
    title: "Recherche d'investisseurs",
    text: "Lever des fonds, ce n'est pas envoyer son deck à cent investisseurs en espérant qu'un réponde. C'est un processus stratégique qui exige de cibler les bons interlocuteurs, de comprendre leur thèse d'investissement, et de préparer chaque rencontre avec une approche sur mesure. Nous accompagnons les entrepreneurs dans l'identification des business angels, fonds d'amorçage et VCs pertinents — et dans la préparation de chaque interaction pour maximiser les chances de closing.",
  },
];

const etapes = [
  "Diagnostic du projet et du positionnement marché",
  "Structuration de l'offre et du modèle économique",
  "Construction du MVP et validation terrain",
  "Élaboration du pitch deck et entraînement intensif",
  "Stratégie de levée de fonds et mise en relation investisseurs",
  "Suivi post-levée et accompagnement à la croissance",
];

const Entrepreneuriat = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              De l'idée à la levée de fonds
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Accompagnement <span className="text-fuchsia">entrepreneurial</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Un accompagnement complet pour les entrepreneurs qui veulent structurer leur projet,
              convaincre les investisseurs et accélérer leur croissance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll mb-12">
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              Entreprendre, c'est transformer une conviction en réalité économique. Mais entre l'intuition fondatrice et le premier euro levé, le chemin est plus complexe qu'il n'y paraît. Les arbitrages sont constants, les pivots parfois nécessaires, et les moments de doute inévitables.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80">
              Ce qui fait la différence entre un projet qui aboutit et un projet qui s'épuise, ce n'est généralement pas la qualité de l'idée. C'est la capacité du fondateur à structurer, à communiquer et à exécuter avec méthode. C'est exactement ce que nous apportons.
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 animate-on-scroll">
            Nos domaines d'accompagnement
          </h2>

          <div className="space-y-8">
            {accompagnements.map((a, i) => (
              <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mt-1">
                    <a.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2">{a.title}</h3>
                    <p className="text-foreground/75 font-body leading-relaxed">{a.text}</p>
                  </div>
                </div>
                {i < accompagnements.length - 1 && <div className="border-b border-border mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6 animate-on-scroll">
            Un parcours structuré en 6 étapes
          </h2>
          <div className="space-y-3 mb-12">
            {etapes.map((e, i) => (
              <div key={i} className="flex items-start gap-3 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <span className="text-primary font-heading font-bold text-sm">{i + 1}</span>
                </div>
                <span className="font-body text-foreground/80 text-lg">{e}</span>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-10 border border-border animate-on-scroll mb-12">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              À qui s'adresse cet accompagnement ?
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Entrepreneurs en phase d'amorçage ou de pré-seed",
                "Porteurs de projet en recherche de structuration",
                "Startups préparant une levée de fonds",
                "Intrapreneurs développant un nouveau business unit",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center animate-on-scroll">
            <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
              Discuter de votre projet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Entrepreneuriat;
