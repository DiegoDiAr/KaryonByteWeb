import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#08000B",
        "deep-space": "#020005",
        "karyon-purple": "#733AED",
        "neon-purple": "#B53AED",
        "electric-blue": "#00F0FF"
      },
      boxShadow: {
        glow: "0 0 36px rgba(115, 58, 237, 0.35)",
        "glow-lg": "0 0 80px rgba(115, 58, 237, 0.45)",
        "glow-blue": "0 0 60px rgba(0, 240, 255, 0.35)",
      },
      backgroundImage: {
        "radial-purple": "radial-gradient(circle, rgba(115,58,237,0.35), rgba(8,0,11,0) 58%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, rgba(115,58,237,0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0,240,255,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(181,58,237,0.15) 0px, transparent 50%)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        }
      },
      animation: {
        shimmer: "shimmer 4.8s ease-in-out infinite",
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
