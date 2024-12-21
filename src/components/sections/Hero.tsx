import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AfricanPattern } from "../patterns/AfricanPattern";
import { DownloadDialog } from "../DownloadDialog";
import { Logo } from "../Logo";

export function Hero() {
  const [isDownloadOpen, setIsDownloadOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-600 to-orange-500 relative overflow-hidden">
      <AfricanPattern />
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Logo />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#features"
              className="text-white hover:text-orange-200"
            >
              Fonctionnalités
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#cible"
              className="text-white hover:text-orange-200"
            >
              Cible
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#faq"
              className="text-white hover:text-orange-200"
            >
              FAQ
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="text-white hover:text-orange-200"
            >
              Nous Contactez
            </motion.a>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsDownloadOpen(true)}
            className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors"
          >
            Essayer gratuitement
          </motion.button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl font-bold text-white mb-6"
          >
            La facturation simplifiée pour les entrepreneurs africains
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-orange-50 mb-8"
          >
            Créez des factures professionnelles en quelques clics. Solution
            complète de gestion pour votre entreprise.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsDownloadOpen(true)}
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors inline-flex items-center"
          >
            Commencer maintenant
            <ArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>

      <DownloadDialog
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </header>
  );
}
