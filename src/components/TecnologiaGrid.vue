<template>
    <div class="container grid-container">
        <InfoComponent title="Alta performance" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Layout personalizado" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Design responsivo" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Integração com mídias sociais" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Painel de controle" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="CMS próprio" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Servidor dedicado" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Atendimento humanizado" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
    </div>
</template>

<script>
import InfoComponent from '../components/InfoComponent.vue'

export default {
    name: 'TecnologiaGrid',
    components: {
        InfoComponent
    }
}
</script>

<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: 100%;
        justify-items: center;
        align-items: center;
        margin-bottom: 64px;
    }
    @media (min-width: 768px) {
        .grid-container {
            grid-template-columns: 50% 50%;
        }
    }
    @media (min-width: 1200px) {
        .grid-container {
            grid-template-columns: 25% 25% 25% 25%;
        }
    }
</style>