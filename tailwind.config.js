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
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#00215E",
          secondary: "#36454F",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#FF69B4",
          secondary: "#FFFFFF",
        },
      },
    ],
  },
}

