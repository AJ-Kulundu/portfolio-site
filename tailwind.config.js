/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans':['"Work Sans"', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}
