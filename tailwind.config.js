/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
