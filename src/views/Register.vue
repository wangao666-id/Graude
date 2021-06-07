<template>
  <div>
    <Nav></Nav>
    <!-- 用户注册 -->
    <div class="from">
      <div class="top">
        <p> <span style="color:red;   font-size: 17px;">用户注册</span> <span style="  font-size: 12px;color:gray;">注册卷皮网，赢积分换好礼！</span></p>
        <router-link to="/login"
                     style="color: rgb(24, 128, 224);">
          已有账号?去登录>
        </router-link>
      </div>
      <div class="fr-left">
        用户名：<el-input v-model="user"
                  placeholder="请输入用户名"></el-input>
        密码：<el-input placeholder="请输入密码"
                  v-model="pas"
                  show-password></el-input>
        确认密码：<el-input placeholder="请再次输入密码"
                  v-model="pasAg"
                  show-password></el-input>

        验证码： <el-input v-model="yanz"
                  placeholder="请输入验证码"></el-input>
        <div class="mu"
             @click="random">
          {{num}}

        </div>

        <el-button type="danger"
                   @click="Reg">注册</el-button>

      </div>
      <!-- 右边 -->
      <div class="fr-right">
        <img src="https://jp.juancdn.com/user/images/login/login-bj-ad01.png?ts=20201022174388-1&sv=1d2c4e4e"
             alt="">
      </div>
    </div>
    <!-- 底部 -->
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
      // 用户名
      user: "",
      // 密码
      pas: "",
      // 确认密码
      pasAg: "",
      // 验证码
      yanz: '',
      // 显示验证码
      num: "",
      key: false

    }
  },
  created () {

  },
  methods: {
    // 注册
    Reg () {
      var k = this.username.indexOf(this.user)
      if (this.user == "" || this.pas == "") {
        this.$alert('用户名或密码不能为空', {
          confirmButtonText: '确定',
        });
      } else {
        // 获取用户名
        if (k == -1) {
          if (this.pas == this.pasAg) {
            if (this.yanz == this.num) {

              this.username.push(this.user)
              this.password.push(this.pas)
              console.log(this.username);
              this.key = true
              this.$alert('注册成功！', {
                confirmButtonText: '确定',
              });
              setTimeout(() => {
                this.$router.push("/login")
              }, 3000);

            } else {
              this.$alert('验证码不正确', {
                confirmButtonText: '确定',
              });
            }

          } else {
            this.$alert('两次密码不一致', {
              confirmButtonText: '确定',
            });

          }
        } else {
          this.$alert('该用户名已被注册！', {
            confirmButtonText: '确定',
          });

        }
      }

    },
    // 获取验证码
    random () {
      var str = "ikjnmbvetrfcs123wd"
      var s = ""
      for (let i = 0; i < str.length; i++) {
        s += str[Math.floor(Math.random() * str.length)]
      }
      // 截取前四个
      this.num = s.substring(0, 4)
    }

  },
  computed: {
    ...mapState(["username", "password"])

  },
  components: {
    Nav
  }


}
</script>

<style scoped>
.goL {
  position: absolute;
  right: 6px;
  color: gray;
  bottom: 5px;
}
.mu {
  width: 100px;
  height: 40px;
  border: 1px solid rgb(185, 185, 185);
  position: relative;
  border-radius: 5px;
  font-size: 16px;
  line-height: 40px;
  top: 5px;
  text-align: center;
  background-image: url("../assets/yanz.jpg");
}

.sp {
  position: relative;
  top: 14px;
}

.from >>> button {
  position: relative;
  bottom: -17px;
  width: 300px;
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
.bot {
  width: 980px;
  margin: 10px auto;
}
.bot .p1 {
  text-align: center;
}
.bot p {
  color: gray;
  font-size: 12px;
  margin-bottom: 40px;
}
.top {
  width: 100%;
  border-bottom: 1px solid rgb(194, 194, 194);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>