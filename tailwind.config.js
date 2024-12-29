/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**",
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
  safelist : ["bg-white", "bg-indigo", "bg-moonstone", "bg-mint", "bg-pink", "bg-gold", "bg-purple", "text-white", "text-indigo", "text-moonstone", "text-mint",  "text-pink", "text-gold", "text-purple"],
  plugins: [],
}

