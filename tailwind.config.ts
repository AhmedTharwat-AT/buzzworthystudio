import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tt_tunnels: ["var(--font-tt-tunnels)", "sans-serif"],
        tt_lakes: ["var(--font-tt-lakes)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: "hsl(var(--secondary))",
        darker_bg: "hsl(var(--darker-bg))",
      },
    },
  },
  plugins: [],
} satisfies Config;
