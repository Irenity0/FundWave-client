/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway" : ["Raleway", "monospace"],
      } 
    },
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4c3d19',        // Brown
          secondary: '#4C5B3B',      // Light Green
          accent: '#354024',         // Green
          neutral: '#c2ab82',        // Light neutral (for text areas)
          'base-100': '#cfbb99',     // Tan (background)
        }
      }
    ]
  }
}