/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B72B27',
          dark: '#8B1F1C',
          light: '#D84A46'
        },
        secondary: '#1A1A1A'
      }
    },
  },
  plugins: [],
};