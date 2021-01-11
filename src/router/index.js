import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载方式导入路由组件
const Mian = () => import('../views/main/Main.vue')
const Login = () => import('../views/login/Login.vue')
const Home = () => import('../views/home/Home.vue');
const Register = () => import('../views/register/Register.vue');
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    name: 'Mian',
    component: Mian
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
