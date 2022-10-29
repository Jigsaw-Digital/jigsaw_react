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
          50: "#363f40",
          100: "#293132",
          200: "#c5c8ca",
          300: "#a0a4a8",
          400: "#FFF5EB",
          500: "#392F5A",
          600: "#FAFAFF",
          700: "#F4D06F",
          800: "#50D8D7",
          900: "#FF8811",
        },
      },
    },
  },
  plugins: [],
};
