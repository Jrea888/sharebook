import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import './plugins/element.js'
// 注册全局组件
import Header from "@/views/header/Header.vue";
import Footer from "@/views/footer/Footer.vue";
import CurrLocat from "@/common/CurrentLocation.vue"
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('curr-locat', CurrLocat);

// 中央事件总线
Vue.prototype.$bus = new Vue();

// 在Vue原型上挂载axios 配置请求的根路径 
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1"
// axios 请求拦截
axios.interceptors.request.use(config => {
  // 加载进度条 打开
  NProgress.start();
  // 为请求头对象 添加token验证的 Authorization 子段
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
})
// axios 响应拦截
axios.interceptors.response.use(config => {
  // 加载进度条 关闭
  NProgress.done()
  return config;
})
// 在挂在之前 设置请求拦截器
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
