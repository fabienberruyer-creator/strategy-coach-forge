import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@mmanagement.fr?subject=Contact depuis le site&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
  };

  return (
    <>
      <section className="section-padding section-dark">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-off-white mb-6">
              <span className="text-fuchsia">Contact</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Management Skills
              </h2>
              <div className="space-y-4 mb-8">
                <a href="mailto:hello@mmanagement.fr" className="flex items-center gap-3 text-foreground/80 font-body hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  hello@mmanagement.fr
                </a>
                <a href="tel:0781333909" className="flex items-center gap-3 text-foreground/80 font-body hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  07 81 33 39 09
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Nom</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-md border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-md border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-md border border-border bg-card px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
              <button type="submit" className="btn-hero-primary w-full">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
