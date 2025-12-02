"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ParticleBackground from "../animations/ParticleBackground";

export default function ConnectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "#",
      description: "プロフェッショナルネットワーク",
    },
    {
      name: "GitHub",
      icon: "💻",
      url: "#",
      description: "開発プロジェクト",
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:contact@teiyouth.com",
      description: "直接お問い合わせ",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-primary py-20 px-4 md:px-8 flex items-center justify-center overflow-hidden"
    >
      {/* 背景アニメーション */}
      <ParticleBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1 bg-accent3 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-accent2 font-mincho">
            コーヒー一杯いかがですか？
          </p>
        </motion.div>

        {/* メインCTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-accent3 to-accent1 text-primary font-bold text-lg md:text-xl px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-accent3/50 transition-all duration-300 transform hover:scale-105"
          >
            ☕ コーヒーチャットを予約する
          </a>
          <p className="mt-4 text-accent2/70 text-sm">
            Calendlyで簡単予約
          </p>
        </motion.div>

        {/* 区切り線 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-accent1 to-transparent mb-16"
        ></motion.div>

        {/* ソーシャルリンク */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            または、こちらからも
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-accent1/30 rounded-lg p-6 hover:border-accent3 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {link.name}
                </h4>
                <p className="text-accent2 text-sm font-mincho">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* フッター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 pt-10 border-t border-accent1/20"
        >
          <p className="text-accent2/60 text-sm mb-4 font-mincho">
            動かなければ、アイデアはただの言葉だ。
          </p>
          <p className="text-accent2/40 text-xs">
            © 2025 Tei Youth. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
