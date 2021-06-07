import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyLoad from "vue-lazyload"
import PicZoom from "vue-piczoom"

Vue.use(ElementUI);
Vue.use(VueLazyLoad, {
  // 配置对象导入等待的图片
  // @代表src文件夹
  loading: require("@/assets/placeholder.gif")
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')