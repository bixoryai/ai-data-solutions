/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#a5b4fc',
        dark: '#1a1a1a',
        highlight: '#ffd700',
      },
    },
  },
  plugins: [],
} 