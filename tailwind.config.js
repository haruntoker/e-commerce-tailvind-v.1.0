/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // to add default/custom colors
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
        // then add google fonts link to index.html
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss",
  '@tailwindcss/aspect-ratio'
  ],
};
