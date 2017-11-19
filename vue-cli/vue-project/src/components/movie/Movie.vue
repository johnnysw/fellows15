<template>
  <div class='movie'>
      <common-header></common-header>
      <movie-nav></movie-nav>
      <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import MovieNav from './MovieNav'

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
            MovieNav
        }
    }
</script>
<style>
  
</style>
