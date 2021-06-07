import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login.vue")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("../views/Register.vue")
  }
  ,
  {
    path: '/shopcar',
    name: 'ShopCar',
    component: () => import("../views/shopCar.vue")
  }
  ,
  {
    path: '/phone',
    name: 'Phone',
    component: () => import("../views/Phone.vue")
  }
  ,
  {
    path: '/ruzhu',
    name: 'Ruzhu',
    component: () => import("../views/Ruzhu.vue")
  }
  ,
  {
    path: '/atonce',
    name: 'Atonce',
    component: () => import("../views/Atonce.vue")
  }
  ,
  {
    path: '/detail',
    name: 'Detail',
    component: () => import("../views/detail.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
