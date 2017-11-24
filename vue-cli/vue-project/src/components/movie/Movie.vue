<template>
  <div class='movie'>
      <common-header></common-header>
      <movie-nav></movie-nav>
      <div class='list-box'>
        <movie-list v-for="obj in movieList" :title="obj.title"
        :year = "obj.year" :img = "obj.images.large" :avg = "obj.rating.average" :desc = "obj.genres"
        >
        </movie-list>
      </div>
     
      <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import MovieNav from './MovieNav'
import MovieList from './MovieList'
import Axios from 'axios'
    export default {
        data () {
            return {
                movieList: []
            }
        },
        mounted(){
           Axios.get(API_PROXY + "https://api.douban.com/v2/movie/top250?count=10&start=0")
           .then((res)=>{
               this.movieList = res.data.subjects;
               console.log(res.data.subjects);
           });
        },
        components:{
            CommonHeader,
            CommonFooter,
            MovieNav,
            MovieList
        }
    }
</script>
<style>
  .list-box{
      margin-top: 2rem;
  }
</style>
