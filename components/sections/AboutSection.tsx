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

    const elements = sectionRef.current.querySelectorAll(".gsap-fade-in");

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const coreValues = [
    {
      title: "機会探索",
      subtitle: "Opportunity Exploration",
      description: "多様な機会探索を通じたビジネスアイテム構想",
    },
    {
      title: "実行力",
      subtitle: "Execution Power",
      description: "マーケティング・開発・経営のスキルを活かした即実行",
    },
    {
      title: "秩序創造",
      subtitle: "Order Creation",
      description: "ルーティンを通じた質の高い秩序の創造",
    },
    {
      title: "成長支援",
      subtitle: "Growth Support",
      description: "ウェブ開発を通じたビジネス成長の支援",
    },
    {
      title: "架け橋",
      subtitle: "Bridge Building",
      description: "韓日ビジネスの架け橋としての役割",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-primary to-[#0a0e1a] py-16 sm:py-20 px-5 sm:px-6 md:px-8"
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
            <p className="text-base sm:text-lg md:text-xl text-accent2 leading-relaxed font-mincho">
              日本市場への進出を通じて、韓日ビジネスの架け橋となることを目指しています。
            </p>
          </motion.div>
        </div>

        {/* コアバリュー */}
        <div className="gsap-fade-in">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-accent1/20 rounded-lg p-5 sm:p-6 hover:border-accent1/50 transition-all duration-300 hover:transform hover:scale-105 active:scale-100"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-accent1 mb-2 font-mincho">
                  {value.title}
                </h4>
                <p className="text-xs sm:text-sm text-accent2/70 mb-3 font-haas">
                  {value.subtitle}
                </p>
                <p className="text-sm sm:text-base text-accent2 leading-relaxed font-mincho">
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
