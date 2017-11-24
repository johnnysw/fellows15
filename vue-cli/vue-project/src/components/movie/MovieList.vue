<template>
  <div class='movie-list'>
    <div class="movie-img">
        <img :src="img" alt="">
    </div>
    <div class="movie-title">
        <span>{{title}}</span>
        <p>
           <span>
               {{desc}}
           </span> 
            ({{year}})(平均{{avg}}分)
        </p>
    </div>
  </div>
</template>
<script>
     export default {
        props: ['title','desc','year','avg','img'],
        data () {
            return {
                
            }
        }
    }
</script>
<style scoped>
    .movie-list{
        padding: 0.4rem;
    }
   .movie-img{
       float : left;
       width : 0.8rem;
       height: 0.8rem;
   }
   .movie-img img{
       width : 100%;
       height: 100%;
   }
   .movie-title{
       float        : left;
       width        : 4rem;
       margin-left  : 0.6rem;
       border-bottom: 1px solid #ccc;
   }
</style>
