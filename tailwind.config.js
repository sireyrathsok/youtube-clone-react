/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f1f1f1",
        secondary: "#717171",

        primaryBgColor: "#0f0f0f",
        secondBgColor: "#aaa",
      },

      height: {
        0.2: "1px",
      },
    },
  },
  plugins: [],
};
