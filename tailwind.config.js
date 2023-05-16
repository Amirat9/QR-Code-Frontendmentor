/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#d5e1ef',
        secondary: '#7d889e',
      },
      fontFamily: {
        primary: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

