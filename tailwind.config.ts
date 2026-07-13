import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1B3A2F",
          light: "#2C5643",
          dark: "#10231C",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#DEC06B",
          dark: "#9C7E1D",
        },
        offwhite: "#FAF8F3",
        charcoal: {
          DEFAULT: "#2A2A28",
          soft: "#5A5A55",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-md": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.15" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.28em" }],
      },
      letterSpacing: {
        widest2: "0.28em",
        nav: "0.08em",
      },
      maxWidth: {
        content: "1400px",
        prose: "640px",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "700": "700ms",
        "900": "900ms",
        "1100": "1100ms",
      },
      spacing: {
        section: "clamp(6rem, 12vw, 10rem)",
      },
    },
  },
  plugins: [],
};

export default config;
