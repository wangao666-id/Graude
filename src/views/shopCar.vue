<template>
  <div id="Car">
    <Nav></Nav>
    <!-- 购物车 -->
    <div class="navent"
         v-show="shopCarList.length<=0">
      <div class="top">
        <div class="item">商品信息</div>
        <div class="item">单价/原价</div>
        <div class="item">数量</div>
        <div class="item">小计</div>
        <div class="item">操作</div>
      </div>
      <div class="content">
        <nav class="nav">
          <div class="xh">看到喜欢的带回家吧</div>
          <div class="to"
               @click="goHome">今日推荐</div>
        </nav>

      </div>

    </div>

    <div class="car"
         v-show="shopCarList">
      <span v-show="shopCarList.length>0">全选</span>
      <span class="gl"
            @click="glChange"
            style=" cursor: pointer;"
            v-show="shopCarList.length>0">管理</span>
      <input type="checkBox"
             ref="all"
             @click="Choose"
             v-show="shopCarList.length>0">
      <div class="car-box"
           v-for="(n,i) in shopCarList"
           :key="i">
        <input type="checkBox"
               name=""
               id=""
               ref="in"
               :checked="s==true">

        <span style="color:black;  font-size: 18px;"
              class="title">{{n.title}}</span>
        <img :src="n.picUrl"
             alt="">
        <span>尺码：{{n.size}}</span>
        数量:
        <div class="count"
             ref="pres">
          <div class="d1"
               @click="n.count++">+</div>
          <div class="d2">{{n.count}}</div>
          <div class="d1"
               @click="n.count >0?n.count--:1">-</div>
        </div>
        <!-- Math.round( n.price*n.count *10)/10： 四舍五入保留一位小数 -->
        <span class="pre">价格: <span style="color:red;">￥{{Math.round( n.price*n.count *10)/10}}</span></span>
        <span v-show="gl"
              style=" cursor: pointer;"
              @click="Remove(i)">移除该商品</span>
      </div>
      <!-- <span>总价格：￥{{allPirce}}</span> -->
    </div>
    <Bottom></Bottom>

  </div>

</template>

<script>
import Nav from "../components/Home"
import Bottom from "../components/Bottom"
import { mapState } from "vuex"
export default {
  data () {
    return {
      num: '',
      c: '',
      s: false,
      gl: false
    }
  },
  created () {

  },
  components: {
    Nav, Bottom
  },
  computed: {
    ...mapState(["token", "shopCarList"]),
    // 总价格


  },
  methods: {


    // 全选
    Choose () {
      if (this.$refs.all.checked == true) {
        this.s = true
      } else {
        this.$refs.all.checked = false
        this.s = false
      }


    },
    // 移除商品
    Remove (index) {
      if (this.token == "") {
        this.$alert('登录后执行该操作!', {
          confirmButtonText: '确定',
        });

      } else {
        setTimeout(() => {
          this.shopCarList.splice(index, 1)
        }, 1000);

      }
    },

    // 返回主页面
    goHome () {
      this.$router.push("/")
    },
    glChange () {
      this.gl = !this.gl
    },

    // 获取计算器的值
    handleChange (value) {
      console.log(value);
    },
  }
}
</script>

<style scoped>
.gl {
  float: right;
}
.pre {
  width: 100px;
  display: inline-block;
}
.count {
  width: 150px;
  height: 40px;
  border: 1px solid rgb(204, 204, 204);
  display: flex;
}
.count .d2 {
  color: black;
  width: 80px;
  border-left: 1px solid rgb(204, 204, 204);
  border-right: 1px solid rgb(204, 204, 204);
  font-size: 18px;
  text-align: center;
  line-height: 40px;
}
.count .d1 {
  width: 35px;
  height: 40px;
  font-size: 30px;
  text-align: center;
  line-height: 40px;
}
.count div {
  display: inline-block;
}
.title {
  width: 300px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.car-box {
  width: 1000px;
  margin: 0 auto;
  height: 100px;
  color: gray;
  border: 1px solid rgb(179, 179, 179);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;
  border-radius: 5px;
}
.car-box img {
  width: 90px;
  height: 90px;
}
.car {
  width: 1200px;
  margin: 0 auto;
}
.nav {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  height: 90px;
  position: absolute;
  bottom: 100px;
}
.to {
  width: 100px;
  height: 30px;
  border: 1px solid red;
  text-align: center;
  line-height: 30px;
  color: red;
  border-radius: 4px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
}
.top {
  height: 45px;
  width: 1200px;
  display: flex;
  justify-content: space-around;
}
.content {
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 200px;
  background-position: 490px 100px;
  background-color: white;
  position: relative;
  background-image: url("https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png");
}
.item {
  width: 200px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: gray;
}
</style>