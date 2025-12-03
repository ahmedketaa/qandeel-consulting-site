/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A1BC98",
        secondary: "#D2DCB6",
        light: "#F1F3E0",
        dark: "#5F6F61",
        muted: "#778873",
      },
    },
  },
  plugins: [],
};
