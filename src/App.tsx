import React from "react";
import { CheckCircle } from "lucide-react";
import { Hero } from "./components/sections/Hero";
import { VideoSection } from "./components/sections/VideoSection";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { TargetAudience } from "./components/TargetAudience/TargetAudience";
import { DownloadDialog } from "./components/DownloadDialog";

function App() {
  const [isDownloadOpen, setIsDownloadOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <VideoSection />
      <Features />
      <TargetAudience />
      <Testimonials />
      <FAQ />

      {/* CTA Section */}
      <section className="bg-orange-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prêt à simplifier votre gestion ?
          </h2>
          <button
            onClick={() => setIsDownloadOpen(true)}
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors inline-flex items-center"
          >
            Essayer gratuitement pendant 30 jours
            <CheckCircle className="ml-2" />
          </button>
        </div>

        <DownloadDialog
          isOpen={isDownloadOpen}
          onClose={() => setIsDownloadOpen(false)}
        />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Waariko</h3>
              <p className="text-gray-400">
                Solution de facturation moderne pour l'Afrique
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#cible" className="hover:text-white">
                    Cible
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contactez-nous
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    CGU
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
