// .eslintrc.js

module.exports = {
    parser: '@typescript-eslint/parser',  // Specify the TypeScript parser
    parserOptions: {
      ecmaVersion: 2021, // Specify ECMAScript version
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Enables JSX parsing
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
      'plugin:react/recommended', // React recommended rules
      'plugin:@typescript-eslint/recommended-requiring-type-checking', // TypeScript rules requiring type checking
      'plugin:jsx-a11y/recommended', // Accessibility rules
      'plugin:react-hooks/recommended', // React hooks rules
      'prettier', // Prettier recommended rules
      'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
    ],
    plugins: [
      '@typescript-eslint',
      'react',
      'jsx-a11y',
      'react-hooks',
      'prettier',
    ],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'constructor-super': 'error',
      'prettier/prettier': 'error', // Prettier rules
      // Add or override other rules as needed
    },
    globals: {
      ...require('globals').browser,
    },
  };
  