/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:'#1F2029',
        lightBlue:'#7394FD',
        darkGray:'#242424',
        lightGray:'#44464C',
      }
    },
  },
  plugins: [],
}