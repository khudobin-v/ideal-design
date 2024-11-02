import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appearance: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        appearance: "appearance 0.75s ease-in-out",
      },
      screens: {
        "1.5xl": "1344px",
        "1.75xl": "1408px",
        "2.25xl": "1664px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "500": "#b79f6f",
          "600": "#c2a36d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
