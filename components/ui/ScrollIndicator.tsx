"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      onClick={scrollToNext}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-accent2 text-sm tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-accent1 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-accent1 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
