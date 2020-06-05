import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import "./assets/scss/reset.scss";
import axios from './api/apiConfig'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$message = Message

Vue.use(VueCookie)

Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

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