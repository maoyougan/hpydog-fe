import axios from 'axios'
import qs from 'qs' // 用以序列化post请求

// 请求函数预处理
const preSend = (url, data, method) => {
  const options = {
    url,
    baseUrl: 'http://172.20.31.9:3000',
    method,
    timeout: 10000,
    withCredentials: true,
    params: {}
  }

  if (method === 'get') {
    options.params = {...options.params, ...data}
  } else if (method === 'post') {
    options.data = qs.stringify(data)
  } else {
    options.data = data
  }

  return axios(options)
}

const send = args => {
  preSend(...args).then(res => {
    if (res.code * 1 === 0) {
      return res.data
    }

    throw res.data
  },
  err => {
    throw err
  })
}

export default {
  get (url, data) {
    return send(url, data, 'get')
  },
  post (url, data) {
    return send(url, data, 'post')
  }
}
