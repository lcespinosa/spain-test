/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          '01': '#091625',
          '04': '#535C67',
          '06': '#848A92',
          '09': '#CED0D3',
          '10': '#E6E8E9',
        },
      },
    },
  },
  plugins: [],
};
