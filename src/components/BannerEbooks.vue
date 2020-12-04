<template>
  <div class="banner-top">
      <div class="container desktop">
        <h1>E-books Big Bang</h1>
        <p>Acesse gratuitamente e-books e outros materiais educativos para ampliar seus conhecimentos em vendas, finanças, tecnologia e muito mais.</p>
        <a href="#" class="link-banner">Conheça nossos e-books gratuitos</a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'BannerEbooks'
}
</script>

<style scoped>
    .banner-top {
        background-image: url('../assets/Blog/ebooks-banner.png');
        background-repeat: no-repeat;
        margin-bottom: 85px;
        padding: 60px 0;
    }
    .banner-top h1, .banner-top p {
        color: #fff;
        max-width: 486px;
    }
    .banner-top p {
        margin-bottom: 60px;
    }
    .banner-top a {
        color: yellow;
    }
    .banner-top h1 {
        max-width: 50%;
        margin-bottom: 30px;
        font-size: 40px;
        line-height: 44px;
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
        text-align: center;
    }
    @media (min-width: 1200px) {
        .banner-top h1 {
            font-size: 40px;
            line-height: 44px;
        }
        .banner-top {
            width: 100vw;
            height: 66.7vh;
        }
        .banner-top .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }
    }
    @media (min-width: 1920px) {
        .banner-top h1 {
            font-size: 56px;
            line-height: 64px;
        }
        .banner-top {
            background-size: 100%;
        }
    }
</style>