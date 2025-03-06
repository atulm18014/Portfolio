/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#000000", // Pure black
          alt: "#0A0A0A",    // Nearly black
          lighter: "#111111", // Very dark gray
          accent: "#171717",  // Slightly lighter for accents
        },
        primary: "#FFFFFF", // Pure white
        secondary: "#E0E0E0", // Light gray text
        muted: "#9CA3AF", // Muted text
        accent: {
          DEFAULT: "#3B82F6", // blue-500
          secondary: "#60A5FA", // blue-400
          subtle: "rgba(59, 130, 246, 0.15)", // Transparent accent for glows
        },
        border: {
          DEFAULT: "#222222", // Dark gray border
          accent: "#3B82F6", // Blue border accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
        // Add custom font families
        bebas: ['"Bebas Neue"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        card: "0 20px 30px -15px rgba(0, 0, 0, 0.7)",
        glow: "0 0 15px rgba(59, 130, 246, 0.15)",
        'glow-strong': "0 0 20px rgba(59, 130, 246, 0.3)",
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
      },
    },
  },
  plugins: [],
}
