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
        /* Technical Accents (Royal Gold) */
        'accent': '#C9A227', /* customized gold requested by user */
        'accent-hover': '#B38E22', /* slightly darker for hover */
        'warning': '#FFD700', /* pure gold (used in hero) */
        'warning-hover': '#DAA520', /* dark goldenrod (used in hero hover) */
        
        /* Brand Dark Blue (for UI elements if needed) */
        'brand-blue': '#0A2540', /* premium navy blue */
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
