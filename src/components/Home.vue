<template>
<div>
    <Header />
    <BannerTop/>
    <div class="title-section">
        <h1>Nossos Produtos</h1>
    </div>
    <div class="container our-products">
        <CompanyCard img="../assets/BigShop.png" title="BIG SHOP:" msg="Crie sua própria loja online" link="#" />
        <CompanyCard img="../assets/BigShop.png" title="BIG BANG TRACK:" msg="Rastreie suas compras" link="#" />
        <CompanyCard img="../assets/BigShop.png" title="PAGO AGORA:" msg="Gere boletos com a menor taxa" link="#" />
        <CompanyCard img="../assets/BigShop.png" title="CURTA & COMPRE:" msg="Sua loja completa no Instagram" link="#" />
    </div>
    <div class="text-center link-big-bang">
        <a href="#">Saiba mais sobre os produtos exclusivos Big Bang</a>
    </div>
    <BannerCenter/>
    <MiddleSection/>
    <BannerFooter/>
    <LowerSection/>
    <SlickCarousel/>
    <Clients/>
    <BlogHome/>
</div>
</template>
<script>
import Header from '../components/Header.vue'
import BannerTop from '../components/BannerTop.vue'
import CompanyCard from '../components/CompanyCard.vue'
import BannerCenter from '../components/BannerCenter.vue'
import MiddleSection from '../components/MiddleSection.vue'
import BannerFooter from '../components/BannerFooter.vue'
import LowerSection from '../components/LowerSection.vue'
import SlickCarousel from '../components/SlickCarousel.vue'
import Clients from '../components/Clients.vue'
import BlogHome from '../components/BlogHome.vue'

export default {
    name: 'Home',
    components: {
        Header,
        BannerTop,
        CompanyCard,
        BannerCenter,
        MiddleSection,
        BannerFooter,
        LowerSection,
        SlickCarousel,
        Clients,
        BlogHome
    }
}
</script>
<style scoped>
    .our-products {
        margin-bottom: 100px;
        max-width: 1238px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
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
        transform: translateY(55px);
        left: 50%;
    }
    .link-big-bang {
        margin-bottom: 100px;
    }
    .link-big-bang a {
        color: #2351ff;
        font-size: 18px;
        font-weight: 700;
    }
    @media (min-width: 1200px) {
        .our-products {
            flex-direction: row;
        }
    }
</style>