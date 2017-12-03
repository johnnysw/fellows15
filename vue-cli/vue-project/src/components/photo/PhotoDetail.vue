<template>
  <div>
       <common-header title="photo" nav="<" bgColor="rgb(63, 81, 181)"></common-header>
        <div class='detail' :style="{'background-image':bg}" v-if="isShow">
            
        </div>
  </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import Axios from 'axios'

export default {
    data(){
        return {
            aa       : this.$route.params.index,
            photoData: [],
            isShow   : false,
        }
    },
    computed:{
        bg(){
            return `url(${this.photoData[this.aa].src})`
        }
    },
   mounted(){
      Axios.get('/static/photo-data.json')
      .then(res=>{
        this.photoData = res.data.photoData;
        this.isShow    = true;
      });
  },
  components:{
      CommonHeader
  }
}
</script>
<style>
    .detail{
        position           : absolute;
        top                : 1rem;
        bottom             : 0;
        width              : 100%;
        background-repeat  : no-repeat;
        background-size    : contain;
        background-position: center;
        background-color   : #000;
    }
</style>
