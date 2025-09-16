/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cbf-blue': '#1e40af',
        'cbf-yellow': '#fbbf24',
        'cbf-purple': '#7c3aed',
        'cbf-green': '#10b981',
        'cbf-red': '#ef4444',
        'cbf-orange': '#f97316',
      },
      fontFamily: {
        'sans': ['System'],
      },
    },
  },
  plugins: [],
}
