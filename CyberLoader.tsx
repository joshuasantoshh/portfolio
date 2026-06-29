"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "SECURE_ESTABLISHING_SESSION...",
  "DOWNLOADING_AI_ML_DATA_PAYLOADS...",
  "DECRYPTING_SECURE_COORDINATES...",
  "INJECTING_HUD_GRAPHICS...",
  "AUTHENTICATED // ACCESS_GRANTED"
];

interface CyberLoaderProps {
  onComplete: () => void;
}

export default function CyberLoader({ onComplete }: CyberLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Progress counter (lerping fast to slow)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 500); // trigger page load reveal
          }, 600);
          return 100;
        }
        // Increment progress dynamically
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Print lines synced with progress
    if (progress > 80) {
      setCurrentLineIdx(4);
    } else if (progress > 55) {
      setCurrentLineIdx(3);
    } else if (progress > 35) {
      setCurrentLineIdx(2);
    } else if (progress > 15) {
      setCurrentLineIdx(1);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-black z-99999 flex flex-col items-center justify-center px-6 font-mono select-none"
        >
          {/* Subtle Grid backdrop */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="w-full max-w-md space-y-6 text-left relative z-10">
            {/* HUD Title */}
            <div className="flex items-center justify-between text-gray-500 text-[10px] tracking-wider uppercase border-b border-primary/20 pb-3">
              <span>SYSTEM_INITIALIZATION</span>
              <span className="animate-pulse text-primary font-bold">● ONLINE</span>
            </div>

            {/* Simulated Console Logger */}
            <div className="h-28 space-y-2 text-xs text-gray-400">
              {lines.slice(0, currentLineIdx + 1).map((line, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <span className="text-primary font-bold">&gt;</span>
                  <span className={idx === 4 ? "text-green-400 font-bold" : ""}>{line}</span>
                </div>
              ))}
              {progress < 100 && (
                <div className="flex gap-1 items-center text-primary font-bold animate-pulse">
                  <span>&gt;</span>
                  <span className="w-1.5 h-3 bg-primary" />
                </div>
              )}
            </div>

            {/* Progress Bar & Percentage */}
            <div className="space-y-2.5">
              <div className="flex items-baseline justify-between text-xs font-bold font-mono">
                <span className="text-gray-500 uppercase tracking-widest">LOADING_SYS_RESOURCES</span>
                <span className="text-primary">{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 border border-white/5 rounded-none overflow-hidden p-[2px]">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                  className="h-full bg-primary rounded-none shadow-[0_0_10px_#ff003c]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
