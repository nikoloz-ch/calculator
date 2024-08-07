/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        enter: "enter 1.5s ease-in-out forwards",
        spheres: "",
        color: "color 5s ease-in-out infinite alternate",
      },
      keyframes: {
        enter: {
          "0%": {
            transform: "translateY(10%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        color: {
          "0%": {
            "box-shadow": "0 0 30px 0 rgba(1, 136, 255, 0.168)",
          },
          "100%": {
            "box-shadow": "0 0 30px 0 rgba(120, 1, 255, 0.168)",
          },
        },
      },
      fontFamily: {
        square: ['"BPG QuadroSquare Mtavruli"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
