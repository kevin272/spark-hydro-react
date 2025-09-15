// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // <-- include all your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  safelist: [
    "bg-blue-500",
    "bg-blue-600",
  ],
}
