<template>
    <div>
        <section class="middle-section">
            <div class="container">
                <div class="column-component">
                    <i class="fa-mobile"></i>
                    <strong>App Development</strong>
                    <p>Criação e desenvolvimento de aplicativos mobile para plataformas iOS™ e Android™.</p>
                    <a href="#">Saiba mais</a>
                </div>
                <div class="column-component">
                    <i class="fa-window"></i>
                    <strong>Sistemas Web</strong>
                    <p>Sistemas automatizados e responsivos, na nuvem, para uma infinidade de operações.</p>
                    <a href="#">Saiba mais</a>
                </div>
                <div class="column-component">
                    <i class="fa-laptop"></i>
                    <strong>Sites Institucionais</strong>
                    <p>O site da sua empresa com alta performance, design responsivo e presença digital.</p>
                    <a href="#">Saiba mais</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'MiddleSectionTecnologia'
}
</script>

<style scoped>
    .column-component {
        max-width: 282px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        padding: 40px 16px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        cursor: default;
        transition: all 0.4s;
    }
    .column-component i, .column-component strong, .column-component p {
        margin-bottom: 24px;
    }
    .column-component strong {
        color: #1c1c1c;
        font-weight: 400;
        font-size: 20px;
        transition: all 04.s;
    }
    .column-component p {
        color: #666666;
        font-size: 16px;
        text-align: center;
        transition: all 04.s;
    }
    .column-component a {
        color: #2351ff;
        font-size: 15px;
        transition: all 04.s;
    }
    .column-component:hover {
        background: #2351ff;
    }
    .column-component:hover p, .column-component:hover strong, .column-component:hover i::before, .column-component:hover a {
        color: #FFFFFF;
    }
    .middle-section {
        margin-bottom: 80px;
    }
    .middle-section .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .fa-mobile::before {
        content: '\f10b';
        font-family: fontawesome;
        font-weight: 300;
        font-size: 35px;
        font-style: normal;
        color: #2351FF;
        transition: all 0.4s;
    }
    .fa-window::before {
        content: '\f37e';
        font-family: fontawesome;
        font-weight: 300;
        font-size: 35px;
        font-style: normal;
        color: #2351FF;
        transition: all 0.4s;
    }
    .fa-laptop::before {
        content: '\f5fc';
        font-family: fontawesome;
        font-weight: 300;
        font-size: 35px;
        font-style: normal;
        color: #2351FF;
        transition: all 0.4s;
    }
    @media (min-width: 1200px) {
        .middle-section .container {
            flex-direction: row;
        }
        .column-component {
            margin-bottom: 0;
        }
    }
</style>