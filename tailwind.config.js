/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Update paths as per your project
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'], // Add "Space Grotesk"
      },
    },
  },
  plugins: [],
};

