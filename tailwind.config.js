/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        digital: ['digital', 'sans'],
        'digital-mono-italic': ['digital-mono-italic', 'sans'],
        'digital-mono': ['digital-mono', 'sans'],
      },
      backgroundImage: {
        'radial-gradient-green': 'radial-gradient(#d9f99d, #84cc16, #65a30d)',
        'radial-gradient-red': 'radial-gradient(#f87171, #dc2626, #b91c1c)',
        'radial-gradient-amber': 'radial-gradient(#fde68a, #f59e0b, #d97706)',
        'radial-gradient-teal': 'radial-gradient(#d1fae5,  #2dd4bf, #14b8a6)',
      },
    },
  },
};
