// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard', 'plugin:vue/essential', 'prettier'],
  // required to lint *.vue files
  plugins: ['html', 'standard', 'vue', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-fallthrough': 0,
    'no-case-declarations': 0,
    'vue/no-side-effects-in-computed-properties': 0,
  },
}
