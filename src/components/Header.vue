<template>

<div class="header">
  <h1>Vue js Practice session</h1>
  <h2>{{title}}</h2>
  <p>Topic : Primitive vs Reference Types</p>

</div>
</template>

<script>
export default {

props:{
    title:{
        type:String
    }
},

    data(){
        return 'testing'
    }
    
}
</script>

<style >
.header {
  padding: 10px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
</style>