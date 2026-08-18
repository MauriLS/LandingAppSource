/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary Backgrounds */
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8FAFC', // slate-50
        
        /* Typography & Borders (Monochrome) */
        'text-main': '#0f172a',
        'text-muted': '#475569',
        'border-soft': '#E2E8F0',
        'border-hard': '#CBD5E1',
        /* Technical Accents (Teal for positive, Amber for negative) */
        'accent': '#069494', /* teal-custom */
        'accent-hover': '#057a7a', /* teal-custom-dark */
        'warning': '#d97706', /* amber-600 */
        'warning-hover': '#b45309', /* amber-700 */
        
        /* Brand Dark Blue (for UI elements if needed) */
        'brand-blue': '#1e293b', /* slate-800 */
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tight-tech': '-0.02em',
      },
      scale: {
        '98': '0.98',
      },
      animation: {
        'blink': 'blink 1s steps(1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
