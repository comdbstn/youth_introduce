"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/ui/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import ConnectSection from "@/components/sections/ConnectSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen">
          <HeroSection />
          <AboutSection />
          <WorksSection />
          <ConnectSection />
        </main>
      )}
    </>
  );
}
