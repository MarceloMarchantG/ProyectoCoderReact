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
        navbar: `#6c89b9`,
      }
    },
  },
  plugins: [],
}
