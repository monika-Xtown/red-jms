/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d32f2f", // Main Red
        secondary: "#f5f5f5", // Light Gray
        dark: "#222222",
      },
    },
  },
  plugins: [],
}
