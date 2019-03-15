// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
// import Users from './components/demo1/Users.vue'

Vue.config.productionTip = false

// 全局注册组件
// Vue.component('users', Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App4 },
  template: '<App4/>'
})
