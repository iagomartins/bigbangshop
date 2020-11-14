<template>
  <div class="menu">
    <div class="menu-container">
      <Logo/>
      <div class="row">
      <a href="#" class="nossos-produtos">Nossos Produtos</a>
      <div class="item-menu">
        <span>Ecommerce</span>
          <div class="submenu">
            <a href="#">
              <span class="link-titulo">Loja Start</span>
              <span class="link-subtitulo">Para quem está começando</span>
            </a>
            <a href="#">
              <span class="link-titulo">Full Commerce</span>
              <span class="link-subtitulo">Solução completa e poderosa</span>
            </a>
            <a href="#">
              <span class="link-titulo">Marketplace</span>
              <span class="link-subtitulo">Venda nos principais sites</span>
            </a>
            <a href="#">
              <span class="link-titulo"><span style="float:left;">Big Shop</span><span class="etiqueta-novo">NOVO!</span></span>
              <span class="link-subtitulo">Para quem está começando</span>
            </a>
          </div>
      </div>
      <div class="item-menu">
        <span>Tecnologia</span>
          <div class="submenu">
            <a href="#">
              <span class="link-titulo">App Development</span>
              <span class="link-subtitulo">Desenvolvimento completo de apps</span>
            </a>
            <a href="#">
              <span class="link-titulo">Sistemas Web</span>
              <span class="link-subtitulo">Sistemas automatizados na nuvem</span>
            </a>
            <a href="#">
              <span class="link-titulo">Sites Institucionais</span>
              <span class="link-subtitulo">Sua empresa na internet</span>
            </a>
            <a href="#">
              <span class="link-titulo"><span style="float:left;">Pago agora</span><span class="etiqueta-novo">NOVO!</span></span>
              <span class="link-subtitulo">Gere boletos com a menor taxa</span>
            </a>
          </div>
      </div>
      <a href="#" class="nossos-produtos">Cases</a>
      <a href="#" class="nossos-produtos">Blog</a>
      <div class="item-menu">
        <span>Atendimento</span>
          <div class="submenu">
            <a href="#">
              <span class="link-titulo">Help Desk</span>
              <span class="link-subtitulo">SAC para clientes Ecommerce</span>
            </a>
            <a href="#">
              <span class="link-titulo">Central de Ajuda</span>              
            </a>
            <a href="#">
              <span class="link-titulo">Perguntas Frequentes</span>
            </a>
            <a href="#">
              <span class="link-titulo">Já sou cliente</span>
              <span class="link-fone">4004 3320</span>
            </a>
          </div>
      </div>
    </div>
    <div class="dropdown-cliente">
      <span>Área do Cliente</span><i class="fas fa-chevron-down"></i>
    </div>
    </div>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
  name: 'Header',
  props: {
    //msg: String
  },
  components: {
    Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.menu {
  background-color: #fff;
  position: fixed;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  width: 100vw;
}
.menu-container {
    width: 100%;
    display: flex;
    max-width: 1140px;
    margin: auto;
    flex-direction: row;
    padding: 40px 0;
    align-items: center;
    justify-content: space-between;
}
.menu div a, .item-menu {
  margin-right: 40px;
  font-weight: 400px;
  color: #3D3D3D;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}
.submenu{
  height: 0;
  opacity: 0;
  transition: all 0.4s;
  position: absolute;
  transform: translateX(-30%);
  top: 100px;
}
.submenu a {
  display: flex;
  flex-direction: column;
  margin-right: 0 !important;
  margin-bottom: 15px;
}
.item-menu:hover .submenu {
  display: flex;
  flex-direction: column;
  opacity: 1;
  height: auto;
  padding: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  background: #fff;
  z-index: 999;
}
.link-titulo {
  color: #1C1C1C;
  text-align: left;
}
.link-subtitulo {
  font-size: 14px;
  color: #666666;
  text-align: left;
}
.link-fone {
  color: #2351FF;
  text-align: left;
  font-weight: 700;
}
.etiqueta-novo {  
  display: block;
  float: left;
  background-color: #4CD964;
  color: #0B2239;
  font-size: 12px;
  padding: 3px;
  border-radius: 4px;
  margin-left: 10px;
}
.dropdown-cliente {
  padding: 15px 30px;
  background-color: #2351FF;
  border-radius: 8px;
  color: #fff;
}
.dropdown-cliente span {
  margin-right: 8px;
}
</style>
