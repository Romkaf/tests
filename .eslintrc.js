module.exports = {
  extends: ["react-app", "prettier"],

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  plugins: ["prettier"],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    jsx: true,
  },
};
