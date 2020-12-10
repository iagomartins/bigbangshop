<template>
    <div>
        <section class="middle-section">
            <div class="container">
                <div class="column-component">
                    <i class="fa-desktop"></i>
                    <strong>Loja Start</strong>
                    <p>Ideal para quem quer iniciar suas vendas online com o melhor custo x benefício do mercado.</p>
                    <router-link to="/ecommerce/lojastart">Saiba mais</router-link>
                </div>
                <div class="column-component">
                    <i class="fa-bag"></i>
                    <strong>Full Commerce</strong>
                    <p>A solução completa em e-commerce, com recursos de alta performance e design exclusivo.</p>
                    <router-link to="/ecommerce/fullcommerce">Saiba mais</router-link>
                </div>
                <div class="column-component">
                    <i class="fa-market"></i>
                    <strong>Marketplace</strong>
                    <p>Crie seu próprio marketplace, um shopping online onde outras lojas podem vender.</p>
                    <router-link to="/ecommerce/marketplace">Saiba mais</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'MiddleSectionCommerce'
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
    .fa-desktop::before {
        content: '\f108';
        font-family: fontawesome;
        font-weight: 300;
        font-size: 35px;
        font-style: normal;
        color: #2351FF;
        transition: all 0.4s;
    }
    .fa-bag::before {
        content: '\f847';
        font-family: fontawesome;
        font-weight: 300;
        font-size: 35px;
        font-style: normal;
        color: #2351FF;
        transition: all 0.4s;
    }
    .fa-market::before {
        content: '\f54e';
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