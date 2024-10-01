import type { Config } from 'tailwindcss';

export default {
  // Ensure JIT mode is enabled for on-demand class generation
  mode: 'jit',

  // Specify the files to be purged of unused CSS (simplified to match all relevant files)
  content: ["./app/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      // Custom `clipPath` for polygonal shapes
      clipPath: {
        'custom': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Inverted effect
      },

      // Custom `fontFamily` setup
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
    // Plugin to hide scrollbars across browsers
    function ({ addUtilities }: { addUtilities: Function }) {
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
} satisfies Config;
