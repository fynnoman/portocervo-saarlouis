import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        script: ["var(--font-storyscript)", "cursive"],
        // Backwards compatible aliases used elsewhere in the codebase
        dancing: ["var(--font-storyscript)", "cursive"],
        playfair: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
      colors: {
        cream: "var(--cream)",
        parchment: "var(--parchment)",
        sand: "var(--sand)",
        shell: "var(--shell)",
        terracotta: "var(--terracotta)",
        "terracotta-deep": "var(--terracotta-deep)",
        ochre: "var(--ochre)",
        "ochre-deep": "var(--ochre-deep)",
        olive: "var(--olive)",
        sea: "var(--sea)",
        "sea-deep": "var(--sea-deep)",
        ink: "var(--ink)",
        stone: "var(--stone)",
        gold: "var(--ochre)",
      },
      letterSpacing: {
        villa: "0.42em",
      },
    },
  },
  plugins: [],
} satisfies Config;
