"use client";

import { motion } from "framer-motion";
import ParticleBackground from "../animations/ParticleBackground";
import ScrollIndicator from "../ui/ScrollIndicator";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary w-full max-w-full">
      {/* 파티클 배경 애니메이션 */}
      <ParticleBackground />

      {/* 메인 콘텐츠 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 sm:px-8"
      >
        {/* 로고/심볼 영역 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-10 sm:mb-12"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight font-mincho">
            鄭允琇
          </h1>
          <div className="text-accent1 text-base sm:text-lg md:text-xl tracking-wide">
            Tei Youth | テイ・ユース
          </div>
        </motion.div>

        {/* 캐치프레이즈 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-accent1 font-haas tracking-wide">
            Developer & Entrepreneur
          </p>
        </motion.div>

        {/* 서브텍스트 - 브랜드 메시지 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-2xl mx-auto px-2"
        >
          <p className="text-base sm:text-lg md:text-xl text-accent2 font-mincho leading-relaxed">
            動かなければ、アイデアはただの言葉だ。
          </p>
          <p className="text-xs sm:text-sm md:text-base text-accent2/70 mt-3 italic">
            Ideas mean nothing until they move.
          </p>
        </motion.div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <ScrollIndicator />
    </section>
  );
}
