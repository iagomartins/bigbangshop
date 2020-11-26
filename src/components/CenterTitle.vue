<template>
    <div>
        <section class="title">
            <h1 class="line-title">{{ title }}</h1>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CenterTitle',
    props: {
        title: String
    }
}
</script>

<style scoped>
    .title {
        text-align: center;
        width: 100%;
        display: block;
        margin-bottom: 80px;
    }
    .line-title {
        color: #1C1C1C;
        font-size: 36px;
        line-height: 44px;
        font-weight: 600;
    }
    .line-title::before {
        content: '';
        width: 24px;
        height: 2px;
        background-color: #2351FF;
        position: absolute;
        left: 50%;
        transform: translateY(50px);
    }
</style>