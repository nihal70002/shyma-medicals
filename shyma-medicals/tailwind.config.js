/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#607AFB",
        "background-light": "#f5f6f8",
        "background-dark": "#0f1323",
        "surface-light": "#ffffff",
        "surface-dark": "#1A2230",
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
