<template>
  <div>
    <div class="ecommerce">
      <div class="container">
        <h1 class="page-title">E-Commerce</h1>
      </div>
    </div>
    <Breadcrumb page="E-Commerce" />
    <BannerTopEcommerce/>
    <div class="middle-section">
        <MiddleSectionCommerce/>
    </div>
    <section class="middle-grid">
        <div class="title-section">
            <h2>Vantagens e recursos do nosso e-commerce</h2>
        </div>
        <EcommerceGrid/>
    </section>
    <section class="center-section">
        <EcommerceComponent title="Loja Start" 
        msg="Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet."
        linkMsg="Saiba mais sobre a Loja Start" link="#"/>
        <EcommerceComponent title="Full Commerce" 
        msg="Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet."
        linkMsg="Saiba mais sobre a Full Commerce" link="#"/>
        <EcommerceComponent title="Maketplace" 
        msg="Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet."
        linkMsg="Saiba mais sobre o Maketplace" link="#"/>
    </section>
    <BannerFooterEcommerce/>
    <Technology/>
    <Prices/>
    <Consulting/>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import BannerTopEcommerce from "../components/BannerTopEcommerce.vue";
import MiddleSectionCommerce from '../components/MiddleSectionCommerce.vue';
import EcommerceGrid from '../components/EcommerceGrid.vue'
import EcommerceComponent from '../components/EcommerceComponent.vue'
import BannerFooterEcommerce from '../components/BannerFooterEcommerce.vue'
import Technology from '../components/Technology.vue'
import Prices from '../components/Prices.vue'
import Consulting from '../components/Consulting.vue'

export default {
  name: "Ecommerce",
  components: {
    Breadcrumb,
    BannerTopEcommerce,
    MiddleSectionCommerce,
    EcommerceGrid,
    EcommerceComponent,
    BannerFooterEcommerce,
    Technology,
    Prices,
    Consulting
  },
};
</script>

<style scoped>
    .ecommerce {
        margin-top: 133px;
        padding: 72px 0;
        background: #2351ff;
        margin-bottom: 46px;
    }
    .page-title {
        font-size: 56px;
        color: #fff;
    }
    .page-title::before {
        content: "";
        display: block;
        width: 72px;
        height: 3px;
        position: absolute;
        background: #00bae9;
        transform: translateY(65px);
    }
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
