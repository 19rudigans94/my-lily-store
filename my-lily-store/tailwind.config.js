/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#E6E6FA',
        lavenderBlush: '#FFF0F5',
        lavenderGray: '#C4C3D0',
      }
    },
  },
  plugins: [],
}
