/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#141831',
          gold: '#F8B03B',
          dark: '#0f1225',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
