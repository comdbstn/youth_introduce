"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingContactButton() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = () => {
    const connectSection = document.querySelector('#connect-section');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.button
      onClick={scrollToContact}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-gradient-to-r from-accent3 to-accent1 text-primary font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:shadow-accent3/50 transition-all duration-300 flex items-center gap-2"
    >
      <motion.span
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl"
      >
        💬
      </motion.span>
      <span className="text-sm sm:text-base font-bold">Contact</span>
    </motion.button>
  );
}
