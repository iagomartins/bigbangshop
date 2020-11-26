<template>
    <section class="background-section">
        <div class="container">
            <h1 class="page-title">{{ title }}</h1>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        title: String
    }
}
</script>

<style scoped>
    .background-section {
        margin-top: 133px;
        padding: 72px 0;
        background: #2351ff;
        margin-bottom: 46px;
    }
    .page-title {
        font-size: 56px;
        color: #fff;
    }
    .page-title::before {
        content: "";
        display: block;
        width: 72px;
        height: 3px;
        position: absolute;
        background: #00bae9;
        transform: translateY(65px);
    }
</style>