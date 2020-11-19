<template>
    <div class="clients">
        <div class="title-section">
            <h1>Clientes</h1>
        </div>
        <div class="container clients-grid">
            <div class="grid-item">
                <img src="../assets/Home/zak_logo.svg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/Home/cordial.svg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/Home/dash.svg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/Home/logo_Flor_com_Amor.svg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/Home/logo-cassotis-positiva.svg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/Home/Klus.svg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/Home/grupo-bamaq.svg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/Home/casa_perola.svg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/Home/autonomax.svg" alt="">
            </div>
            <div class="grid-item">
                <img src="../assets/Home/Frame.svg" alt="">
            </div>
        </div>
        <a href="#" class="clients-link">Conheça nossos cases e clientes</a>
    </div>

</template>

<script>
export default {
    name: 'Clients'
}
</script>

<style scoped>
    .clients {
        width: 100vw;
        background: #f3f3f3;
        padding-top: 46px;
        padding-bottom: 60px;
        margin-bottom: 134px;
    }
    .clients-grid {
        display: grid;
        grid-template-columns: 100%;
        justify-items: center;
        align-items: center;
        margin-bottom: 64px;
    }
    .grid-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 205px;
        height: 180px;
        background: #fff;
        margin-bottom: 15px;
    }
    .title-section {
        width: 100%;
        text-align: center;
        font-size: 36px;
        margin-bottom: 85px;
    }
    .title-section h1::after {
        content: '';
        width: 12px;
        height: 2px;
        background: #2351ff;
        position: absolute;
        transform: translateY(55px);
        left: 50%;
    }
    .clients-link {
        padding: 16px 32px;
        background: #2351ff;
        border-radius: 8px;
        color: #fff;
        margin: auto;
        display: block;
        max-width: 339px;
        text-align: center;
    }
    @media (min-width: 768px) {
        .clients-grid {
            grid-template-columns: 50% 50%;
        }
    }
    @media (min-width: 1200px) {
        .clients-grid {
            grid-template-columns: 20% 20% 20% 20% 20%;
        }
    }
</style>