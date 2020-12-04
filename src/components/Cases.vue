<template>
    <div>
        <Header/>
        <PageTitle title="Cases e Clientes"/>
        <Breadcrumb page="Cases e Clientes"/>
        <div class="container top-section">
            <div class="image">
                <img src="../assets/Institucional/text-image.png" alt="">
            </div>
            <div class="text-content">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <section class="slick-carousel">
            <div class="container brands-carousel">
                <VueSlickCarousel v-bind="settings">
                    <div class="brand-image">
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/cordial.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/dash.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/logo_Flor_com_Amor.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/logo-cassotis-positiva.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/Klus.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/grupo-bamaq.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/casa_perola.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/autonomax.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/Frame.svg" alt="">
                    </div>
                </VueSlickCarousel>
                <SlickStyles/>
            </div>
        </section>
        <section class="featured-cases">
            <div class="container">
                <h1 class="text-center section-title">Cases em destaque</h1>
                <div class="cases-container">
                    <a href="#" class="case">
                        <div class="case-img">
                            <img src="../assets/Cases/consorcios.png" alt="">
                        </div>
                        <span class="case-hash">Case Bamaq Consórcios</span>
                        <strong>Transformando a experiência do consorciado</strong>
                    </a>
                    <a href="#" class="case">
                        <div class="case-img">
                            <img src="../assets/Cases/eletrica.png" alt="">
                        </div>
                        <span class="case-hash">Case Liberum Energia</span>
                        <strong>Sistema de inteligência na indústria de energia</strong>
                    </a>
                    <a href="#" class="case">
                        <div class="case-img">
                            <img src="../assets/Cases/zak-case.png" alt="">
                        </div>
                        <span class="case-hash">Case ZAK</span>
                        <strong>Reformulação do e-commerce</strong>
                    </a>
                </div>
                <div class="cases-container">
                    <a href="#" class="case">
                        <div class="case-img">
                            <img src="../assets/Cases/case-autonomax.png" alt="">
                        </div>
                        <span class="case-hash">Case AutonoMax</span>
                        <strong>Inserindo a revolução digital no mercado de autônomos</strong>
                    </a>
                    <a href="#" class="case">
                        <div class="case-img">
                            <img src="../assets/Cases/case-cordial.png" alt="">
                        </div>
                        <span class="case-hash">Case Cordial Engenharia</span>
                        <strong>Revolucionando a comercialização de imóveis</strong>
                    </a>
                    <a href="#" class="case">
                        <div class="case-img">
                            <img src="../assets/Cases/case-mater-dei.png" alt="">
                        </div>
                        <span class="case-hash">Case Hospital Mater Dei</span>
                        <strong>Pensando na saúde de forma ágil</strong>
                    </a>
                </div>
            </div>
        </section>
        <CasesCarousel/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import PageTitle from '../components/PageTitle.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import SlickStyles from '../components/SlickStyles'
import CasesCarousel from '../components/CasesCarousel.vue'

export default {
    name: 'Cases',
    components: {
        Header,
        PageTitle,
        Breadcrumb,
        VueSlickCarousel,
        SlickStyles,
        CasesCarousel
    },
    data() {
      return {
        settings: {
            arrows: true,
            dots: false,
            centerMode: true,
            centerPadding: "40px",
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 5,
            speed: 500,
            index: 2,
            responsive: [
                {
                "breakpoint": 1024,
                "settings": {
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                    }
                },
                {
                "breakpoint": 600,
                "settings": {
                    "centerMode": true,
                    centerPadding: '10px',
                    "slidesToShow": 2,
                    "slidesToScroll": 1,
                    "initialSlide": 1
                    }
                },
                {
                "breakpoint": 480,
                "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                    }
                }
            ]
        },
      }
    }
}
</script>

<style scoped>
    .top-section {
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;
    }
    .image img {
        max-width: 100%;
        border-radius: 10px;
        width: 100%;
    }
    .image {
        border: 2px solid #1F6FFF;
        border-radius: 10px;
    }
    .text-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .text-content h2, .text-content p {
        margin-bottom: 32px;
    }
    .text-content h2 {
        color: #1c1c1c;
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
    }
    .text-content p {
        color: #3d3d3d;
        font-size: 18px;
        line-height: 23px;
        font-weight: 400;
    }
    .slick-carousel {
        background: #f3f3f3;
        padding: 70px 0;
        margin-bottom: 100px;
    }
    .brand-image img {
        margin: auto;
    }
    .section-title {
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.25px;
        color: #1C1C1C;
        margin-bottom: 72px;
    }
    .case {
        display: flex;
        flex-direction: column;
        max-width: 360px;
        margin-bottom: 80px;
    }
    .case:hover {
        text-decoration: none;
    }
    .case-img {
        margin-bottom: 16px;
    }
    .case-img img {
        max-width: 100%;
    }
    .case-hash {
        color: #2351FF;
        text-transform: uppercase;
        margin-bottom: 8px;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
    }
    .case strong {
        font-weight: 800;
        font-size: 24px;
        line-height: 30px;
        color: #1c1c1c;
    }
    .cases-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    section.featured-cases {
        margin-bottom: 80px;
    }
    @media (min-width: 1200px) {
        .top-section {
            flex-direction: row;
            align-items: center;
        }
        .image {
            margin-right: 50px;
            min-width: 588px;
            transform: translate(-50px, 50px);
        }
        .image img {
            transform: translate(50px, -50px);
        }
        .cases-container {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
        }
    }
    @media (max-width: 1199px) {
        .image {
            margin-bottom: 60px;
        }
    }
</style>