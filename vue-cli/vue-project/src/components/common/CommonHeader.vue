<template>
  <div class='header' :style="{background:bgColor}">
      <button>首页</button>
      <h2>{{title}}</h2>
  </div>
</template>
<script>
     export default {
         props: ['title','bgColor']
     }
</script>
<style>
    .header{
        height  : 1rem;
        display : flex;
        position: fixed;
        top     : 0;
        width   : 100%;
    }
    .header button{
        width : 1rem;
        height: 1rem;
        color : #fff;
        float : left;
    }
    .header h2{
         float      : left;
         color      : #fff;
         text-align : center;
         flex       : 1;
         text-indent: -1rem;
    }
</style>
