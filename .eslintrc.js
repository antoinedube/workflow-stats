module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:lodash/recommended"
    ],
    "installedESLint": true,
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
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
      "Sequalize": true,
      "models": true,
      "describe": true,
      "it": true
    }
};
