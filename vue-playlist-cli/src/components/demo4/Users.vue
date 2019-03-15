<template>
  <div id="users">
      <h1>Hello User</h1>
      <ul>
          <li v-for="user in users" v-on:click="user.show = !user.show">
              <h2>{{user.name}}</h2>
              <h3 v-show="user.show">{{user.position}}</h3>
          </li>
      </ul>
      <button v-on:click="delUser">删除</button>
  </div>
</template>
<!-- 
传值：String number boolean
引用：array object
-->
<script>
export default {
  name: 'user',
  // props: ["users"],
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data(){
    return{
    }
  },
  methods: {
    delUser: function(){
      this.users.pop();
    }
  }
}
</script>

<style scoped>
users{
    width: 1000%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
