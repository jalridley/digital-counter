const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'digital-mono-italic': [
          'digital-mono-italic',
          ...defaultTheme.fontFamily.sans,
        ],
        'digital-mono': ['digital-mono', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'radial-gradient-green': 'radial-gradient(#d9f99d, #84cc16, #65a30d)',
        'radial-gradient-red': 'radial-gradient(#f87171, #dc2626, #b91c1c)',
        'radial-gradient-amber': 'radial-gradient(#fde68a, #f59e0b, #d97706)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'digital-mono-italic',
            src: 'url(/src/fonts/digital-7-monoitalic.ttf)',
          },
          {
            fontFamily: 'digital-mono',
            src: 'url(/src/fonts/digital-7-mono.ttf)',
          },
        ],
      });
    }),
  ],
};
