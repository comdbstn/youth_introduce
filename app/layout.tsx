import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tei Youth | Full-Stack Developer in Yokohama",
  description: "Full-stack developer based in Yokohama. Specializing in React, Next.js, TypeScript, and scalable web applications.",
  openGraph: {
    title: "Tei Youth | Full-Stack Developer",
    description: "Full-stack developer based in Yokohama, specializing in modern web technologies",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
