<template>
  <div class='movie'>
      <common-header></common-header>
      <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
    export default {
        data () {
            return {
            msg: 'Welcome to Your Vue.js App',
            aa : "fafdsafds"
            }
        },
        components:{
            CommonHeader,
            CommonFooter
        }
    }
</script>
<style>
  
</style>
