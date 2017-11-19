<template>
  <div class='nav'>
      <ul>
          <li>top250</li>
          <li>正在热映</li>
          <li>即将上映</li>
      </ul>
  </div>
</template>
<script>
    
</script>
<style scoped>
   .nav{
       height    : 1rem;
       background: rgb(33, 150, 243);
       position  : fixed;
       top       : 1rem;
       width     : 100%;
   }
   .nav ul{
       display: flex;
   }
   .nav li{
       flex       : 1;
       text-align : center;
       color      : #fff;
       line-height: 1rem;
   }
</style>
