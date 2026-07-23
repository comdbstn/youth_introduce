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
import LanguageToggle from "@/components/ui/LanguageToggle";
import { ja } from "@/lib/content/ja";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LanguageToggle current="ja" />

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            name={ja.loading.name}
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <main className="min-h-screen">
            <HeroSection content={ja.hero} />
            <AboutSection content={ja.about} />
            <WorksSection content={ja.works} />
            <PortfolioSection content={ja.portfolio} labels={ja.card} />
            <ConnectSection content={ja.connect} />
          </main>
          <FloatingContactButton />
        </>
      )}
    </>
  );
}
