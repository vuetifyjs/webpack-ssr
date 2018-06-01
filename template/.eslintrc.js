module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  globals: {
    docsearch: true
  },
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 5,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "prefer-promise-reject-errors": 0
  },
  overrides: [
    {
      files: '**/*.vue',
      rules: {
        indent: false,
        "vue/script-indent": ["error", 2, {
          "baseIndent": 1,
          "switchCase": 1,
          "ignores": []
        }]
      }
    }
  ]
}
