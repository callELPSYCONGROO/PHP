import Vue from 'vue'
import store from './store/store'
import App from './App'
import router from './router'
import axios from './util/axios'
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
  template: '<App/>',
  components: {App}
})
