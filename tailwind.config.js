/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: 'rgb(14, 11, 65)',
        secondary: 'rgba(226, 226, 226, 1)',
        accent: 'rgba(212, 212, 250, 1)',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
      },
    },
    extend: {
      colors: {
        primary: 'rgb(14, 11, 65)',
        secondary: 'rgba(226, 226, 226, 1)',
        accent: 'rgba(212, 212, 250, 1)',
      },
    },
  },
  plugins: [],
};

