// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import item from 'components/demo/item.vue'
import App from './App.vue'
import 'common/stylus/index.styl'
//使用路由
Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  {path: '*', component: item},
  {path: '/item/:id', component: item}
]
// 创建路由
const router = new VueRouter({
  routes
});
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  template: '<App/>',
  components: {App},
  router,
  data: {
    eventHub: new Vue() // 用于子控件向父控件传递事件  radio需要
  }
}).$mount('#app')



