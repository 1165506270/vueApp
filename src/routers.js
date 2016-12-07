import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/login.vue'
import Main from './components/Main.vue'
import Reg from './components/reg.vue'
import Index from './components/index.vue'
import Personal from './components/personal.vue'
import Pic from './components/pic.vue'
Vue.use(VueRouter)
// 2. 定义路由
const router = new VueRouter({
  routes: [
    {path: '/',
      component: Main,
      children: [
        {
          path: 'login', component: Login
        },
        {
          path: 'reg', component: Reg
        },
        {
          path: '', component: Index
        },
        {
          path: 'personal', component: Personal
        },
        {
          path: 'pic/:uid',
          component: Pic
        }
      ]
    }
  ]
})
export default router
