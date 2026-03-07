import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Vision from "./pages/Vision";
import Expertises from "./pages/Expertises";
import Strategie from "./pages/Strategie";
import Coaching from "./pages/Coaching";
import Reseau from "./pages/Reseau";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/strategie" element={<Strategie />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/reseau" element={<Reseau />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
