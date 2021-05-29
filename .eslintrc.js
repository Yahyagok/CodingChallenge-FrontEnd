module.exports = {
  
  root: true,
  env: {
    browser: true,
    node: true,
    useTabs: false
  },
  parserOptions: {
    parser: 'babel-eslint',
 
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
 
  // add your custom rules here
   rules: { "prettier/prettier": [ "error", { "endOfLine":"auto", "printWidth": 80, "trailingComma": "es5", "semi": false, "doubleQuote":true, "jsxSingleQuote": true, "singleQuote": false, "useTabs": false, "tabWidth":4 } ] }

}
