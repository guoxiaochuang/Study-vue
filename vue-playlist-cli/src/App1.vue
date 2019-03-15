<template>
  <div id="app1">
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
// 局部注册组件
import Users from './components/demo1/Users.vue'
import Header from './components/demo1/Header.vue'
import Footer from './components/demo1/Footer.vue'

export default {
  name: 'App1',
  data(){
    return{
      title: "我的第一个Vue项目"
    }
  },
  components: {
      "users": Users,
      "app-header": Header,
      "app-footer": Footer
  }
}
</script>

<style>
h1{
  color:green;
}
</style>
