"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  url: string;
  description: string;
  tech: string[];
  features?: string[];
  achievements?: string[];
  category: string;
  images?: string[];
}

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
  isInView: boolean;
}

export default function PortfolioCard({ project, index, isInView }: PortfolioCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* 画像拡大モーダル */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Expanded view"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: index * 0.05,
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="bg-white/5 backdrop-blur-sm border border-accent1/20 rounded-lg overflow-hidden hover:border-accent3/50 transition-all duration-300"
      >
      <div className="p-5 sm:p-6">
        {/* ヘッダー */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-accent3 font-mincho">
              {project.title}
            </h3>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent1 hover:text-accent3 transition-colors ml-2 flex-shrink-0"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
          <p className="text-sm sm:text-base text-accent1 mb-2">{project.subtitle}</p>
          <p className="text-xs sm:text-sm text-accent2/70">期間: {project.period}</p>
        </div>

        {/* 説明 */}
        <p className="text-sm sm:text-base text-accent2 leading-relaxed mb-4 font-mincho">
          {project.description}
        </p>

        {/* 技術スタック */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-accent1 mb-2 font-bold">技術スタック:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-3 py-1 bg-accent1/10 border border-accent1/30 rounded-full text-xs sm:text-sm text-accent1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 詳細表示ボタン */}
        {(project.features || project.achievements) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-accent3 text-sm sm:text-base hover:text-accent1 transition-colors font-bold flex items-center gap-2"
          >
            {isExpanded ? "詳細を閉じる" : "詳細を見る"}
            <motion.svg
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </button>
        )}

        {/* 詳細コンテンツ */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-accent1/20 mt-4">
            {/* イメージギャラリー */}
            {project.images && project.images.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-bold text-white mb-3">プロジェクト画像:</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {project.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setSelectedImage(image)}
                      className="relative aspect-video rounded-lg overflow-hidden border border-accent1/20 hover:border-accent3/50 transition-all cursor-pointer group"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl">🔍</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {project.features && (
              <div className="mb-4">
                <p className="text-sm font-bold text-white mb-2">主な機能:</p>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-accent2 flex items-start gap-2 font-mincho"
                    >
                      <span className="text-accent1 mt-1 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.achievements && (
              <div className="mb-4">
                <p className="text-sm font-bold text-white mb-2">成果:</p>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-accent2 flex items-start gap-2 font-mincho"
                    >
                      <span className="text-accent3 mt-1 flex-shrink-0">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* マーケティングプロジェクトの場合の注意書き */}
            {project.category === "marketing" && (
              <div className="pt-4 border-t border-accent1/10">
                <p className="text-xs sm:text-sm text-accent2/60 italic font-mincho">
                  *マーケティングポートフォリオはセキュリティポリシー上、画像を添付しておりません。
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
}
