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
          orange: "#FF8228",
          blue: "#095489"
        },
    },
  },
  safelist : ["bg-white", "bg-indigo", "bg-moonstone", "bg-mint", "bg-pink", "bg-gold", "bg-purple", "bg-orange","bg-blue","text-white", "text-indigo", "text-moonstone", "text-mint",  "text-pink", "text-gold", "text-purple", "text-orange", "text-blue", "hover:bg-white", "hover:bg-blue", "hover:bg-gold", "hover:bg-pink", "hover:bg-moonstone", "border-blue", "border-pink", "border-gold", "border-moonstone", "sm:bg-orange", "sm:bg-blue", "sm:bg-pink"],
  plugins: [],
}

