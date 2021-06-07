import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ["admin", "wangao", "zhanglu"],
    password: ["123", "w123", "z123"],
    token: '',
    user: "",
    shopCarList: [{ "title": "瑟可两件套针织连衣裙女春", "price": 89, "count": 2, "picUrl": "https://b1.beicdn.com/upload/item/2008/06/01419023500000_750x750.jpg", "size": "XL" }]
  },
  mutations: {
    // 存储登录凭证
    setToken (state, v) {
      state.token = v
      sessionStorage.setItem("LoginSuccess", state.token)
    },
    // 存储登录的用户名 
    setUser (state, v) {
      state.user = v
      sessionStorage.setItem("user", state.user)
    },
    // 在数组添加一条数据
    setShopCarList (state, params) {
      state.shopCarList.unshift(params)
    }

  },
  actions: {
  },
  modules: {
  }
})
