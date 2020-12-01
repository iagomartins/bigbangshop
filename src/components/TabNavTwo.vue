<template>
    <article>
        <header class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index">
                    <div class="nav-item" :class="{ 'is-active' : tab.isActive }" @click="selectTab(tab)">
                        {{ tab.name }}
                    </div>
                </li>
            </ul>
        </header>
        <section class="tabs-details">
            <slot></slot>
        </section>
    </article>
</template>

<script>
export default {
    name: 'TabNavTwo',
    data: () => {
        return {
            tabs: []
        }
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = selectedTab.name === tab.name;
            })
        }
    },
    created() {
        this.tabs = this.$children;
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        padding: 0;
        border-bottom: 1px solid #dedede;
        justify-content: space-between;
        flex-direction: column;
    }
    .tabs {
        margin-bottom: 68px;
    }
    .nav-item {
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: #666666;
        padding-bottom: 9px;
        cursor: pointer;
        min-width: 200px;
        margin-top: 10px;
    }
    .nav-item:hover {
        color: #2351ff;
    }
    .nav-item.is-active {
        color: #2351ff;
        border-bottom: 4px solid #2351ff;
        margin-bottom: -4px;
    }
    @media (min-width: 1200px) {
        ul {
            flex-direction: row;
        }
        .nav-item {
            margin-top: 0;
        }
    }
</style>