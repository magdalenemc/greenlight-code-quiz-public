module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "mocha": true,
    "amd": true
  },
  "extends": "eslint:recommended",
  "rules": {
    // enable additional rules
    "indent": ["error", 2],
    //"linebreak-style": ["error", "unix"],
    "max-len": ["error", { "code": 80, "comments": 70 }],
    "quotes": ["off", "single"],
    "semi": ["error", "always"],

    // override default options for rules from base configurations
    "comma-dangle": ["error", "only-multiline"],
    "eol-last": 2,
    "no-cond-assign": ["error", "always"],
    "no-unused-vars": ["off"],
    "indent": ["error", 2],
    // disable rules from base configurations
    "no-console": "off",
  }
}
