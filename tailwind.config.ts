import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
