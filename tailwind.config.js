/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_2: "#050505",
        dark_10: "#1A1A1A",
        ligt_60: "#999999",
        light_90: "#E6E6E6",
        green_60: "#4CE6A6",
        green_10: "#062D1D",
        red_70: "#EC7979",
        red_90: "#2D0606",
      },
    },
  },
  plugins: [],
};
