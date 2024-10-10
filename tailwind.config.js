/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "clamp-xs": "clamp(0.75rem, 1.5vw, 0.875rem)", // xs
        "clamp-base": "clamp(1rem, 2.5vw, 1.125rem)", // base
        "clamp-xl": "clamp(1.2rem, 2.7vw, 1.5rem)", // base
        "clamp-2xl": "clamp(1.5rem, 3vw, 1.875rem)", // 2xl
        "clamp-3xl": "clamp(0.5rem, 2.5vw, 2.25rem)", // 3xl
        "clamp-4xl": "clamp(2.25rem, 4vw, 2.75rem)", // 4xl
        "clamp-5xl": "clamp(2.3rem, 5vw, 3.75rem)", // 5xl
        "clamp-6xl": "clamp(3.75rem, 6vw, 4.5rem)", // 6xl
        "clamp-7xl": "clamp(4.5rem, 7vw, 5.25rem)", // 7xl
        "clamp-8xl": "clamp(6rem, 8vw, 7rem)", // 8xl
        "clamp-9xl": "clamp(3rem, 9vw, 10rem)", // 9xl
      },
      padding: {
        main: "clamp(2rem, 3vw, 4rem)",
      },

      inset:{
        "clamp-xl":"clamp(0 , 5rem , -15rem )"
      },
      width: {
        
        spiralimage: "clamp(500px , 130vw , 1200px)",
        spiralimage2: "clamp(300px , 100vw , 100%)",
      },
      backgroundImage: {
        "gradient-one": "linear-gradient(-60deg, #A6B7F2 -10%, #204AD4 90%)",
        "gradient-red": "linear-gradient(60deg, #ff7e5f 0%, #feb47b 100%)",
        "gradient-lightpink": "linear-gradient(135deg, #F44336 0%, #ffc9c5 100%)",
        "gradient-lightgreen": "linear-gradient(135deg, #b4ffb7 0%, #8BC34A 100%)",
        "gradient-lightblue": "linear-gradient(135deg, #68bcff 0%, #d4ecf7 100%)",
      },
      boxShadow: {
        "inner-md":
          "inset 0 4px 6px -1px rgb(0 0 0 / 0.1), inset 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "inner-lg":
          "inset 0 10px 15px -3px rgb(0 0 0 / 0.1), inset 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "inner-xl":
          "inset 0 20px 25px -5px rgb(0 0 0 / 0.1), inset 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "inner-2xl": "inset 0 0px 50px -8px rgb(0 0 0 / 0.25)",
        "inner-3xl": "inset 0 0px 70px 85px rgb(0 0 0 / 0.5)",
      },
      clipPath: {
        'invert-xl': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 10% 10%, 90% 10%, 90% 90%, 10% 90%)',
        'invert-2xl': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 15% 15%, 85% 15%, 85% 85%, 15% 85%)',
        'invert-3xl': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 20%, 80% 20%, 80% 80%, 20% 80%)',
        // Add more for sm, md, lg, etc.
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#B7C6F4",
          100: "#A6B7F2",
          200: "#829BEC",
          300: "#5F7FE7",
          400: "#3B62E1",
          500: "#204AD4",
          600: "#1939A3",
          700: "#112873",
          800: "#0A1742",
          900: "#030611",
          950: "#000000",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      cursor: {
        auto: "url('/assets/zcursor.svg'), auto",
        default: "url('/assets/zcursor.svg'), default",
        pointer: "url('/assets/zpointer_cursor.svg'), pointer",
        text: "url('https://img.icons8.com/papercut/30/ruler.png'), text",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        "shake-animation": {
          "0%": { transform: "translate(0, 0)" },
          "1.78571%": { transform: "translate(5px, 0)" },
          "3.57143%": { transform: "translate(0, 0)" },
          "5.35714%": { transform: "translate(5px, 0)" },
          "7.14286%": { transform: "translate(0, 0)" },
          "8.92857%": { transform: "translate(5px, 0)" },
          "10.71429%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shake": "shake-animation 4.72s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
