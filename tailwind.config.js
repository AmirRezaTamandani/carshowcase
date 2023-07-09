/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        dark: {
          bg: "#040101",
          text: "#FCF8F8",

          primary: " #5FBFBD",
          secondary: "#5FBF8D",
        },
        light: {
          bg: "#ebfafa",
          text: "#041010",
          primary: "#962729",
          secondary: "#EDECBA",
        },

        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "header-bg": "url('/header-bg.png')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
