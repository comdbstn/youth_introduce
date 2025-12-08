"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import PortfolioCard from "../ui/PortfolioCard";

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  // 모바일: 15%, PC: 20% 보일 때 애니메이션 시작 (너무 일찍 시작하지 않도록)
  const isInView = useInView(sectionRef, { once: true, amount: isMobile ? 0.15 : 0.2 });
  const [filter, setFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);
  const itemsPerPage = 6;

  const portfolioData = [
    // 創業 (Startup) - Korvus, AboutMeeting, BridgeMarketing 順
    {
      id: "korvus",
      title: "Korvus Inc",
      subtitle: "ソフトウェア供給/マーケティング法人",
      period: "",
      url: "",
      description: "ソフトウェア供給及びマーケティング法人。日本事業を念頭に設立。",
      tech: ["ソフトウェア供給", "マーケティング", "国際事業"],
      features: [
        "ソフトウェア供給 - 各種ソリューション提供",
        "マーケティング - 総合マーケティングサービス",
        "日本事業 - 日本市場進出準備",
      ],
      images: [
        "/portfolio/business/1. korvus inc/korvus_inc_1.jpg",
      ],
      category: "startup",
    },
    {
      id: "aboutmeeting",
      title: "AboutMeeting",
      subtitle: "暗闇お見合いサービス",
      period: "約1年半",
      url: "https://swweetter.ai/",
      description: "ソウル大学校創業サークルから始まったプロジェクト。映画「アバウトタイム」からインスピレーションを受けた暗闇お見合いサービス。マーケティング、企画、店舗管理、開発などすべての領域を担当。",
      tech: ["マーケティング", "企画", "店舗管理", "開発"],
      features: [
        "暗闇お見合いコンセプト - 映画「アバウトタイム」着想",
        "オフライン店舗運営 - 約1年半運営",
        "統合運営 - マーケティング、企画、開発すべて担当",
      ],
      images: [
        "/portfolio/business/2. AboutMeeting/KakaoTalk_20251209_040017657.jpg",
        "/portfolio/business/2. AboutMeeting/KakaoTalk_20251209_040110785.jpg",
      ],
      category: "startup",
    },
    {
      id: "bridgemarketing",
      title: "BridgeMarketing",
      subtitle: "ランディングページ制作サービス",
      period: "",
      url: "",
      description: "韓国/日本企業向けランディングページ制作サービス。",
      tech: ["React", "Next.js", "Node.js", "Python", "FastAPI"],
      features: [
        "ランディングページデザイン - フルカスタマイズ",
        "レスポンシブデザイン - モバイル最適化",
        "SEO最適化 - 検索エンジン対応",
        "アニメーション - インタラクティブUI",
        "CMS連携 - 簡単コンテンツ管理",
      ],
      achievements: [
        "自社サービスとして運用中",
        "韓国/日本企業向けランディングページ制作",
        "10+ プロジェクト完了",
      ],
      category: "startup",
    },
    {
      id: "imate",
      title: "iMate",
      subtitle: "AIエージェントサービス",
      period: "",
      url: "https://www.imate.site",
      description: "AIエージェントベースのカスタマーサービスプラットフォーム。",
      tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js", "Python", "LLM"],
      features: [
        "AIチャットボット - LLMベースの自動応答システム",
        "カスタマーサポート - 24/7自動対応",
        "多言語対応 - 韓国語/日本語/英語",
      ],
      category: "startup",
    },
    {
      id: "greit",
      title: "GREIT",
      subtitle: "首都圏不動産学会",
      period: "",
      url: "",
      description: "首都圏（ソウル）不動産学会。会長及びメイン講師として活動。有名韓国不動産講師招聘。",
      tech: ["教育", "不動産投資"],
      features: [
        "会長活動 - 学会運営及び管理",
        "メイン講師 - 不動産投資教育",
        "講師招聘 - 有名不動産専門家招待",
      ],
      category: "startup",
    },
    {
      id: "mmeetingai",
      title: "エムミーティングアイ",
      subtitle: "オンラインお見合いサービス",
      period: "2週間",
      url: "",
      description: "オンラインお見合いサービス。2週間の運営期間で申込者400名、売上300万ウォン（純利益99%）を達成。",
      tech: ["オンラインマッチング", "マーケティング"],
      achievements: [
        "申込者数 400名達成",
        "売上 300万ウォン",
        "純利益率 99%",
      ],
      category: "startup",
    },
    {
      id: "airbnb-osaka",
      title: "Airbnb大阪西成区",
      subtitle: "宿泊施設運営",
      period: "",
      url: "",
      description: "日本大阪西成区にAirbnb物件をオープン。投資金1500万ウォン、月売上600万ウォンを達成。",
      tech: ["不動産運営", "宿泊施設管理", "収益化"],
      achievements: [
        "投資金 1500万ウォン",
        "月売上 600万ウォン達成",
      ],
      category: "startup",
    },
    {
      id: "unitalkstudio",
      title: "UnitalkStudio",
      subtitle: "YouTubeスタジオ",
      period: "2ヶ月",
      url: "",
      description: "YouTubeコンテンツ制作スタジオ。編集チーム、出演チーム、企画チームを別途運営。2ヶ月MVP運営。",
      tech: ["コンテンツ制作", "チーム管理"],
      features: [
        "編集チーム - 映像編集専門",
        "出演チーム - 出演者管理",
        "企画チーム - コンテンツ企画",
      ],
      category: "startup",
    },
    {
      id: "meebud",
      title: "Mee'Bud",
      subtitle: "日韓お見合いサービス",
      period: "1ヶ月",
      url: "",
      description: "日本×韓国国際お見合いサービス。1ヶ月MVP運営。",
      tech: ["国際マッチング", "多言語対応"],
      features: [
        "日韓マッチング - 国際カップル誕生",
        "多言語対応 - 日本語・韓国語",
        "MVPテスト - 1ヶ月試験運営",
      ],
      category: "startup",
    },
    {
      id: "dreambox",
      title: "ドリームボックス株式会社",
      subtitle: "Eコマース最適化ソリューション",
      period: "3年",
      url: "",
      description: "韓国ショッピングモール「クーパン」上位露出ロジックを開発及び販売。Web開発及びSaaS、AIエージェント開発。代表取締役として3年間在職。",
      tech: ["SaaS", "AI Agent", "Web開発", "Eコマース最適化"],
      features: [
        "クーパン最適化 - 上位露出ロジック開発",
        "SaaS開発 - Eコマース支援ツール",
        "AIエージェント - 自動化ソリューション",
      ],
      achievements: [
        "代表取締役 3年間在職",
        "月売上1000万ウォン達成",
      ],
      category: "startup",
    },
    {
      id: "picmusic",
      title: "PicMusic",
      subtitle: "音源ランキングプラットフォーム",
      period: "",
      url: "",
      description: "Instagram、YouTube、TikTokの音源ランキングをクローリングして表示し、上位露出に有利な音源を見つけるサービス。",
      tech: ["Web Crawling", "Data Analytics", "React"],
      features: [
        "音源ランキング - Instagram、YouTube、TikTok統合",
        "クローリング技術 - リアルタイムデータ収集",
        "トレンド分析 - 上位露出最適化",
      ],
      category: "startup",
    },
    {
      id: "changgong",
      title: "創空",
      subtitle: "創業サークル",
      period: "",
      url: "",
      description: "月10万ウォンを稼ぐことを目標とする創業サークル。会長及び代表講師として活動。",
      tech: ["教育", "創業支援"],
      features: [
        "会長活動 - サークル運営及び管理",
        "代表講師 - 創業教育",
        "目標設定 - 月10万ウォン収益化",
      ],
      category: "startup",
    },
    {
      id: "neonflow",
      title: "NeonFlow",
      subtitle: "HRコミュニティ協業",
      period: "",
      url: "",
      description: "韓国1位HRコミュニティ「kigoマンjang」と協業。技術力/マーケティングとHRコミュニティの人的資源で多様なプロジェクト協業。",
      tech: ["HR Tech", "協業プロジェクト"],
      features: [
        "kigoマンjang協業 - 韓国1位HRコミュニティ",
        "技術力提供 - 開発及びマーケティング",
        "プロジェクト協業 - 多様な分野",
      ],
      category: "startup",
    },
    {
      id: "eunvo",
      title: "EunVo",
      subtitle: "ウェブサイト外注開発",
      period: "1ヶ月",
      url: "",
      description: "ウェブサイト外注開発サイト。1ヶ月で売上300万ウォン達成。",
      tech: ["Web開発", "外注サービス"],
      achievements: [
        "1ヶ月売上300万ウォン達成",
      ],
      category: "startup",
    },

    // 開発外注 (Development) - Eden, Muko, BlueClub 順
    {
      id: "eden",
      title: "Eden",
      subtitle: "Webプラットフォーム",
      period: "1ヶ月",
      url: "https://eden-world.net",
      description: "バーチャルYouTuberのためのアバターマーケットプレイス。",
      tech: ["React", "NestJS", "AWS"],
      category: "development",
    },
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
      category: "development",
    },
    {
      id: "blueclub",
      title: "ブルークラブ創業",
      subtitle: "ホームページ",
      period: "5日",
      url: "https://blueclub-changup.com",
      description: "ブルークラブ創業ホームページ。ランディングページ。",
      tech: ["React", "Next.js"],
      category: "development",
    },
    {
      id: "choonsim",
      title: "Choonsim",
      subtitle: "暗号貨幣取引プラットフォーム",
      period: "10日",
      url: "https://www.choonsim.com",
      description: "暗号貨幣取引プラットフォーム。リアルタイム価格照会、取引、チャート照会機能。",
      tech: ["React", "Vite", "NestJS"],
      category: "development",
    },
    {
      id: "dutyfree",
      title: "DutyFree Price",
      subtitle: "Webプラットフォーム & PWA",
      period: "3日",
      url: "https://dutyfree-price.com",
      description: "免税店商品クローリング価格比較サービス。",
      tech: ["React", "NestJS", "Python"],
      category: "development",
    },
    {
      id: "apex",
      title: "Apex",
      subtitle: "Webプラットフォーム",
      period: "5日",
      url: "https://a-pex.co.kr",
      description: "英語学習資料販売プラットフォーム。",
      tech: ["React", "NestJS", "AWS"],
      category: "development",
    },
    {
      id: "podcaster",
      title: "Podcaster",
      subtitle: "Webアプリプラットフォーム",
      period: "1日",
      url: "https://podcaster.boltlab.co",
      description: "ポッドキャストプラットフォーム。AIポッドキャスト生成、開発。",
      tech: ["React", "JavaScript", "Node.js", "Python", "FastAPI", "LLM", "MongoDB"],
      category: "development",
    },
    {
      id: "universitystudio",
      title: "University Studio (dreambox inc)",
      subtitle: "大学プラットフォーム",
      period: "",
      url: "https://universitystudio.co.kr",
      description: "大学生向けプラットフォーム開発。",
      tech: ["HTML5", "CSS3", "TypeScript", "Vue.js", "Angular", "Node.js", "React", "Python", "FastAPI", "LLM", "MongoDB"],
      category: "development",
    },
    {
      id: "doctordrive",
      title: "Doctor Drive (BridgeMarketing)",
      subtitle: "医療プラットフォーム",
      period: "",
      url: "https://doctordrive.vercel.app",
      description: "医療情報プラットフォーム。",
      tech: ["HTML5", "CSS3", "JavaScript", "Python", "LLM"],
      category: "development",
    },

    // マーケティング外注 (Marketing) - DJ축제, 그랜드마스터클래스, 무신사 순
    {
      id: "yangyang-dj",
      title: "襄陽DJフェスティバル",
      subtitle: "オフラインイベントチーム長",
      period: "",
      url: "",
      description: "襄陽DJフェスティバルのオフラインイベントチーム長として企画及び実行。",
      tech: ["イベント企画", "チーム管理", "オフライン運営"],
      features: [
        "チーム長 - イベント全体統括",
        "オフライン運営 - 現場管理及び実行",
      ],
      category: "marketing",
    },
    {
      id: "grandmasterclass",
      title: "GrandMasterClass",
      subtitle: "ソウル女子大学校大型講演",
      period: "",
      url: "https://www.instagram.com/grandmasterclass/",
      description: "ソウル女子大学校での大型講演イベントチーム長。",
      tech: ["講演企画", "イベント管理"],
      features: [
        "チーム長 - 講演イベント統括",
        "大型講演 - ソウル女子大学校",
      ],
      category: "marketing",
    },
    {
      id: "musinsa",
      title: "MUSINSA STANDARD",
      subtitle: "ファッションブランドマーケティング",
      period: "",
      url: "",
      description: "韓国ファッションプラットフォーム「MUSINSA STANDARD」のマーケティング実行。",
      tech: ["ファッションマーケティング", "ブランディング"],
      category: "marketing",
    },
    {
      id: "lecosme",
      title: "ルコスメ",
      subtitle: "マーケティング代行",
      period: "",
      url: "",
      description: "韓国コスメブランド「ルコスメ」のマーケティング戦略立案及び実行。SNSマーケティング、インフルエンサーマーケティング、オンライン広告運用を通じてブランド認知度向上とオンライン売上増大を達成。",
      tech: ["SNSマーケティング", "インフルエンサーマーケティング", "広告運用"],
      features: [
        "SNS戦略立案 - Instagram、TikTok活用",
        "インフルエンサー協業 - マイクロインフルエンサー活用",
        "広告キャンペーン - Meta広告、Google広告",
      ],
      category: "marketing",
    },
    {
      id: "medis-dental",
      title: "メディス歯科",
      subtitle: "歯科医院マーケティング",
      period: "",
      url: "",
      description: "メディス歯科のデジタルマーケティング全般を担当。ローカルSEO最適化、オンライン予約システム連携、口コミ管理を通じて新規患者獲得及び予約率向上を実現。",
      tech: ["ローカルSEO", "口コミマーケティング", "予約システム連携"],
      features: [
        "ローカルSEO最適化 - Googleマイビジネス運用",
        "口コミ管理 - レビュー収集及び対応",
        "オンライン予約促進 - ランディングページ最適化",
      ],
      category: "marketing",
    },
    {
      id: "kia-event",
      title: "起亜自動車イベント",
      subtitle: "自動車イベントマーケティング",
      period: "",
      url: "",
      description: "起亜自動車の新車発表イベント及びプロモーションイベントのマーケティング企画及び実行。オンライン・オフライン統合マーケティングを通じて高い参加率とブランドエンゲージメントを達成。",
      tech: ["イベントマーケティング", "O2Oマーケティング", "SNSプロモーション"],
      features: [
        "イベント企画 - 新車発表会、試乗イベント",
        "統合マーケティング - オンライン広告 + オフライン活動",
        "SNSプロモーション - リアルタイムコンテンツ配信",
      ],
      category: "marketing",
    },
    {
      id: "codevmap",
      title: "CoDevMap",
      subtitle: "開発者コミュニティマーケティング",
      period: "",
      url: "",
      description: "開発者向けプラットフォーム「CoDevMap」のマーケティング戦略及び実行。開発者コミュニティ活性化、コンテンツマーケティング、技術ブログ運営を通じてユーザー獲得及びエンゲージメント向上を達成。",
      tech: ["コンテンツマーケティング", "コミュニティマーケティング", "技術ブログ"],
      features: [
        "コミュニティ活性化 - オンラインイベント、ミートアップ企画",
        "コンテンツ制作 - 技術ブログ、チュートリアル動画",
        "SNS運用 - 開発者向けSNSチャンネル管理",
      ],
      category: "marketing",
    },
    {
      id: "gyeonggi-youth",
      title: "京畿道青年の日イベント",
      subtitle: "公共イベントマーケティング",
      period: "",
      url: "",
      description: "京畿道主催「青年の日」イベントのマーケティング企画及び実行。青年層をターゲットにしたSNSキャンペーン、インフルエンサー協業、オフラインイベント連携を通じて高い参加率を達成。",
      tech: ["イベントマーケティング", "SNSキャンペーン", "インフルエンサー協業"],
      features: [
        "SNSキャンペーン - Instagram、TikTokチャレンジ",
        "インフルエンサー協業 - 青年インフルエンサー活用",
        "オフラインイベント - ブース運営、プロモーション",
      ],
      category: "marketing",
    },
    {
      id: "snu-eye-clinic",
      title: "SNU眼科",
      subtitle: "眼科医院マーケティング",
      period: "",
      url: "",
      description: "SNU眼科のデジタルマーケティング戦略立案及び実行。ローカルSEO、オンライン広告、口コミマーケティングを通じて新規患者獲得及びブランド認知度向上を達成。",
      tech: ["ローカルSEO", "Google広告", "口コミマーケティング"],
      features: [
        "ローカルSEO最適化 - 地域検索上位露出",
        "Google広告運用 - 検索広告、ディスプレイ広告",
        "口コミ管理 - 患者レビュー収集及び対応",
      ],
      category: "marketing",
    },
    {
      id: "syaeducation",
      title: "SyaEducation",
      subtitle: "最上位圏大学グループ家庭教師",
      period: "1ヶ月",
      url: "",
      description: "最上位圏大学生によるグループ家庭教師サービス。1ヶ月MVP試験運営。",
      tech: ["教育サービス", "マッチングプラットフォーム"],
      features: [
        "最上位圏大学生講師 - ソウル大、延世大、高麗大等",
        "グループ授業 - 効率的な学習",
        "MVPテスト - 1ヶ月試験運営",
      ],
      category: "startup",
    },
    {
      id: "content-insight",
      title: "コンテンツインサイト",
      subtitle: "マーケティング代行",
      period: "",
      url: "",
      description: "コンテンツインサイトのマーケティング実行。",
      tech: ["コンテンツマーケティング"],
      category: "marketing",
    },
    {
      id: "icatchyou",
      title: "アイキャッチユー",
      subtitle: "マーケティング代行",
      period: "",
      url: "",
      description: "アイキャッチユーのマーケティング実行。",
      tech: ["デジタルマーケティング"],
      category: "marketing",
    },
    {
      id: "ecopeace",
      title: "エコピースフォーラム",
      subtitle: "環境フォーラムマーケティング",
      period: "",
      url: "",
      description: "エコピースフォーラムのマーケティング実行。",
      tech: ["イベントマーケティング", "環境"],
      category: "marketing",
    },
  ];

  const categories = [
    { value: "all", label: "すべて" },
    { value: "startup", label: "創業" },
    { value: "development", label: "開発外注" },
    { value: "marketing", label: "マーケティング外注" },
  ];

  const filteredProjects = filter === "all"
    ? portfolioData
    : portfolioData.filter(project => project.category === filter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, itemsPerPage);

  const hasMore = filteredProjects.length > itemsPerPage;

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
            創業・開発・マーケティング実績
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
              onClick={() => {
                setFilter(category.value);
                setShowAll(false);
              }}
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
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8"
          >
            {displayedProjects.map((project, index) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={index}
                isInView={true}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* もっと見るボタン */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-accent3 to-accent1 text-primary font-bold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:shadow-2xl hover:shadow-accent3/50 active:shadow-lg active:scale-95 transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? "表示を減らす ▲" : `もっと見る (${filteredProjects.length - itemsPerPage}+) ▼`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
