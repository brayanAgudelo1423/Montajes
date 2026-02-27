/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta profesional fotografía: negro, grises, acento ámbar/dorado
        studio: {
          black: '#0f0f0f',
          charcoal: '#1a1a1a',
          graphite: '#2d2d2d',
          slate: '#4a4a4a',
          silver: '#8a8a8a',
          mist: '#e8e6e3',
          white: '#fafaf9',
          amber: '#c9a227',
          gold: '#b8860b',
          cream: '#f5f0e6',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
