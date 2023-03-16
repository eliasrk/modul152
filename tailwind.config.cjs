/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        clicked: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
        wiggle: {
          "0%,50%, 100%": { transform: "rotate(-6deg)" },
          "25%, 75%": { transform: "rotate(6deg)" },
        },
        minorwiggle: {
          "0%,50%, 100%": { transform: "rotate(-3deg)" },
          "25%, 75%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        clicked: "clicked 0.2s ease-in-out",
        wiggle: "wiggle 0.5s ease-in-out infinite",
        minorwiggle: "minorwiggle 0.5s ease-in-out infinite",
      },
    },
  },
};
