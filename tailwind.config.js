/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Stone-100": "hsl(30, 54%, 90%)",
        "Stone-150": "hsl(30, 18%, 87%)",
        "Stone-600": "hsl(30, 10%, 34%)",
        "Stone-900": "hsl(24, 5%, 18%)",

        "Brown-800": "hsl(14, 45%, 36%)",

        "Rose-800": "hsl(332, 51%, 32%)",
        "Rose-50": "hsl(330, 100%, 98%)"
      }
    },
  },
  plugins: [],
};
