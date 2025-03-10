/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25AF36",
        secondary: "#E2F9E2",
        black: "#0A0A0A",
        "black-gray": "#222222",
        "dark-gray": "#21242B",
      },
    },
  },
  plugins: [],
};
