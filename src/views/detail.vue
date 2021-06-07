<template>
  <div>
    <Nav></Nav>
    <div class="img-box"
         ref="divx">
      <!--左边 -->
      <div class="img-left">
        <!-- <pic-zoom :url="$route.query.url"></pic-zoom> -->

        <div class="imgs-b"
             @mousemove="move"
             @mouseout="flag=false"
             @mouseover="flag=true">
          <img :src="$route.query.url"
               alt=""
               class="img">
          <!-- 大图的div -->
          <div class="big_img"
               v-show="flag">
            <img :src="$route.query.url"
                 alt=""
                 :style="{left:left+'px',top:top+'px'}"
                 v-show="flag">

          </div>
          <!-- 遮罩层 -->
          <div class="mask"
               :style="{left:l+'px',top:t+'px'}"></div>
        </div>

        <br>
        <span>100%人工质检</span>&emsp;
        <span>全国包邮低价保障</span>&emsp;
        <span>7天无理由退货</span>&emsp;<br><br>
        <span>收藏</span>&emsp;
        <span>分享障</span>&emsp;
        <span>举报</span>&emsp;
      </div>
      <!-- 之间 -->
      <div class="img-right">
        <h2>{{$route.query.title}}</h2>
        <div style="color:red"
             class="pic">
          <p class="p">￥{{$route.query.price}}</p>
          <p style="color:gray;">参考价：1099</p>
          <p>{{$route.query.time}}</p>
        </div>
        <div class="ps">
          配送：
          <select name=""
                  id="">
            <option value="">河南</option>
            <option value="">河北</option>
            <option value="">江苏</option>
            <option value="">南阳</option>

          </select>
          <span>全国包邮，看心情发货</span>
        </div>
        <div class="size">
          尺码：
          <div class="size-box"
               v-for="(n,i) in sizeList"
               :key="i"
               data-size="n"
               @click="sizeChoose(n)">{{n}}
          </div>
        </div>
        <div>
          <div>
            计数： <el-input-number v-model="num"
                             @change="handleChange"
                             :min="1"
                             :max="10"
                             label="描述文字"></el-input-number>
            已选择:<span style="color:red;">{{size}}</span>
          </div>
        </div>
        <div class="car">
          <span class="sp1"
                @click="Buy">立即购买</span>
          <span class="sp2"
                @click="JoinCar">加入购物车</span>
        </div>
      </div>
      <!-- 右边 -->
      <div class="con"></div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Nav from "../components/Home.vue"
import Bottom from "../components/Bottom"
import { mapState } from "vuex"
export default {
  data () {
    return {
      num: '',
      size: "",
      sizeList: ["XL", "L", "S", "M", "XXL", "3XL"],
      flag: false,
      // 大图片的位置
      left: 0,
      top: 0,
      // 遮罩层的位置
      l: 0,
      t: 0

    }
  },
  computed: {
    ...mapState(["token"])
  },
  components: {
    Nav, Bottom
  },
  activated () {
    // 组件激活的时候调用，组件添加keepalive的作用
    document.scrollingElement.scrollTop = 0
  },
  methods: {
    handleChange () { },
    // 放大镜
    move (e) {
      // 获取鼠标的坐标
      var x = e.pageX
      var y = e.pageY

      // 获取父元素相当于浏览器左上角的位置
      var divX = this.$refs.divx.offsetLeft
      var divY = this.$refs.divx.offsetTop


      // 获取鼠标相当于父元素的距离
      x = x - divX
      y = y - divY


      x = x < 130 ? 130 : x
      x = x > 270 ? 270 : x
      y = y < 130 ? 130 : y
      y = y > 270 ? 270 : y


      // 不能超出范围
      this.l = x - 130
      this.t = y - 130

      // 放大镜的位置
      this.left = -x * 2 + 240
      this.top = -y * 2 + 240

    },
    JoinCar () {
      if (this.size == "") {
        this.$alert('请选择尺码！', {
          confirmButtonText: '确定',
        });

      } else {
        if (!this.token) {
          this.$alert('登陆后，执行该操作！', {
            confirmButtonText: '确定',
          });
        } else {
          var params = {
            "title": this.$route.query.title,
            "price": this.$route.query.price,
            "size": this.size,
            "picUrl": this.$route.query.url,
            "count": this.num

          }

          this.$store.commit("setShopCarList", params)
          setTimeout(() => {
            this.$router.push("/shopcar")
          }, 1000);

        }
      }
    },
    Buy () {
      this.$alert('还买？，花呗还了吗', {
        confirmButtonText: '确定',
      });
    },
    sizeChoose (s) {
      this.size = s

    }
  },
  beforeRouteUpdate (to, from, next) {
    // 进入页面的时候从上面开始展示
    document.scrollingElement.scrollTop = 0
  },

}
</script>

<style scoped>
.big_img {
  width: 480px;
  height: 480px;
  position: absolute;
  top: 0;
  right: -505px;
  background-color: white;
  z-index: 4;
  overflow: hidden;
}
.big_img img {
  position: absolute;
  width: 750px;
  left: 0;
  top: 0;
}

.mask {
  height: 260px;
  width: 260px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
}
.imgs-b {
  border: 1px solid black;
  width: 400px;
  position: relative;
}
.sp1 {
  background-color: rgb(200, 164, 164);
  color: red;
}
.sp2 {
  background-color: red;
  color: white;
}
.car span {
  display: inline-block;
  height: 45px;
  width: 160px;
  border: 1px solid red;
  text-align: center;
  line-height: 45px;
  margin-left: 20px;
}
.size-box {
  height: 30px;
  width: 70px;
  text-align: center;
  line-height: 30px;
  display: inline-block;
  margin-left: 3px;
}
.con {
  background-image: url("../assets/s.png");
  height: 500px;
  width: 240px;
  background-repeat: no-repeat;
}
.img-box {
  width: 1200px;
  height: 600px;
  position: relative;
  margin: 0 auto;
  display: flex;
  border: 1px solid black;
}
.img-left {
  height: 500px;
  width: 600px;
}
.p {
  font-size: 24px;
}
.img-right {
  height: 500px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pic {
  width: 600px;
  height: 60px;
  background-color: rgb(231, 174, 174);
  justify-content: space-around;
  display: flex;
  align-items: center;
}
.img-box .img {
  height: 400px;
}
</style>