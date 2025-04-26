/* eslint-disable no-undef */
// eslint.config.mjs
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import angularEslintPlugin from "@angular-eslint/eslint-plugin";
import angularEslintPluginTemplate from "@angular-eslint/eslint-plugin-template";
import js from "@eslint/js";
import globals from "globals";
import angularEslintTemplateParser from "@angular-eslint/template-parser";

/** @type {import("eslint").Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    ignores: ["mock-api/**", "**/*.spec.ts", "**/main.ts"],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2022, 
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      "@angular-eslint": angularEslintPlugin,
      "@angular-eslint/template": angularEslintPluginTemplate,
    },
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  // Spec/test files
  {
    files: ["**/*.spec.ts"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...Object.fromEntries(
          Object.entries(globals.browser).map(([key, value]) => [
            key.trim(),
            value,
          ]),
        ),
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  // Angular templates
  {
    files: ["**/*.html"],
    ignores: ["mock-api/**"],
    languageOptions: {
      parser: angularEslintTemplateParser
    },
    plugins: {
      "@angular-eslint/template": angularEslintPluginTemplate,
    },
    processor: "@angular-eslint/template/extract-inline-html",
    rules: {
      "@angular-eslint/template/no-negated-async": "error",
    }
  },
  {
    files: ["mock-api/**/*.ts", "mock-api/**/*.tsx"],
    ignores: ["mock-api/.next/**"],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        Request: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintParser,
    },
    rules: {
      "no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^(_|[A-Z]+)$",
          argsIgnorePattern: "^(_|[A-Z]+)$",
        },
      ],
    },
  },

  // Next.js specific config
  {
    files: ["mock-api/**/*.{js,ts,jsx,tsx}"],
    ignores: ["mock-api/.next/**"],
    rules: {
      "next/no-html-link-for-pages": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
