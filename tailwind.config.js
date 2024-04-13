/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
 "./node_modules/flowbite/**/*.js" ],
  theme: {
    extend: {
      colors:{
        primary:"#0F172A",
        secondary:"#222B3F",
        font_primary:"#E3E3E8",
        font_secondary:"#94A3B8"
      }
    },
  },
  plugins: [
     require('flowbite/plugin')
  ],
}
