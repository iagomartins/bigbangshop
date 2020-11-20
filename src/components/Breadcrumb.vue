<template>
    <div class="container">
        <div class="bread">
            <a href="#">Home</a><i class="fas fa-chevron-right"></i><span>{{ page }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: {
        page: String
    }
}
</script>

<style scoped>
    .bread {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #1c1c1c;
        font-weight: 400;
        font-size: 14px;
        padding-bottom: 8px;
        border-bottom: 1px solid #DEDEDE;
        margin-bottom: 80px;
    }
    .bread a {
        margin-right: 5px;
        color: #1c1c1c;
    }
    .bread span {
        margin-left: 5px;
    }
    i.fas.fa-chevron-right {
        color: #2351FF;
    }
</style>