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
        dancing: ["var(--font-dancing)", "cursive"],
        sans: ["var(--font-dancing)", "cursive"], // Standard-Font für die gesamte Website
      },
      colors: {
        gold: "#c9a961",
      },
    },
  },
  plugins: [],
} satisfies Config;
