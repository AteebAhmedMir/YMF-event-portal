/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#002B9A',
        'secondary-blue': '#0A0D3C',
        'accent-blue': '#3C82F6',
        'light-blue': '#EBF2FF',
        'cyan-accent': '#00D1FF',
        'text-dark': '#111827',
        'text-gray': '#4B5563',
        'bg-off-white': '#F9FAFB',
      },
      borderRadius: {
        'large': '40px',
      }
    },
  },
  plugins: [],
}
