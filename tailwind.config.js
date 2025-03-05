/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Changed to pure black
        primary: "#ffffff",
        accent: "#3b82f6", // blue-500
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
        bebas: ['Bebas Neue', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif'],
      },
      rotate: {
        '40': '40deg',
        '160': '160deg',
        '-45': '-45deg',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
