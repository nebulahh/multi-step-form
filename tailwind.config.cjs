/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cool-gray': '#9699ab',
        'marine-blue': '#02295a',
        'magnolia': '#f0f6ff',
      },
      transitionDuration: {
        '0.4': '0.4ms',
        '2000': '2000ms',
      },
      spacing: {
        '4.5': '4.5rem',
      }
    },
  },
  plugins: [],
}
