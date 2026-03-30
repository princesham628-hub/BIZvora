/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#7CFC00',
          dark: '#0a0a0a',
          gray: '#1a1a1a',
          light: '#f5f5f5',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(124, 252, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(124, 252, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
