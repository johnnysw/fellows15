<template>
  <div class='movie'>
      <common-header></common-header>
      <movie-nav></movie-nav>
      <div class='list-box'>
        <movie-list v-for="obj in movieList" :title="obj.title"
        :year = "obj.year" :avg = "obj.avg" :desc = "obj.desc"
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

    export default {
        data () {
            return {
                movieList: [{
                    title: '霸王别姬',
                    year : "1994",
                    avg  : '9.6',
                    desc : ["爱情",'同性','悬疑']
                },
                {
                    title: '正义联盟',
                    year : "2017",
                    avg  : '0',
                    desc : ["动作",'科幻']
                },
                {
                    title: '唯创网讯',
                    year : "2012",
                    avg  : '10.0',
                    desc : ["IT",'教育','交友']
                }]
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
