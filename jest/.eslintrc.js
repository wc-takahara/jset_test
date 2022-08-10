module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "object-shorthand": 0,
    "vue/order-in-components": 0,
    "vue/no-v-html": 0,
    "no-lonely-if": 0,
  }
}
