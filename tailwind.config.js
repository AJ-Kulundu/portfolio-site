
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
    keyframes:({theme}) =>({
      loading:{
        "0%,100%": {
          opacity: ".3",
        },
        "40%": {
          opacity: "1",
          transform: "translateY(2px) ",
        },
      }
    })
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
