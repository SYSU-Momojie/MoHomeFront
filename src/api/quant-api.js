'use strict'

import axios from 'axios'

let http = axios.create({
  baseURL: process.env.VUE_APP_MQ_API_HOST,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

let fileHttp = axios.create({
  baseURL: process.env.VUE_APP_MQ_API_HOST,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

let apiAxios = function (client, method, url, params) {
  return new Promise((resolve, reject) => {
    client({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null
    }).then(function (res) {
      if (res.data.code === null) {
        reject(new Error('非标准返回格式'))
      } else if (res.data.code === 200) {
        resolve(res.data.data)
      } else {
        reject(res.data.message)
      }
    }).catch(function (err) {
      reject(err)
    })
  })
}

export default {
  get: function (url, params) {
    return apiAxios(http, 'GET', url, params)
  },
  post: function (url, params) {
    return apiAxios(http, 'POST', url, params)
  },
  put: function (url, params) {
    return apiAxios(http, 'PUT', url, params)
  },
  delete: function (url, params) {
    return apiAxios(http, 'DELETE', url, params)
  },
  upload: function (url, params) {
    return apiAxios(fileHttp, 'POST', url, params)
  }
}
