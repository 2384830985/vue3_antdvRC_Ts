import axios, {AxiosRequestConfig, AxiosResponse, AxiosInstance} from 'axios'
import notification from 'ant-design-vue/es/notification'
// hash
const hash = '5c3fe1012928860014e06f2f'

// 创建 axios 实例
const request: AxiosInstance = axios.create({
     // API 请求的默认前缀
    baseURL: `https://${hash}.mockapi.io/`,
    timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: unknown|any) => {
    if (error.response) {
      const data = error.response.data
      // 从 localstorage 获取 token
    //   const token = storage.get(ACCESS_TOKEN)
      if (error.response.status === 403) {
        notification.error({
          message: 'Forbidden',
          description: data.message
        })
      }
      if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
        notification.error({
          message: 'Unauthorized',
          description: 'Authorization verification failed'
        })
        // if (token) {
        //   store.dispatch('Logout').then(() => {
        //     setTimeout(() => {
        //       window.location.reload()
        //     }, 1500)
        //   })
        // }
      }
    }
    return Promise.reject(error)
  }
// 请求拦截
request.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log(config)
    return config
}, errorHandler)

// 响应拦截
request.interceptors.response.use(<T>(response: AxiosResponse<T>)=>{
    return response.data
}, errorHandler)

export default request
