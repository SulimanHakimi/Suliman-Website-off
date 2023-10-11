/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "375px",
      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
