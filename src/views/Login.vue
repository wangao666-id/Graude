<template>
  <div>
    <!-- 头组件 -->
    <Nav :user="user"></Nav>
    <!-- from表单 -->
    <div class="from">
      <div class="top">
        <p> <span style="color:red;   font-size: 17px;">用户登录</span> <span style="  font-size: 12px;color:gray;">/尊敬的老用户欢迎回来！</span></p>
        <router-link to="/register"
                     style="color: rgb(24, 128, 224);">
          还没有用户?名去注册>
        </router-link>
      </div>
      <div class="fr-left">
        用户名：<el-input v-model="user"
                  placeholder="请输入用户名"></el-input>
        密码：<el-input placeholder="请输入密码"
                  v-model="pas"
                  show-password></el-input>

        <el-button type="danger"
                   @click="login">登录</el-button>
        <div class="dl"></div>
      </div>
      <div class="fr-right">
        <img src="https://jp.juancdn.com/user/images/login/login-bj-ad.png?ts=20201022174388-1&sv=1d2c4e4e"
             alt="">
      </div>

    </div>
    <div class="bot">
      <p class="p1">武汉奇米网络科技有限公司 鄂ICP备10209250号 | ICP许可证号：鄂B2-20150109 | 鄂公网安备42018502000390号 | 食品流通许可证 SP4201991510041888</p>

      <p class="p2">Copyright © 2010 - 2021 JuanPi.com All Rights Reserved</p>
    </div>

  </div>
</template>

<script>
import Nav from "../components/Home.vue"
import { mapState } from "vuex"
export default {
  data () {
    return {
      user: "",
      pas: ""
    }
  },
  created () {

  },
  computed: {
    ...mapState(["username", "password"]),
    // 直接this

  },
  methods: {
    // 登陆
    login () {

      var key = false
      if (this.user == "" || this.pas == "") {
        this.$alert('用户名或密码不能为空', {
          confirmButtonText: '确定',
        });

      } else {

        for (let i = 0; i < this.username.length; i++) {
          if (this.user == this.username[i] && this.pas == this.password[i]) {
            //  自定义登陆时要在循环中返回一个key根据key进行判断用户名和密码是否正确
            key = true
          }

        }
        if (key) {
          this.$message({
            type: "success",
            message: "登陆成功,欢迎" + this.user,
            duration: 2000
          })
          this.$store.commit("setToken", "success")
          this.$store.commit("setUser", this.user)
          setTimeout(() => {
            this.$router.push("/")

          }, 3000);

        } else {
          this.$message({
            type: "error",
            message: "账号或密码错误",
            duration: 2000
          })
        }
      }


    }
  },
  components: {
    Nav
  }

}

</script>

<style scoped>
.bot {
  width: 980px;
  margin: 10px auto;
}
.bot .p1 {
  text-align: center;
}
.dl {
  background-image: url("../assets/dl.png");
  height: 80px;
  width: 300px;
  background-size: contain;
  margin-top: 20px;
  background-repeat: no-repeat;
}
.bot p {
  color: gray;
  font-size: 12px;
  margin-bottom: 40px;
}
.fr-left {
  width: 450px;
  margin-top: 20px;
  height: 400px;
  float: left;
  padding: 20px 90px;
  box-sizing: border-box;
}
.fr-right {
  float: right;
  width: 450px;
  height: 400px;
  margin-top: 20px;
  text-align: center;
}
.from >>> .el-input__inner {
  width: 300px;
}
.from {
  border: 1px solid rgb(194, 194, 194);
  margin: 20px auto;
  position: relative;
  width: 980px;
  height: 525px;
  background-color: #fff;
}
.top {
  width: 100%;
  border-bottom: 1px solid rgb(194, 194, 194);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.from >>> button {
  position: relative;
  bottom: -17px;
  width: 300px;
}
</style>