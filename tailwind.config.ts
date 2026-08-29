import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F4",
        "paper-alt": "#F0EAFA",
        ink: "#16160F",
        "ink-soft": "#57554A",
        "ink-faint": "#8B8878",
        line: "#E4DAF2",
        "line-soft": "#EDE6F7",
        accent: "#4E11DE",
        "accent-deep": "#3807B7",
        "accent-soft": "#EEE6FC",
        dusk: "#160B2C",
        "dusk-soft": "rgba(250, 249, 244, 0.62)",
        "dusk-line": "rgba(250, 249, 244, 0.14)"
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      maxWidth: {
        content: "78rem"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "reveal-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" }
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -4%)" },
          "30%": { transform: "translate(3%, 2%)" },
          "50%": { transform: "translate(-4%, 3%)" },
          "70%": { transform: "translate(2%, -3%)" },
          "90%": { transform: "translate(-3%, 1%)" }
        }
      },
      animation: {
        float: "float 6.5s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        grain: "grain 9s steps(8) infinite"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.19, 1, 0.22, 1)"
      }
    }
  },
  plugins: []
};

export default config;
