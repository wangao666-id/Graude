<template>
  <div>
    <div id="shopBox">
      <div class="top">
        今日新品
        <span style="color:gray; font-size: 16px;font-weight: normal;">TODAY’NEWS</span>
      </div>
      <div class="r">
        每天10点更新
      </div>
      <div v-for="(n,i) in list"
           :key="i"
           class="item"
           @click="Part(n.picUrl,n.price,n.title,n.time)">
        <img :src="n.picUrl"
             alt=""
             v-lazy="n.picUrl">
        <p style="color:red;"
           class="pic">￥{{n.price}}</p>
        <span class="title">{{n.title}}</span>
        <span class="time">{{n.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["list"],

  data () {
    return {

    }
  },
  methods: {
    Part (url, price, title, time) {
      this.$router.push({
        path: "/detail",
        query: {
          url: url,
          price: price,
          title: title,
          time: time
        }
      })

    }

  },

}
</script>

<style scoped>
.top {
  height: 50px;
  width: 210px;
  /* position: absolute; */
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
}
.r {
  font-size: 14px;
  color: gray;
  height: 20px;
  width: 90px;
  float: right;
  position: absolute;
  right: 5px;
  top: 20px;
}
#shopBox {
  width: 1200px;
  margin: 10px auto;
  margin-top: 30px;
  background-color: white;
  position: relative;
  padding: 5px;
}
.title {
  display: inline-block;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  position: absolute;
  left: 0;

  bottom: 10px;
  color: rgb(73, 73, 73);
  padding-left: 4px;
}
.time {
  font-size: 12px;
  position: absolute;
  right: 5px;
  bottom: 10px;
  color: gray;
}
.item {
  width: 230px;
  height: 290px;
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid rgb(255, 255, 255);
  text-align: center;
  position: relative;
}
.pic {
  left: 5px;
  position: absolute;
  font-weight: bold;
}
.item:hover {
  border: 1px solid rgb(175, 175, 175);
}
.item img {
  width: 220px;
  height: 220px;
}
</style>