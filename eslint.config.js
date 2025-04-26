// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const jsonc = require('eslint-plugin-jsonc');
const jsoncParser = require('jsonc-eslint-parser');
const prettier = require('eslint-plugin-prettier');

/** @type {import("eslint").Linter.Config[]} */
module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    ignores: ['mock-api/.next/**'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      prettier,
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app|lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app|lib',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^(_|[A-Z]+)$',
          argsIgnorePattern: '^(_|[A-Z]+)$',
        },
      ],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      'prettier/prettier': 'warn',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  },
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc,
    },
    rules: {
      'jsonc/indent': ['error', 2],
      'jsonc/no-comments': 'off',
    },
  },
);
