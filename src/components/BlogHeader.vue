<template>
    <section class="blog-header">
        <nav class="navbar navbar-expand-lg navbar-light header">
            <div class="blog-logo">
                <div class="logo-big">
                    <Logo/>
                </div>
                <span class="blog-title">blog</span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <router-link class="nav-link" to="/ebooks">E-Books</router-link>
                <router-link class="nav-link" to="/ecommerce">E-Commerce</router-link>
                <a class="nav-link" href="#">Finanças</a>
                <a class="nav-link" href="#">Institucional</a>
                <a class="nav-link" href="#">Negócios</a>
                <router-link class="nav-link" to="/tecnologia">Tecnologia</router-link>
                </div>
            </div>
            <div class="search-input">
                <input type="text" placeholder="Pesquise...">
            </div>
        </nav>
    </section>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
    name: 'BlogHeader',
    components: {
        Logo
    }
}
</script>

<style scoped>
    .logo {
        padding-right: 10px;
    }
    .navbar-nav {
        margin-bottom: 32px;
    }
    .collapse.navbar-collapse {
        max-width: 750px;
    }
    .blog-header {
        position: fixed;
        background: #fff;
        padding: 35px 3vw;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        width: 100vw;
        top: 0;
        z-index: 9;
    }
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .blog-logo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .logo-big {
        border-right: 1px solid #DEDEDE;
        margin-right: 16px;
        margin-bottom: 24px;
    }
    .blog-title {
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        color: #2351FF;
        margin-bottom: 24px;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: 24px;
        padding-left: 24px;
        color: #3D3D3D;
    }
    .search-input {
        position: relative;
        display: none;
    }
    .show + .search-input {
        display: block;
    }
    .search-input input {
        border: 2px solid #C4C4C4;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 16px;
        color: #3D3D3D;
        font-size: 18px;
        line-height: 23px;
        position: relative;
    }
    .search-input::before {
        content: '';
        width: 24px;
        height: 24px;
        position: absolute;
        background-image: url('../assets/Blog/search.svg');
        background-size: 100%;
        background-position: center;
        z-index: 9;
        right: 15px;
        top: 18px;
    }
    @media (min-width: 1200px) {
        .blog-logo {
            flex-direction: row;
            align-items: center;
        }
        .logo-big, .blog-title, .navbar-nav {
            margin-bottom: 0;
        }
        .search-input {
            display: block;
        }
    }
</style>