// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'
import Home from './Home'
// import Users from './components/demo1/Users.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// 配置路由
const router = new VueRouter({
  routes:[
    {path:"/",component:App},
    {path:"/app1",component:App1},
    {path:"/app2",component:App2},
    {path:"/app3",component:App3},
    {path:"/app4",component:App4},
    {path:"/app5",component:App5},
    {path:"/app6",component:App6}
  ],
  mode:"history"
})

// 全局注册组件
// Vue.component('users', Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Home },
  template: '<Home/>',
  router
})
