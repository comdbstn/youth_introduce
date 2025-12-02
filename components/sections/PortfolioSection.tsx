"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PortfolioCard from "../ui/PortfolioCard";

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isInView = useInView(sectionRef, { once: false, amount: isMobile ? 0.05 : 0.2 });
  const [filter, setFilter] = useState<string>("all");

  const portfolioData = [
    {
      id: "muko",
      title: "無古 (Muko)",
      subtitle: "大型コミュニティサイト",
      period: "3ヶ月",
      url: "https://muko.kr",
      description: "国内映画コミュニティサイト。コミュニティ、イベント、メッセージ、出席、お知らせなどの機能を提供。月間アクティブユーザー約30万人。",
      tech: ["NextJS", "NestJS", "AWS", "ECS", "Docker"],
      features: [
        "コミュニティフォーラム - 映画レビュー、討論、情報共有",
        "イベント管理 - 試写会、プレミア情報",
        "メッセージシステム - ユーザー間コミュニケーション",
        "出席チェック - 毎日ログインリワード",
        "管理者CMS - コンテンツ管理システム",
      ],
      achievements: [
        "MAU(月間アクティブユーザー) 約30万人達成",
        "1日平均 10,000+ 訪問者",
        "安定的なECSインフラ運用",
      ],
      category: "web",
    },
    {
      id: "blueclub",
      title: "ブルークラブ創業",
      subtitle: "ホームページ",
      period: "5日",
      url: "https://blueclub-changup.com",
      description: "ブルークラブ創業ホームページ。",
      tech: ["React", "Next.js"],
      category: "web",
    },
    {
      id: "choonsim",
      title: "Choonsim",
      subtitle: "暗号貨幣取引プラットフォーム",
      period: "10日",
      url: "https://www.choonsim.com",
      description: "暗号貨幣取引プラットフォーム。リアルタイム価格照会、取引、チャート照会機能。",
      tech: ["React", "Vite", "NestJS"],
      category: "web",
    },
    {
      id: "eden",
      title: "Eden",
      subtitle: "Webプラットフォーム",
      period: "1ヶ月",
      url: "https://eden-world.net",
      description: "バーチャルYouTuberのためのアバターマーケットプレイス。",
      tech: ["React", "NestJS", "AWS"],
      category: "web",
    },
    {
      id: "dutyfree",
      title: "DutyFree Price",
      subtitle: "Webプラットフォーム & PWA",
      period: "3日",
      url: "https://dutyfree-price.com",
      description: "免税店商品クローリング価格比較サービス。",
      tech: ["React", "NestJS", "Python"],
      category: "web",
    },
    {
      id: "apex",
      title: "Apex",
      subtitle: "Webプラットフォーム",
      period: "5日",
      url: "https://a-pex.co.kr",
      description: "英語学習資料販売プラットフォーム。",
      tech: ["React", "NestJS", "AWS"],
      category: "web",
    },
    {
      id: "podcaster",
      title: "Podcaster",
      subtitle: "Webアプリプラットフォーム",
      period: "1日",
      url: "https://podcaster.boltlab.co",
      description: "ポッドキャストプラットフォーム開発。",
      tech: ["React", "JavaScript", "Node.js", "Python", "FastAPI", "LLM", "MongoDB"],
      category: "web",
    },
    {
      id: "universitystudio",
      title: "University Studio",
      subtitle: "大学プラットフォーム",
      period: "3ヶ月",
      url: "https://universitystudio.co.kr",
      description: "大学生向けプラットフォーム開発。",
      tech: ["Vue.js", "Angular", "Node.js", "React", "Python", "FastAPI", "LLM", "MongoDB"],
      category: "web",
    },
    {
      id: "doctordrive",
      title: "Doctor Drive",
      subtitle: "医療プラットフォーム",
      period: "2週間",
      url: "https://doctordrive.vercel.app",
      description: "医療情報プラットフォーム。",
      tech: ["HTML5", "CSS3", "JavaScript", "Python", "LLM"],
      category: "web",
    },
    {
      id: "imate",
      title: "iMate",
      subtitle: "AIエージェントサービス",
      period: "2ヶ月",
      url: "https://www.imate.site",
      description: "AIエージェントベースのカスタマーサービスプラットフォーム。",
      tech: ["React", "Node.js", "Python", "LLM"],
      features: [
        "AIチャットボット - LLMベースの自動応答システム",
        "カスタマーサポート - 24/7自動対応",
        "多言語対応",
      ],
      category: "ai",
    },
  ];

  const categories = [
    { value: "all", label: "すべて" },
    { value: "web", label: "Webプラットフォーム" },
    { value: "ai", label: "AI/LLM" },
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
            開発プロジェクトポートフォリオ
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
