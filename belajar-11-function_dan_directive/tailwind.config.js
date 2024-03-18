/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hello-image": "url('/src/img/2.jpg')",
      },
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        warnaRizal: "#3037fc",
      },
    },
  },
  plugins: [],
};
