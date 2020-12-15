<template>
    <div>
        <section class="header">
            <div class="container">
                <router-link to="/" class="logo">
                    <img src="../assets/Blog/big-bang-shop-branca.svg" alt="">
                </router-link>
                <span class="page-title">e-books</span>
            </div>
        </section>
        <section class="main-section">
            <div class="container">
                <div class="breadcrumb">
                    <router-link to="/" class="path">Home</router-link><i class="fas fa-chevron-right"></i>
                    <router-link to="/ebooks" class="path">E-books</router-link><i class="fas fa-chevron-right"></i>
                    <span class="path">Como ganhar dinheiro com e-commerce</span>
                </div>
            </div>
            <div class="container">
                <h1 class="text-center book-title">Como ganhar mais dinheiro com e-commerce</h1>
                <div class="ebook-form">
                    <div class="ebook-image">
                        <img src="../assets/Blog/ebook-image.png" alt="">
                    </div>
                <div class="form-column">
                    <div class="form-title">
                        <h1>Faça o download grátis</h1>
                    </div>
                    <form action="#" method="post">
                        <input class="form-input" type="text" name="name" placeholder="Seu nome">
                        <input class="form-input" type="text" name="email" placeholder="Seu e-mail">
                        <input class="form-input" type="text" name="phone" placeholder="Seu telefone">
                        <select name="product" id="product-select" class="form-select">
                            <option value="Selecione">Qual o seu perfil?</option>
                            <option value="Loja Start">Loja Start</option>
                            <option value="Full Commerce">Full Commerce</option>
                            <option value="Marketplace">Marketplace</option>
                        </select>
                        <i class="fas fa-chevron-down"></i>
                        <select name="product" id="product-select" class="form-select">
                            <option value="Selecione">Você já possui e-commerce?</option>
                            <option value="yes">Sim</option>
                            <option value="no">Não</option>
                        </select>
                        <i class="fas fa-chevron-down"></i>
                        <select name="product" id="product-select" class="form-select">
                            <option value="Selecione">Já é cliente Big Bang?</option>
                            <option value="yes">Sim</option>
                            <option value="no">Não</option>
                        </select>
                        <i class="fas fa-chevron-down"></i>
                        <input type="submit" name="submit" value="Baixar e-book" class="btn btn-primary btn-download" />
                        <p class="privacy">Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.</p>
                    </form>
                </div>
                </div>
            </div>
        </section>
        <section class="e-book-info">
            <div class="container info-content">
                <div class="text-content">
                    <h4 class="mb-2">O que você vai encontrar neste e-book</h4>
                    <p class="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h4 class="mb-2">Como ganhar mais dinheiro com e-commerce</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="mb-5">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos 
                        dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia 
                        animi, id est laborum et dolorum fuga.
                    </p>
                    <h4 class="mb-2">Para quem é este e-book?</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="ebook-download">
                    <div class="ebook-box">
                        <div class="box-title">
                            <strong class="text-left">Especificações do e-book</strong>
                        </div>
                        <div class="box-info">
                            <div class="images">
                                <img src="../assets/Blog/file-pdf.svg" alt="">
                                <img src="../assets/Blog/book-open.svg" alt="">
                                <img src="../assets/Blog/download.svg" alt="">
                                <img src="../assets/Blog/user-circle.svg" alt="">
                            </div>
                            <div class="box-component">
                                <div class="text-column">
                                    <strong>FORMATO</strong>
                                    <span>PDF</span>
                                </div>
                                <div class="text-column">
                                    <strong>PÁGINAS</strong>
                                    <span>18</span>
                                </div>
                                <div class="text-column">
                                    <strong>TAMANHO DO ARQUIVO</strong>
                                    <span>3,47 mb</span>
                                </div>
                                <div class="text-column">
                                    <strong>AUTOR</strong>
                                    <span>Fulano de Tal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary btn-download-pdf">Baixar e-book</a>
                    <span class="minimal-info">Whitepaper disponível em PDF.</span>
                </div>
            </div>
        </section>
        <RatingForm />
    </div>
</template>

<script>
import RatingForm from '../components/RatingForm.vue'

export default {
    name: 'EbookPage',
    components: {
        RatingForm
    }
}
</script>

<style scoped>
    .header {
        background: #2351FF;
        padding: 43px 0;
    }
    .logo {
        padding-right: 16px;
        margin-right: 16px;
        border-right: 1px solid #00BAE9;
        display: block;
    }
    .header .container {
        display: flex;
        align-items: center;
    }
    .page-title {
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        color: #fff;
    }
    .main-section {
        background: #1F6FFF;
        padding-bottom: 160px;
    }
    .breadcrumb {
        display: flex;
        align-items: center;
        background: none;
        color: #fff;
        width: 100%;
        padding-bottom: 8px;
        border-bottom: 1px solid #fff;
        margin-bottom: 73px;
    }
    .path {
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: #fff;
    }
    .path:not(:last-child), .fas.fa-chevron-right {
        margin-right: 10px;
    }
    .book-title {
        color: #fff;
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 56px;
        margin-bottom: 80px;
    }
    .ebook-image {
        margin-bottom: 48px;
    }
    .text-content {
        margin-bottom: 48px;
    }
    .ebook-form {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .form-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 486px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        background: #fff;
    }
    .form-column form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding: 24px;
    }
    .form-title {
        border-bottom: 1px solid #DEDEDE;
        padding: 24px 34px;
        text-align: center;
        width: 100%;
    }
    .form-title h1 {
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
        color: #1c1c1c;
    }
    input.btn.btn-primary.btn-download {
        width: 100%;
        background-color: #2351ff;
        border-color: #2351ff;
        padding: 16px 0;
        font-size: 15px;
        line-height: 20px;
        font-weight: 700;
        margin-bottom: 24px;
    }
    input.form-input {
        width: 100%;
        line-height: 52px;
        padding-left: 10px;
        margin-bottom: 24px;
        border: 1px solid #2351FF;
        box-sizing: border-box;
        border-radius: 4px;
    }
    select.form-select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        width: 100%;
        padding-left: 10px;
        line-height: 52px;
        height: 52px;
        margin-bottom: 7px;
        border: 1px solid #2351FF;
        box-sizing: border-box;
        border-radius: 4px;
    }
    .form-select + .fas.fa-chevron-down {
        z-index: 9;
        align-self: flex-end;
        transform: translateY(-40px);
        margin-right: 15px;
        color: #2351ff;
    }
    .form-column strong {
        margin-bottom: 16px;
        color: #1c1c1c;
        font-size: 16px;
        line-height: 20px;
    }
    .schedule, .contact {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }
    .schedule div, .contact div {
        margin-right: 10px;
        color: #1c1c1c;
    }
    .label-checkbox {
        margin-left: 24px;
        position: relative;
    }
    .label-checkbox::before {
        content: "";
        background: #2351ff;
        width: 18px;
        height: 18px;
        position: absolute;
        left: -23px;
        top: 1px;
        border-radius: 4px;
        transform: scale(0) rotateZ(180deg);
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .label-checkbox::after {
        content: "";
        background: none;
        width: 20px;
        height: 20px;
        position: absolute;
        left: -24px;
        border: 1px solid #2351ff;
        border-radius: 4px;
    }
    .form-checkbox {
        display: none;
    }
    .form-checkbox:checked + .label-checkbox::before {
        transform: scale(1) rotateZ(0deg);
    }
    .ebook-image img {
        max-width: 100%;
    }
    .privacy {
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #666;
        text-align: center;
    }
    .e-book-info {
        padding: 126px 0;
        background: #F3F3F3;
    }
    .text-content h4 {
        color: #2351FF;
        font-weight: 800;
        font-size: 24px;
        line-height: 30px;
    }
    .text-column {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }
    .text-column strong {
        color: #2351FF;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 4px;
    }
    .text-column span {
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        color: #3d3d3d;
    }
    .box-component {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    .images {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 24px;
    }
    .images img {
        margin-bottom: 24px;
    }
    .box-info {
        display: flex;
        align-items: center;
    }
    .ebook-box {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        margin-bottom: 40px;
    }
    .box-title, .box-info {
        padding: 40px;
    }
    .box-title {
        border-bottom: 1px solid #dedede;
    }
    .info-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .box-title strong {
        color: #1c1c1c;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
    }
    .btn-download-pdf {
        background: #2351FF;
        padding: 16px 0;
        width: 100%;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 8px;
    }
    .minimal-info {
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #666;
        text-align: center;
        width: 100%;
        display: block;
    }
    .e-book-info {
        margin-bottom: 100px;
    }
    @media (min-width: 1200px) {
        .ebook-image {
            margin-bottom: 0;
        }
        .ebook-form {
            flex-direction: row;
        }
        .ebook-image {
            margin-right: 100px;
        }
        .form-column {
            max-width: 384px;
        }
        .info-content {
            flex-direction: row;
            align-items: flex-start;
        }
        .ebook-download {
            min-width: 384px;
        }
        .text-content {
            margin-right: 100px;
            margin-bottom: 0;
        }
    }
</style>