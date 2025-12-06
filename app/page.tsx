"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/ui/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ConnectSection from "@/components/sections/ConnectSection";
import FloatingContactButton from "@/components/ui/FloatingContactButton";

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
        <>
          <main className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <WorksSection />
            <PortfolioSection />
            <ConnectSection />
          </main>
          <FloatingContactButton />
        </>
      )}
    </>
  );
}
