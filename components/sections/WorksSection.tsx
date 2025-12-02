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
        "TOWON 建築事務所インターン",
        "2020 Game Contest 入賞",
        "2020 青少年ゲームジャムデザイン賞",
        "Duoringgo 110",
      ],
    },
    {
      year: "2021",
      activities: [
        "高等学校卒業",
        "大学入学",
        "HOIT Connect",
        "2021 釜山インディコネクトフェスティバル",
        "ワードプロセッサ資格取得",
        "ゲーム企画専門家資格取得",
        "ウィズアカデミー不動産競売課程修了",
        "ハンク不動産エデュ財テク基礎班修了",
        "ハンク不動産エデュ開始スタディ修了",
        "SBSアカデミーゲーム企画課程修了",
        "SBSアカデミープログラミング課程修了",
      ],
    },
    {
      year: "2022",
      activities: [
        "毎日経済テスト優秀",
        "ハンク不動産エデュ法人活用投資課程修了",
        "ハンク不動産エデュ共有宿泊業月貸課程修了",
        "梨花女子大学リーンスタートアップ課程修了",
        "ソウル大学校創業課程修了",
        "ソウル大学校青少年心理学課程修了",
        "トバスタジオ企画",
        "エムミーティングアイ",
        "About Meeting 社内理事",
        "シャーエデュ創業",
      ],
    },
    {
      year: "2023",
      activities: [
        "UniTalk Studio 代表",
        "クリエイティブトピック協業",
        "Rich MZ 講師",
        "Mee'Bud 代表",
        "GREIT 学会長",
        "MS Academy 講師",
        "ドリームボックス株式会社代表取締役",
        "オムイチンチク プロジェクト",
        "ソウル大学校ヘドンスタートアップ23期修了",
        "ライフハッキングスクール創業ブートキャンプ修了",
        "ライフハッキングスクールリーダースピーチ修了",
        "ライフハッキングスクール知識創業課程修了",
        "Online Project-Based Software Development Camp 修了",
        "C#とUnityで作るゲーム開発シリーズ修了",
        "創業同好会スクワッド開発者パート参加",
      ],
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
    },
    {
      year: "2025",
      activities: [
        "ブリッジマーケティング上半期売上3500達成",
        "株式会社コバース代表取締役職受注",
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
