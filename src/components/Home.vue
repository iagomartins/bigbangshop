<template>
<div>
    <BannerTop/>
    <div class="title-section">
        <h1>Nossos Produtos</h1>
    </div>
</div>
</template>
<script>
import BannerTop from '../components/BannerTop.vue'

export default {
    name: 'Home',
    components: {
        BannerTop
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