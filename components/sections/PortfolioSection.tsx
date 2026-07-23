"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import PortfolioCard from "../ui/PortfolioCard";
import type { SiteContent } from "@/lib/content/types";

export default function PortfolioSection({
  content,
  labels,
}: {
  content: SiteContent["portfolio"];
  labels: SiteContent["card"];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  // 모바일: 15%, PC: 20% 보일 때 애니메이션 시작 (너무 일찍 시작하지 않도록)
  const isInView = useInView(sectionRef, { once: true, amount: isMobile ? 0.15 : 0.2 });
  const [filter, setFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);
  const itemsPerPage = 6;

  const { categories, projects: portfolioData } = content;

  const filteredProjects = filter === "all"
    ? portfolioData
    : portfolioData.filter(project => project.category === filter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, itemsPerPage);

  const hasMore = filteredProjects.length > itemsPerPage;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-primary to-[#0a0e1a] py-16 sm:py-20 px-5 sm:px-6 md:px-8 w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight px-2">
            {content.title}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent3 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-accent2 font-mincho px-4">
            {content.subtitle}
          </p>
        </motion.div>

        {/* フィルター */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setFilter(category.value);
                setShowAll(false);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                filter === category.value
                  ? "bg-gradient-to-r from-accent3 to-accent1 text-primary"
                  : "bg-white/5 text-accent2 hover:bg-white/10 border border-accent1/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* プロジェクトグリッド */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8"
          >
            {displayedProjects.map((project, index) => (
              <PortfolioCard
                key={project.id}
                project={project}
                labels={labels}
                index={index}
                isInView={true}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* もっと見るボタン */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-accent3 to-accent1 text-primary font-bold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:shadow-2xl hover:shadow-accent3/50 active:shadow-lg active:scale-95 transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? content.showLess : content.showMore(filteredProjects.length - itemsPerPage)}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
