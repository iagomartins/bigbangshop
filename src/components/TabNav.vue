<template>
    <div class="tabs-component">
        <ul class="nav nav-tabs">
            <h2>{{ title }}</h2>
            <p>{{ subtitle }}</p>
            <li v-for="tab in tabs" :key="tab" class="nav-item">
                <a class="nav-link" :class="{ active: tab === selected }" @click="setTab(tab)">
                    {{ tab }} <i class="fas fa-chevron-right"></i>
                </a>
            </li>
            <div v-if="stores === true" class="stores">
                <a href="#">
                    <img src="../assets/Ecommerce/google-play.svg" alt="">
                </a>
                <a href="#">
                    <img src="../assets/Ecommerce/app-store.svg" alt="">
                </a>
            </div>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            required: true,
        },
        selected: {
            type: String,
            required: true,
        },
        title: String,
        subtitle: String,
        stores: Boolean
    },
    methods: {
        setTab(tab) {
            this.$emit('selected', tab);
        }
    }
}
</script>

<style scoped>
    ul.nav.nav-tabs {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 100px;
    }
    .tabs-component {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    a.nav-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #3D3D3D;
        font-weight: 700;
        border: none;
        border-bottom: 1px solid #DEDEDE;
        padding: 24px 16px;
        cursor: pointer;
    }
    a.nav-link.active {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        border: none;
        margin-top: 20px;
    }
    a.nav-link.active .fas.fa-chevron-right {
        color: #2351ff;
    }
    .nav-tabs {
        border-bottom: none;
    }
    .nav.nav-tabs h2 {
        color: #1C1C1C;
        margin-bottom: 32px;
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
    }
    .nav.nav-tabs p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #1C1C1C;
        margin-bottom: 57px;
    }
    .stores {
        margin-top: 105px;
        display: flex;
        flex-direction: row;
    }
    .stores a {
        margin-right: 20px;
    }
    @media (min-width: 1200px) {
        .tabs-component {
            flex-direction: row;
            align-items: flex-start;
        }
        ul.nav.nav-tabs {
            width: 50%;
            margin-bottom: 0;
        }
    }
</style>