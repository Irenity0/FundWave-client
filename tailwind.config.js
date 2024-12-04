/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway": ["Raleway", "monospace"],
      },
      animation: {
        spin: 'spin 2s linear infinite', // This creates a spinning animation
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4c3d19',        // Brown
          secondary: '#4C5B3B',      // Light Green
          accent: '#354024',         // Green
          neutral: '#c2ab82',        // Light neutral (for text areas)
          'base-100': '#cfbb99',     // Tan (background)
        },
        mytheme_dark: {
          primary: '#c2ab82',
          secondary: '#677a52',      // Dark Green
          accent: '#c2ab82',
          neutral: '#755d34',        // Darker brown (for text areas)
          'base-100': '#292524',     // Very dark background
        },
      },
    ],
  },
  darkMode: 'class', // Enable class-based dark mode
};
