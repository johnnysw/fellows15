import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CommonHeader from '@/components/common/CommonHeader'
import CommonFooter from '@/components/common/CommonFooter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'HelloWorld',
      component: HelloWorld
    },
    {
      path     : '/movie',
      component: CommonFooter
    }
  ]
})
