<template>
    <section class="blog-featured">
        <div class="container news">
            <h1 class="primary-title">Mais lidas</h1>
            <div class="flex-container">
                <router-link to="/blog/blogpost" class="news-panel">
                    <div class="news-img">
                        <img src="../assets/Blog/news-blog.png" alt="">
                    </div>
                    <div class="news-info">
                        <strong class="topic">MERCADO</strong>
                        <h2 class="news-title">O novo normal: como os lojistas devem se preparar e os desafios a longo prazo</h2>
                        <span class="date">01 jan 2020</span>
                    </div>
                </router-link>
                <div class="topic-links">
                    <a href="#" class="news-link">
                        <strong class="topic">TECNOLOGIA</strong>
                        <h3 class="subnews-title">O novo normal: como os lojistas devem se preparar e os desafios a longo prazo</h3>
                        <span class="date">01 jan 2020</span>
                    </a>
                    <a href="#" class="news-link">
                        <strong class="topic">E-COMMERCE</strong>
                        <h3 class="subnews-title">O novo normal: como os lojistas devem se preparar e os desafios a longo prazo</h3>
                        <span class="date">01 jan 2020</span>
                    </a>
                    <a href="#" class="news-link">
                        <strong class="topic">FINANÇAS</strong>
                        <h3 class="subnews-title">O novo normal: como os lojistas devem se preparar e os desafios a longo prazo</h3>
                        <span class="date">01 jan 2020</span>
                    </a>
                    <a href="#" class="news-link">
                        <strong class="topic">INSTITUCIONAL</strong>
                        <h3 class="subnews-title">O novo normal: como os lojistas devem se preparar e os desafios a longo prazo</h3>
                        <span class="date">01 jan 2020</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogFeatured'
}
</script>

<style scoped>
    .primary-title {
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 48px;
        line-height: 56px;
        color: #1C1C1C;
    }
    .blog-featured {
        width: 100vw;
        background: #F3F3F3;
        padding: 80px 0;
        margin-top: 218px;
        margin-bottom: 80px;
    }
    .news-panel {
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        max-width: 100%;
        margin-bottom: 50px;
    }
    .news-info {
        padding: 24px;
    }
    .topic {
        color: #2351FF;
        font-size: 14px;
        line-height: 19px;
    }
    .news-title {
        color: #1C1C1C;
        font-size: 36px;
        line-height: 44px;
        font-weight: 600;
    }
    .date {
        color: #666666;
        font-size: 14px;
        line-height: 19px;
    }
    .flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .news-link {
        border-bottom: 1px solid #C4C4C4;
        padding-bottom: 16px;
        margin-bottom: 16px;
        display: block;
    }
    .subnews-title {
        color: #1C1C1C;
        font-size: 24px;
        line-height: 30px;
    }
    .news-img img {
        max-width: 100%;
        width: 100%;
    }
    @media (min-width: 1200px) {
        .blog-featured {
            margin-top: 144px;
        }
        .news-panel {
            width: 50%;
            margin-bottom: 0;
        }
        .flex-container {
            flex-direction: row;
            align-items: flex-start;
        }
        .topic-links {
            margin-left: 113px;
            max-width: calc(50% - 113px);
        }
    }
</style>