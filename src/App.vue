
<template>
<!-- 1. this is root component --> 
<div>
    <header1> </header1>
  <!-- <h1>{{title}}</h1> -->
  <!-- <p>{{welcome()}}</p> -->
  <!-- <codey> </codey> -->
  <!-- <codeylocal> </codeylocal> -->

<header-text></header-text>


<app-footer> </app-footer>

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
h1 {
  text-align: center;
  color: #05700e;
  margin-top: 60px;
}

</style>
