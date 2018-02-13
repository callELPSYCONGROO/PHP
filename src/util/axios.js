import Vue from 'vue'
import axios from 'axios'

// axios.js 配置
axios.defaults.timeout = 5000
// 根Url
axios.defaults.baseURL = 'http://api.wuhenjian.com'
// axios.defaults.baseURL = 'http://127.0.0.1:9988'

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
    mui.toast('请求异常，请刷新重试')
    return Promise.reject(err)
  }
)

// 响应拦截器，预处理响应数据
axios.interceptors.response.use(
  res => {
    if (!res.data) {
      mui.toast('响应结果为空，请刷新重试')
    }
    if (res.data.code !== 1000) {
      mui.toast(res.data.msg)
    }
    return res
  },
  err => {
    mui.toast('服务器响应异常，请刷新重试')
    return Promise.reject(err)
  }
)

// 将axios绑定到vue属性中
Vue.prototype.$http = axios

export default axios
