import Axios from "axios"
const baseUrl = require('./baseUrl.js');

// 封装get请求方法
function getAxios (url, params) {
  return new Promise(function (resolve, reject) {
    Axios.get(baseUrl + url, { params }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取首页的请求
function getHome () {
  return getAxios(`/shopList.json`)
}

export {

  getHome

}