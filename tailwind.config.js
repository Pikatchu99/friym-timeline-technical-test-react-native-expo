/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{tsx,ts}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
      },
    },
  },
};

