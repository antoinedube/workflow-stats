module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:lodash/recommended",
    "plugin:react/recommended"
  ],
  "installedESLint": true,
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "eslint-plugin-lodash",
    "eslint-plugin-mocha"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "lodash/prefer-lodash-method": [
      "error",
      {
        "except": ["find"]
      }
    ]
  },
  "globals": {
    "afterEach": true,
    "beforeEach": true,
    "describe": true,
    "equal": true,
    "it": true,
    "models": true,
    "Sequalize": true
  }
};
