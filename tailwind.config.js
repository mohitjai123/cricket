/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1C2120",
        secondary:"#0481B2",
        grayScale:"#E3E3E0",
      }
    },
  },
  plugins: [],
}

