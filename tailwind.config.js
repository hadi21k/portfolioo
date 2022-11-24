/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#e8eddf",
        "dark-1": "#f1faee",
        light: "#242423",
        "light-1": "#333533",
        primary: "#f5cb5c",
        secondary: "#ffba08",
      },
      backgroundColor: {
        light: "#f7fff7",
        "light-1": "#fff",
        dark: "#0a0908",
        "dark-1": "#000",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
