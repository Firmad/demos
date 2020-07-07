// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'always'],// 句尾分号，缺少就提示error级别，永远要分号
    'indent': 'off',// 关闭eslint的indent控制
    'vue/script-indent': ['error', 2, {'baseIndent': 1}],//启用vue提供的缩进，缺少缩进就提示error级别，2*baseIndent=最终缩进值
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}]//函数括号之前的空格，缺少就提示error级别，匿名函数要空格，具名函数不要空格，异步箭头函数要空格
  }
}
