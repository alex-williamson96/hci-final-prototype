/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '5/6-screen': '83.333333%', // Represents 5/6ths of the viewport height
        '1/6-screen': '16.666666%', // Represents 1/6ths of the viewport height
      },
    },
    colors: {
      extend: {
        colors: {
          'very-light-orange': '#FFF4EF',
          'gray': '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
};
