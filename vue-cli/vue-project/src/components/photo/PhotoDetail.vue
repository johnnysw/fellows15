<template>
  <div>
       <common-header title="photo" nav="<" bgColor="rgb(63, 81, 181)"></common-header>
        <v-touch class='detail' @swiperight="prev" @swipeleft="next" :style="{'background-image':bg}">
            
        </v-touch>
  </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import Axios from 'axios'

export default {
    data(){
        return {
            aa       : this.$route.params.index,
            photoData: this.$store.state.photoData,
        }
    },
    computed:{
        bg(){
            return `url(${this.photoData[this.aa].src})`
        }
    },
    methods:{
        next(){
            if(this.aa == this.photoData.length - 1){
                this.aa = 0;
            }else{
                this.aa++;
            }
        },
        prev(){
            if(this.aa == 0){
                this.aa = this.photoData.length - 1;
            }else{
                this.aa--;
            }
        }
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
