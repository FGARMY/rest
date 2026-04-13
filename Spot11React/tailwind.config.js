/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#18181B',     // Charcoal black
          orange: '#D97706',   // Deep orange
          cream: '#FEF3C7',    // Soft cream
          brown: '#78350F',    // Warm brown
          light: '#FFFDF5',    // Off-white cream
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
}
