"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "../ui/TimelineItem";
import type { SiteContent } from "@/lib/content/types";

export default function WorksSection({ content }: { content: SiteContent["works"] }) {
  const sectionRef = useRef<HTMLElement>(null);
  // 모바일에서는 더 적은 양만 보여도 애니메이션 시작
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isInView = useInView(sectionRef, { once: true, amount: isMobile ? 0.05 : 0.2 });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-[#0a0e1a] to-primary py-16 sm:py-20 px-5 sm:px-6 md:px-8 w-full max-w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight px-2">
            {content.title}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent3 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-accent2 font-mincho px-4">
            {content.subtitle}
          </p>
        </motion.div>

        {/* タイムライン */}
        <div className="relative">
          {/* 中央の縦線 */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent1 via-accent3 to-accent1 opacity-30"></div>

          {/* タイムラインアイテム */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {content.timeline.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                activities={item.activities}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
