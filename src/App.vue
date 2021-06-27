<template>
  <div id="app">
    <Header/>
    <StarMap/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './components/Header.vue'
import StarMap from './components/StarMap.vue'

export default {
  name: 'App',
  components: {
    Header,
    StarMap
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
