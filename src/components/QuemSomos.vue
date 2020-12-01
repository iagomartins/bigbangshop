<template>
    <div>
        <Header/>
        <PageTitle title="Quem Somos" />
        <Breadcrumb page="Quem Somos" />
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
        <div class="container top-section">
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
            <div class="second-image">
                <img src="../assets/Institucional/text-image.png" alt="">
            </div>
        </div>
        <section class="banner-lower">
            <img src="../assets/Institucional/banner-institucional.png" alt="">
        </section>
        <section class="lower-section">
            <div class="container">
                <div class="lower-links">
                    <a href="#" class="link-card">
                        <strong>Entre em contato</strong>
                        <i class="fas fa-headset"></i>
                    </a>
                    <a href="#" class="link-card">
                        <strong>Cases e Clientes</strong>
                        <img src="../assets/Institucional/presentation.svg" alt="">
                    </a>
                    <a href="#" class="link-card">
                        <strong>Atendimento</strong>
                        <i class="far fa-question-circle"></i>
                    </a>
                </div>
                <div class="team">
                    <strong>Quer fazer parte da nossa equipe?</strong>
                    <router-link to="/carreiras">Veja nossas vagas</router-link>
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
    name: 'QuemSomos',
    components: {
        Header,
        PageTitle,
        Breadcrumb
    }
}
</script>

<style scoped>
    .top-section {
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;
    }
    .image img, .second-image img {
        max-width: 100%;
        border-radius: 10px;
        width: 100%;
    }
    .image, .second-image {
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
    .banner-lower {
        margin-bottom: 100px;
    }
    .banner-lower img {
        width: 100%;
    }
    .lower-links {
        flex-direction: column;
        align-items: center;
        margin-bottom: 120px;
    }
    .link-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 282px;
        height: 149px;
        border: 1px solid #2351FF;
        border-radius: 8px;
    }
    .link-card:hover {
        text-decoration: none;
    }
    .link-card strong {
        color: #1c1c1c;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
    }
    i.fas.fa-headset, i.far.fa-question-circle {
        color: #2351FF;
        font-size: 36px;
    }
    .team {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .team strong {
        margin-bottom: 16px;
        color: #1c1c1c;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
    }
    .team a {
        color: #2351FF;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
    }
    .lower-section {
        margin-bottom: 120px;
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
        .second-image {
            margin-left: 50px;
            min-width: 588px;
            transform: translate(50px, 50px);
        }
        .image img {
            transform: translate(50px, -50px);
        }
        .second-image img {
            transform: translate(-50px, -50px);
        }
        .lower-links {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
    @media (max-width: 1199px) {
        .image {
            margin-bottom: 60px;
        }
    }
</style>