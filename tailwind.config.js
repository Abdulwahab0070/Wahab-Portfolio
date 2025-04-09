/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main_background': "url('/assets/img/background.jpg')",
        'custom-gradient': "linear-gradient(90deg, #07233b 1.67%, #041d34 39.95%, #04192d 58.24%, #040e18 80.28%, #050c16 101.48%)",

      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}

