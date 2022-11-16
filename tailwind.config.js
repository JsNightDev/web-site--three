const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
        inter:['"Inter"', ...defaultTheme.fontFamily.sans]

      }

    },
  },
  plugins: [],
}