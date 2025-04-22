const { colors } = require('./src/styles/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      }
    },
  },
  plugins: [],
}