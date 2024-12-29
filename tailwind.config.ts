import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        indigo: "#003F75",
        moonstone: "#0FBDD7",
        mint: "#CFFCFF",
        pink: "#D60954",
        gold: "#FFD400",
        purple: "#700548",
      },
    },
  },
  plugins: [],
} satisfies Config;