<template>
    <div class="container grid-container">
        <InfoComponent title="Análise de acessos" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Relatórios inteligentes" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Design responsivo" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Recuperação de vendas" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Integrações" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Mobile first" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Migração facilitada" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
        <InfoComponent title="Atendimento humanizado" info="Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado." />
    </div>
</template>

<script>
import InfoComponent from '../components/InfoComponent.vue'

export default {
    name: 'EcommerceGrid',
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