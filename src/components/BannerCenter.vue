<template>
    <div>
        <section class="banner-center">
            <div class="banner-img">
                <img src="../assets/Home/banner-center.png" alt="">
            </div>
            <div class="banner-content">
                <h2>Soluções completas em e-commerce</h2>
                <a href="#" class="see-more">Saiba mais</a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'BannerCenter'
}
</script>

<style scoped>
    .banner-center {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
    }
    .banner-img, .banner-content {
        width: 100%;
    }
    .banner-img img {
        width: 100%;
    }
    .banner-content {
        background: #F3F3F3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
    }
    .banner-content h2 {
        color: #1c1c1c;
        margin-bottom: 30px;
        text-align: center;
    }
    .see-more {
        background: #2351ff;
        color: #fff;
        border-radius: 8px;
        padding: 15px 30px;
        font-size: 18px;
        font-weight: 700;
    }
    @media (min-width: 1200px) {
        .banner-content h2 {
            max-width: 309px;
            font-size: 40px;
            text-align: left; 
        }
        .banner-center {
            flex-direction: row;
        }
        .banner-img, .banner-content {
            width: 50%;
        }
        .banner-content {
            padding-left: 126px;
            align-items: flex-start;
        }
    }
    @media (min-width: 1920px) {
        .banner-content h2 {
            max-width: 370px;
            font-size: 48px;  
        }
    }
</style>