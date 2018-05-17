import Vue from 'vue'
import Vuex from 'vuex'
import CoinMarket from './modules/CoinMarket/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CoinMarket
  }
})
