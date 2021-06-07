<template>
  <div class="ance">
    <Nav></Nav>
    <shop-List :list="list"></shop-List>

    <Bottom></Bottom>
  </div>
</template>

<script>
import Nav from "../components/Home.vue"
import Bottom from "../components/Bottom.vue"
import shopList from "../components/shopList.vue"
import { getHome } from "../tools/Ajax"
export default {
  data () {
    return {
      list: []

    }
  },
  created () {
    this.getHomeList()

  },
  components: {
    Nav, Bottom, shopList
  },
  methods: {
    getHomeList () {
      getHome({
        page: this.page
      }).then(res => {
        this.list = res.data.result
      })
    }

  },

}
</script>

<style scoped>
</style>