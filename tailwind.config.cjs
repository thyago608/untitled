/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        spacing: "padding",
        borderColor: "border-color",
      },
      gridTemplateColumns: {
        homeMobile: "1fr",
        homeDesktop: "5fr 2fr",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
