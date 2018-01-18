import Vue from 'vue'
import axios from 'axios'

// axios.js 配置
axios.defaults.timeout = 5000
// 根Url
axios.defaults.baseURL = 'http://127.0.0.1:9988'

// 请求拦截器，发出请求之前处理
axios.interceptors.request.use(
  config => {
    // 转换JSON，否则会报错
    config.data = JSON.stringify(config.data)
    config.header = {'Content-Type': 'application/x-www-form-urlencoded'}
    config.params.timestamp = new Date().getTime()
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器，预处理响应数据
axios.interceptors.response.use(
  res => {
    if (!res.data) {
      alert('res is empty')
    }
    if (res.data.code !== 1000) {
      alert(res.data.msg)
    }
    return res
  },
  err => {
    return Promise.reject(err)
  }
)

// 将axios绑定到vue属性中
Vue.prototype.$http = axios

export default axios
