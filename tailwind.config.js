/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        moveRight: 'moveRight 1s ease-in-out infinite',
      },
      colors: {
        'primary': '#1c2230',
        'primary-dark': '#181f2b',
        'primary-darker': '#121722',
        'primary-light': '#232a3b',
        'accent': '#3B9797',
        'highlight': '#E5C95F',
        "sky": "rgb(136 212 213)"
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px"
      }
    },
  },
  plugins: [

  ],
}

