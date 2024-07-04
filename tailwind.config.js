/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      "loop-scroll": "loop-scroll 15s linear infinite",
      "loop-shake": "loop-shake 1s linear infinite",
      "loop-rotate": "loop-rotate 10s linear infinite",
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
      "loop-shake": {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.1)" },
        "100%": { transform: "scale(1)" },
      },
      "loop-rotate": {
        from: { transform: "rotate(0)" },
        to: { transform: "rotate(-360deg)" },
      },
    },
  },
  plugins: [],
};
