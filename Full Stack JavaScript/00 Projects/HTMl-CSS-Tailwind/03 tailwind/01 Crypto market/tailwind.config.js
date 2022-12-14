/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        poppins: "'Poppins', sans-serif",
      },
      backgroundImage:{
        backplanecity: "url('/assets/bg.png')",
      },
      backgroundSize:{
        '30%':'30%',
      },
      width:{
        block:'42.5rem',
      },
    },
  },
  plugins: [],
}
