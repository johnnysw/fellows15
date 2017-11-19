<template>
  <div class='movie'>
      <common-header></common-header>
      <movie-nav></movie-nav>
      <div class='list-box'>
        <movie-list></movie-list>
       <movie-list></movie-list>
        <movie-list></movie-list>
         <movie-list></movie-list>
          <movie-list></movie-list>
       <movie-list></movie-list>
        <movie-list></movie-list>
         <movie-list></movie-list>
      </div>
     
      <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import MovieNav from './MovieNav'
import MovieList from './MovieList'

    export default {
        data () {
            return {
            msg: 'Welcome to Your Vue.js App',
            aa : "fafdsafds"
            }
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
