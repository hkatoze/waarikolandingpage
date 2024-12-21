import React from "react";
import { Monitor, Apple } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Version = {
  os: "mac" | "windows";
  version: string;
  url: string;
};

const versions: Record<"mac" | "windows", Version[]> = {
  mac: [
    {
      os: "mac",
      version: "v1.0.0 (Intel)",
      url: "/downloads/waariko-1.0.0.dmg",
    },
    {
      os: "mac",
      version: "v1.0.0 (Apple Silicon)",
      url: "/downloads/waariko-1.0.0-arm64.dmg",
    },
  ],
  windows: [
    {
      os: "windows",
      version: "v1.0.0 (64-bit)",
      url: "https://waariko.lelabo-du-numerique.com/Waariko-1.0.0.exe",
    },
    {
      os: "windows",
      version: "v1.0.0 (32-bit)",
      url: "/downloads/waariko-1.0.0-win32.exe",
    },
  ],
};

type DownloadDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function DownloadDialog({ isOpen, onClose }: DownloadDialogProps) {
  const [selectedOS, setSelectedOS] = React.useState<"mac" | "windows" | null>(
    null
  );

  const handleDownload = (url: string) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "";
    anchor.click();
    anchor.remove();

    console.log(`Downloading from: ${url}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-4">Télécharger Waariko</h2>

            <AnimatePresence mode="wait">
              {!selectedOS ? (
                <motion.div
                  key="os-selection"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedOS("mac")}
                    className="p-4 border rounded-lg hover:bg-orange-50 flex flex-col items-center"
                  >
                    <Apple className="w-8 h-8 mb-2 text-orange-600" />
                    <span>Pour Mac</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedOS("windows")}
                    className="p-4 border rounded-lg hover:bg-orange-50 flex flex-col items-center"
                  >
                    <Monitor className="w-8 h-8 mb-2 text-orange-600" />
                    <span>Pour Windows</span>
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="version-selection"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-3"
                >
                  <div className="flex items-center mb-4">
                    {selectedOS === "mac" ? (
                      <Apple className="w-6 h-6 mr-2 text-orange-600" />
                    ) : (
                      <Monitor className="w-6 h-6 mr-2 text-orange-600" />
                    )}
                    <h3 className="text-lg font-semibold">
                      Choisissez votre version
                    </h3>
                  </div>
                  {versions[selectedOS].map((version) => (
                    <motion.button
                      key={version.version}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleDownload(version.url)}
                      className="w-full p-3 text-left border rounded-lg hover:bg-orange-50"
                    >
                      {version.version}
                    </motion.button>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedOS(null)}
                    className="text-orange-600 hover:text-orange-700 text-sm mt-4"
                  >
                    ← Retour au choix du système
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onClose}
              className="mt-6 text-gray-500 hover:text-gray-700"
            >
              Fermer
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
