<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index";
  export default {
    name: "HomeSwiper",
    props: {
      banner: {
        type: Array,
        // default: []
        // 一般是直接用函数进行return
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>