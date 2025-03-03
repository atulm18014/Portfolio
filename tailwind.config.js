/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E100F", // Updated to the new dark color
        primary: "#ffffff",
        secondary: "#888888",
        accent: "#64ffda",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        mono: ["'Roboto Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
