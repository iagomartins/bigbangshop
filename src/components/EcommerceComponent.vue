<template>
    <div class="container">
        <div class="info">
            <h1>{{ title }}</h1>
            <p>{{ msg }}</p>
            <a v-bind:href=link>{{ linkMsg }}</a>
        </div>
        <div class="image">
            <img src="../assets/Ecommerce/Rectangle486.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'EcommerceComponent',
    props: {
        title: String,
        msg: String,
        linkMsg: String,
        link: String,
        image: String
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 152px;
    }
    .info {
        max-width: 384px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
    .info h1 {
        color: #1c1c1c;
        font-size: 48px;
        font-weight: 600;
        margin-bottom: 32px;
    }
    .info p {
        color: #1c1c1c;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 48px;
        text-align: center;
    }
    .info a {
        color: #2351FF;
        font-size: 18px;
        line-height: 22px;
    }
    .image {
        border-radius: 8px;
    }
    @media (min-width: 1200px) {
        .container {
            flex-direction: row;
            align-items: flex-start;
        }
        .info {
            align-items: flex-start;
            margin-bottom: 0;
        }
        .info p {
            text-align: left;
        }
    }

</style>