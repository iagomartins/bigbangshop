<template>
    <div class="technology">
        <div class="container">
            <div class="selection">
                <div class="select-info">
                    <div class="tabs">
                        <TabNav :tabs="[
                            'Gerencie tudo através do nosso app exclusivo',
                            'Acompanhe suas vendas',
                            'Gerencie tudo através do nosso app',
                            'Gerencie tudo'
                        ]"
                        :selected="selected" @selected="setSelected" :stores=true
                        title="Tecnologia para gerir o seu negócio" 
                        subtitle="Junte-se a dezenas de pessoas e tenha controle total da sua loja, vendas, estoque, promoçõe e muito mais!">
                        <Tab :isSelected="selected === 'Gerencie tudo através do nosso app exclusivo'">
                            <div class="image">
                                <img src="../assets/Ecommerce/cell-phone.png" alt="">
                            </div>
                        </Tab>
                        <Tab :isSelected="selected === 'Acompanhe suas vendas'">
                            <div class="image">
                                <img src="../assets/Ecommerce/cell-phone.png" alt="">
                            </div>
                        </Tab>
                        <Tab :isSelected="selected === 'Gerencie tudo através do nosso app'">
                            <div class="image">
                                <img src="../assets/Ecommerce/cell-phone.png" alt="">
                            </div>
                        </Tab>
                        <Tab :isSelected="selected === 'Gerencie tudo'">
                            <div class="image">
                                <img src="../assets/Ecommerce/cell-phone.png" alt="">
                            </div>
                        </Tab>
                        </TabNav>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import TabNav from '../components/TabNav.vue'
import Tab from '../components/Tab.vue'

export default {
    name: 'Technology',
    components: {
        TabNav,
        Tab
    },
    data () {
        return {
            selected: 'Gerencie tudo através do nosso app exclusivo'
        }
    },
    methods: {
        setSelected(tab) {
            this.selected = tab;
        }
    }
}
</script>

<style scoped>
    .technology {
        margin-bottom: 105px;
    }
</style>