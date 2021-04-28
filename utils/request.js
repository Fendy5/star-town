import axios from 'axios'
import { Message } from 'element-ui'
import { state } from '~/store'

const service = axios.create({
  // baseURL: '/dev-api', // url = base url + request url
  baseURL: process.env.BASE_URL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// 在axios拦截器中检测是否用token，如果存在token就在请求头添加Authorization
service.interceptors.request.use(
  (config) => {
    // 判断store是否存在token
    if (state().token) {
      // 存在token就在请求携带token
      config.headers.Authorization = 'Bearer ' + state().token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data
    if (res.code === 0 && res.message) {
      Message.success(res.message)
    } else if (res.code === 1) {
      Message.error(res.message)
    }
    return res
  },
  (error) => {
    Message.closeAll()
    Message({
      message: error.message,
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
