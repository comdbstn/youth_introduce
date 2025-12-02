"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  activities: string[];
  index: number;
  isInView: boolean;
}

export default function TimelineItem({
  year,
  activities,
  index,
  isInView,
}: TimelineItemProps) {
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
          <ul className="space-y-1.5 sm:space-y-2">
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
