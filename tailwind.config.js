/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenDark: "#07110D",
        greenSurface: "#0D1712",
        gold: "#C7A56A",
        goldLight: "#E4C590",
        ivory: "#F5F1E8",
        ivoryMuted: "#A6A095",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};