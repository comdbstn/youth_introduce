"use client";

import { useEffect } from "react";

/**
 * 루트 레이아웃(<html lang="ja">)은 JP 버전 그대로 유지해야 하므로,
 * /ko 서브트리에서만 문서 언어를 ko 로 바꾼다.
 */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}
