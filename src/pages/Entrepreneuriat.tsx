import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import { Rocket, Target, BarChart3, Lightbulb, Search, ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const accompagnements = [
  {
    icon: Target,
    title: "Clarification du positionnement",
    text: "Avoir une bonne idée ne suffit pas. Encore faut-il savoir la formuler clairement, identifier à qui elle s'adresse vraiment, et construire un modèle économique qui tient la route. Nous travaillons avec les entrepreneurs pour transformer l'intuition en architecture business lisible, différenciante et crédible.",
  },
  {
    icon: Lightbulb,
    title: "Construction de l'offre et du business model",
    text: "Une offre floue ne se vend pas. Un business model bancal ne résiste pas au premier contact avec le marché. Nous aidons les fondateurs à structurer leur proposition de valeur, à calibrer leur modèle économique et à construire une offre qui parle au client — pas seulement au fondateur.",
  },
  {
    icon: BarChart3,
    title: "Stratégie commerciale : Value Selling & SPIN",
    text: "Vendre ne consiste pas à réciter les caractéristiques de son produit. Les méthodes Value Selling et SPIN Selling permettent de structurer l'approche commerciale autour de la création de valeur pour le client, d'identifier ses véritables enjeux et de construire des propositions qui déclenchent la décision.",
  },
  {
    icon: TrendingUp,
    title: "Développement et croissance",
    text: "Passer de la première vente à une trajectoire de croissance maîtrisée est l'un des défis les plus sous-estimés de l'entrepreneuriat. Nous accompagnons les entrepreneurs dans la structuration de leur développement : conquête de marché, organisation, recrutement et arbitrages de croissance.",
  },
  {
    icon: Users,
    title: "Leadership entrepreneurial",
    text: "Diriger une entreprise, ce n'est pas seulement avoir une idée brillante. C'est savoir embarquer une équipe, prendre des décisions dans l'incertitude, gérer les tensions et incarner une vision. Le leadership entrepreneurial se construit — et nous sommes là pour ça.",
  },
  {
    icon: Search,
    title: "Recherche de financement et pitch",
    text: "Un investisseur voit des dizaines de projets par semaine. En quelques minutes, il sait si le vôtre mérite son attention. Nous concevons des pitch decks qui captent l'attention, entraînons les fondateurs à pitcher avec clarté et conviction, et structurons la démarche de levée de fonds.",
  },
];

const Entrepreneuriat = () => {
  useScrollAnimation();
  useSEO({
    title: "Accompagnement entrepreneurial – Management Skills | Positionnement, Value Selling, croissance",
    description: "Accompagnement d'entrepreneurs : positionnement, offre, business model, Value Selling, SPIN Selling, leadership entrepreneurial et stratégie de croissance. Lille, Hauts-de-France.",
  });

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <p className="text-fuchsia font-heading font-semibold text-sm uppercase tracking-widest mb-3">Entrepreneurs</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Accompagnement <span className="text-fuchsia">entrepreneurial</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Un accompagnement concret et stratégique pour les entrepreneurs qui veulent structurer
              leur activité, développer leur offre et accélérer leur croissance — sans les discours
              creux sur le mindset.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll mb-12">
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-4">
              Entreprendre, c'est transformer une conviction en réalité économique. Mais entre l'intuition fondatrice
              et la première trajectoire de croissance, le chemin est plus complexe qu'il n'y paraît. Les arbitrages
              sont constants, les pivots parfois nécessaires, et les moments de doute inévitables.
            </p>
            <p className="text-lg font-body leading-relaxed text-foreground/80">
              Ce qui fait la différence entre un projet qui aboutit et un projet qui s'épuise,
              ce n'est généralement pas la qualité de l'idée. C'est la capacité du fondateur
              à structurer, à communiquer et à exécuter avec méthode. C'est exactement ce que nous apportons.
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
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border animate-on-scroll mb-10">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              À qui s'adresse cet accompagnement ?
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Fondateurs et créateurs d'entreprise",
                "Indépendants en développement",
                "Porteurs de projet en phase de structuration",
                "Entrepreneurs en croissance ou en repositionnement",
                "Intrapreneurs développant un nouveau business unit",
                "Dirigeants de TPE/PME en recherche de méthode",
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
              Échanger sur votre situation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Entrepreneuriat;
