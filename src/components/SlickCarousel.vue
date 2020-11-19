<template>
  <div class="slick-depoimentos">
    <h1 class="text-center">Depoimentos</h1>
    <div class="container">
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
    name: 'SlickCarousel',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            arrows: true,
            dots: true,
            "centerMode": true,
            "centerPadding": "20px",
            "focusOnSelect": true,
            "infinite": true,
            "slidesToShow": 3,
            "speed": 500,
            "responsive": [
                {
                "breakpoint": 1024,
                "settings": {
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "infinite": true,
                    "dots": true
                }
                },
                {
                "breakpoint": 600,
                "settings": {
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
    .slick-depoimentos {
        background-color: #2351ff;
        color: #fff;
        padding: 80px 0;
    }
    .column-component {
        padding: 0 10px;
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
        background: #00BAE9;
        position: absolute;
        transform: translateY(60px);
        left: 50%;
    }
</style>

