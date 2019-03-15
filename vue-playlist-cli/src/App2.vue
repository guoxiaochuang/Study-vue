<template>
  <div id="app2">
    <app-header></app-header>
    <users v-bind:users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
// 局部注册组件
import Users from './components/demo2/Users.vue'
import Header from './components/demo2/Header.vue'
import Footer from './components/demo2/Footer.vue'

export default {
  name: 'App2',
  data(){
    return{
      users: [
          {name: "Jack", position:"Web开发", show:false},
          {name: "Tim", position:"Java开发", show:false},
          {name: "Tom", position:"Java开发", show:false},
          {name: "Lucy", position:"Web开发", show:false},
          {name: "Lily", position:"C++", show:false},
          {name: "Mirro", position:"C++", show:false},
          {name: "Hent", position:"C++", show:false},
          {name: "Jack", position:"Web开发", show:false},
          {name: "Tim", position:"Java开发", show:false},
          {name: "Tom", position:"Java开发", show:false},
          {name: "Lucy", position:"Web开发", show:false}
        ]
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
