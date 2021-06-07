<template>
  <div class="main">
    <div class="bg">
      <div class="bg-box">
        <div class="bg-left">
          <div class="h1"></div>
          <div class="day"></div>
          <div class="wx"></div>
          <div class="app"></div>
        </div>
        <div class="bg-right">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in list"
                              :key="item">
              <img :src="item"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ["https://jp.juancdn.com/juanpi/images/app/index_3.jpg", "https://jp.juancdn.com/juanpi/images/app/index_2.jpg", "https://jp.juancdn.com/juanpi/images/app/index_1.jpg"]
    }
  },

}
</script>

<style scoped>
.bg-right img {
  position: relative;
  top: 100px;
  left: 50px;
  border-radius: 10px;
  height: 500px;
}
.bg-left {
  display: inline-block;
  margin-right: 40px;
}
.bg-right.el-carousel__arrow--left {
  left: 100px;
}
.bg-right {
  display: inline-block;
  width: 381px;
  height: 708px;
  background-size: contain;
  background-image: url("https://jp.juancdn.com/juanpi/images/app/phone_bg.png");
}
.bg-right >>> .el-carousel__container {
  height: 600px;
  position: relative;
  width: 370px;
}
.app {
  width: 202px;
  height: 60px;
  background-image: url("../assets/app.png");
  margin-top: 20px;
}
.wx {
  width: 202px;
  height: 222px;
  margin-top: 20px;
  background-image: url("https://jp.juancdn.com/juanpi/images/app/weChat.png");
}
.day {
  width: 540px;
  height: 194px;
  margin-top: 20px;
  background-image: url("https://jp.juancdn.com/juanpi/images/app/jp_des.png");
}
.h1 {
  width: 130px;
  height: 65px;
  margin-top: 20px;
  background-image: url("https://jp.juancdn.com/juanpi/images/app/jp.png");
}
.main {
  height: 100vh;
  width: 100vw;
  background-repeat: repeat;
  animation: move 170s infinite linear;

  background-image: url("https://jp.juancdn.com/juanpi/images/app/body_bg.jpg");
}
.bg {
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 119, 87, 0.7);
}
.bg-box {
  width: 1000px;
  height: 800px;
  margin: 0 auto;
  position: relative;
  top: 100px;
}
@keyframes move {
  0% {
    background-position: 0 1000%;
  }
  100% {
    background-position: 0 0;
  }
}
</style>