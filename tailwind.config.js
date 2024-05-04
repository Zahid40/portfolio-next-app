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
      'white':'#ffffff', 
      'zbg':'#121212',
      'zgary':'#252525',
      'zgray1':'#333333',
      'zgary2':'#6B6B6B',
      'zgary3':'#D9D9D9',
      'zprimary': {
        '50': '#eff6ff',
        '100': '#dce9fd',
        '200': '#c0d9fd',
        '300': '#95c2fb',
        '400': '#63a1f7',
        '500': '#3e7ef3',
        '600': '#285ee8',
        '700': '#204ad4',//main
        '800': '#203dad',
        '900': '#203888',
        '950': '#182453',
    },
    'zsecondary': {
      '50': '#fefde8',
      '100': '#fffbc2',
      '200': '#fff588',
      '300': '#ffe644',
      '400': '#fed511',
      '500': '#fac404',//main
      '600': '#ce9000',
      '700': '#a46704',
      '800': '#87500c',
      '900': '#734110',
      '950': '#432105',
  },
  
    
    },
    extend: {
      fontFamily: {
        sans: ['Product Sans', 'sans-serif'],
      },

      animation: {
        'gradient': 'gradient 8s linear infinite',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
         
    },
  },
  plugins: [],
};
