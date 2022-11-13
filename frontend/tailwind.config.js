const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          DEFAULT: "#46A8A6",
        },
        secondary: {
          DEFAULT: "rgba(103, 32, 158, 0.34)",
        },
        modal: {
          DEFAULT: "rgba(0,0,0,0.4)",
        },
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
