<template>
  <div class='movie'>
      <common-header></common-header>
      <movie-nav></movie-nav>
      <div class='list-box'>
        <movie-list v-for="(obj,index) in movieList" :key="index" :title="obj.nm"
        :year = "obj.snum" :img = "obj.img" :avg = "obj.sc" :desc = "obj.cat"
        >
        </movie-list>
      </div>
      <div class="loading" v-show="isShow">
          <img src="/static/img/loading.gif" alt="">
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
                movieList: [],
                isShow   : false
            }
        },
        //https://api.douban.com/v2/movie/top250?count=10&start=0
        //http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000
        mounted(){
           Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10")
           .then((res)=>{
               this.movieList = res.data.data.movies;
           });
            let _this           = this;
                window.onscroll = function(){
                let clientHeight = document.documentElement.clientHeight;
                let scrollTop    = document.documentElement.scrollTop;
                let scrollHeight = document.documentElement.scrollHeight;
                if(clientHeight + scrollTop >=scrollHeight){
                    _this.isShow = true;
                     Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+_this.movieList.length+"&limit=10")
                        .then((res)=>{
                            _this.movieList = _this.movieList.concat(res.data.data.movies);
                            _this.isShow    = false;
                        });
                }
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
      margin-top   : 2rem;
      margin-bottom: 1rem;
  }
  .loading{
        margin-bottom: 1rem;
        text-align   : center;
  }
</style>
