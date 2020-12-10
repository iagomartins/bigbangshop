<template>
    <div>
        <section class="middle-section">
            <div class="container">
                <div class="column-component">
                    <img src="../assets/Home/Appdev.svg" alt="">
                    <strong>App Development</strong>
                    <p>Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado.</p>
                    <router-link to="/tecnologia/appdevelopment">Saiba mais</router-link>
                </div>
                <div class="column-component">
                    <img src="../assets/Home/Web.svg" alt="">
                    <strong>Sistemas Web</strong>
                    <p>A solução completa em e-commerce, com recursos de alta performance e design exclusivo.</p>
                    <router-link to="/tecnologia/sistemasweb">Saiba mais</router-link>
                </div>
                <div class="column-component">
                    <img src="../assets/Home/Sites.svg" alt="">
                    <strong>Sites Institucionais</strong>
                    <p>Crie seu próprio marketplace, um shopping online onde outras lojas podem vender.</p>
                    <router-link to="/tecnologia/sitesinstitucionais">Saiba mais</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'LowerSection'
}
</script>

<style scoped>
    .column-component {
        max-width: 282px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
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