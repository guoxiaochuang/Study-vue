<template>
  <div id="app6">
    <app-header></app-header>
    <users v-bind:users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
// 局部注册组件
import Users from './components/demo6/Users.vue'
import Header from './components/demo6/Header.vue'
import Footer from './components/demo6/Footer.vue'

export default {
  name: 'App6',
  data(){
    return{
      users: []
    }
  },
  components: {
      "users": Users,
      "app-header": Header,
      "app-footer": Footer
  },
  created() {
    this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data) =>{
        this.users = data.body
      })
  }
}
</script>

<style>
h1{
  color:green;
}
</style>
