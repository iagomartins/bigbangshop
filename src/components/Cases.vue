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
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                    <div class="brand-image">
                        <img src="../assets/Home/zak_logo.svg" alt="">
                    </div>
                </VueSlickCarousel>
                <SlickStyles/>
            </div>
        </section>
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

export default {
    name: 'Cases',
    components: {
        Header,
        PageTitle,
        Breadcrumb,
        VueSlickCarousel,
        SlickStyles
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
    }
    .brand-image img {
        margin: auto;
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
    }
    @media (max-width: 1199px) {
        .image {
            margin-bottom: 60px;
        }
    }
</style>