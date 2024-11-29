/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromRight: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        slideInFromLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        pulse: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 }
        },
        slideInFromTop: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        slideInFromRight: 'slideInFromRight 1s ease-out',
        slideInFromLeft: 'slideInFromLeft 1s ease-out',
        fadeIn: 'fadeIn 1s ease-in',
        pulse: 'pulse 2s infinite',
        slideInFromTop: 'slideInFromTop 1s ease-out'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'thin': ['Poppins-Thin', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
