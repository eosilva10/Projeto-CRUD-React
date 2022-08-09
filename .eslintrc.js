module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'no-unused-vars': 0,
    'no-multiple-empty-lines': 0,
    'import/no-duplicates': 0,
    'prefer-const': 0,
    'max-len': 0,
    'react/forbid-prop-types': 0,
  },
};
