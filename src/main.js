import Vue from 'vue'
import store from './store/store'
import App from './App'
import router from './router'
import axios from './util/axios'
import globalVar from './util/globalVar'

// wx弹窗组件
import Directive from 'wc-messagebox'
import {Alert, Confirm, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'

Vue.use(Alert, {})
Vue.use(Confirm, {})
Vue.use(Toast, {})

Vue.use(Directive)

import VueLazyLoad from 'vue-lazyload'
// 懒加载的默认图片
import defLazyImg from './assets/img/loader.gif'
// 使用懒加载组件
Vue.use(VueLazyLoad, {
  loading: defLazyImg
})

Vue.config.productionTip = false

new Vue ({
  el: '#app',
  router,
  store,
  axios,
  globalVar,
  template: '<App/>',
  components: {App}
})
