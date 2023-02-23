/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "pro-font": ["montserrat"],
    },
    extend: {
      colors: {
        gold: "#b8860b",
      },
    },
    screens: {
      "3xs": "320px",
      "2xs": "420px",
      xs: "520px",
      sm: "640px",
      md: "768px",
      "2md": "920px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};
