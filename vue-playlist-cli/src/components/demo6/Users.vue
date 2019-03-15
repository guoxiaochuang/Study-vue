<template>
  <div id="uses">
      <h1>Hello User</h1>
      <ul>
          <li v-for="user in users">
              <h2>{{user.name}}</h2>
              <h3>{{user.email}}</h3>
          </li>
      </ul>
  </div>
</template>

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
