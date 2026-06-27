"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2000);
    
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090d16] text-[#f1f5f9]"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 select-none">
              Thejaswini P
            </h1>
            <p className="text-sm tracking-widest text-[#38bdf8] uppercase select-none">
              Full Stack Developer Intern
            </p>
          </motion.div>
          
          <div className="absolute bottom-20 w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-sky-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
