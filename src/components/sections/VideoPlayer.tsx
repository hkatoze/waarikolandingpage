import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

type VideoPlayerProps = {
  onClose: () => void;
  videoUrl: string; // URL de la vidéo YouTube
};

export function VideoPlayer({ onClose }: VideoPlayerProps) {
  return (
    <div className="relative">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
      >
        <X className="w-6 h-6" />
      </motion.button>

      <div className="w-full aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/HuX-0vqh2sY?si=Cq2eddj3urv5pY7u"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
