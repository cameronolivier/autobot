/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["universe", "prettier"],
  rules: {
    "import/order": "off",
  },
}

module.exports = config
