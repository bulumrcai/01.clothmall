<template>
<!--  注意要看是否外面加上div，要理解整一个模型-->
    <div class="tab-bar-item" @click="btnClick">

<!--      不想把其中的写死,所以使用插槽-->
<!--      <img src="../../assets/img/tabbar/home.png" alt="">-->
<!--      <div>首页</div>-->
      <div v-if="!isActive"><slot name="item-icon" ></slot></div>
      <div v-else><slot name="item-icon-active" ></slot></div>
<!--      <div :class="{active: isActive}"><slot name="item-text"></slot></div>-->
      <div :style="activeStyle"><slot name="item-text"></slot></div>
<!--      若直接将class写在slot里面，则整个都会被替换，若绑定data，注意使用v-bind，所以前面都可以使用包装-->
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    // 使用父传子
    props: {
      path: {
        type: String
      },
      activeColor: {
        type: String,
        default: 'red'
        //default函数
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        // home -> item(/home) = true
        // home -> item(/category) = true
        // home -> item(/shopping) = true
        // home -> item(/profile) = true
        // b.indexof(a): 在b中有没有找到a
        // 有四个组件，每个组件都有自己的route，所以四个组件都要分别执行这个代码
        return this.$route.path.indexOf(this.path) != -1
        //点击的时候处于活跃状态，利用路由进行监听
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
        //利用动态的样式来决定需要的样式
      }
    },
    methods: {
      btnClick() {
        console.log('btnClick')
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    /*图片的下面默认的三像素，可以通过以下的方法解决*/
    vertical-align: center;
    margin-bottom: 2px;
  }
  /*.tab-bar-item .active {*/
  /*  color: red;*/
  /*}*/
</style>