/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      margin: {
        '48px': '48px',
      }

    },
  },
  plugins: [],
  mode: 'jit',
  content: ['./views/**/*{.ejs,html}'],
}
