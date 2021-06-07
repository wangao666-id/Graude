<template>
  <div>
    <!-- 头组件 -->
    <Nav></Nav>
    <stick-nav v-show="pos === 'fixed'" class="stick"></stick-nav>
    <div id="canver">
      <div class="navent can-box">
        <!-- 左边 -->
        <div class="can-left">
          <div class="item">
            <a class="a">女装</a>
            <span>|</span>
            <a class="a">男装</a>
          </div>
          <div class="item">
            <a class="a">鞋子</a>
            <span>|</span>
            <a class="a">包包</a>
          </div>
          <div class="item">
            <a class="a">母婴</a>
           <span>|</span>
            <a class="a">美妆</a>
          </div>
          <div class="item">
            <a class="a">居家</a>
            <span>|</span>
            <a class="a">家纺</a>
          </div>
          <div class="item">
            <a class="a">文体</a>
            <span>|</span>
            <a class="a">美食</a>
          </div>
          <div class="item">
            <a class="a">数码</a>
            <span>|</span>
            <a class="a">电器</a>
          </div>
          <div class="item">
            <a class="a">内衣</a>
            <span>|</span>
            <a class="a">配饰</a>
          </div>
        </div>
        <!-- 中间 -->
        <div class="can-cen">
          <div class="block">
            <el-carousel height="360px">
              <el-carousel-item v-for="item in imgList" :key="item">
                <img :src="item" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 右边 -->
        <div class="can-right">
          <div class="imgbox">
            <img
              src="https://s.juancdn.com/juanpi/images/banners/r-1.jpg"
              alt=""
            />
          </div>
          <div class="imgbox">
            <img
              src="https://s.juancdn.com/juanpi/images/banners/r-2.jpg"
              alt=""
            />
          </div>
          <div class="imgbox">
            <img
              src="https://s.juancdn.com/juanpi/images/banners/r-3.jpg"
              alt=""
            />
          </div>
          <div class="imgbox">
            <img
              src="https://s.juancdn.com/juanpi/images/banners/r-4.jpg"
              alt=""
            />
          </div>
          <div class="imgboxs">
            <img
              src="https://s.juancdn.com/juanpi/images/banners/r-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <img
      class="im"
      src="https://jp.juancdn.com/juanpi/images/global/jp-app-index.png"
      alt=""
    />
    <shop-list :list="list"></shop-list>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Nav from "../components/Home.vue";
import stickNav from "../components/StickNav.vue";
import Bottom from "../components/Bottom";
import shopList from "../components/shopList.vue";
import { getHome } from "../tools/Ajax";
export default {
  data() {
    return {
      list: [],
      pos: "static",
      imgList: [
        "https://goods1.juancdn.com/bao/210114/1/e/60001341e5af3e67a876efc8_700x360.jpg?iopcmd=convert&Q=88&dst=jpg",
        "https://goods7.juancdn.com/bao/201228/c/5/5fe996c723ce3b59b14ed74f_700x360.png?iopcmd=convert&Q=88&dst=png",
        "https://goods5.juancdn.com/bao/210119/9/f/6006752fd36eae41764ff6b6_700x360.jpg?iopcmd=convert&Q=88&dst=jpg",
      ],
    };
  },
  created() {
    // 调用接口
    this.getHomeList();
  },
  methods: {
    getHomeList() {
      getHome({}).then((res) => {
        this.list = res.data.result;
      });
    },
  },
  mounted() {
    window.onscroll = () => {
      var scorllTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scorllTop > 450) {
        this.pos = "fixed";
      } else {
        this.pos = "static";
      }
    };
  },
  components: {
    Nav,
    shopList,
    Bottom,
    stickNav,
  },
};
</script>

<style scoped>
.stick {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 8;
}
.im {
  position: absolute;
  top: 157px;
  right: 210px;
}
.imgbox {
  width: 124px;
  height: 119px;
  display: inline-block;
  margin-left: 1px;
  margin-top: -2px;
  box-sizing: border-box;
}
.imgbox:hover {
  opacity: 0.8;
}
.imgboxs:hover {
  opacity: 0.8;
}
.imgboxs {
  width: 250px;
  height: 120px;
  display: inline-block;
  margin-top: -2px;
}
.can-box {
  /* border: 1px solid black; */
  height: 380px;
  display: flex;
  justify-content: space-between;
}
.item {
  border-bottom: 1px dashed rgb(180, 180, 180);
  display: flex;
  justify-content: space-around;
  padding: 2px 0 2px 0;
  align-items: center;
}
.item span {
  color: rgb(202, 202, 202);
}
.a {
  height: 50px;
  display: inline-block;
  line-height: 50px;
}
.a:hover {
  color: red;
}
.block {
  height: 360px;
}
.can-left {
  height: 380px;
  width: 210px;
  box-sizing: border-box;
  padding: 0 15px 0 15px;
  background-color: white;
}
.item:last-child {
  border: none;
}
.can-cen {
  width: 700px;
  height: 360px;
  position: relative;
  top: 20px;
}
.can-right {
  width: 251px;
  height: 360px;
  position: relative;
  top: 20px;
}
.b {
  border: 1px solid black;
}
.t {
  position: fixed;
  z-index: 4;
  background-color: white;
}
</style>