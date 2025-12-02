"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!sectionRef.current) return;

    // 모바일 체크
    const isMobile = window.innerWidth < 768;

    const elements = sectionRef.current.querySelectorAll(".gsap-fade-in");

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: isMobile ? 20 : 50 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 1,
          delay: index * (isMobile ? 0.1 : 0.2),
          scrollTrigger: {
            trigger: element,
            start: isMobile ? "top 85%" : "top 80%",
            end: isMobile ? "top 60%" : "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // メインカード（大きく強調されたカード）
  const mainValues = [
    {
      title: "AI活用",
      subtitle: "AI Utilization",
      description: "市場にあるほぼすべてのAIツール及びAgentを活用して業務空間を最適化します。",
      icon: "🤖",
      gradient: "from-purple-500/20 to-blue-500/20",
    },
    {
      title: "開発",
      subtitle: "Development",
      description: "速い学習と効率的なライブラリ活用で、Web/App/SaaS/ゲームまですべてのソフトウェアの開発が可能です。",
      icon: "💻",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "マーケティング",
      subtitle: "Marketing",
      description: "スタートアップのマーケティング担当から始まり、法人マーケティング運営会社を直接運営しました。",
      icon: "📊",
      gradient: "from-cyan-500/20 to-green-500/20",
    },
  ];

  // サブカード（小さいカード）
  const subValues = [
    {
      title: "教育",
      subtitle: "Education",
      description: "不動産、AI等多様な分野の教育経験",
      icon: "📚",
    },
    {
      title: "チームリーダーシップ",
      subtitle: "Team Leadership",
      description: "学会長、代表理事等リーダーシップ経験",
      icon: "👥",
    },
    {
      title: "グローバル",
      subtitle: "Global",
      description: "韓日ビジネスブリッジの役割",
      icon: "🌏",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-primary to-[#0a0e1a] py-16 sm:py-20 px-5 sm:px-6 md:px-8 w-full max-w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ヘッドライン */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 gsap-fade-in leading-tight px-2">
            From Seoul to Yokohama
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent1 mx-auto gsap-fade-in"></div>
        </motion.div>

        {/* ストーリー */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            className="prose prose-invert max-w-none gsap-fade-in"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <p className="text-base sm:text-lg md:text-xl text-accent2 leading-relaxed mb-5 sm:mb-6 font-mincho">
              韓国でスタートアップ創業者として始まり、現在は横浜でのビジネス展開を計画しています。
            </p>
            <p className="text-base sm:text-lg md:text-xl text-accent2 leading-relaxed mb-5 sm:mb-6 font-mincho">
              大学在学中から複数のプロジェクトを立ち上げ、ウェブ開発とビジネス経営の両方のスキルを磨いてきました。
              「動かなければ、アイデアはただの言葉だ」という信念のもと、常に実行を重視しています。
            </p>
            <p className="text-base sm:text-lg md:text-xl text-accent2 leading-relaxed mb-5 sm:mb-6 font-mincho">
              日本市場への進出を通じて、韓日ビジネスの架け橋となることを目指しています。
            </p>
            <p className="text-base sm:text-lg md:text-xl text-accent3 leading-relaxed font-mincho font-bold">
              できるスタートアップを日本で再び設立することがキャリア的目標です。
            </p>
          </motion.div>
        </div>

        {/* コアバリュー */}
        <div className="gsap-fade-in">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Core Values
          </h3>

          {/* メインカード - 3列グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {mainValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
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
                transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
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
        </div>
      </div>
    </section>
  );
}
