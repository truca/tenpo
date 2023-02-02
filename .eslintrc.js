module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks'],
  rules: {
    'linebreak-style': 0,
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/semi": "warn",
    "@typescript-eslint/no-use-before-define": "off",
  },
  parserOptions: {
    project: './tsconfig.json',
  }
};