import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Target, TrendingUp, Shield, BarChart3,
  Lightbulb, Globe, Trophy, RefreshCw
} from "lucide-react";

const expertises = [
  { icon: Target, title: "Leadership et management stratégique", desc: "Développer les compétences de leadership et construire des pratiques managériales performantes et responsables." },
  { icon: TrendingUp, title: "Stratégie d'entreprise et transformation organisationnelle", desc: "Accompagner les organisations dans l'analyse stratégique, le positionnement et la conduite du changement." },
  { icon: Shield, title: "Gestion de crise et prise de décision", desc: "Former les dirigeants à la décision en situation d'incertitude, de pression et de complexité." },
  { icon: BarChart3, title: "Performance commerciale", desc: "Méthodes Value Selling et SPIN Selling pour structurer et optimiser la performance commerciale." },
  { icon: Lightbulb, title: "Entrepreneuriat et innovation", desc: "Accompagner les porteurs de projets et les intrapreneurs dans la structuration et le développement de leurs initiatives." },
  { icon: Globe, title: "Management interculturel et inclusion", desc: "Intégrer la diversité culturelle et promouvoir l'inclusion comme leviers de performance." },
  { icon: Trophy, title: "Management du sport et performance collective", desc: "Transposer les pratiques du sport de haut niveau dans le management des équipes et des organisations." },
  { icon: RefreshCw, title: "Transformation managériale", desc: "Moderniser les cultures managériales pour répondre aux défis contemporains des organisations." },
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
              Des expertises stratégiques pour accompagner les organisations dans leurs enjeux les plus complexes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {expertises.map((exp, i) => (
              <div key={i} className="card-expertise animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <exp.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{exp.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertises;
