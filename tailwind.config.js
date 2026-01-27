/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "className",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-background": "url('/public/images/main-bg.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1414b8",
        "navy-blue": "#0a1d37",
        "slate-gray": "#708090",
        "background-light": "#f6f6f8",
        "background-dark": "#111121",
        charcoal: "#1a1a1a",
        "off-white": "#f9f9f9",
      },
    },
    container: {
      center: true,

      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1410px",
      },
    },
  },
  plugins: [],
};
