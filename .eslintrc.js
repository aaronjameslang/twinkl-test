module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'airbnb-base',
      'airbnb-typescript/base',
    ],
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: [
      '@typescript-eslint',
    ],
    rules: {
      'import/prefer-default-export': 'off', // TODO
    },
  };
