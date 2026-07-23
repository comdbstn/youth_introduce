import type { Metadata } from "next";
import HtmlLang from "./HtmlLang";

export const metadata: Metadata = {
  title: "정윤수 | 퍼포먼스 · 그로스 마케터",
  description:
    "퍼포먼스·CPC·바이럴·SNS 마케팅을 기획부터 실행·개선까지 담당해온 마케터. 마케팅 자동화 도구 직접 개발, 한국어·일본어 기반 한일 마케팅 가능.",
  openGraph: {
    title: "정윤수 | 퍼포먼스 · 그로스 마케터",
    description:
      "퍼포먼스·바이럴·SNS 마케팅 기획과 실행, 마케팅 자동화 도구 개발, 한일 마케팅.",
    locale: "ko_KR",
    images: ["/og-image.png"],
  },
};

export default function KoreanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HtmlLang lang="ko" />
      {children}
    </>
  );
}
