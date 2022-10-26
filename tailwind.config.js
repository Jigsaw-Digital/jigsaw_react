/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        shark: {
          50: "#f6f6f7",
          100: "#e2e4e5",
          200: "#c5c8ca",
          300: "#a0a4a8",
          400: "#7c8185",
          500: "#61666b",
          600: "#4d5054",
          700: "#404245",
          800: "#35383a",
          900: "#1c1d1e",
        },
      },
    },
  },
  plugins: [],
};
