/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        lightGray: "hsl(212, 45%, 89%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
