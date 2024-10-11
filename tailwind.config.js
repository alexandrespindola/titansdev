/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './public/dark/assets/scss/**/*.{scss,sass}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}