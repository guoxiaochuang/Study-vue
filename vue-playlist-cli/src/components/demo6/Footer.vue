<template>
    <footer>
        <p>{{copyright}}</p>
    </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data(){
    return{
      copyright: "copyright 2019 Vue Demo"
    }
  }
}
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
}
footer p{
    color: lightgreen;
    text-align: center;
}
</style>
