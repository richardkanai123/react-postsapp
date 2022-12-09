/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./Components/**/*.js",
    "./Components/**/*.jsx",
    "./pages/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
      },
    },
  },
  plugins: [],
};
