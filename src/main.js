/*
 * @Author: your name
 * @Date: 2019-11-11 11:26:22
 * @LastEditTime: 2019-11-13 14:54:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \studyd:\ctminioa\src\main.js
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // css reset

import Element from 'element-ui' // 引入element
import './styles/element-variables.scss'

import '@/styles/index.scss' // 全局 css

import App from './App.vue'
import router from './router'
import store from './store'
import './permission'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
