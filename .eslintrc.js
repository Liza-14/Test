module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-return-await": "off",
    "linebreak-style": 0,
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "import/prefer-default-export": 0,
    "no-console": ["error", { allow: ["log", "warn", "error"] }],
    "consistent-return": "off",
  },
};
