/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2b59a2',
          deep: '#15386f',
          navy: '#102b57',
          green: '#62b72d',
          lime: '#8bd435',
          sky: '#08a9df',
          mist: '#eaf5fb',
          cream: '#fbf8f3',
          ink: '#18324e',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 70px -40px rgba(16, 43, 87, 0.38)',
        floating: '0 26px 70px -28px rgba(16, 43, 87, 0.52)',
        soft: '0 18px 44px -28px rgba(16, 43, 87, 0.28)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3.2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(14px, -10px, 0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
