/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Paths to your files that use Tailwind CSS
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite", // Add the spin animation
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
