<template>
        <section class="banner-footer">
            <div class="container">
                <div class="banner-content">
                    <h1 class="banner-title">Quanto custa?</h1>
                    <strong>{{ title }}</strong>
                    <p>{{ description }}</p>
                    <div class="plan-prices">
                        <span class="prices-subtitle">a partir de:</span>
                        <div class="hire">
                            <span class="plan"><span class="currency">R$</span>{{ price }}<span class="currency">/mês</span></span>
                            <a href="#" class="btn btn-primary button-hire">Contratar</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'BannerCommerce',
    props: {
        title: String,
        description: String,
        price: String
    }
}
</script>

<style scoped>
    .banner-footer {
        background-image: url('../assets/Ecommerce/LojaStart/banner-loja-start.png');
        padding-top: 96px;
        height: 58vh;
        margin-bottom: 100px;
    }
    .banner-title {
        font-size: 40px;
        line-height: 48px;
        font-weight: 600;
        color: #1c1c1c;
        margin-bottom: 50px;
    }
    .banner-title::before {
        content: '';
        width: 24px;
        height: 2px;
        background: #2351FF;
        position: absolute;
        transform: translateY(65px);
    }
    .banner-content strong {
        color: #1c1c1c;
        font-size: 24px;
        line-height: 30px;
        font-weight: 800;
        margin-bottom: 24px;
        display: block;
    }
    .banner-content p {
        margin-bottom: 32px;
        font-size: 16px;
        line-height: 20px;
        color: #3d3d3d;
    }
    .hire, .prices-subtitle {
        width: 100%;
    }
    .hire {
        display: flex;
        align-items: center;
    }
    .prices-subtitle {
        color: #666;
        font-size: 16px;
        line-height: 20px;
    }
    span.plan {
        margin-right: 32px;
        color: #2351ff;
        font-size: 56px;
        line-height: 64px;
        font-weight: 600;
    }
    .currency {
        color: #2351ff !important;
        font-size: 14px;
        line-height: 19px;
        font-weight: 400;
    }
    .button-hire {
        background: #2351FF;
        padding: 16px 32px;
        font-size: 15px;
        line-height: 20px;
        font-weight: 700;
    }
    @media (min-width: 1200px) {
        .banner-content {
            width: 39%;
        }
    }
    @media (min-width: 1920px) {
        .banner-footer {
            background-size: 100%;
        }
    }
</style>