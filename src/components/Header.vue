<template>

<div class="header">
  <h1>Vue js Practice session</h1>
  <h2 v-on:click="changeTitle">{{title}}</h2>
  <p>Topic : Primitive vs Reference Types</p>

</div>
</template>

<script>
import {bus} from '../main'

export default {

props:{
    title:{
        type:String
    }
},

    data(){
        return 'testing'
    },
    methods:{
      changeTitle:function(){
        // this.title="Title updated"
        // this.$emit('changeTitle','Title Updated') 
        // emit event from one child to other throught main.js .
        // this.title="Ttitle update from child to child", // we are emiting from header . change title just for demonstration . 
        bus.$emit("changeTitle","Ttitle update from child to child ")

      }
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