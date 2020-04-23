<template>
    
<ul>
  <li v-for="stacks in stack" :key="stacks"> {{stacks}} </li>
</ul>

</template>

<script>
export default {
  data(){
    return{
      stack:['vue','node','mevn']
    }
  }

}
</script>

<style scoped>

li {
  color: #0ab48f;
  padding: 20px;
}
</style>