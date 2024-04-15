/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'zwhite':'#ffffff', 
      'zprimary': '#204AD4',
      'zblue2':'#7295E4',
      'zsecondary': '#FAC404',
      'zbg':'#121212',
      'zgary':'#252525',
      'zgray1':'#333333',
      'zgary2':'#6B6B6B',
      'zgary3':'#D9D9D9',
    },
    extend: {
      fontFamily: {
        sans: ['Product Sans', 'sans-serif'],
      },

      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      },
         
    },
  },
  plugins: [],
};
