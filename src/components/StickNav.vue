<template>
  <div id="Nav">
    <div class="navent s">
      <router-link to="#"
                   style="color:red;">今日上新</router-link>
      <span>|</span>
      <router-link to="#">女装</router-link>
      <router-link to="#">男装</router-link>
      <router-link to="#">鞋子</router-link>
      <router-link to="#">箱包</router-link>
      <router-link to="#">母婴</router-link>
      <router-link to="#">美妆</router-link>
      <router-link to="#">居家</router-link>
      <router-link to="#">家纺</router-link>
      <router-link to="#">文体</router-link>
      <router-link to="#">美食</router-link>
      <router-link to="#">数码</router-link>
      <router-link to="#">电器</router-link>
      <router-link to="#">内衣</router-link>
      <router-link to="#">配饰</router-link>
      <router-link to="#"
                   style="color:green;">[即将上线]</router-link>
    </div>
  </div>

</template>

<script>

export default {

  data () {
    return {

    }
  },

  components: {

  }

}
</script>

<style scoped>
.s {
  height: 40px;
  line-height: 40px;

  display: flex;
  justify-content: space-around;
}
a {
  color: black;
}
a:hover {
  color: red;
}
#Nav {
  height: 40px;
  box-shadow: 3px 3px 3px gray;
  width: 100%;
}
</style>