/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      color: {
        primary: "#FF00FF",
        secundary: "#00FF00",
        quadrado: "#00F"
      },
    },
  },
  plugins: [],
}
