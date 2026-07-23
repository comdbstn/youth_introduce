"use client";

import Link from "next/link";

interface LanguageToggleProps {
  current: "ja" | "ko";
}

const activeClass =
  "px-3 py-1 rounded-full bg-accent3 text-primary font-bold transition-colors";
const inactiveClass =
  "px-3 py-1 rounded-full text-accent2 hover:text-accent3 transition-colors";

export default function LanguageToggle({ current }: LanguageToggleProps) {
  return (
    <nav
      aria-label="Language"
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] flex items-center gap-1 rounded-full border border-accent1/30 bg-primary/70 backdrop-blur-sm px-1 py-1 text-xs sm:text-sm"
    >
      <Link
        href="/"
        hrefLang="ja"
        className={current === "ko" ? activeClass : inactiveClass}
      >
        JP
      </Link>
      <Link
        href="/ko"
        hrefLang="ko"
        className={current === "ja" ? activeClass : inactiveClass}
      >
        KO
      </Link>
    </nav>
  );
}
