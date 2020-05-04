import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/apiConfig'
import './assets/scss/reset.scss';

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// mock开关
const mock = false;
if (mock) {
  //import是预编译加载，编译的时候就加载了这个文件，以后请求就都会被mock拦截，require是从上到下执行的时候才会加载
  require('./mock/api');
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')