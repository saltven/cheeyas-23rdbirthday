<template>
  <div id="app">
    <Header/>
    <StarMap/>
    <StarChart/>
    <Wishes/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './components/Header.vue'
import StarMap from './components/StarMap.vue'
import StarChart from './components/StarChart.vue'
import Wishes from './components/Wishes.vue'

export default {
  name: 'App',
  components: {
    Header,
    StarMap,
    StarChart,
    Wishes
  }
}
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow-x: hidden;
  }
</style>
