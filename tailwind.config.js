/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          '01': '#091625',
          '06': '#848A92',
          '09': '#CED0D3',
        },
      },
    },
  },
  plugins: [],
};
