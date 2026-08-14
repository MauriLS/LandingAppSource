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
        'bg-secondary': '#F3F4F6',
        
        /* Typography & Borders (Monochrome) */
        'text-main': '#ffffff',
        'text-muted': '#4B5563',
        'border-soft': '#E5E7EB',
        'border-hard': '#ffffff',
        
        /* Technical Accents */
        'accent': '#0EA5E9', /* Bright Blue */
        'accent-hover': '#0284C7', /* Dark Blue */
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tight-tech': '-0.02em',
      },
      boxShadow: {
        /* Neo-brutalist hard shadows */
        'brutal': '4px 4px 0px 0px #ffffff',
        'brutal-sm': '2px 2px 0px 0px #ffffff',
        'brutal-lg': '6px 6px 0px 0px #ffffff',
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
