module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "@nuxtjs",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@babel/eslint-parser",
    sourceType: "module",
    requireConfigFile: false,
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
