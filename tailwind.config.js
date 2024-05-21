import theme from "./src/util/theme.config";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
    themes: [...theme],
  },
};
