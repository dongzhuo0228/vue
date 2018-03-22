import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.use(VueRouter)

// 首先定义或者引入路由的组件
// 方法一：直接定义路由组件
//const goods = { template: '<p>goods</p>' };
//const ratings = { template: '<p>ratings</p>' };
//const seller = { template: '<p>seller</p>' };
// 方法二：import引入路由组件
import firstcomponent from './component/firstcomponent'
import Enter from './enter'
import index from './App'

// 然后定义路由(routes)，components还可以是Vue.extend()创建的
const routes = [
    { path: '/', redirect: 'index' }, // 默认就跳转此页面
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/firstcomponent',
      name: 'firstcomponent',
      component: firstcomponent
    }
  ]
// 接着创建路由实例
const router = new VueRouter({
  // ES6缩写语法，相当于routes:routes
  routes  
});
// 最后创建vue实例并挂载
const app = new Vue({
  el: '#index',
  router,
  components:{Enter},
  template:'<enter/>'
});
