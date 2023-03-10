module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'plugin:vue/vue3-essential',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
  },
}
