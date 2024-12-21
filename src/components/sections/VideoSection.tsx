import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Découvrez Waariko en action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Voyez comment Waariko simplifie la gestion de votre entreprise avec une démonstration complète de nos fonctionnalités.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {!isPlaying ? (
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80"
                alt="Aperçu de la vidéo"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-colors"
                >
                  <Play className="w-8 h-8 ml-1" />
                </motion.button>
              </div>
            </div>
          ) : (
            <VideoPlayer onClose={() => setIsPlaying(false)} />
          )}
        </motion.div>
      </div>
    </section>
  );
}