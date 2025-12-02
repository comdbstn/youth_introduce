import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tei Youth | Web Developer & Entrepreneur in Yokohama",
  description: "Korean web developer and entrepreneur based in Yokohama. Specializing in React, Next.js, and full-stack development.",
  openGraph: {
    title: "Tei Youth | Web Developer & Entrepreneur",
    description: "Korean web developer and entrepreneur based in Yokohama",
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
