/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'title':['"Playfair Display"'],
      },
      colors:{
        navbar: '#5271FF',
      }
    },
  },
  plugins: [],
}
