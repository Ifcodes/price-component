module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#8E92E9",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
