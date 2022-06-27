/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#04f9d3',
          700: '#049680'
        },
        pink: {
          500: '#b904fc'
        },
        darkBlue: {
          500: '#0b0b25'
        },
        blue: {
          500: '#81D8F7'
        },
        orange: {
          500: '#fb9a02'
        },
        red: {
          500: '#F75A68'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      }
    }
  },
  plugins: []
}
