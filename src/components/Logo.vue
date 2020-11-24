<template>
  <div class="logo">
    <router-link to="/">
      <img src="../assets/logo.svg">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 1200px) {
  .logo {
    margin-right: 40px;
  }
}

</style>
