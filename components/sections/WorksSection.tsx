"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "../ui/TimelineItem";

export default function WorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // 모바일에서는 더 적은 양만 보여도 애니메이션 시작
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isInView = useInView(sectionRef, { once: false, amount: isMobile ? 0.05 : 0.2 });

  const timelineData = [
    {
      year: "2020",
      activities: [
        "TOWON 建築事務所インターン (2020.12 ~ 2021.02)",
        "2020 Game Contest 入賞 (07)",
        "2020 青少年ゲームジャムデザイン賞 (09)",
        "Duoringgo 110 (11)",
      ],
      majorProjects: [],
    },
    {
      year: "2021",
      activities: [
        "高等学校卒業 (02)",
        "大学入学 (03)",
        "HOIT Connect (2021.01 ~ 2021.02)",
        "2021 釜山インディコネクトフェスティバル (06)",
        "ワードプロセッサ資格取得 (04)",
        "ゲーム企画専門家資格取得 (08)",
        "ウィズアカデミー不動産競売課程修了",
        "ハンク不動産エデュ (財テク基礎班 / 開始スタディ修了)",
        "SBSアカデミーゲーム企画 / プログラミング課程修了",
      ],
      majorProjects: [],
    },
    {
      year: "2022",
      activities: [
        "毎日経済テスト優秀 (01)",
        "ハンク不動産エデュ (法人活用投資 / 共有宿泊業月貸課程修了)",
        "梨花女子大学リーンスタートアップ課程修了",
        "ソウル大学校創業課程修了",
        "ソウル大学校青少年心理学課程修了",
        "トバスタジオ企画 (2022.11 ~ 2023.02)",
        "エムミーティングアイ (2022.12 ~ 2023.06)",
        "About Meeting 社内理事 (2022.12 ~)",
        "シャーエデュ創業 (2022.12)",
      ],
      majorProjects: [],
    },
    {
      year: "2023",
      activities: [
        "UniTalk Studio 代表 (2023.01 ~ 2023.05)",
        "クリエイティブトピック協業 (2023.01)",
        "Rich MZ 講師 (2023.01 ~ 2023.02)",
        "Mee'Bud 代表 (2023.02 ~ 2023.12)",
        "GREIT 学会長 (2023.03 ~)",
        "MS Academy 講師",
        "ドリームボックス株式会社代表取締役",
        "オムイチンチク プロジェクト",
        "ソウル大学校ヘドンスタートアップ23期修了",
        "ライフハッキングスクール (創業ブートキャンプ / リーダースピーチ / 知識創業課程修了)",
        "Online Project-Based Software Development Camp 修了",
        "C#とUnityで作るゲーム開発シリーズ修了",
        "創業同好会スクワッド開発者パート参加",
      ],
      majorProjects: [],
    },
    {
      year: "2024",
      activities: [
        "ドリームボックス株式会社月売上1000達成",
        "ロッテ七星飲料マーケティング受注及び執行",
        "大阪西成区Airbnbオープン",
        "創業学会創空会長",
        "FreeYourMind 理事職受諾",
        "NeonFlow Director 受諾",
        "BridgeMarketing 代表取締役受諾",
        "襄陽DJフェスティバル行事総括",
        "KT&G 想像プラネットメンバー",
      ],
      majorProjects: [
        {
          name: "無古 (Muko)",
          description: "韓国の伝統を現代的に再解釈したブランディングプラットフォーム",
          image: "/images/muko.jpg",
        },
        {
          name: "自動車評価管理システム",
          description: "自動車ディーラー向けの評価および在庫管理システム",
          image: "/images/car-system.jpg",
        },
        {
          name: "ピーターペット",
          description: "ペット飼育管理およびコミュニティプラットフォーム",
          image: "/images/peterpet.jpg",
        },
        {
          name: "スタディタパ",
          description: "学習グループマッチングプラットフォーム",
          image: "/images/studytapa.jpg",
        },
        {
          name: "BridgeMarketing",
          description: "韓日ビジネスブリッジマーケティングエージェンシー",
          image: "/images/bridgemarketing.jpg",
        },
      ],
    },
    {
      year: "2025",
      activities: [
        "ブリッジマーケティング上半期売上3500達成",
        "株式会社コバース代表取締役職受注",
      ],
      majorProjects: [
        {
          name: "DutyFree Price",
          description: "免税品価格比較プラットフォーム",
          image: "/images/dutyfree.jpg",
        },
        {
          name: "Apex",
          description: "プロジェクト管理及びチーム協業ツール",
          image: "/images/apex.jpg",
        },
        {
          name: "Podcaster",
          description: "ポッドキャスト制作および配信プラットフォーム",
          image: "/images/podcaster.jpg",
        },
        {
          name: "Reportable",
          description: "ビジネスレポート自動生成ツール",
          image: "/images/reportable.jpg",
        },
        {
          name: "DeepSol",
          description: "AI基盤ソリューション開発プラットフォーム",
          image: "/images/deepsol.jpg",
        },
        {
          name: "Outta",
          description: "アウトドアアクティビティ予約プラットフォーム",
          image: "/images/outta.jpg",
        },
      ],
    },
  ];

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
            Works & Journey
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-accent3 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-accent2 font-mincho px-4">
            2020年から現在まで、私が歩んできた道のり
          </p>
        </motion.div>

        {/* タイムライン */}
        <div className="relative">
          {/* 中央の縦線 */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent1 via-accent3 to-accent1 opacity-30"></div>

          {/* タイムラインアイテム */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                activities={item.activities}
                majorProjects={item.majorProjects}
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
