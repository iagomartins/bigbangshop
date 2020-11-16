<template>
<div>
    <BannerTop/>
    <div class="title-section">
        <h1>Nossos Produtos</h1>
    </div>
    <div class="container our-products">
        <CompanyCard img="../assets/BigShop.png" title="BIG SHOP" msg="Crie sua própria loja online" link="#" />
    </div>
</div>
</template>
<script>
import BannerTop from '../components/BannerTop.vue'
import CompanyCard from '../components/CompanyCard.vue'

export default {
    name: 'Home',
    components: {
        BannerTop,
        CompanyCard
    }
}
</script>
<style scoped>
    .title-section {
        width: 100%;
        text-align: center;
        font-size: 40px;
        margin-bottom: 85px;
    }
    .title-section h1::after {
        content: '';
        width: 12px;
        height: 2px;
        background: #2351ff;
        position: absolute;
        bottom: 0;
        left: 50%;
    }
</style>