/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Monochromatic black palette
        background: {
          DEFAULT: "#000000", // Pure black
          alt: "#0A0A0A", // Slightly lighter black
          lighter: "#111111", // Subtle dark gray for cards
          accent: "#171717", // Accent background
        },
        primary: "#FFFFFF",
        secondary: "#AAAAAA", // Light gray
        muted: "#777777", // Medium gray
        accent: {
          DEFAULT: "#00E6CA", // Muted teal as primary accent
          secondary: "#FFFFFF", // White as secondary accent
          subtle: "rgba(0, 230, 202, 0.2)", // Transparent accent for glows
        },
        border: {
          DEFAULT: "#222222", // Dark gray border
          accent: "#333333", // Lighter border
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
        heading: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: "0 20px 30px -15px rgba(0, 0, 0, 0.7)",
        subtle: "0 5px 15px rgba(0, 0, 0, 0.3)",
        glow: "0 0 15px rgba(0, 230, 202, 0.2)",
        'glow-strong': "0 0 20px rgba(0, 230, 202, 0.4)",
      },
      backgroundImage: {
        'gradient-minimal': 'linear-gradient(180deg, #000000 0%, #060606 100%)',
        'gradient-accent': 'linear-gradient(90deg, #00E6CA 0%, rgba(0, 230, 202, 0.3) 100%)',
        'glass': 'linear-gradient(135deg, rgba(40, 40, 40, 0.1), rgba(20, 20, 20, 0.05))',
      },
      animation: {
        'slow-pulse': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.7s ease-in forwards',
        'slide-up': 'slideUp 0.7s ease-in-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
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
      textShadow: {
        sm: '0 1px 1px rgba(0, 0, 0, 0.1)',
        DEFAULT: '0 1px 2px rgba(0, 0, 0, 0.1)',
        glow: '0 0 10px rgba(0, 230, 202, 0.5)',
      },
      letterSpacing: {
        tightest: '-.06em',
        tighter: '-.03em',
        wide: '.05em',
        wider: '.1em',
        widest: '.25em',
      },
    },
  },
  plugins: [
    // Only include the textshadow plugin if it's available
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        },
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.05)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 8px rgba(145, 94, 255, 0.7)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };
      
      addUtilities(newUtilities);
    }
  ],
}
