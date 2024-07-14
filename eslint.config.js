import globals from "globals";
import js from "@eslint/js";
import tsPlugin from "typescript-eslint";
import reactPlugin from "eslint-plugin-react/configs/recommended.js";
import tanstackQueryPlugin from "@tanstack/eslint-plugin-query";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import * as graphqlESLint from "@graphql-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  ...tsPlugin.configs.recommended,
  reactPlugin,
  ...tanstackQueryPlugin.configs["flat/recommended"],
  prettierPlugin, // This should be last
  {
    files: ["src/client/**/*.{ts,tsx}"],
    // Setup processor for operations/fragments definitions on code-files
    processor: graphqlESLint.processors.graphql,
  },
  {
    files: ["**/*.{graphql,gql}"],
    plugins: {
      "@graphql-eslint": graphqlESLint,
    },
    languageOptions: {
      parser: graphqlESLint,
    },
    rules: {
      "@graphql-eslint/no-anonymous-operations": "error",
      "@graphql-eslint/no-duplicate-fields": "error",
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": 1,
      "react/react-in-jsx-scope": 0,
    },
  },
];
