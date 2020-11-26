<template>
    <div class="container">
        <div class="title-section">
            <h1>Blog</h1>
        </div>
        <div class="blog">
            <a href="#" class="blog-item">
                <div class="blog-img">
                    <img src="../assets/Home/blog1.png">
                </div>
                <div class="blog-text">
                    <strong>O novo normal: como os lojistas devem se preparar e os desafios a longo prazo</strong>
                    <p>01 jan 2020</p>
                </div>
            </a>
            <a href="#" class="blog-item">
                <div class="blog-img">
                    <img src="../assets/Home/blog2.png">
                </div>
                <div class="blog-text">
                    <strong>Guia completo: como desenvolver um planejamento de vendas anual?</strong>
                    <p>01 jan 2020</p>
                </div>
            </a>
            <a href="#" class="blog-item">
                <div class="blog-img">
                    <img src="../assets/Home/blog3.png">
                </div>
                <div class="blog-text">
                    <strong>Calendário do E-Commerce 2020: as melhores datas para vender online</strong>
                    <p>01 jan 2020</p>
                </div>
            </a>
        </div>
        <a href="#" class="blog-link">Ver todos os posts</a>
    </div>
</template>

<script>
export default {
    name: 'BlogHome'
}
</script>

<style scoped>
    .container {
        padding-bottom: 80px;
    }
    .title-section {
        width: 100%;
        text-align: center;
        font-size: 36px;
        margin-bottom: 85px;
    }
    .title-section h1::after {
        content: '';
        width: 12px;
        height: 2px;
        background: #2351ff;
        position: absolute;
        transform: translateY(55px);
        left: 50%;
    }
    .blog {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 55px;
    }
    .blog-item {
        max-width: 310px;
    }
    .blog-img {
        margin-bottom: 24px;
        border-radius: 8px;
    }
    .blog-text strong {
        margin-bottom: 16px;
        display: block;
        font-size: 20px;
        font-weight: 400;
        color: #1c1c1c;
    }
    .blog-text p {
        font-size: 14px;
        color: #666;
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
    }
    @media (min-width: 1200px) {
        .blog {
            flex-direction: row;
            align-items: flex-start;
        }
    }
</style>