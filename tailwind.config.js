module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.tsx"],
  },
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
    },
  },
  variants: {},
  plugins: [],
};
