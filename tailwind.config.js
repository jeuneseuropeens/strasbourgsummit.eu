const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      height: {
        'home-full': 'calc(100vh - 104px)'
      },
      colors: {
        'primary': {
          50: '#e7edf5',
          100: '#cfdcec',
          200: '#a0b9d8',
          300: '#7095c5',
          400: '#4172b1',
          500: '#114f9e',
          600: '#0e3f7e',
          700: '#0a2f5f',
          800: '#07203f',
          900: '#031020',
        },
        'secondary': {
          50: '#fffceb',
          100: '#fff8d7',
          200: '#fff2ae',
          300: '#feeb86',
          400: '#fee55d',
          500: '#fede35',
          600: '#cbb22a',
          700: '#988520',
          800: '#665915',
          900: '#332c0b',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
