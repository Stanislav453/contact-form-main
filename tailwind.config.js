/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBgColor: "hsl(148, 38%, 91%)",
        darkendGreen: "hsl(169, 82%, 27%)",
        errorColor: "hsl(0, 66%, 54%)",
        DarkGray: "hsl(187, 24%, 22%)",
        containerMainColor: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
