import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'
import CommonIndex from '@/layout/common'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/commonIndex',
    name: 'CommonIndex',
    component: CommonIndex,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Hr/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
