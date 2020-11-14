<template>
  <div class="footer">
      <div class="container">
        <div class="logo-social border-bottom mb-3">
          <Logo/>
        </div>
      </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
  name: 'Footer',
  components: {
    Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    display: block;
    width: 100%;
    padding-top: 50px;
  }
</style>
