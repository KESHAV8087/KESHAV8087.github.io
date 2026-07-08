/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        bg2: '#f7f7ff',
        bg3: '#eeeeff',
        text: '#16141f',
        muted: '#6b6880',
        accent: '#5b45f5',
        accent2: '#7c3aed',
        teal: '#0ea5c9',
        card: '#fafaff',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}