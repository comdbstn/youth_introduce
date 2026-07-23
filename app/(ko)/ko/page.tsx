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
import { ko } from "@/lib/content/ko";

export default function KoreanHome() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LanguageToggle current="ko" />

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            name={ko.loading.name}
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <main className="min-h-screen">
            <HeroSection content={ko.hero} />
            <AboutSection content={ko.about} />
            <WorksSection content={ko.works} />
            <PortfolioSection content={ko.portfolio} labels={ko.card} />
            <ConnectSection content={ko.connect} />
          </main>
          <FloatingContactButton />
        </>
      )}
    </>
  );
}
