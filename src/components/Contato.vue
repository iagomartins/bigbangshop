<template>
    <div>
        <Header/>
        <PageTitle title="Contato"/>
        <Breadcrumb page="Contato"/>
        <section class="contact">
            <div class="container icons">
                <div class="text-bottom">
                    <div class="icon-content">
                        <img src="../assets/Contato/phone-alt.svg" alt="">
                        <strong>4004 3320</strong>
                    </div>
                    <span>Segunda a Sexta | 8h às 18h</span>
                    <span>Sábado | 8h às 12h</span>
                </div>
                <div class="text-bottom">
                    <div class="icon-content">
                        <img src="../assets/Contato/whatsapp.svg" alt="">
                        <strong>(31) 9 7853 4488</strong>
                    </div>
                    <span>Segunda a Sexta | 8h às 18h</span>
                    <span>Sábado | 8h às 12h</span>
                </div>
                <div class="icon-content">
                    <img src="../assets/Contato/envelope.svg" alt="">
                    <strong>contato@bigbangshop.com.br</strong>
                </div>
                <a href="#" class="icon-content">
                    <img src="../assets/Contato/dots-chat.svg" alt="">
                    <strong>Acesse o Chat</strong>
                </a>
            </div>
        </section>
        <section class="form-section">
            <div class="container">
                <div class="form-block">
                    <form action="#" method="post">
                        <input type="text" class="form-control mb-3 text-input" placeholder="Nome">
                        <input type="text" class="form-control mb-3 text-input" placeholder="E-mail">
                        <input type="text" class="form-control mb-3 text-input" placeholder="Telefone">
                        <input type="text" class="form-control mb-3 text-input" placeholder="Empresa">
                        <input type="text" class="form-control mb-3 text-input" placeholder="Assunto">
                        <textarea name="message" id="message" cols="30" rows="10" class="message-input mb-3" placeholder="Mensagem"></textarea>
                        <input type="submit" value="Enviar" class="btn btn-primary btn-enviar">
                    </form>
                </div>
                <div class="maps-block">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0754126010615!2d-43.95864764899939!3d-19.963330544437266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697104f2c5345%3A0xc5f8a2b6b3baba21!2sBig%20Bang%20Shop!5e0!3m2!1spt-BR!2sbr!4v1607017472214!5m2!1spt-BR!2sbr" 
                    width="588" height="588" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </section>
        <section>
            <div class="container social">
                <h1 class="text-center title-redes">Redes Sociais</h1>
                <div class="social-links">
                    <a href="#">
                        <img src="../assets/Contato/facebook-f.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/Contato/instagram.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/Contato/twitter.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/Contato/linkedin-in.svg" alt="">
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import PageTitle from '../components/PageTitle.vue'
import Breadcrumb from '../components/Breadcrumb.vue'

export default {
    name: 'Contato',
    components: {
        Header,
        PageTitle,
        Breadcrumb
    }
}
</script>

<style scoped>
    .icons {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 100px;
    }
    .text-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
    }
    .icon-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #2351FF;
        border-radius: 8px;
        justify-content: space-evenly;
        width: 260px;
        height: 151px;
        margin-bottom: 40px;
    }
    .icon-content:hover {
        text-decoration: none;
    }
    .text-bottom .icon-content {
        margin-bottom: 16px;
    }
    .text-bottom span {
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.07px;
        color: #1C1C1C;
    }
    .icon-content strong {
        font-weight: normal;
        font-size: 17px;
        line-height: 25px;
        text-align: center;
        color: #1C1C1C;
    }
    .form-section {
        padding: 56px 0;
        margin-bottom: 80px;
        background: #F3F3F3;
    }
    .text-input {
        border: 2px solid #2351FF;
        border-radius: 8px;
        height: 52px;
        background: #F3F3F3;
    }
    .message-input {
        resize: none;
        width: 100%;
        border: 2px solid #2351FF;
        border-radius: 8px;
        height: 104px;
        padding: .375rem .75rem;
        background: #F3F3F3;
    }
    .btn-enviar {
        background: #2351FF;
        color: #fff;
        padding: 16px 32px;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        border-radius: 8px;
    }
    .form-section .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .maps-block {
        margin-left: 100px;
        border: 1px solid #dedede;
        border-radius: 8px;
        display: none;
    }
    .maps-block iframe {
        z-index: -1;
        border-radius: 8px;
    }
    .social-links {
        display: flex;
        align-items: center;
        margin: auto;
    }
    .social {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
    }
    .title-redes {
        margin-bottom: 100px;
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        text-align: center;
        letter-spacing: 0.25px;
        color: #1C1C1C;
    }
    .social-links a:not(:last-child) {
        margin-right: 6vw;
    }
    @media (min-width: 1200px) {
        .icons {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
        }
        .icon-content, .text-bottom {
            margin-bottom: 0;
        }
        .form-block {
            width: 50%;
        }
        .form-section .container {
            flex-direction: row;
            align-items: flex-start;
        }
        .maps-block {
            display: block;
        }
    }
</style>