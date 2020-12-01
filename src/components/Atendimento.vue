<template>
    <div>
        <Header/>
        <PageTitle title="Atendimento"/>
        <Breadcrumb page="Atendimento" />
        <section class="atendimento-options">
            <div class="container">
                <a href="#" class="option-component">
                    <i class="fas fa-headset"></i>
                    <strong>Help Desk</strong>
                </a>
                <a href="#" class="option-component">
                    <i class="fab fa-whatsapp"></i>
                    <strong>Central de Ajuda</strong>
                </a>
                <a href="#" class="option-component">
                    <i class="far fa-envelope"></i>
                    <strong>Perguntas Frequentes</strong>
                </a>
                <a href="#" class="option-component">
                    <i class="far fa-comment-alt"></i>
                    <strong>Área do Cliente</strong>
                </a>
            </div>
        </section>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import PageTitle from '../components/PageTitle.vue'
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
    name: 'Atendimento',
    components: {
        Header,
        PageTitle,
        Breadcrumb
    }
}
</script>

<style scoped>
    a:hover {
        text-decoration: none;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
    }
    .option-component {
        width: 260px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 34px 0;
        border: 1px solid #2351FF;
        border-radius: 8px;
    }
    .fas.fa-headset, .fab.fa-whatsapp, .far.fa-envelope, .far.fa-comment-alt {
        margin-bottom: 24px;
        color: #2351ff;
        font-size: 36px;
    }
    .option-component strong {
        color: #1c1c1c;
        font-size: 20px;
        line-height: 25px;
        font-weight: 400;
    }
    @media (min-width: 1200px) {
        .container {
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>