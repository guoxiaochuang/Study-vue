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
  },
  beforeCreate: function() {
    alert("1.组件实例化之前执行的函数");
  },
  created: function() {
    alert("2.组件实例化完毕，单页面还未显示");
  },
  beforeMount: function() {
    alert("3.组件挂载前，页面仍未展示，但虚拟DOM已经配置");
  },
  mounted: function() {
    alert("4.组件挂载后，此方法执行后，页面显示");
  },
  beforeUpdate: function() {
    alert("5.组件更新前，页面仍未更新，但虚拟Dom已经配置");
  },
  updated: function() {
    alert("6.组件更新，此方法执行后，页面显示");
  },
  beforeDestroy: function() {
    alert("7.组件销毁前");
  },
  destroyed: function() {
    alert("8.组件销毁");
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
