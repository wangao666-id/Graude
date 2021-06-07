<template>
  <div class="nav-box">
    <!-- 头部导航 -->
    <div class="header">
      <div class="header-nav">
        <div class="header-img">
          <a href="#"
             class="a1"></a>
          <a href="#"
             class="a2"></a>
        </div>
        <div class="header-content">
          <a href="#"
             style="color:red;">招商首页</a>
          <a href="https://rule.juanpi.com/cooperation/index">招商广告</a>
          <a href="https://seller.juanpi.com/choice/brand#1190404:1241481">热招品牌</a>
          <a href="https://seller.juanpi.com/choice/help">入驻指南</a>
        </div>
        <div class="header-right">
          <a class="a3"
             href="/login">卖家登陆</a>
          <a class="a4"
             href="/register">免费注册</a>
        </div>

      </div>

    </div>
    <!-- 轮播图 -->
    <div class="lunbo-box">
      <div class="lunbo">
        <el-carousel :interval="5000"
                     arrow="always">
          <el-carousel-item v-for="item in list"
                            :key="item">
            <img :src="item"
                 alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 轮播图覆盖 -->
    <div class="tips navent ">
      <div class="tips-left"></div>
      <div class="tips-right">
        <h2>热门公告</h2>
        <span style="color:blue;"
              class="sp1">更多公告></span>
        <div class="clear">
          <span class="text">卷皮跨境平台-Juanpi商家行为规范</span>
          <span class="time">09-01</span>
        </div>
        <div class="clear">
          <span class="text">《卷皮平台招商标准》</span>
          <span class="time">09-01</span>
        </div>
        <div class="clear">
          <span class="text">全球购业务商家商品招商范围</span>
          <span class="time">09-01</span>
        </div>
      </div>

    </div>
    <!-- 底部图片 -->
    <div class="navent bot"></div>
    <Bottom></Bottom>
  </div>

</template>

<script>
import Bottom from "../components/Bottom.vue"
export default {
  data () {
    return {
      list: ["https://sh.juancdn.com/juanpi-seller/images/introduce/example-business01.png", "https://sh.juancdn.com/juanpi-seller/images/introduce/example-business03.png", "https://sh.juancdn.com/juanpi-seller/images/introduce/example-business02.png"]

    }
  },
  components: {
    Bottom

  }

}
</script>

<style scoped>
.bot {
  position: relative;
  width: 1240px;
  top: -100px;
  background-color: white;
  height: 390px;
  background-image: url("https://sh.juancdn.com/juanpi-seller/images/total/icons-business-enter02.png?c=8b5d19483a");
}
.sp1 {
  position: absolute;
  right: 0;
  top: 30px;
}
.text {
  color: gray;
  font-size: 15px;
}
.clear {
  width: 438px;
  height: 21px;
  margin-top: 10px;
  position: relative;
}
.time {
  position: absolute;
  right: 5px;
}
.tips-left {
  width: 731px;
  height: 262px;
  border-right: 1px solid rgb(197, 197, 197);
  display: inline-block;
  background-image: url("https://sh.juancdn.com/juanpi-seller/images/introduce/example-business05.png?c=67c4dc5d1b");
}
.tips-right {
  padding: 10px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  top: -100px;
  width: 468px;
}
.lunbo-box {
  background-color: rgb(20, 26, 46);
}
.tips {
  background-color: white;
  padding: 20px;
  position: relative;
  top: -70px;
  z-index: 15;
}
.lunbo {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
}
.lunbo >>> .el-carousel__container {
  height: 600px;
}
.lunbo >>> .el-carousel__arrow {
  border-radius: 0;
  background-color: black;
  opacity: 0.7;
  height: 60px;
}
.el-carousel__arrow--left {
  left: 16px;
}
.header-right a {
  display: inline-block;
  width: 102px;
  height: 32px;
  border-radius: 3px;
  line-height: 32px;
  text-align: center;
  font-weight: bold;
  margin-left: 5px;
}
.a3 {
  background-color: red;
  color: white;
}
.a4 {
  background-color: rgb(196, 199, 199);
  color: gray;
}
.header {
  height: 82px;
  width: 100%;
  border-bottom: 3px solid rgb(219, 9, 9);
}
.header-nav {
  width: 1200px;
  height: 62px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-img a {
  display: inline-block;
}
.a1 {
  width: 71px;
  height: 35px;
  background-image: url("https://sh.juancdn.com/juanpi-seller/images/total/jp_logo01.png?c=f0be8a4c8b");
}
.a2 {
  width: 127px;
  height: 35px;
  background-image: url("https://sh.juancdn.com/juanpi-seller/images/total/jp_logo02.png?c=87ad3a6cbe");
}
.header-content {
  width: 440px;
  height: 68px;
  color: gray;
  line-height: 70px;
}
.header-content a {
  font-size: 17px;
  text-align: center;
  margin-left: 20px;
}
</style>