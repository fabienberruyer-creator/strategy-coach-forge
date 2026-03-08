import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import logoMs from "@/assets/logo-ms.png";

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("welcome-seen");
    if (!alreadySeen) {
      const timer = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("welcome-seen", "true");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="bg-anthracite border-purple-deep/30 text-off-white max-w-md text-center p-10 gap-6">
        <div className="flex flex-col items-center gap-5">
          <img src={logoMs} alt="Management Skills" className="h-20 w-20 rounded-full shadow-lg" />
          <h2 className="font-heading text-xl md:text-2xl text-off-white">
            L'équipe <span className="text-fuchsia">MANAGEMENT SKILLS</span> vous souhaite la bienvenue
          </h2>
          <p className="text-sm tracking-widest text-off-white/50 font-heading uppercase">
            Leadership • Stratégie • Management • Entrepreneuriat
          </p>
          <Button onClick={handleClose} className="btn-hero-primary mt-2">
            Découvrir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
