/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
