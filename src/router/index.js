import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载方式导入路由组件
const Mian = () => import('../views/main/Main.vue')
const Home = () => import('../views/home/Home.vue');
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Mian',
    component: Mian
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
