<template>
    <div class="component">
        <div class="image">
            <img src="../assets/Ecommerce/icon-acessos.svg" alt="">
        </div>
        <strong class="title">{{ title }}</strong>
        <p class="info">{{ info }}</p>
    </div>
</template>

<script>
export default {
    name: 'InfoComponent',
    props: {
        image: String,
        title: String,
        info: String
    }
}
</script>

<style scoped>
    .component {
        max-width: 300px;
        padding: 9px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
    }
    .image, .title {
        margin-bottom: 24px;
    }
    .title {
        color: #1c1c1c;
        font-weight: 400;
        font-size: 20px;
    }
    .info {
        text-align: center;
        color: #3d3d3d;
        font-size: 16px;
        line-height: 20px;
    }
</style>