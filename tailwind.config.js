// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  variants: {
    display: ["group-hover"]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sant: {
          500: "#9e3667",
        },
        viking: {
          DEFAULT: "#65B9D5",
          50: "#F5FBFC",
          100: "#E5F3F8",
          200: "#C5E5EF",
          300: "#A5D6E6",
          400: "#85C8DE",
          500: "#65B9D5",
          600: "#39A5C9",
          700: "#2B829F",
          800: "#1F5E72",
          900: "#133A46",
        },
        polar: {
          DEFAULT: "#E9F5F9",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#E9F5F9",
          600: "#BDE1ED",
          700: "#91CDE1",
          800: "#65B9D5",
          900: "#39A5C9",
        },

        lauri: {
          300: "#DF8378",
          400: "#F34E3A",
          500: "#F34E36",
          600: "#A63428",
          700: "#593430",
        },
        biscay: {
          DEFAULT: "#1F4B6C",
          50: "#6DA9D5",
          100: "#5E9FD1",
          200: "#3E8DC8",
          300: "#3177AB",
          400: "#28618C",
          500: "#1F4B6C",
          600: "#122D40",
          700: "#060E15",
          800: "#000000",
          900: "#000000",
        },
        laurisfirefly: {
          DEFAULT: "#0D1F2D",
          50: "#3681BB",
          100: "#3276AC",
          200: "#28608C",
          300: "#1F4B6C",
          400: "#16354D",
          500: "#0D1F2D",
          600: "#000101",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        laurislate: {
          500: "#0D1F2D",
        },
        laurisgrey: {
          DEFAULT: "#546A7B",
          50: "#B8C5CF",
          100: "#ACBBC6",
          200: "#94A7B6",
          300: "#7B93A5",
          400: "#657F93",
          500: "#546A7B",
          600: "#3D4D5A",
          700: "#263138",
          800: "#101417",
          900: "#000000",
        },
        laurisgray: {
          DEFAULT: "#9EA3B0",
          50: "#FFFFFF",
          100: "#F8F8F9",
          200: "#E1E3E7",
          300: "#CBCED5",
          400: "#B4B8C2",
          500: "#9EA3B0",
          600: "#7F8697",
          700: "#646A7A",
          800: "#4A4F5B",
          900: "#31343C",
        },
        laurispink: {
          DEFAULT: "#FAE1DF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FAE1DF",
          600: "#F2B4AE",
          700: "#EB867E",
          800: "#E3594D",
          900: "#D72F22",
        },
        flamingo: {
          DEFAULT: "#F34E3A",
          50: "#FEE9E7",
          100: "#FCD8D4",
          200: "#FAB6AD",
          300: "#F89387",
          400: "#F57160",
          500: "#F34E3A",
          600: "#E7250E",
          700: "#B21D0B",
          800: "#7D1408",
          900: "#480C04",
        },
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        '2lg': '1152px',
        // => @media (min-width: 1152px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  // https://gist.github.com/jonsugar/6bce22bd7d3673294caad36046c2b7cb?permalink_comment_id=3070353#gistcomment-3070353
  plugins: [
    function({addBase, theme}) {
      if (process.env.NODE_ENV === "production") return
  
      const screens = theme('screens', {})
      const breakpoints = Object.keys(screens)
      
      addBase({
        'body::after': {
          content: `"Current breakpoint default (< ${screens[breakpoints[0]]})"`,
          position: 'fixed',
          right: '.5rem', // could replace with theme('spacing.2', '.5rem'), same for most of the other values
          bottom: '.5rem',
          padding: '.5rem .5rem .5rem .5rem',
          background: 'no-repeat .5rem center / 1.25rem url(https://tailwindcss.com/favicon-32x32.png), #edf2f7',
          border: '1px solid #cbd5e0',
          color: '#d53f8c',
          fontSize: '.875rem',
          fontWeight: '600',
          zIndex: '99999',
        },
        ...breakpoints.reduce((acc, current) => {
          acc[`@media (min-width: ${screens[current]})`] = {
            'body::after': {
              content: `"${current}"`
            }
          }
          return acc
        }, {})
      })
    }
  ],
};
