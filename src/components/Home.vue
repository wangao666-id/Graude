<template>
  <div class="home">
    <div id="navs">
      <div class="nav-box">
        <nav v-show="!token">
          <span @click="goLogin">登录</span>
          <span style="color:red;"
                @click="goRegister">免费注册</span>
        </nav>
        <nav v-show="token">
          <span style="color:red;">欢迎[{{user}}]</span>
          <span @click="clearSession">退出登录</span>
        </nav>
        <span>我的订单</span>
        <span @click="Ruzhu">商家入驻</span>
        <span style="color:red; font-size: 19px;"
              class="el-icon-goods"></span>
        <span @click="goCar">购物袋</span>
        <span>商家中心</span>
        <span>客服服务</span>
      </div>
    </div>
    <div id="can">
      <div class="navent">
        <a href="#">
          <div class="img"></div>
        </a>
        <div class="img-box">
          <a href="#"
             title="1"></a>
          <a href="#"
             title="2"></a>
          <a href="#"
             title="3"></a>
        </div>
        <div class="search">
          <input type="text"
                 class="input"
                 placeholder="搜索想要的宝贝"
                 @focus="showDiv"
                 @blur="notShow">
          <div class="history"
               v-show="show"
               v-for="(n,i) in historyList"
               :key="i">
            <span>{{}}</span>
          </div>
          <div style="display: inline-block;  
          background-color: rgb(212, 56, 56);"
               class="sea">
            <span style="display: inline-block; color:white"
                  class="el-icon-search seas"></span>
          </div>
        </div>
        <!-- 路由 -->
        <div class="route">
          <router-link to="/">首页</router-link>
          <router-link to="/">品牌折扣</router-link>
          <router-link to="/">9.9包邮</router-link>
          <router-link to="/atonce">即将上线</router-link>
          <router-link to="/phone"><span class="el-icon-mobile-phone"
                  style="color:red;"></span> 手机版</router-link>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

import { mapState } from "vuex"
export default {

  data () {
    return {
      list: [],
      show: false
    }
  },
  created () {

  },
  components: {

  },
  computed: {
    ...mapState(["token", "user"])
  },
  methods: {
    goLogin () {
      this.$router.push({
        name: "Login"
      })

    },
    showDiv () {
      this.show = !this.show
    },
    notShow () {
      this.show = !this.show
    },
    // 购物车
    goCar () {
      if (this.token == "") {
        this.$message({
          type: "error",
          message: "您还没有登录，登录后查看购物袋！"
        })
        setTimeout(() => {
          this.$router.push("/login")
        }, 2000)

      } else {
        this.$router.push("/shopcar")
      }

    },
    // 去注册
    goRegister () {
      this.$router.push("/register")
    },
    // 清除缓存
    clearSession () {
      // 退出登录传参登录凭证为空即可
      this.$store.commit("setToken", ""),
        this.$message({
          type: "success",
          message: "退出成功"
        })
      this.$router.replace("/")

    },
    // 去入驻
    Ruzhu () {
      this.$router.push("/ruzhu")
    },


  },
}
</script>
<style  scoped>
#can {
  border-bottom: 2px solid rgb(223, 7, 7);
  background-color: white;
}
.route {
  position: absolute;
  bottom: 10px;
  height: 40px;
  line-height: 40px;
  padding: 0 0 0 20px;
}
.route a {
  color: black;
  text-decoration: none;
  font-size: 14px;
  margin-right: 55px;
}
.route a:hover {
  color: red;
}

#navs {
  width: 100%;
  background-color: rgb(246, 246, 246);
}
.nav-box {
  width: 1200px;
  margin: 0 auto;
  height: 30px;
  /* border: 1px solid black; */
  justify-content: flex-end;
  display: flex;
  align-items: center;
}
.nav-box span {
  display: inline-block;
  margin-right: 20px;
  color: rgb(17, 17, 17);
  font-size: 13px;
}
.nav-box span:hover {
  color: red;
}
.navent {
  height: 125px;
  padding: 10px 0 0 0;
  box-sizing: border-box;
  position: relative;
}
.img {
  background-image: url("../assets/header-total.png");
  background-size: 500px;
  background-position: -70px 450px;
  height: 52px;
  width: 210px;
  display: inline-block;
}
.img-box {
  background-image: url("../assets/header-total.png");
  background-size: 500px;
  background-position: -0px 0px;
  height: 52px;
  width: 450px;
  display: inline-block;

  position: absolute;
  left: 450px;
  top: 20px;
}
.img-box a {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin-left: 50px;
}
.input {
  border: none;
  background-color: rgb(216, 216, 216);
  padding: 0 0 0 10px;
}
.search {
  background-color: rgb(216, 216, 216);
  width: 200px;
  position: absolute;
  right: 50px;
  height: 35px;
  top: 20px;
  right: 36px;
}
.history {
  position: absolute;
  height: 300px;
  width: 200px;
  border: 1px solid rgb(223, 223, 223);
  background-color: white;
  z-index: 10;
}
.sea {
  height: 35px;
  width: 35px;
  text-align: center;
  line-height: 40px;
  position: relative;
  left: 49px;
}
.search >>> .seas {
  font-size: 26px;
}
</style>
