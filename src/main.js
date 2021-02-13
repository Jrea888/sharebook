import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element.js'
// 注册全局组件
import Header from "@/views/header/Header.vue";
import Footer from "@/views/footer/Footer.vue";
import CurrLocat from "@/common/CurrentLocation.vue"
Vue.component('Header',Header);
Vue.component('Footer',Footer);
Vue.component('curr-locat',CurrLocat);

Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
