<template>
  <div id="app">
    <router-view></router-view>
    <Email/>
    <Footer/>
  </div>
</template>

<script>
import Email from './components/Email.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Email,
    Footer
  }
}
</script>

<style>

</style>
