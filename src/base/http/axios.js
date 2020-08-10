import axios from 'axios'

import url from '@/base/config.json'

// import { Message } from 'element-ui'

// 设置超时
axios.defaults.timeout = 10000

// 设置访问得baseUrl
axios.defaults.baseURL = url.baseUrl
// console.log(url.baseUrl)

axios.defaults.headers = {

  'Content-type': 'application/json'

}

// 设置是否允许跨域得资源凭证携带
axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token')
  token && (config.headers.token = token)
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default axios
