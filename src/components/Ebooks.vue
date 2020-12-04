<template>
    <div>
        <section class="header">
            <div class="container">
                <div class="logo-big-bang">
                    <Logo/>
                </div>
                <span class="page-title">materiais</span>
            </div>
        </section>
        <BannerEbooks/>
        <div class="container ebooks-list">
            <div class="ebooks-row">
                <a href="#" class="ebook-content">
                    <div class="image">
                        <img src="../assets/Blog/ebook-img.png" alt="">
                    </div>
                    <div class="flex-content">
                        <div class="content-title">
                            <span class="ebook-hash">E-Book</span>
                            <strong>Como ganhar mais dinheiro com e-commerce</strong>
                        </div>
                        <span class="btn btn-primary btn-ebook">Baixar e-book</span>
                    </div>
                </a>
                <a href="#" class="ebook-content">
                    <div class="image">
                        <img src="../assets/Blog/ebook-img.png" alt="">
                    </div>
                    <div class="flex-content">
                        <div class="content-title">
                            <span class="ebook-hash">VÍDEO</span>
                            <strong>Guia prático: como criar copys perfeitas para vender mais</strong>
                        </div>
                        <span class="btn btn-primary btn-ebook">Assistir vídeo</span>
                    </div>
                </a>
                <a href="#" class="ebook-content">
                    <div class="image">
                        <img src="../assets/Blog/ebook-img.png" alt="">
                    </div>
                    <div class="flex-content">
                        <div class="content-title">
                            <span class="ebook-hash">Curso</span>
                            <strong>Como criar sua loja virtual de moda em 7 passos lorem ipsum dolor site amet</strong>
                        </div>
                        <span class="btn btn-primary btn-ebook">Quero aprender</span>
                    </div>
                </a>
            </div>
            <div class="ebooks-row">
                <a href="#" class="ebook-content">
                    <div class="image">
                        <img src="../assets/Blog/ebook-img.png" alt="">
                    </div>
                    <div class="flex-content">
                        <div class="content-title">
                            <span class="ebook-hash">E-Book</span>
                            <strong>Como ganhar mais dinheiro com e-commerce</strong>
                        </div>
                        <span class="btn btn-primary btn-ebook">Baixar e-book</span>
                    </div>
                </a>
                <a href="#" class="ebook-content">
                    <div class="image">
                        <img src="../assets/Blog/ebook-img.png" alt="">
                    </div>
                    <div class="flex-content">
                        <div class="content-title">
                            <span class="ebook-hash">VÍDEO</span>
                            <strong>Guia prático: como criar copys perfeitas para vender mais</strong>
                        </div>
                        <span class="btn btn-primary btn-ebook">Assistir vídeo</span>
                    </div>
                </a>
                <a href="#" class="ebook-content">
                    <div class="image">
                        <img src="../assets/Blog/ebook-img.png" alt="">
                    </div>
                    <div class="flex-content">
                        <div class="content-title">
                            <span class="ebook-hash">Curso</span>
                            <strong>Como criar sua loja virtual de moda em 7 passos lorem ipsum dolor site amet</strong>
                        </div>
                        <span class="btn btn-primary btn-ebook">Quero aprender</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import BannerEbooks from '../components/BannerEbooks.vue'

export default {
    name: 'Ebooks',
    components: {
        Logo,
        BannerEbooks
    }
}
</script>

<style>
    .header {
        padding: 36px 0;
    }
    section.header .container {
        display: flex;
        align-items: center;
    }
    .logo-big-bang {
        border-right: 1px solid #00BAE9;
        margin-right: 16px;
    }
    .page-title {
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.25px;
        color: #2351FF;
    }
    .ebook-content {
        display: flex;
        flex-direction: column;
        max-width: 360px;
        height: 445px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        margin-bottom: 80px;
    }
    .ebook-content:hover {
        text-decoration: none;
    }
    .image img {
        max-width: 100%;
    }
    .ebook-hash {
        color: #2351FF;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 4px;
    }
    .ebook-content strong {
        color: #1c1c1c;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
    }
    .btn-ebook {
        background-color: #2351FF;
        width: -moz-fit-content;
        width: fit-content;
        padding: 16px 32px;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
    }
    .flex-content {
        padding: 24px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .content-title {
        display: flex;
        flex-direction: column;
    }
    .ebooks-row {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (min-width: 1200px) {
        .ebooks-row {
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>