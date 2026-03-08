import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Target, TrendingUp, Shield, BarChart3,
  Lightbulb, Globe, Trophy, RefreshCw, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const expertises = [
  {
    icon: Target,
    title: "Leadership et management stratégique",
    context: "Trop de managers accèdent à des postes de direction sans y avoir été préparés. Ils maîtrisent leur métier, mais pas l'art de diriger. Les équipes perdent en cohésion, les décisions manquent de cap, et le turnover s'accélère silencieusement.",
    response: "Nous développons les compétences de leadership et construisons des pratiques managériales performantes et responsables — pour que diriger devienne un acte structuré, pas une improvisation quotidienne.",
  },
  {
    icon: TrendingUp,
    title: "Stratégie d'entreprise et transformation",
    context: "Beaucoup d'organisations confondent agitation et stratégie. Elles multiplient les projets, réorganisent sans cesse, mais ne savent plus pourquoi. Les équipes s'épuisent, les résistances au changement s'installent, et la performance stagne.",
    response: "Nous accompagnons les dirigeants dans l'analyse stratégique, le positionnement et la conduite du changement — avec une approche qui remet la clarté au centre de l'action.",
  },
  {
    icon: Shield,
    title: "Gestion de crise et prise de décision",
    context: "En période de crise, les réflexes habituels ne fonctionnent plus. La pression monte, l'information est incomplète, et les décisions tardives ou émotionnelles aggravent la situation au lieu de la résoudre.",
    response: "Nous formons les dirigeants à décider avec méthode en situation d'incertitude, de pression et de complexité — pour transformer la crise en moment de leadership.",
  },
  {
    icon: BarChart3,
    title: "Performance commerciale",
    context: "Les cycles de vente s'allongent, les taux de conversion stagnent, et les équipes commerciales peinent à justifier la valeur de leur offre face à des acheteurs de plus en plus exigeants. La guerre des prix devient le réflexe par défaut.",
    response: "Nous déployons les méthodes Value Selling et SPIN Selling pour structurer l'approche commerciale et remettre la création de valeur au cœur de la relation client.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneuriat et innovation",
    context: "L'idée est là, la conviction aussi. Mais entre l'intuition fondatrice et le premier euro levé, combien de projets échouent faute de structuration, de pitch convaincant ou de méthode pour tester le marché ?",
    response: "Nous accompagnons les entrepreneurs et intrapreneurs dans la structuration de leur projet, la construction de leur MVP et la préparation de leur levée de fonds.",
  },
  {
    icon: Globe,
    title: "Management interculturel et inclusion",
    context: "Dans les équipes internationales, les malentendus culturels ne sont pas des anecdotes — ce sont des facteurs d'échec. Les projets déraillent, les talents se sentent exclus, et la collaboration se dégrade.",
    response: "Nous intégrons la diversité culturelle et l'inclusion comme de véritables leviers de performance collective — pas comme des obligations réglementaires.",
  },
  {
    icon: Trophy,
    title: "Management du sport et performance collective",
    context: "Les équipes sportives de haut niveau savent quelque chose que beaucoup d'entreprises ignorent : la performance collective ne naît pas du talent individuel, mais de la capacité à fonctionner ensemble sous pression.",
    response: "Nous transposons les pratiques du sport de haut niveau dans le management des équipes — préparation mentale, cohésion, culture de l'exigence partagée.",
  },
  {
    icon: RefreshCw,
    title: "Transformation managériale",
    context: "Les pratiques managériales héritées du XXᵉ siècle ne fonctionnent plus. Les nouvelles générations attendent autre chose, les modèles hiérarchiques rigides créent de la frustration, et les meilleurs profils partent vers des organisations plus agiles.",
    response: "Nous modernisons les cultures managériales pour les rendre compatibles avec les attentes contemporaines — sans céder aux effets de mode.",
  },
];

const Expertises = () => {
  useScrollAnimation();

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              Nos <span className="text-fuchsia">expertises</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Chaque expertise que nous déployons répond à des réalités terrain que nous observons quotidiennement chez nos clients. Pas de théorie déconnectée : des réponses concrètes à des problèmes concrets.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-10">
            {expertises.map((exp, i) => (
              <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-1">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">{exp.title}</h3>
                    <p className="text-foreground/70 font-body leading-relaxed mb-2">{exp.context}</p>
                    <p className="text-foreground/80 font-body leading-relaxed font-medium">{exp.response}</p>
                  </div>
                </div>
                {i < expertises.length - 1 && <div className="border-b border-border mt-10" />}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center animate-on-scroll">
            <Link to="/contact" className="btn-hero-primary inline-flex items-center gap-2">
              Échanger sur vos enjeux <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertises;
