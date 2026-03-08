import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMs from "@/assets/logo-ms.png";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/expertises", label: "Expertises" },
  { to: "/coaching", label: "Dirigeants" },
  { to: "/entrepreneuriat", label: "Entrepreneurs" },
  { to: "/strategie", label: "Stratégie" },
  { to: "/formations", label: "Formations" },
  { to: "/universites", label: "Enseignement supérieur" },
  { to: "/vision", label: "Vision" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-anthracite/95 backdrop-blur-md border-b border-purple-deep/20">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoMs} alt="Management Skills" className="h-9 w-9 rounded-full" />
            <span className="font-heading font-bold text-xl text-off-white tracking-wide">
              MANAGEMENT <span className="text-fuchsia">SKILLS</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-body transition-colors duration-200 rounded-md ${
                  location.pathname === link.to
                    ? "text-fuchsia"
                    : "text-off-white/70 hover:text-off-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-off-white"
            aria-label="Menu de navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden bg-anthracite border-t border-purple-deep/20 px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-sm font-body transition-colors ${
                  location.pathname === link.to
                    ? "text-fuchsia"
                    : "text-off-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-anthracite text-off-white/60 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <img src={logoMs} alt="Management Skills" className="h-8 w-8 rounded-full" />
                <h4 className="font-heading font-bold text-off-white text-lg">
                  MANAGEMENT <span className="text-fuchsia">SKILLS</span>
                </h4>
              </div>
              <p className="text-sm leading-relaxed mb-3">
                Cabinet d'expertise en leadership, stratégie et management.
                Conseil, formation, coaching exécutif et conférences.
              </p>
              <p className="text-xs text-off-white/40">
                Organisme de formation déclaré<br />
                N° 32 59 13455 59
              </p>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-off-white text-sm mb-3">Accompagnement</h5>
              <div className="flex flex-col gap-1.5">
                <Link to="/coaching" className="text-sm hover:text-off-white transition-colors">Dirigeants & CODIR</Link>
                <Link to="/entrepreneuriat" className="text-sm hover:text-off-white transition-colors">Entrepreneurs</Link>
                <Link to="/strategie" className="text-sm hover:text-off-white transition-colors">Conseil stratégique</Link>
                <Link to="/formations" className="text-sm hover:text-off-white transition-colors">Formations & Conférences</Link>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-off-white text-sm mb-3">Le cabinet</h5>
              <div className="flex flex-col gap-1.5">
                <Link to="/expertises" className="text-sm hover:text-off-white transition-colors">Expertises</Link>
                <Link to="/vision" className="text-sm hover:text-off-white transition-colors">Vision & méthode</Link>
                <Link to="/a-propos" className="text-sm hover:text-off-white transition-colors">À propos</Link>
                <Link to="/reseau" className="text-sm hover:text-off-white transition-colors">Réseau d'experts</Link>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-off-white text-sm mb-3">Contact</h5>
              <p className="text-sm">hello@mmanagement.fr</p>
              <p className="text-sm">07 81 33 39 09</p>
              <p className="text-sm mt-2">Lille<br />Hauts-de-France</p>
              <a
                href="https://www.linkedin.com/in/fabienberruyer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-off-white transition-colors mt-2 inline-block"
              >
                LinkedIn →
              </a>
            </div>
          </div>
          <div className="border-t border-off-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs">© {new Date().getFullYear()} Management Skills. Tous droits réservés.</p>
            <Link to="/mentions-legales" className="text-xs hover:text-off-white transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
