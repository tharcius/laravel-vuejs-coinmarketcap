<template>
  <div class="container">
    <div class="row">
      <div v-for="(coin, index) in coins[0]" :key="index" class="col-lg-4 col-sm-6 text-center mb-4">
        <h1><small><strong>#{{ coin.rank }} - {{ coin.name }}</strong> ({{ coin.symbol }})</small></h1>
        <h4>Valor USD:
          <strong>{{ coin.quotes.USD.price }}</strong>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-tasks',
  data () {
    return {
    }
  },
  methods: {
    getCoins () {
      this.$store.dispatch('getMarketCoins')
    }
  },
  created () {
    this.getCoins()
  },
  computed: {
    coins () {
      return this.$store.state.CoinMarket.coins
    }
  }
}
</script>

<style scoped>

</style>
