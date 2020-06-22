import Vue from 'vue'
import vueRouter from 'vue-router'


//安装插件
Vue.use(vueRouter)

const Home = () => import('views/home/home');
const Category = () => import('views/category/category');
const Cart = () => import('views/cart/cart')
const Profile = () => import('views/profile/profile');
//创建router
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/Profile',
    component: Profile
  }
]
const router = new vueRouter({
  routes,
  mode: 'history'
});

//导出router
export default router