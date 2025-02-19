/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
      })
    }
  ],
} 