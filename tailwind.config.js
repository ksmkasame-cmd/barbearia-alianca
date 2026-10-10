/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { gold: '#e4a638', matte: '#0a0a0a' },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        softpulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(228,166,56,0.45)' },
          '50%': { boxShadow: '0 0 0 12px rgba(228,166,56,0)' },
        },
      },
      animation: { softpulse: 'softpulse 2.4s ease-in-out infinite' },
    },
  },
  plugins: [],
}
