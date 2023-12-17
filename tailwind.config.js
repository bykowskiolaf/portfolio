/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#FAF0E6',
        secondary: '#B9B4C7',
        light: '#5C5470',
        dark: '#352F44'
      }
    }
  },
  plugins: []
};
