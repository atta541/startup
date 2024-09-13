



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "shiny-background": "linear-gradient(135deg, #f0f8ff, #e6e6e6 50%, #f0f8ff)",
        'custom-gradient': 'linear-gradient(90deg, rgba(127, 127, 213, 0.5) -29.86%, rgba(134, 168, 231, 0.5) 55.73%, rgba(145, 234, 228, 0.5) 131.25%)',

      },

      colors: {
        'primary': '#6C60FE',
        'neutral-0': '#FFFFFF',
        'neutral-600': '#5C5C5C',
        'neutral-231F20': '#231F20',
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },


      screens: {
        'custom-range': { 'raw': '(min-width: 638px) and (max-width: 1025px)' },

        'custom-range2': { 'raw': '(min-width: 768px) and (max-width: 1400px)' },
        'custom-range3': { 'raw': '(min-width: 300px) and (max-width: 639px)' },
        'custom-range4': { 'raw': '(min-width: 0px) and (max-width: 355px)' },
        'custom-range5': { 'raw': '(min-width: 1025px) and (max-width: 1200px)' },
        'xs': { 'min': '300px', 'max': '600px' },

        'custom-range6': { 'raw': '(min-width: 604px) and (max-width: 1200px)' },

        'custom-range7': { 'raw': '(min-width: 640px) and (max-width: 1024px)' },


        'custom-range8': { 'raw': '(min-width: 355px) and (max-width: 639px)' },
        'custom-range9': { 'raw': '(min-width: 200px) and (max-width: 1000px)' },
        'iphone-14promax': { 'raw': '(width: 430px) and (height: 932px)' },






      },




      
    },
  },
  plugins: [],
};





