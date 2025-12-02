import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C2233",
        accent1: "#7EC8E3",
        accent2: "#C4C4C4",
        accent3: "#D4AF37",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Pretendard", "Noto Sans KR", "sans-serif"],
        mincho: ["Yu Mincho", "serif"],
        haas: ["Neue Haas Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
