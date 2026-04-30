import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070604",
        cocoa: "#170f0a",
        ember: "#ff7a18",
        solar: "#ffd56a",
        violetGlow: "#8b5cf6",
        blueGlow: "#60a5fa"
      },
      boxShadow: {
        "premium-card": "0 24px 80px rgba(0, 0, 0, 0.42)",
        "soft-glow": "0 0 60px rgba(255, 122, 24, 0.18)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slow-pulse": {
          "0%, 100%": { opacity: "0.58" },
          "50%": { opacity: "1" }
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "slow-pulse": "slow-pulse 5s ease-in-out infinite",
        "float-soft": "float-soft 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
