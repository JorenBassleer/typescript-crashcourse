/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'airbnb-typescript/base',
  ],
  plugins: [
    // Other plugins...
    "import"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: [
      './tsconfig.json',
      './tsconfig.node.json',
      './tsconfig.app.json',
      './tsconfig.vitest.json',
      './tsconfig.eslint.json',
    ],
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  ignorePatterns: ['vite.config.ts', 'eslintrc.cjs'],
};
