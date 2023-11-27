/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code', 'sans-serif'],
        main: ['Source Sans 3', 'sans-serif'],
        // serif: ['Your Preferred Serif Font', 'serif'],
        // mono: ['Your Preferred Monospace Font', 'monospace'],
      },
      colors: {
        primary: '#9FFA82',
        bgColor: '#0F0F0F',
        text: '#F2F7F5',
        icon: '#3C8771',
      },
      padding : {
        mainDesktop : '160px',
        mainPhone : '24px'
      }
    },
  },
  plugins: [],
})

