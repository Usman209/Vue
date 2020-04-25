<template>
<div class="footer">
<p>{{title}}</p>

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
        return 'testing 2'
    },
    created(){
        bus.$on('changeTitle', (data)=>{
            this.title=data

        })
    }
    
}
</script>

<style scoped>

.footer {
   position: fixed;
   left: 0;
   bottom: 10;
   width: 100%;
   background-color: black;
   color: white;
   text-align: center;
}

</style>