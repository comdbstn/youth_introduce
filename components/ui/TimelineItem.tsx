"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface MajorProject {
  name: string;
  description: string;
  image: string;
}

interface TimelineItemProps {
  year: string;
  activities: string[];
  majorProjects: MajorProject[];
  index: number;
  isInView: boolean;
}

export default function TimelineItem({
  year,
  activities,
  majorProjects,
  index,
  isInView,
}: TimelineItemProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const isEven = index % 2 === 0;

  // 모바일 체크
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 20 : 0, x: isMobile ? 0 : (isEven ? -30 : 30) }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ delay: Math.min(index * 0.15, 0.6), duration: 0.5, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-6 sm:gap-8`}
    >
      {/* コンテンツ */}
      <div className={`flex-1 w-full ${isEven ? "md:text-right" : "md:text-left"}`}>
        <div
          className={`bg-white/5 backdrop-blur-sm border border-accent1/20 rounded-lg p-4 sm:p-5 md:p-6 hover:border-accent1/50 transition-all duration-300`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-accent3 mb-3 sm:mb-4">{year}</h3>

          {/* アクティビティリスト */}
          <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
            {activities.map((activity, idx) => (
              <li
                key={idx}
                className="text-accent2 text-xs sm:text-sm md:text-base font-mincho flex items-start gap-2"
              >
                <span className="text-accent1 mt-1 flex-shrink-0">•</span>
                <span className="flex-1">{activity}</span>
              </li>
            ))}
          </ul>

          {/* メジャープロジェクト */}
          {majorProjects.length > 0 && (
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-accent1/20">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Major Projects
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {majorProjects.map((project, projIdx) => (
                  <motion.div
                    key={projIdx}
                    onHoverStart={() => setHoveredProject(projIdx)}
                    onHoverEnd={() => setHoveredProject(null)}
                    onTouchStart={() => setHoveredProject(projIdx)}
                    onTouchEnd={() => setHoveredProject(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative bg-white/10 rounded-lg p-3 sm:p-4 cursor-pointer border border-accent3/30 hover:border-accent3 active:border-accent3 transition-all duration-300 min-h-[80px] sm:min-h-[100px]"
                  >
                    <h5 className="text-sm sm:text-base text-accent3 font-bold mb-1.5 sm:mb-2">
                      {project.name}
                    </h5>
                    <p className="text-accent2 text-xs sm:text-sm font-mincho leading-relaxed">
                      {project.description}
                    </p>

                    {/* ホバー時の拡大効果（画像がある場合の準備） */}
                    {hoveredProject === projIdx && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-primary/95 rounded-lg p-4 z-10 flex flex-col justify-center"
                      >
                        <h5 className="text-accent3 font-bold text-lg mb-2">
                          {project.name}
                        </h5>
                        <p className="text-accent2 text-sm font-mincho leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mt-3 text-xs text-accent1">
                          クリックで詳細を見る →
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 中央の年表示（デスクトップ用） */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary border-4 border-accent1 rounded-full items-center justify-center z-10">
        <span className="text-accent1 font-bold text-lg">{year}</span>
      </div>

      {/* スペーサー（レイアウト調整用） */}
      <div className="flex-1 hidden md:block"></div>
    </motion.div>
  );
}
