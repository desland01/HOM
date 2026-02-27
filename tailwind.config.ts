import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F5F3EF',
          mustard: '#C9A227',
          charcoal: '#1C1C1C',
        }
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      letterSpacing: {
        'tighter-extreme': '-0.05em',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'ember': 'ember 1.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        ember: {
          '0%, 100%': { opacity: '0.12', filter: 'blur(4px)', transform: 'scale(1.02)' },
          '50%': { opacity: '0.6', filter: 'blur(6px)', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
