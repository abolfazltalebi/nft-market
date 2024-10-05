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
        "Secondary": "#3b3b3b",
        "Caption-Label-Text": "#858584",
        "Action": "#a259ff",
        "Accent": "#377df7",
        "Accent-2": "#ff7262",
        "homepage": "#2b2b2b",
      },
      fontSize: {
        base: "0.75rem",
        lg: "1rem",
        xl: "1.375rem",
        "2xl": "1.75rem",
        "3xl": "2.375rem",
        "4xl": "3.1875rem",
        "5xl": "4.1875rem",
      },
    },
  },
  plugins: [],
};