/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./content/**/*.{md,mdx}",
    "./dist/**/*.html",
    "./scripts/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  variants: {},
  plugins: [],
}