<template>
    
<ul>
  <li v-for="stacks in stack" :key="stacks"> {{stacks}} </li>
</ul>

</template>

<script>
export default {
  data(){
    return{
      stack:['vue local','node local','mevn local']
    }
  }

}
</script>

<style scoped>

ul {
  background: #3399ff;
  padding: 20px;
}
</style>