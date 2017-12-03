<template>
  <div class="photo">
      <common-header title="photo" nav="<" bgColor="rgb(63, 81, 181)"></common-header>
        <ul class="photo-list">
          <li v-for="(obj,index) in photoData" :key="index">
              <router-link :to="`/photo_detail/${index}`">
                <img :src="obj.src" alt="">
              </router-link>
          </li>
        </ul>
      <common-footer bgColor="rgb(63, 81, 181)"></common-footer>
  </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Axios from 'axios'
export default {
  data(){
    return {
      photoData: []
    }
  },
  mounted(){
      Axios.get('/static/photo-data.json')
      .then(res=>{
        this.photoData = res.data.photoData;
      });
  },
  components:{
      CommonHeader,
      CommonFooter
  }
}
</script>
<style>
.photo-list{
  margin  : 1rem 0;
  overflow: hidden;
}
.photo-list li{
  width: 50%;
  float: left;
}
</style>
