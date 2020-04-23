
<template>
<!-- 1. this is root component --> 
<div>
  <h1>{{title}}</h1>
  <p>{{welcome()}}</p>
</div>
</template>

<script>

export default {
  
data(){
  return {
    title:'This is firs title of vue js practice '
  }
} ,
methods:{
  welcome:function(){
    return 'welcome '
  }
}
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
