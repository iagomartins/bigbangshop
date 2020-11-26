<template>
    <div>
        <Header/>
        <PageTitle title="Tecnologia"/>
        <Breadcrumb page="Tecnologia" />
        <BannerTopTecnologia />
        <div class="middle-section">
            <MiddleSectionTecnologia />
        </div>
        <section class="middle-grid">
            <div class="title-section">
                <h2>Vantagens e recursos da tecnologia Big Bang</h2>
            </div>
            <TecnologiaGrid/>
        </section>
        <section class="center-section">
            <EcommerceComponent title="App Development" 
            msg="Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet."
            link="#"/>
            <EcommerceComponent title="Sistemas Web" 
            msg="Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet."
            link="#"/>
            <EcommerceComponent title="Sites Institucionais" 
            msg="Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet."
            link="#"/>
        </section>
        <BannerFooterEcommerce />
        <Technology />
        <Prices />
        <Consulting />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import PageTitle from '../components/PageTitle.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import BannerTopTecnologia from '../components/BannerTopTecnologia.vue'
import MiddleSectionTecnologia from '../components/MiddleSectionTecnologia.vue'
import TecnologiaGrid from '../components/TecnologiaGrid.vue'
import EcommerceComponent from '../components/EcommerceComponent.vue'
import BannerFooterEcommerce from '../components/BannerFooterEcommerce.vue'
import Technology from '../components/Technology.vue'
import Prices from '../components/Prices.vue'
import Consulting from '../components/Consulting.vue'

export default {
    name: 'Tecnologia',
    components: {
        Header,
        PageTitle,
        Breadcrumb,
        BannerTopTecnologia,
        MiddleSectionTecnologia,
        TecnologiaGrid,
        EcommerceComponent,
        BannerFooterEcommerce,
        Technology,
        Prices,
        Consulting
    }
}
</script>

<style scoped>
    .middle-section {
        margin-top: -90px;
        z-index: 9;
    }
    .title-section {
        width: 100%;
        text-align: center;
        font-size: 40px;
        margin-bottom: 85px;
    }
    .title-section h2::after {
        content: '';
        width: 12px;
        height: 2px;
        background: #2351ff;
        position: absolute;
        transform: translateY(55px);
        left: 50%;
    }
    .middle-grid {
        width: 100vw;
        background: #f3f3f3;
        padding-top: 1010px;
        margin-top: -1010px;
    }
    @media (min-width: 1200px) {
        .middle-grid {
            padding-top: 300px;
            margin-top: -300px;
        }
    }
</style>