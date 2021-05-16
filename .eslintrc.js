module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // '@nuxtjs',
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  plugins: [],
  // add your custom rules here
}
