<template>

<div id="HeaderText">
<ul>
    <!-- <li v-for="text in HeaderText" :key="text" v-on:click="text.show=!text.show">  -->
    <li v-for="text in HeaderText" :key="text"   v-on:click="text.show = !text.show">


       <h2>{{text.name}}</h2> 
<h3 v-show="text.show">{{text.front}} </h3>
    </li>
</ul>

</div>


</template>
<script>
export default {

    props:{
      
      HeaderText :{
        type:Array,
       required:true
      },
    },

    data(){

        return {
       

        }
    }
    
}
</script>

<style scoped>

#HeaderText{
    width: 100%;
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
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>