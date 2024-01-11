/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      colors:{
        primary:'#2F327D',
        secondry: '#FF7A59'
      }
    },
  },
  plugins: [],
}

