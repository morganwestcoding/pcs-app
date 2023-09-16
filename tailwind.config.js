/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-500': '#c49a6c', // Example blue color, adjust as needed
      },
      borderRadius: {
        almond: '50% 50%',
      },
      width: {
        almond: '100px'
      },
      height: {
        almond: '70px'
      }
    },
  },
  plugins: [],
}
