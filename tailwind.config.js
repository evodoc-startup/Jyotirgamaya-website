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
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
          serif: ['var(--font-playfair)', 'serif'],
        },
        colors: {
          white: "#FFFFFF",
          indigo: "#1E1B4B", // Midnight Indigo
          moonstone: "#0E7490",
          mint: "#E0F2FE",
          pink: "#BE123C",
          gold: "#B45309",
          purple: "#4C1D95",
          orange: "#C2410C",
          blue: "#1E3A8A",
          charcoal: "#111827",
          coral: "#FF6B6B",
          emerald: "#2ECC71",
          sunflower: "#F1C40F",
          ocean: "#3498DB",
          "watermelon-red": "#FF5E62",
          "watermelon-green": "#2ECC71",
        },
        boxShadow: {
            'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.15)',
            'frosted': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        }
    },
  },
  safelist : ["bg-white", "bg-indigo", "bg-moonstone", "bg-mint", "bg-pink", "bg-gold", "bg-purple", "bg-orange","bg-blue","text-white", "text-indigo", "text-moonstone", "text-mint",  "text-pink", "text-gold", "text-purple", "text-orange", "text-blue", "hover:bg-white", "hover:bg-blue", "hover:bg-gold", "hover:bg-pink", "hover:bg-orange","hover:bg-moonstone", "border-blue", "border-pink", "border-gold", "border-moonstone", "border-orange","sm:bg-orange", "sm:bg-blue", "sm:bg-pink"],
  plugins: [],
}

