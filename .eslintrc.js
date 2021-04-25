module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    quotes: 0,
    'arrow-parens': 0,
    'no-console': 0,
    'vue/singleline-html-element-content-newline': 0
  }
}
