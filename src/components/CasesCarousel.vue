<template>
  <div class="slick-depoimentos">
    <h1 class="text-center">Depoimentos</h1>
    <div class="container cases-carousel">
    <VueSlickCarousel v-bind="settings">
      <div class="column-component">
          <div class="center-top-img">
              <img src="../assets/Home/placeholder-photo.png" alt="">
          </div>
          <div class="content">
              <strong>Nome e sobrenome</strong>
              <div class="cargo">
                  <span>Cargo</span><i class="fas fa-circle"></i><span>Empresa</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
      </div>
      <div class="column-component">
          <div class="center-top-img">
              <img src="../assets/Home/placeholder-photo.png" alt="">
          </div>
          <div class="content">
              <strong>Nome e sobrenome</strong>
              <div class="cargo">
                  <span>Cargo</span><i class="fas fa-circle"></i><span>Empresa</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
      </div>
      <div class="column-component">
          <div class="center-top-img">
              <img src="../assets/Home/placeholder-photo.png" alt="">
          </div>
          <div class="content">
              <strong>Nome e sobrenome</strong>
              <div class="cargo">
                  <span>Cargo</span><i class="fas fa-circle"></i><span>Empresa</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
      </div>
      <div class="column-component">
          <div class="center-top-img">
              <img src="../assets/Home/placeholder-photo.png" alt="">
          </div>
          <div class="content">
              <strong>Nome e sobrenome</strong>
              <div class="cargo">
                  <span>Cargo</span><i class="fas fa-circle"></i><span>Empresa</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
      </div>
    </VueSlickCarousel>
    </div>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'CasesCarousel',
    components: { VueSlickCarousel },
    data() {
      return {
         settings: {
            arrows: true,
            dots: true,
            centerMode: true,
            centerPadding: "40px",
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 3,
            speed: 500,
            index: 2,
            responsive: [
                {
                "breakpoint": 1024,
                "settings": {
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 3,
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
                    "slidesToShow": 1,
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
    .slick-depoimentos {
        background-color: #F3F3F3;
        color: #fff;
        padding: 80px 0;
    }
    .slick-depoimentos h1 {
        color: #1c1c1c;
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        position: relative;
    }
    .column-component {
        transform: scale(0.8);
        opacity: 0.5;
        transition: all 0.4s;
    }
    .slick-slide.slick-active.slick-center.slick-current .column-component {
        transform: scale(1);
        opacity: 1;
    }
    .center-top-img img {
        display: block;
        margin: auto;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 32px;
        padding-top: 56px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        padding-bottom: 0;
    }
    .content strong {
        color: #2351ff;
        font-size: 18px;
        font-weight: 800;
        margin-bottom: 8px;
        text-align: center;
    }
    .content p {
        color: #3d3d3d;
        text-align: center;
        font-size: 18px;
        line-height: 22px;
    }
    .cargo {
        color: #666;
        font-size: 14px;
        line-height: 19px;
        display: flex;
        align-items: center;
        margin-bottom: 32px;
    }
    .cargo span {
        margin: 0 8px;
    }
    i.fas.fa-circle {
        font-size: 6px;
    }
    .center-top-img {
        display: block;
        margin-bottom: -90px;
    }
    .slick-depoimentos h1::after {
        content: '';
        width: 24px;
        height: 2px;
        background: #2351ff;
        position: absolute;
        transform: translateY(60px);
        left: 49.5%;
    }
</style>

