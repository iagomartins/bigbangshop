<template>
    <div class="company-card">
        <div class="card-image">
            <img v-bind:src=img>
        </div>
        <div class="card-content">
            <strong>{{ title }}</strong>
            <p>{{ msg }}</p>
            <a v-bind:href=link>Conheça</a>
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
        width: 282px;
        height: 384px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
    }
</style>