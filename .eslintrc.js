module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
  ],
  plugins: ["react", "react-hooks", "react-native"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      { additionalHooks: "(useRecoilCallback|useCustomHook)" },
    ],
    "react-native/no-inline-styles": "warn",
    "react-native/no-unused-styles": "warn",
    "react-native/no-color-literals": "warn",
  },
};
