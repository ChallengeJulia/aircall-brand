module.exports = {
  extends: [
    "stylelint-prettier/recommended",
    "stylelint-config-standard-scss"
  ],
  overrides: [
    {
      files: ["**/*.vue"],
      customSyntax: "postcss-html"
    }
  ],
  rules: {
    // we need to use SCSS' at-rule-no-unknown to
    // include SCSS methods like @mixin and @extend
    // https://github.com/stylelint/stylelint/issues/3190#issuecomment-368412175
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
