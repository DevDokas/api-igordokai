module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    'quote-props': 'off',
    'comma-dangle': 'off',
    'camelcase': 'off',
    'object-shorthand': 'off',
    'func-names': 'off'
  },
};
