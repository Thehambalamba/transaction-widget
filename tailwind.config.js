/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    extend: {
      screens: {
        '2xl': '1920px',
      },
      colors: {
        charcoal: "#232323",
        secondaryCharcoal400: "#6D6D6D",
        secondaryCharcoal300: "#969696",
        secondarySand50: "#FBFAF8",
        secondarySand100: "#F8F4F1",
        secondarySand200: "#F4EFE9",
        secondarySand300: "#F0E9E1",
        secondarySand950: "#5F5A55",
        blueSky: "#84A7FA",
        primaryOrange50: "#FCEDEA",
        primaryOrange500: "#EA6640",
        primaryBlueSky50: "#EFF2FE",
        primaryBlueSky600: "#7998E3",
        primaryBlueSky900: "#4C6090",
      },
    },
  },
  plugins: [],
};
