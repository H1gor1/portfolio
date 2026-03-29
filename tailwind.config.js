/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5EFE6',
          soft: '#E8DFD1',
          deep: '#D6C7B2'
        },
        black: {
          DEFAULT: '#111111',
          soft: '#1B1B1B',
          muted: '#2B2B2B'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Avenir Next', 'Segoe UI', 'sans-serif']
      }
    }
  }
};
