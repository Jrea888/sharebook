import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载方式导入路由组件
const Mian = () => import('@/views/main/Main.vue')
const Home = () => import('@/views/home/Home.vue');
const MyUpload = () => import('../views/pages/MyUpload.vue')
const UploadList = () => import('@/views/pages/UploadList.vue');
const ShareBook = () => import('@/views/pages/ShareBook.vue');
const LeaveMessage = () => import('@/views/pages/LeaveMessage.vue');
const Announce = () => import('@/views/pages/Announce.vue');
const FeedBack = () => import('@/views/pages/FeedBack.vue');
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
  },
  {
    path:'/myupload',
    name: 'MyUpload',
    component:MyUpload
  },
  {
    path:'/uploadlist',
    name: 'UploadList',
    component:UploadList
  },
  {
    path:'/sharebook',
    name: 'ShareBook',
    component:ShareBook
  },
  {
    path:'/leavemessage',
    name: 'LeaveMessage',
    component:LeaveMessage
  },
  {
    path:'/announce',
    name: 'Announce',
    component:Announce
  },
  {
    path:'/feedback',
    name: 'FeedBack',
    component:FeedBack
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
