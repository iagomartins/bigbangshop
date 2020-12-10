<template>
<div>
    <Header />
    <BannerTop/>
    <div class="title-section">
        <h1>Nossos Produtos</h1>
    </div>
    <div class="container our-products">
        <div class="company-card">
            <div class="card-image big-shop">
            </div>
            <div class="card-content">
                <strong>BIG SHOP:</strong>
                <p>Crie sua própria loja online</p>
                <a href="#">Conheça<i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="company-card">
            <div class="card-image big-bang-track">
            </div>
            <div class="card-content">
                <strong>BIG BANG TRACK:</strong>
                <p>Rastreie suas compras</p>
                <a href="#">Conheça<i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="company-card">
            <div class="card-image curta-compre">
            </div>
            <div class="card-content">
                <strong>CURTA & COMPRE:</strong>
                <p>Sua loja completa no Instagram</p>
                <a href="#">Conheça<i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="company-card">
            <div class="card-image pago-agora">
            </div>
            <div class="card-content">
                <strong>PAGO AGORA:</strong>
                <p>Gere boletos com a menor taxa</p>
                <a href="#">Conheça<i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
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
    .company-card {
        max-width: 282px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        margin-bottom: 20px;
        cursor: default;
    }
    .card-image {
        width: 282px;
        height: 247px;
    }
    .card-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;
        padding-top: 25px;
        transition: all 0.4s;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .card-content strong {
        font-size: 20px;
        font-weight: 800;
    }
    .card-content p {
        font-size: 16px;
        font-weight: 400;
        color: #666;
        transition: all 0.4s;
    }
    i.fas.fa-arrow-right {
        color: #fff;
        margin-left: 10px;
    }
    .card-content a {
        color: #fff;
        background: #2351ff;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 15px;
        font-weight: 700;
        padding: 8px 16px;
        border-radius: 8px;
        transition: all 0.4s;
        border: 1px solid #2351FF;
    }
    .card-content a:hover {
        text-decoration: none;
    }
    .company-card:hover .card-content a {
        background: transparent;
        border-color: #fff;
    }
    .company-card:hover .card-content p, .company-card:hover .card-content {
        color: #fff;
    }
    .fa-arrow-right:before {
        font-family: fontawesome;
        content: "\f178";
        font-weight: 300;
    }

    /* Big Shop Card */
    .big-shop {
        background-image: url('../assets/Home/BigShop.png');
    }
    .company-card:hover .big-shop {
        background-image: url('../assets/Home/BigShopHover.png');
    }
    .company-card:hover .big-shop + .card-content {
        background-color: #2351FF;
        color: #fff;
    }
    /* Big Shop Card Fim */

    /* Big Bang Track Card */
    .big-bang-track {
        background-image: url('../assets/Home/BigBangTrack.png');
    }
    .company-card:hover .big-bang-track {
        background-image: url('../assets/Home/BigBangTrackHover.png');
    }
    .company-card:hover .big-bang-track + .card-content {
        background-color: #3fbeb9;
    }
    /* Big Bang Track Card Fim */

    /* Curta & Compre Card */
    .curta-compre {
        background-image: url('../assets/Home/CurtaECompre.png');
    }
    .company-card:hover .curta-compre {
        background-image: url('../assets/Home/CurtaCompreHover.png');
    }
    .company-card:hover .curta-compre + .card-content {
        background-color: #eb3681;
    }
    /* Curta & Compre Card Fim */

    /* Pago Agora Card */
    .pago-agora {
        background-image: url('../assets/Home/PagoAgora.png');
    }
    .company-card:hover .pago-agora {
        background-image: url('../assets/Home/PagoAgoraHover.png');
    }
    .company-card:hover .pago-agora + .card-content {
        background-color: #2DB783;
    }
    /* Pago Agora Card Fim */

    @media (min-width: 1200px) {
        .our-products {
            flex-direction: row;
        }
    }
</style>