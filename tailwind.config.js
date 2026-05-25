import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      colors: {
        primary: '#242424',
        secondary: '#161616',
        tertiary: '#9d0410',
        quaternary: '#6B7280'
      },
    extend: {},
  },
  plugins: [
    daisyui
  ],
}

