<template>
    <div class="company-card">
        <div class="card-image">
            <img src="../assets/Home/BigShop.png">
        </div>
        <div class="card-content">
            <strong>{{ title }}</strong>
            <p>{{ msg }}</p>
            <a v-bind:href=link>Conheça<i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompanyCard',
    props: {
        img: String,
        title: String,
        msg: String,
        link: String
    }
}
</script>

<style scoped>    
    .company-card {
        max-width: 282px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        margin-bottom: 20px; 
    }
    .card-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;
        padding-top: 25px;
    }
    .card-content strong {
        font-size: 20px;
        font-weight: 800;
    }
    .card-content p {
        font-size: 16px;
        font-weight: 400;
        color: #666;
    }
    i.fas.fa-arrow-right {
        color: #fff;
        margin-left: 10px;
    }
    .card-content a {
        color: #fff;
        background: #2351ff;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 15px;
        font-weight: 700;
        padding: 8px 16px;
        border-radius: 8px;
    }
</style>