
<template>
<!-- 1. this is root component --> 
<div>
    <header1 v-bind:title="title"> </header1>
  <!-- <h1>{{title}}</h1> -->
  <!-- <p>{{welcome()}}</p> -->
  <!-- <codey> </codey> -->
  <!-- <codeylocal> </codeylocal> -->

<header-text v-bind:HeaderText="HeaderText"></header-text>
<!-- <hr> -->
<!-- <header-text v-bind:HeaderText="HeaderText"></header-text> -->


<app-footer v-bind:title="title"  > </app-footer>

</div>
</template>

<script>

// import CodeLocal from './components/CodeLocal'
import footer from './components/footer'
import HeaderText from './components/Headertext'


export default {

 components:{
   'app-footer':footer,
   'header-text':HeaderText,

  //  'codeylocal':CodeLocal

 } ,
  
data(){
  return {
   HeaderText:[
    {name:'mevn' ,backend:'Node', front:"Vue",show:false},
    {name:'mern' ,backend:'Node', front:"React",show:false},
    {name:'mean' ,backend:'Node', front:"Angular",show:false}
],
  title:"vue found error"
  }
} ,
// methods:{
  welcome:function(){
    return 'welcome '
  }
// }
  //  
}
</script>

<style>
h1 {
  text-align: center;
  color: #05700e;
  margin-top: 60px;
}

</style>
