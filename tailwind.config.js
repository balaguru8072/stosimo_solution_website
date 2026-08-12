/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stosimo-dark': '#0A152F',
        'stosimo-blue': '#3B82F6',
      }
    },
  },
  plugins: [],
}