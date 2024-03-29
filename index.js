module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },

  "ecmaFeatures": {
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": false,
    "spread": true
  },

  "rules": {

/**
 * Variables
 */
    "no-shadow": 0,
    "no-shadow-restricted-names": 2,
    "no-unused-vars": [2, {
      "vars": "local",
      "args": "none"
    }],
    "no-use-before-define": 0,
    "no-undef": 2,
    "no-delete-var": 2,

/**
 * Possible errors
 */
    "comma-dangle": [2, "never"],
    "no-cond-assign": [2, "always"],
    "no-console": 1,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "no-unexpected-multiline": 2,

/**
 * Best practices
 */
    "no-extra-boolean-cast": 2,
    "consistent-return": 0,
    "curly": [2, "multi-line"],
    "default-case": 2,
    "dot-notation": [2, {
      "allowKeywords": true
    }],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-caller": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-with": 2,
    "radix": 2,
    "wrap-iife": [2, "any"],
    "yoda": 2,

/**
 * Style
 */
    "no-mixed-spaces-and-tabs": 2,
    "no-lonely-if": 2,
    "no-array-constructor": 2,
    "no-new-object": 2,
    "new-parens": 2,
    "consistent-this": [2, "self"],
    "space-unary-ops": [1, {"words": true, "nonwords": false}],
    "space-in-parens": [2, "never"],
    "object-curly-spacing": [2, "never"],
    "space-before-blocks": [2, "always"],
    "array-bracket-spacing": [2, "never"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "brace-style": [2,
      "1tbs", {
      "allowSingleLine": true
    }],
    "quotes": [
      2, "single", "avoid-escape"
    ],
    "camelcase": [2, {
      "properties": "never"
    }],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "comma-style": [2, "last"],
    "eol-last": 2,
    "key-spacing": [0, {
        "beforeColon": false,
        "afterColon": true
    }],
    "new-cap": 0,
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
    "no-unneeded-ternary": 2,
    "no-nested-ternary": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-extra-parens": 0,
    "no-underscore-dangle": 0,
    "one-var": [2, "never"],
    "padded-blocks": [2, "never"],
    "semi": [2, "always"],
    "semi-spacing": [2, {
      "before": false,
      "after": true
    }],
    "keyword-spacing": 2,
    "space-before-function-paren": [2, {
      "anonymous": "always",
      "named": "never"
    }],
    "space-infix-ops": 2,
    "spaced-comment": 2,
    "no-multi-spaces": 0,
    "max-len": [2, 100, 2, {
      "ignoreComments": false,
      "ignoreUrls": true
    }]
  }
};
