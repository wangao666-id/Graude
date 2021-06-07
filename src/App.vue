<template>
  <div id="app">

    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- 回调顶部 -->
    <el-backtop><span class="el-icon-caret-top"></span></el-backtop>
  </div>
</template>

<style>
body {
  font-family: "微软雅黑", Tahoma, Helvetica, Arial, "宋体", sans-serif, 宋体;
  padding: 0;
  margin: 0;
  background-color: rgb(246, 246, 246);
}
.navent {
  width: 1200px;
  margin: 0 auto;
}
a {
  color: gray;
  text-decoration: none;
  font-size: 15px;
}
</style>
