/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          md: "5rem",
        },
      },
      colors: {
        Background: "#2b2b2b",
        "secondary": "#3b3b3b",
        "caption-Label-Text": "#858584",
        "action": "#a259ff",
        "accent": "#377df7",
        "accent-2": "#ff7262",
        "homepage": "#2b2b2b",
      },

    },
  },
  plugins: [],
};