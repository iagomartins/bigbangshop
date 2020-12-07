import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Ecommerce from './components/Ecommerce.vue'
import LojaStart from './components/LojaStart.vue'
import FullCommerce from './components/FullCommerce.vue'
import Marketplace from './components/Marketplace.vue'
import Tecnologia from './components/Tecnologia.vue'
import AppDevelopment from './components/AppDevelopment.vue'
import SistemasWeb from './components/SistemasWeb.vue'
import SitesInstitucionais from './components/SitesInstitucionais.vue'
import Blog from './components/Blog.vue'
import BlogPostPage from './components/BlogPostPage.vue'
import Atendimento from './components/Atendimento.vue'
import Carreiras from './components/Carreiras.vue'
import QuemSomos from './components/QuemSomos.vue'
import TextosLegais from './components/TextosLegais.vue'
import Contato from './components/Contato.vue'
import Cases from './components/Cases.vue'
import Ebooks from './components/Ebooks.vue'
import EbookPage from './components/EbookPage.vue'
import Brandings from './components/Brandings.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/ecommerce',
      component: Ecommerce
    },
    {
      path: '/ecommerce/lojastart',
      component: LojaStart
    },
    {
      path: '/ecommerce/fullcommerce',
      component: FullCommerce
    },
    {
      path: '/ecommerce/marketplace',
      component: Marketplace
    },
    {
      path: '/tecnologia',
      component: Tecnologia
    },
    {
      path: '/tecnologia/appdevelopment',
      component: AppDevelopment
    },
    {
      path: '/tecnologia/sistemasweb',
      component: SistemasWeb
    },
    {
      path: '/tecnologia/sitesinstitucionais',
      component: SitesInstitucionais
    },
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/blog/blogpost',
      component: BlogPostPage
    },
    {
      path: '/atendimento',
      component: Atendimento
    },
    {
      path: '/carreiras',
      component: Carreiras
    },
    {
      path: '/quemsomos',
      component: QuemSomos
    },
    {
      path: '/textoslegais',
      component: TextosLegais
    },
    {
      path: '/contato',
      component: Contato
    },
    {
      path: '/cases',
      component: Cases
    },
    {
      path: '/ebooks',
      component: Ebooks
    },
    {
      path: '/ebook1',
      component: EbookPage
    },
    {
      path: '/brandings',
      component: Brandings
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
