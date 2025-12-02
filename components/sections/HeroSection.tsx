"use client";

import { motion } from "framer-motion";
import ParticleBackground from "../animations/ParticleBackground";
import ScrollIndicator from "../ui/ScrollIndicator";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* 파티클 배경 애니메이션 */}
      <ParticleBackground />

      {/* 메인 콘텐츠 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        {/* 로고/심볼 영역 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-2 tracking-tight">
            Tei Youth
          </h1>
          <div className="text-accent1 text-sm md:text-base tracking-widest">
            蒼狐 | AOKITSUNE
          </div>
        </motion.div>

        {/* 캐치프레이즈 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6"
        >
          <p className="text-2xl md:text-3xl text-accent1 font-haas tracking-wide">
            Developer & Entrepreneur
          </p>
        </motion.div>

        {/* 서브텍스트 - 브랜드 메시지 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-accent2 font-mincho leading-relaxed">
            動かなければ、アイデアはただの言葉だ。
          </p>
          <p className="text-sm md:text-base text-accent2/70 mt-2 italic">
            Ideas mean nothing until they move.
          </p>
        </motion.div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <ScrollIndicator />
    </section>
  );
}
