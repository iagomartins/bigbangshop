<template>
    <div>
        <section class="header">
            <div class="container">
                <router-link to="/" class="logo">
                    <img src="../assets/Blog/big-bang-shop-branca.svg" alt="">
                </router-link>
            </div>
        </section>
        <section class="guidelines">
            <div class="container">
                <h1 class="brandings-title text-left">Branding Guidelines<span class="blue-dot">.</span></h1>
                <p class="paragraph text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Brandings'
}
</script>

<style scoped>
    .header {
        background:#0B2239;
        padding: 43px 0;
        margin-bottom: 100px;
    }
    .brandings-title {
        color: #0B2239;
        font-weight: 800;
        font-size: 144px;
        line-height: 124px;
        margin-bottom: 88px;
    }
    .blue-dot {
        color: #2351ff;
    }
    .paragraph {
        margin-bottom: 88px;
        color: #3d3d3d;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        max-width: 792px;
    }
</style>