/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
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
        "25%":{
          transform: "translateY(1px) ",
        },
        "50%": {
          opacity: "1",
        },
        "75%":{
          transform: "translateY(-1px) ",
        },
      }
    })
    }
  },
  plugins: [require('@tailwindcss/typography'),],
};
