import axios from 'axios'
import { getToken, removeToken } from '../utils/auth'
//URL:请求地址
//data：传入数据

  const service = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 30000,
    baseURL: '', //接口请求地址
  })
  //拦截器
  service.interceptors.request.use(
    (config) => {
      if (getToken('communityToken')) {
        config.headers['Authorization'] = getToken('communityToken') // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      config.headers['Content-Type'] = 'application/json'
      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )

  // respone响应器
  service.interceptors.response.use(
    (response): any => {
      console.log(response, '响应器')
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  /**
   * @name: 封装axios get方法
   * @desc: 描述
   * @author: camellia
   * @email: 15696801082@qq.com
   * @date: 2021-8-25
   * @param url 请求连接
   * @param params 请求参数
   */
   export  const getApi = function(url: string, params?: any) {
    return new Promise((resolve, reject) => {
      service
        .get(url, {
          params: params,
        })
        .then((res) => {
           resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  /**
   * @name: 封装axios post方法
   * @desc: 描述
   * @author: camellia
   * @email: 15696801082@qq.com
   * @date: 2021-8-25
   * @param url 请求连接
   * @param params 请求参数
   * @param callback 回调方法
   */
   export const postApi = function(url: string, params: any) {
    return new Promise((resolve, reject) => {
        service
          .post(url, {
            params: params,
          })
          .then((res) => {
             resolve(res.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
  }
