<template>
  <div id="app">
    <div class="container">
      <nav-bar></nav-bar>
      <router-view/>
    </div>
    <footer-tvs></footer-tvs>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import FooterTvs from './components/FooterTvs'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    NavBar,
    FooterTvs
  }
}
</script>

<style>

</style>
