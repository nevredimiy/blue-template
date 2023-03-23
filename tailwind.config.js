/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
      },
    },

    extend: {
      colors: {
        'main-blue': '#3861FB',
        'main-black': '#242424',
        'background-white': '#F2F5FB',
        'main-green': '#1BCB96',
        'main-gray': '#919191',
        'light-gray': '#D7DFFE',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '960px',
        lg: '1200px',
        xl: '1440px',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '46': '11.5rem',
      },
    },
  },
  plugins: [],
}
