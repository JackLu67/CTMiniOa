/*
 * @Author: your name
 * @Date: 2019-11-11 11:26:22
 * @LastEditTime: 2019-11-11 15:48:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \studyd:\ctminioa\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0, // 函数定义时括号前面要不要有空格
    "eqeqeq": 0, // 必须使用全等
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
