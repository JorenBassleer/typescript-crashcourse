/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'linebreak-style': 'off',
    'prefer-arrow-callback': ['error', { 'allowNamedFunctions': true }],
    'func-style': ['error', 'expression', { 'allowArrowFunctions': true }],
    'array-bracket-newline': ['error', { 'multiline': true }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    }
  }
}