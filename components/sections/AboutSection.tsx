"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { SiteContent } from "@/lib/content/types";

export default function AboutSection({ content }: { content: SiteContent["about"] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { mainValues, subValues } = content;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-primary to-[#0a0e1a] py-16 sm:py-20 px-5 sm:px-6 md:px-8 w-full max-w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ヘッドライン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight px-2">
            {content.heading}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent1 mx-auto"></div>
        </motion.div>

        {/* ストーリー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 sm:mb-20"
        >
          <div className="prose prose-invert max-w-none">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg md:text-xl text-accent2 leading-relaxed mb-5 sm:mb-6 font-mincho"
              >
                {paragraph}
              </p>
            ))}
            <p className="text-base sm:text-lg md:text-xl text-accent3 leading-relaxed font-mincho font-bold">
              {content.closing}
            </p>
          </div>
        </motion.div>

        {/* コアバリュー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            {content.coreValuesTitle}
          </h3>

          {/* メインカード - 3列グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {mainValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                className={`bg-gradient-to-br ${value.gradient} backdrop-blur-sm border-2 border-accent3/40 rounded-xl p-6 sm:p-8 hover:border-accent3 hover:shadow-2xl hover:shadow-accent3/20 transition-all duration-300 hover:transform hover:scale-105 active:scale-100 relative overflow-hidden group`}
              >
                {/* 背景装飾 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent1/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                {/* アイコン */}
                <div className="text-5xl sm:text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>

                {/* タイトル */}
                <h4 className="text-2xl sm:text-3xl font-bold text-accent3 mb-2 font-mincho relative z-10">
                  {value.title}
                </h4>

                {/* サブタイトル */}
                <p className="text-sm sm:text-base text-accent1 mb-4 font-haas relative z-10">
                  {value.subtitle}
                </p>

                {/* 説明 */}
                <p className="text-sm sm:text-base text-accent2 leading-relaxed font-mincho relative z-10">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* サブカード - 3列グリッド、小さいサイズ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {subValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-accent1/20 rounded-lg p-4 sm:p-5 hover:border-accent1/50 transition-all duration-300 hover:transform hover:scale-105 active:scale-100"
              >
                {/* アイコン */}
                <div className="text-3xl sm:text-4xl mb-3">
                  {value.icon}
                </div>

                {/* タイトル */}
                <h4 className="text-lg sm:text-xl font-bold text-accent1 mb-1 font-mincho">
                  {value.title}
                </h4>

                {/* サブタイトル */}
                <p className="text-xs sm:text-sm text-accent2/70 mb-2 font-haas">
                  {value.subtitle}
                </p>

                {/* 説明 */}
                <p className="text-xs sm:text-sm text-accent2 leading-relaxed font-mincho">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
