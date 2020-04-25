<template>
<div>
    <h1>Please fill below form</h1>
    <form>
<div id="form-header">
    <slot name="form-header"></slot>
</div>
<div id="form-field">
<slot name="form-field"></slot>

</div>

<div id="form-control">

    <slot name="form-control"></slot>

</div>

<div id="usefull links">
<ul>
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
    <li><a href="#">Link3</a></li>

</ul>

</div>



    </form>
</div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
h1{
    text-align: center;
}
form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
#useful-links ul{
    padding: 0;
}
#useful-links li{
    display: inline-block;
    margin-right: 10px;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>
