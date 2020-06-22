<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center" >购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"/>
    <home-recommend :recommends='recommends'/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    data() {
      return {
        result: null,
        banner: [],
        recommends: []
      }
    },
    //发送网络请求的时刻，在组件建好的时候，生命周期函数
    created() {
      //垃圾回收原理有关
      //res指向res对应的存储位置data，若res在调用完函数后被回收，若data没有
      //被其他变量指向，则会被回收，而当this.result指向data时，则不会被回收
      getHomeMultidata().then(res => {

        // this.result = res
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res.data.recommend.list);
      })//异步操作的验证方法
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>