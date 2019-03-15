<template>
  <div id="app4">
    <app-header v-bind:title="title" v-on:titleChanged="updateTitle($event)"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// 局部注册组件
import Users from './components/demo4/Users.vue'
import Header from './components/demo4/Header.vue'
import Footer from './components/demo4/Footer.vue'

export default {
  name: 'App4',
  data(){
    return{
      title: "传值：传递的是String、number、boolean",
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
  },
  methods: {
    updateTitle: function(title){
      this.title = title;
    }
  }
}
</script>

<style>
h1{
  color:green;
}
</style>
