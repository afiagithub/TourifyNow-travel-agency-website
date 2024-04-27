/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cav: ['"Caveat"', "cursive"],
        sans: ['"Josefin Sans"', "sans-serif"],
        rale: ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}

