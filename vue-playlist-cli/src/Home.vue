<template>
  <div id="home">
    <h1>Vue.js Home</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/app1">Demo1</router-link></li>
      <li><router-link to="/app2">Demo2</router-link></li>
      <li><router-link to="/app3">Demo3</router-link></li>
      <li><router-link to="/app4">Demo4</router-link></li>
      <li><router-link to="/app5">Demo5</router-link></li>
      <li><router-link to="/app6">Demo6</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style>
</style>
