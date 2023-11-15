/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#43DF84",
        danger: "#f56c6c",
        success: "#67c23a",
        warning: "#e6a23c",
      },
    },
    screens: {
      // adding xs to the rest
      // if you did not add this, you would have only "xs"
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
