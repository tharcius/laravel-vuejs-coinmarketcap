import axios from 'axios'
import { URL_BASE } from '../../config/index'

export default {
  getMarketCoins (context, coins) {
    axios.get(`${URL_BASE}`)
      .then(response => {
        context.commit('GET_COINS', response.data.data)
      })
      .catch(error => console.log(error))
      .finally()
  }
}
