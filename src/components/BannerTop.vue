<template>
  <div class="banner-top">
      <div class="container">
        <h1>Soluções completas em e-commerce e tecnologia</h1>
        <a href="#" class="link-banner">Conheça nossos produtos e serviços</a>
        <p>Já é cliente Big Bang? <a href="#">Acesse a Área do Cliente.</a></p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'BannerTop'
}
</script>

<style scoped>
    .banner-top {
        width: 100vw;
        height: 67vh;
        background-size: 100%;
        margin-bottom: 85px;
    }
    .banner-top h1, .banner-top p {
        color: #fff;
    }
    .banner-top a {
        color: yellow;
    }
    .banner-top h1 {
        max-width: 50%;
        margin-bottom: 30px;
        font-weight: 600;
    }
    .link-banner {
        color: #fff !important;
        padding: 15px 30px;
        font-size: 15px;
        border: 1px solid #ffffff;
        border-radius: 5px;
        display: block;
        max-width: 331px;
        margin-bottom: 30px;
    }
    @media (min-width: 1200px) {
        .banner-top h1 {
            font-size: 56px;
            line-height: 64px;
        }
        .banner-top {
            margin-top: 134px;
            background-image: url(../assets/banner-topo-desktop.png);
            background-repeat: no-repeat;
            padding-top: 14vh;
            padding-bottom: 14vh;
        }
    }
</style>