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
        main: ['Source Sans 3', 'sans-serif']
      },
      colors: {
        primary: '#9FFA82',
        bgColor: '#0F0F0F',
        text: '#F2F7F5',
        icon: '#0B362A',
        button: '#0B362A'
      },
      padding: {
        mainDesktop: '160px',
        mainPhone: '24px'
      }
    },
  },
  plugins: [],
})

