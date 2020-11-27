<template>
    <router-link :to="link" class="blog-item">
        <div class="blog-img">
            <img src="../assets/Blog/blog-topic-1.png">
        </div>
        <div class="blog-text">
            <strong>{{ title }}</strong>
            <p>{{ date }}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'BlogTopic',
    props: {
        title: String,
        date: String,
        image: String,
        link: String
    }
}
</script>

<style scoped>
    .blog-item {
        max-width: 310px;
        display: flex;
        flex-direction: column;
    }
    .blog-img {
        margin-bottom: 24px;
        border-radius: 8px;
    }
    .blog-img img {
        max-width: 100%;
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
</style>