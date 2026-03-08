import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useSEO from "@/hooks/useSEO";
import { Mail, Phone, MapPin, Linkedin, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  useScrollAnimation();
  useSEO({
    title: "Contact – Management Skills | Prendre rendez-vous avec Fabien Berruyer",
    description: "Contactez Management Skills pour un accompagnement de dirigeant, une formation, une conférence ou un conseil en stratégie. Basé à Lille (Hauts-de-France).",
  });

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", company: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@mmanagement.fr?subject=${encodeURIComponent(formData.subject || "Demande de contact")}&body=${encodeURIComponent(
      `Prénom : ${formData.firstName}\nNom : ${formData.lastName}\nEntreprise : ${formData.company}\nEmail : ${formData.email}\nTéléphone : ${formData.phone}\n\n${formData.message}`
    )}`;
    setSubmitted(true);
  };

  const update = (field: string, value: string) => setFormData({ ...formData, [field]: value });

  const inputClass = "w-full rounded-md border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-4">
              <span className="text-fuchsia">Contact</span>
            </h1>
            <p className="text-off-white/70 font-body text-lg leading-relaxed">
              Parlons de vos enjeux de leadership, de management ou de stratégie.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Coordonnées */}
            <div className="md:col-span-2 animate-on-scroll">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                Management Skills
              </h2>
              <div className="space-y-4 mb-8">
                <a href="mailto:hello@mmanagement.fr" className="flex items-center gap-3 text-foreground/80 font-body hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  hello@mmanagement.fr
                </a>
                <a href="tel:+33781333909" className="flex items-center gap-3 text-foreground/80 font-body hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  07 81 33 39 09
                </a>
                <div className="flex items-center gap-3 text-foreground/80 font-body">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  Pérenchies (59840), Hauts-de-France
                </div>
                <a
                  href="https://www.linkedin.com/in/fabienberruyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 font-body hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary flex-shrink-0" />
                  LinkedIn – Fabien Berruyer
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Organisme de formation déclaré<br />
                  N° 32 59 13455 59<br />
                  SIRET : 524 383 882
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="md:col-span-3 animate-on-scroll" style={{ transitionDelay: "150ms" }}>
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Message envoyé</h3>
                  <p className="text-muted-foreground font-body">
                    Votre demande a bien été transmise. Nous vous répondrons dans les meilleurs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Prénom</label>
                      <input type="text" required value={formData.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Nom</label>
                      <input type="text" required value={formData.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Entreprise / Organisation</label>
                    <input type="text" value={formData.company} onChange={(e) => update("company", e.target.value)} className={inputClass} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Téléphone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Objet</label>
                    <select value={formData.subject} onChange={(e) => update("subject", e.target.value)} className={inputClass}>
                      <option value="">Sélectionner un objet</option>
                      <option value="Accompagnement de dirigeant">Accompagnement de dirigeant</option>
                      <option value="Accompagnement entrepreneurial">Accompagnement entrepreneurial</option>
                      <option value="Formation">Formation</option>
                      <option value="Conférence ou intervention">Conférence ou intervention</option>
                      <option value="Conseil stratégique">Conseil stratégique</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Message</label>
                    <textarea required rows={5} value={formData.message} onChange={(e) => update("message", e.target.value)} className={`${inputClass} resize-none`} placeholder="Décrivez votre situation ou votre besoin..." />
                  </div>
                  <button type="submit" className="btn-hero-primary w-full">
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
