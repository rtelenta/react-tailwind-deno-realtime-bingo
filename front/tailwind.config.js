const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
};
