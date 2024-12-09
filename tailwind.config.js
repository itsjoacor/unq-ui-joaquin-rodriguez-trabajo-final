/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.transform-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective': {
          perspective: '1000px',
        },
      });
    },
  ],
};
