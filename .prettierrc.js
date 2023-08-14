/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  importOrder: [
    "react",
    "<THIRD_PARTY_MODULES>",
    "",
    "^~/(.*)$",
    "",
    "^[\\.\\./]",
    "",
    "^[\\.]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.1.3",
  plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports")],
}
