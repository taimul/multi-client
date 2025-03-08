/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4F7FB",
        secondary: "#E2F9E2",
        black: "#0A0A0A",
        "black-gray": "#222222",
      },
    },
  },
  plugins: [],
};
