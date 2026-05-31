import { useEffect, useState } from "react";

/**
 * Full-viewport curtain reveal played once per session.
 * Two anthracite panels slide apart, a fuchsia line sweeps,
 * then the curtain lifts to expose the page.
 */
const ImmersiveReveal = () => {
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");

  useEffect(() => {
    if (sessionStorage.getItem("hero-reveal-played")) {
      setPhase("done");
      return;
    }
    document.body.style.overflow = "hidden";
    setPhase("playing");
    const t1 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("hero-reveal-played", "true");
      document.body.style.overflow = "";
    }, 2200);
    return () => {
      clearTimeout(t1);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden="true">
      {/* Top panel */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-anthracite transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          phase === "playing" ? "-translate-y-full" : ""
        }`}
        style={{ transitionDelay: "1100ms" }}
      />
      {/* Bottom panel */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-anthracite transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          phase === "playing" ? "translate-y-full" : ""
        }`}
        style={{ transitionDelay: "1100ms" }}
      />
      {/* Center sweep line */}
      <div className="absolute inset-x-0 top-1/2 h-px overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-transparent via-fuchsia to-transparent transition-transform duration-[900ms] ease-out ${
            phase === "playing" ? "translate-x-0 scale-x-100" : "-translate-x-full scale-x-0"
          }`}
          style={{ boxShadow: "0 0 30px hsl(var(--fuchsia))" }}
        />
      </div>
      {/* Brand mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className={`font-heading uppercase tracking-[0.5em] text-off-white text-sm md:text-base transition-all duration-700 ${
            phase === "playing" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Management <span className="text-fuchsia">Skills</span>
        </p>
      </div>
    </div>
  );
};

export default ImmersiveReveal;