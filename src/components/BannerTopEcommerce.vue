<template>
    <div>
        <section class="banner-ecommerce">
            <div class="container desktop">
                <h4 class="bottom-line">E-COMMERCE</h4>
                <h1>Soluções completas em e-commerce e tecnologia</h1>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'BannerTopEcommerce'
}
</script>

<style scoped>
    h1, h4 {
        color: #fff;
    }    
    .banner-ecommerce {
        width: 100vw;
        height: 86.5vh;
        background-image: url('../assets/Ecommerce/banner-top-ecommerce.png');
        background-repeat: no-repeat;
    }
    .container {
        height: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
    }
    .container h1 {
        font-size: 40px;
        font-weight: 600;
        max-width: 530px;
    }
    .bottom-line {
        margin-bottom: 50px;
        font-size: 16px;
        line-height: 21px;
    }
    .bottom-line::before {
        content:'';
        width: 24px;
        height: 2px;
        background: #2351FF;
        position: absolute;
        transform: translateY(45px);
    }
    @media (min-width: 1920px) {
        .container h1 {
            font-size: 56px;
        }
        .banner-ecommerce {
            background-size: 100%;
        }
    }
</style>