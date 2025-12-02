"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PortfolioCard from "../ui/PortfolioCard";

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isInView = useInView(sectionRef, { once: false, amount: isMobile ? 0.05 : 0.2 });
  const [filter, setFilter] = useState<string>("all");

  // 사용자가 제공할 포트폴리오 데이터 (임시 구조)
  const portfolioData: any[] = [
    // 여기에 사용자가 제공하는 포트폴리오 데이터가 들어갑니다
  ];

  const categories = [
    { value: "all", label: "すべて" },
    { value: "startup", label: "創業" },
    { value: "development", label: "開発外注" },
    { value: "marketing", label: "マーケティング外注" },
  ];

  const filteredProjects = filter === "all"
    ? portfolioData
    : portfolioData.filter(project => project.category === filter);

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
            Portfolio
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent3 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-accent2 font-mincho px-4">
            創業・開発・マーケティング実績
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
              onClick={() => setFilter(category.value)}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
