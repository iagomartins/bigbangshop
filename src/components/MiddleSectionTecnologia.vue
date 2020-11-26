<template>
    <div>
        <section class="middle-section">
            <div class="container">
                <div class="column-component">
                    <img src="../assets/Home/Appdev.svg" alt="">
                    <strong>App Development</strong>
                    <p>Criação e desenvolvimento de aplicativos mobile para plataformas iOS™ e Android™.</p>
                    <a href="#">Saiba mais</a>
                </div>
                <div class="column-component">
                    <img src="../assets/Home/Web.svg" alt="">
                    <strong>Sistemas Web</strong>
                    <p>Sistemas automatizados e responsivos, na nuvem, para uma infinidade de operações.</p>
                    <a href="#">Saiba mais</a>
                </div>
                <div class="column-component">
                    <img src="../assets/Home/Sites.svg" alt="">
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
    }
    .column-component img, .column-component strong, .column-component p {
        margin-bottom: 24px;
    }
    .column-component strong {
        color: #1c1c1c;
        font-weight: 400;
        font-size: 20px;
    }
    .column-component p {
        color: #666666;
        font-size: 16px;
        text-align: center;
    }
    .column-component a {
        color: #2351ff;
        font-size: 15px;
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
    @media (min-width: 1200px) {
        .middle-section .container {
            flex-direction: row;
        }
        .column-component {
            margin-bottom: 0;
        }
    }
</style>