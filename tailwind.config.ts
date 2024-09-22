import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      clipPath: {
        'custom': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // This creates an inverted effect
      },
      fontFamily: {
        sans: [
          'Poppins', 'sans-serif',
          'Helvetica',
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',     // Firefox
          '&::-webkit-scrollbar': {
            display: 'none',  // Chrome, Safari, and Opera
          },
        },
      });
    },
  ],
} satisfies Config


