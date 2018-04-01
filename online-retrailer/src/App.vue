<template>
  <div id="app">
    <Iheader class="iheader"></Iheader>
    <div class="container">
      <router-view/>
    </div>
    <Ifooter class="footer"></Ifooter>
  </div>
</template>

<script>
import Iheader from './components/header/header.vue'
import Ifooter from './components/footer/footer.vue'

export default {
  name: 'App',
  components: {
    Iheader,
    Ifooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.container {
  flex: 1 0 auto;
  display: flex;
}
</style>
