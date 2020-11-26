<template>
<div>
    <section class="banner">
    <div class="container">
        <div class="image">
            <img src="../assets/Ecommerce/PixelBook-Go-and-Pixel-4-XL 1.png" alt="">
        </div>
        <div class="info">
            <h2>Layouts otimizados para conversão</h2>
            <p>
                Escolha a opção de layout que mais combina com a sua loja e comece rápido,
                sem complicações e sem custos iniciais. Basta cadastrar sua marca, produtos, banners e promoções e pronto!
            </p>
            <a href="#">Conheça os layouts disponíveis</a>
        </div>
    </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'BannerFooterLojaStart'
}
</script>

<style scoped>
    .banner {
        background-color: #2351ff;
        color: #fff;
        padding-top: 102px;
        padding-bottom: 102px;
        margin-bottom: 85px;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 800;
        margin-bottom: 45px;
    }
    .info h2 {
        font-size: 40px;
        line-height: 48px;
        font-weight: 600;
        margin-bottom: 32px;
    }
    .info a {
        padding: 16px 32px;
        border: 1px solid #fff;
        border-radius: 8px;
        color: #fff;
        font-size: 18px;
        line-height: 22px;
    }
    .info p {
        margin-bottom: 52px;
    }
    .image {
        margin-bottom: 30px;
    }
    @media (min-width: 1200px) {
        .info {
            padding-left: 50px;
        }
        .container {
            flex-direction: row;
            align-items: center;
        }
        .image {
            margin-bottom: 0;
        }
    }
</style>