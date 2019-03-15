<template>
  <div id="users">
      <h1>Hello User</h1>
      <ul>
          <li v-for="user in users" v-on:click="user.show = !user.show">
              <h2>{{user.name}}</h2>
              <h3 v-show="user.show">{{user.position}}</h3>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'user',
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
