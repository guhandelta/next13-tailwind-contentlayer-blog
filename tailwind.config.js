/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        colors: {
          dark: "#1b1b1b",
          light: "#fff",
          accent: "#7B00D3", 
          accentDark: "#ffdb4d",
          gray: "#747474",
        }
      },
      fontFamily:{
        an : "var(--font-anurati)", 
        rh : "var(--font-rheaski)", 
        in : "var(--font-in)",  
        mr : "var(--font-mr)"
      },
      animation:{
        roll: "roll 24s linear infinite"
      },
      keyframes:{
        roll:{
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}


