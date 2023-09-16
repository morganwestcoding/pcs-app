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
      position: {
        position: 'absolute',
      },
      borderRadius: {
        bubble: '50%',
      },
      width: {
        bubble: '70px',
      },
      height: {
        bubble: '70px',
      },
      left: {
        bubble: "50px",
      },
      transform: {
        bubble: "translateX(-50%);"
      }
    },
  },
  plugins: [],
}
