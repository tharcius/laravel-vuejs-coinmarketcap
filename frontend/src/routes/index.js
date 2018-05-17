import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/CoinMarket'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '*', component: Home},
    {path: '/', name: 'CoinMarket', component: Home}
  ]
})
