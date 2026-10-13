import { useRef, useState } from "react";
import { Clock3, Headphones } from "lucide-react";
import logoMs from "@/assets/logo-ms.png";
import { podcasts } from "@/data/podcasts";
import useSEO from "@/hooks/useSEO";

const Podcasts = () => {
  const players = useRef<Array<HTMLAudioElement | null>>([]);
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  useSEO({
    title: "Podcasts stratégie et segmentation commerciale | Management Skills",
    description: "Écoutez les podcasts Management Skills : diagnostic stratégique du cas Djibs, DAS, PESTEL, Porter, SWOT scoré et segmentation commerciale, IPO, IPA, ICP et persona.",
    canonical: "https://strategy-coach-forge.lovable.app/podcast",
  });

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 text-fuchsia mb-5">
            <Headphones className="h-6 w-6" aria-hidden="true" />
            <span className="font-heading text-sm font-semibold uppercase">Management Skills · À l’écoute</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-off-white mb-6 tracking-normal">Podcast</h1>
          <p className="font-body text-lg text-off-white/70 max-w-3xl leading-relaxed">
            Stratégie et développement commercial : des analyses pour mettre les outils en perspective et éclairer les décisions, à partir de situations concrètes.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16">
        <div className="container mx-auto max-w-5xl space-y-12">
          {podcasts.map((episode, index) => (
            <article key={episode.number} aria-labelledby={`episode-${episode.number}`} className="border-b border-border pb-12 last:border-0 last:pb-0">
              <div className="grid gap-6 md:grid-cols-[100px_minmax(0,1fr)] md:gap-8">
                <div className="flex md:flex-col items-center gap-4 md:items-start">
                  <img src={logoMs} alt="Management Skills" className="w-20 h-20 rounded-full object-contain" />
                  <span className="text-sm font-heading font-semibold text-primary">ÉPISODE {String(episode.number).padStart(2, "0")}</span>
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-3 text-sm">
                    <span className="font-heading font-semibold text-fuchsia">{episode.category}</span>
                    <span className="flex items-center gap-2 text-muted-foreground"><Clock3 className="w-4 h-4" aria-hidden="true" />{episode.duration}</span>
                  </div>
                  <h2 id={`episode-${episode.number}`} className="text-xl md:text-2xl text-foreground mb-5 leading-snug tracking-normal">{episode.title}</h2>
                  <div className="font-body text-muted-foreground leading-relaxed space-y-4 mb-5">
                    <p>{episode.description}</p>
                    <p>{episode.takeaway}</p>
                  </div>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-heading font-semibold text-primary mb-6" aria-label="Sujets abordés">
                    {episode.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                  <audio
                    ref={(element) => { players.current[index] = element; }}
                    controls
                    preload="none"
                    className="w-full h-14"
                    aria-label={`Écouter l’épisode ${episode.number} : ${episode.title}`}
                    onPlay={() => {
                      players.current.forEach((player, playerIndex) => {
                        if (playerIndex !== index) player?.pause();
                      });
                    }}
                    onError={() => setErrors((previous) => ({ ...previous, [episode.number]: true }))}
                    src={episode.audio}
                  >Votre navigateur ne prend pas en charge la lecture audio.</audio>
                  {errors[episode.number] && <p role="alert" className="text-sm text-destructive mt-3">La lecture est momentanément indisponible. Veuillez réessayer dans quelques instants.</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Podcasts;