<template>
    <div>
        <div class="ecommerce">
            <div class="container">
                <h1 class="page-title">E-Commerce</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ecommerce'
}
</script>

<style scoped>
    .ecommerce {
        margin-top: 133px;
        padding: 72px 0;
        background: #2351FF;
    }
    .page-title {
        font-size: 56px;
        color: #fff;
    }
    .page-title::before {
        content: '';
        display: block;
        width: 72px;
        height: 3px;
        position: absolute;
        background: #00BAE9;
        transform: translateY(65px);
    }
</style>