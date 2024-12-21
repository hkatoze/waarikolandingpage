import React from "react";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-2"
    >
      <h2 className="text-xl font-bold mb-4 h-8 w-auto">Waariko</h2>
    </motion.div>
  );
}
