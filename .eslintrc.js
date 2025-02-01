module.exports = {
  env: {
    browser: false, // React Native はブラウザ環境ではない
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
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all", // React Native 向けの推奨ルール
  ],
  plugins: ["react-hooks", "react-native"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-inline-styles": "warn", // インラインスタイルを警告
    "react-native/no-unused-styles": "warn", // 使われていないスタイルを警告
    "react-native/no-color-literals": "warn", // 直接色を指定するのを警告
  },
};
