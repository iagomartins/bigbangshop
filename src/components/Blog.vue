<template>
    <div>
        <BlogHeader/>
        <BlogFeatured/>
        <section class="main-posts">
            <div class="container">
                <div class="posts-header">
                    <h1>Mercado</h1>
                    <a href="#">Ver todos<i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="blog-posts">
                    <BlogTopic title="Risco de crédito: como uma gestão eficiente pode diminuir riscos de inadimplência?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Guia completo: como desenvolver um planejamento de vendas anual?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Calendário do E-Commerce 2020: as melhores datas para vender online"
                    date="01 jan 2020" link="#" />
                </div>
            </div>
        </section>
        <section class="main-posts">
            <div class="container">
                <div class="posts-header">
                    <h1>E-Commerce</h1>
                    <a href="#">Ver todos<i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="blog-posts">
                    <BlogTopic title="Risco de crédito: como uma gestão eficiente pode diminuir riscos de inadimplência?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Guia completo: como desenvolver um planejamento de vendas anual?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Calendário do E-Commerce 2020: as melhores datas para vender online"
                    date="01 jan 2020" link="#" />
                </div>
            </div>
        </section>
        <section class="main-posts">
            <div class="container">
                <div class="posts-header">
                    <h1>Tecnologia</h1>
                    <a href="#">Ver todos<i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="blog-posts">
                    <BlogTopic title="Risco de crédito: como uma gestão eficiente pode diminuir riscos de inadimplência?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Guia completo: como desenvolver um planejamento de vendas anual?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Calendário do E-Commerce 2020: as melhores datas para vender online"
                    date="01 jan 2020" link="#" />
                </div>
            </div>
        </section>
        <section class="main-posts">
            <div class="container">
                <div class="posts-header">
                    <h1>Finanças</h1>
                    <a href="#">Ver todos<i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="blog-posts">
                    <BlogTopic title="Risco de crédito: como uma gestão eficiente pode diminuir riscos de inadimplência?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Guia completo: como desenvolver um planejamento de vendas anual?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Calendário do E-Commerce 2020: as melhores datas para vender online"
                    date="01 jan 2020" link="#" />
                </div>
            </div>
        </section>
        <section class="main-posts">
            <div class="container">
                <div class="posts-header">
                    <h1>Institucional</h1>
                    <a href="#">Ver todos<i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="blog-posts">
                    <BlogTopic title="Risco de crédito: como uma gestão eficiente pode diminuir riscos de inadimplência?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Guia completo: como desenvolver um planejamento de vendas anual?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Calendário do E-Commerce 2020: as melhores datas para vender online"
                    date="01 jan 2020" link="#" />
                </div>
            </div>
        </section>
        <section class="main-posts">
            <div class="container">
                <div class="posts-header">
                    <h1>Posts mais recentes</h1>
                    <a href="#">Ver todos<i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="blog-posts">
                    <BlogTopic title="Risco de crédito: como uma gestão eficiente pode diminuir riscos de inadimplência?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Guia completo: como desenvolver um planejamento de vendas anual?"
                    date="01 jan 2020" link="#" />
                    <BlogTopic title="Calendário do E-Commerce 2020: as melhores datas para vender online"
                    date="01 jan 2020" link="#" />
                </div>
            </div>
        </section>
        <a href="#" class="blog-link">Ver todos os posts</a>
    </div>
</template>

<script>
import BlogHeader from '../components/BlogHeader.vue'
import BlogFeatured from '../components/BlogFeatured.vue'
import BlogTopic from '../components/BlogTopic.vue'

export default {
    name: 'Blog',
    components: {
        BlogHeader,
        BlogFeatured,
        BlogTopic
    }
}
</script>

<style scoped>
    .main-posts {
        margin-bottom: 80px;
    }
    .posts-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }
    .posts-header h1 {
        color: #1C1C1C;
        font-weight: 600;
    }
    .posts-header a {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        color: #2351FF;
    }
    .fas.fa-arrow-right {
        margin-left: 10px;
    }
    .blog-posts {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .blog-link {
        padding: 16px 32px;
        background: #2351ff;
        border-radius: 8px;
        color: #fff;
        margin: auto;
        display: block;
        max-width: 227px;
        text-align: center;
        margin-bottom: 92px;
    }
    @media (min-width: 1200px) {
        .blog-posts {
            flex-direction: row;
            justify-content: space-between;
        }
        .posts-header h1 {
            font-size: 48px;
            line-height: 56px;
        }
    }
</style>