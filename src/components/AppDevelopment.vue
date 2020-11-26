<template>
    <div>
        <Header />
        <PageTitle title="App Development"/>
        <Subcategorycrumb page="App Development" previous="Tecnologia" prevLink="/tecnologia"/>
        <div class="container text-title">
            <h3>App Development</h3>
        </div>
        <div class="container align-left">
            <div class="container-column">
                <h1>Pra quem quer começar a vender online</h1>
                <p class="subtitle">Agilidade e o melhor custo x benefício do mercado</p>
            </div>
            <div class="container-column">
                <h1>Sem custo inicial de desenvolvimento</h1>
                <p>Com a Loja Start você não tem custo de desenvolvimento. As lojas já estão prontas para você cadastrar produtos e começar a vender.</p>
            </div>
        </div>
        <div class="container align-right">
            <div class="container-column">
                <h1>Início rápido</h1>
                <p>Com a Loja Start você não tem custo de desenvolvimento. As lojas já estão prontas para você cadastrar produtos e começar a vender.</p>
            </div>
        </div>
        <div class="container align-left">
            <div class="container-column">
                <h1>Designs responsivos</h1>
                <p>Com a Loja Start você não tem custo de desenvolvimento. As lojas já estão prontas para você cadastrar produtos e começar a vender.</p>
            </div>
        </div>
        <div class="container align-right">
            <div class="container-column">
                <h1>Módulos opcionais de automatização</h1>
                <p>Com a Loja Start você não tem custo de desenvolvimento. As lojas já estão prontas para você cadastrar produtos e começar a vender.</p>
            </div>
        </div>
        <div class="container align-left">
            <div class="container-column">
                <h1>Migração facilitada</h1>
                <p>Com a Loja Start você não tem custo de desenvolvimento. As lojas já estão prontas para você cadastrar produtos e começar a vender.</p>
            </div>
        </div>
        <div class="container align-right">
            <div class="container-column">
                <h1>Integração com marketplaces</h1>
                <p>Com a Loja Start você não tem custo de desenvolvimento. As lojas já estão prontas para você cadastrar produtos e começar a vender.</p>
            </div>
        </div>
        <BannerFooterLojaStart/>
        <div class="container tabs">
                    <TabNav :tabs="[
                            'Gráficos de análise de comportamento',
                            'Relatórios inteligentes',
                            'Acessíveis de qualquer lugar'
                        ]"
                        :selected="selected" @selected="setSelected" :stores=false
                        title="Informações que fazem a diferença" 
                        subtitle="As ferramentas de análise fornecem dados importantes sobre o comportamento dos seus clientes e a performance da sua loja.">
                        <Tab :isSelected="selected === 'Gráficos de análise de comportamento'">
                            <div class="image">
                                <img src="../assets/Ecommerce/LojaStart/notebook.png" alt="">
                            </div>
                        </Tab>
                        <Tab :isSelected="selected === 'Relatórios inteligentes'">
                            <div class="image">
                                <img src="../assets/Ecommerce/LojaStart/notebook.png" alt="">
                            </div>
                        </Tab>
                        <Tab :isSelected="selected === 'Acessíveis de qualquer lugar'">
                            <div class="image">
                                <img src="../assets/Ecommerce/LojaStart/notebook.png" alt="">
                            </div>
                        </Tab>
                    </TabNav>
        </div>
        <CenterTitle title="Quem usa e aprova" />
        <div class="container clients">
            <div class="client">
                <img src="../assets/Ecommerce/LojaStart/zak.svg" alt="">
            </div>
            <div class="client">
                <img src="../assets/Ecommerce/LojaStart/les-chemises.svg" alt="">
            </div>
            <div class="client">
                <img src="../assets/Ecommerce/LojaStart/cia-do-terno.svg" alt="">
            </div>
            <div class="client">
                <img src="../assets/Ecommerce/LojaStart/dash.svg" alt="">
            </div>
            <div class="client">
                <img src="../assets/Ecommerce/LojaStart/Frame.svg" alt="">
            </div>
        </div>
        <BannerCommerce title="Loja Start" 
        description="Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet."
        price="299"/>
        <ConsultingCommerce/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import PageTitle from '../components/PageTitle.vue'
import Subcategorycrumb from '../components/Subcategorycrumb.vue'
import BannerFooterLojaStart from '../components/BannerFooterLojaStart.vue'
import TabNav from '../components/TabNav.vue'
import Tab from '../components/Tab.vue'
import CenterTitle from '../components/CenterTitle.vue'
import BannerCommerce from '../components/BannerCommerce.vue'
import ConsultingCommerce from '../components/ConsultingCommerce.vue'

export default {
    name: 'AppDevelopment',
    components: {
        Header,
        PageTitle,
        Subcategorycrumb,
        BannerFooterLojaStart,
        TabNav,
        Tab,
        CenterTitle,
        BannerCommerce,
        ConsultingCommerce
    },
    data () {
        return {
            selected: 'Gráficos de análise de comportamento'
        }
    },
    methods: {
        setSelected(tab) {
            this.selected = tab;
        }
    }
}
</script>

<style scoped>
    @media (max-width: 1200px) {
        .image img {
            max-width: 100%;
        }
    }
    .text-title {
        margin-bottom: 50px;
    }
    .text-title h3 {
        color: #1c1c1c;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 21px;
    }
    .text-title h3::before {
        content: '';
        width: 24px;
        height: 2px;
        background: #2351FF;
        position: absolute;
        transform: translateY(40px);
    }
    .container-column {
        width: 100%;
        margin-bottom: 50px;
    }
    .container-column h1 {
        margin-bottom: 24px;
        font-size: 48px;
        color: #1c1c1c;
    }
    .container-column p {
        color: #1c1c1c;
    }
    .subtitle {
        font-size: 22px;
        line-height: 30px;
    }
    .align-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .align-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .tabs {
        margin-bottom: 105px;
    }
    .container.clients {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 81px;
        padding-top: 60px;
        margin-bottom: 80px;
    }
    .client {
        margin-bottom: 50px;
    }
    .banner-image img {
        width: 100%;
        max-width: 100%;
    }
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
        .container-column {
            width: 50%;
            padding-right: 24px;
        }
        .container.clients {
            flex-direction: row;
            justify-content: space-between;
        }
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