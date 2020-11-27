<template>
    <div>
        <BlogHeader/>
        <div class="margin-top-header"></div>
        <Subcategorycrumb page="O novo normal: como os lojistas devem se preparar e os desafios a longo prazo" previous="Big Bang Blog" prevLink="/blog"/>
        <div class="container">
            <div class="post-title">
                <h1>O novo normal: como os lojistas devem se preparar e os desafios a longo prazo</h1>
                <div class="subtitles">
                    <span class="date">01 Jan 2020</span>
                    <a href="#" class="blog-topic">MERCADO</a>
                    <span class="author">Por <a href="#">Nome e Sobrenome</a></span>
                </div>
            </div>
            <div class="post-image">
                <img src="../assets/Blog/blogpost-banner.png" alt="">
            </div>
            <div class="post-content">
                <div class="social-media">
                    <a href="#">
                        <img src="../assets/Blog/facebook-icon.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/Blog/messenger-icon.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/Blog/twitter-icon.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/Blog/linkedin-icon.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/Blog/telegram-icon.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/Blog/whatsapp-icon.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/Blog/email-icon.svg" alt="">
                    </a>
                </div>
                <div class="text-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium efficitur diam nec commodo. Fusce ut vulputate sem.
                        Etiam interdum tincidunt blandit. Proin sed tortor vestibulum, ullamcorper justo in, rhoncus est. Vivamus dapibus quam at nunc
                        euismod dictum. Suspendisse orci sem, eleifend et tortor vel, elementum scelerisque ligula. Aliquam venenatis sapien in nibh
                        tristique, non sollicitudin libero finibus. Vestibulum placerat est leo, quis mollis neque malesuada ac. Phasellus quis
                        fermentum risus. Duis eleifend viverra magna, vel pharetra odio euismod vitae. Quisque facilisis lacinia pellentesque.
                        Vivamus sit amet fermentum neque.
                    </p>
                    <p>
                        Ut sed diam mattis, gravida diam in, aliquet ligula. Vivamus malesuada quam vel dolor tempor tempus. Aliquam vitae faucibus enim.
                        Praesent ornare leo massa, mollis tincidunt lectus commodo vel. Aliquam erat volutpat. Nullam euismod convallis tellus, sed egestas
                        elit rutrum nec. Nam vitae odio ut sapien congue fringilla. Sed hendrerit euismod eros, eu malesuada elit convallis et. Duis lacinia
                        lacus ullamcorper erat efficitur, sit amet blandit lacus efficitur.
                    </p>
                    <div class="text-image">
                        <img src="../assets/Blog/termos-de-uso.png" alt="">
                    </div>
                    <h2>Quisque efficitur pretium massa</h2>
                    <p>
                        Nulla vel accumsan ipsum, in aliquet lectus. Vivamus pulvinar in arcu et faucibus. Curabitur eu condimentum dui, id eleifend nibh.
                        Curabitur mattis a ligula sit amet pulvinar. Pellentesque et luctus nisl. Pellentesque in nisi elit. Vivamus blandit volutpat lectus
                        vel mattis. Vivamus libero est, cursus ut semper sit amet, accumsan eleifend lectus. Aliquam erat volutpat. Curabitur a velit consequat,
                        gravida tortor vitae, interdum nibh. Quisque efficitur pretium massa, sit amet sollicitudin metus consectetur at.
                    </p>
                    <p>
                        Nullam quam arcu, placerat a porta eget, facilisis vel urna. Suspendisse in tempor ex. Proin quis semper lorem. Sed mauris nisi, tristique
                        et elementum sed, viverra vel urna. Sed tempor ex lacus, vel hendrerit turpis vehicula sed. Nulla venenatis, quam sed fermentum aliquet,
                        sem enim pellentesque diam, non molestie dui metus eget lacus. Morbi in pulvinar ante, ac lacinia erat.
                    </p>
                    <p>
                        Nunc sollicitudin risus at faucibus molestie. Duis in libero sit amet quam posuere placerat eget sit amet purus. Nam iaculis vitae felis eu ornare.
                        Etiam dapibus, ex id maximus dapibus, lectus tortor eleifend arcu, nec sodales augue quam id dui. Morbi vitae euismod ipsum. Etiam ultrices mi eget
                        porta faucibus. In fringilla eu urna vel blandit. Cras tincidunt enim vel libero cursus, efficitur venenatis orci sagittis. In ex nibh, fermentum eu
                        gravida at, faucibus at lacus. Morbi in tincidunt lectus.
                    </p>
                    <a href="#" class="text-image">
                        <img src="../assets/Blog/facebook-post.png" alt="">
                    </a>
                    <div class="search-tags">
                        <span>Tags: </span>
                        <a href="#" class="tag-btn">Tendências</a>
                        <a href="#" class="tag-btn">Tendências</a>
                        <a href="#" class="tag-btn">Tendências</a>
                        <a href="#" class="tag-btn">Tendências</a>
                    </div>
                </div>
                <div class="consult-form">
                    <div class="form-title">
                        <h2>Fale com um consultor</h2>
                    </div>
                    <form action="#" method="post">

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogHeader from '../components/BlogHeader.vue'
import Subcategorycrumb from '../components/Subcategorycrumb.vue'

export default {
    name:   'BlogPostPage',
    components: {
        BlogHeader,
        Subcategorycrumb
    }
}
</script>

<style scoped>
    .post-title {
        padding: 0 5vw;
        margin-bottom: 40px;
    }
    .post-title h1 {
        margin-bottom: 40px;
        font-size: 48px;
        line-height: 56px;
        color: #1C1C1C;
    }
    .margin-top-header {
        display: block;
        width: 100vw;
        margin-top: 218px;
    }
    .date, .author {
        font-size: 16px;
        line-height: 20px;
        color: #666;
        margin-right: 32px;
    }
    .blog-topic {
        color: #2351FF;
        font-size: 16px;
        line-height: 20px;
        margin-right: 30px;
    }
    .author a {
        color: #2351FF;
    }
    .post-image {
        border-radius: 8px;
        margin-bottom: 112px;
    }
    .post-image img {
        max-width: 100%;
    }
    .social-media a {
        margin: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .social-media {
        display: flex;
        flex-direction: row;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
        margin-bottom: 60px;
    }
    .post-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .text-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .text-image {
        margin-bottom: 40px;
        border-radius: 8px;
    }
    .text-content h2 {
        margin-bottom: 24px;
    }
    .text-content p {
        margin-bottom: 40px;
        font-size: 18px;
        line-height: 23px;
        color: #666666;
    }
    .search-tags {
        margin-bottom: 60px;
    }
    .search-tags span {
        font-size: 18px;
        line-height: 23px;
        color: #1c1c1c;
    }
    .tag-btn {
        color: #3d3d3d;
        font-size: 14px;
        line-height: 19px;
        background: #F3F3F3;
        border-radius: 4px;
        padding: 8px;
        margin: 0 8px;
    }
    @media (min-width: 1200px) {
        .margin-top-header {
            margin-top: 190px;
        }
    }
</style>