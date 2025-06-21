/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        // This makes 'Poppins' the default for Tailwind's 'font-sans' class
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
