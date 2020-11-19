<template>
  <div class="menu">
    <div class="menu-container desktop">
      <Logo/>
      <div class="row">
      <a href="#" class="nossos-produtos">Nossos Produtos<img class="menu-dots" src="../assets/dots.svg" alt=""></a>
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
        <nav class="navbar navbar-expand-lg navbar-light mobile-menu">
          <a class="navbar-brand" href="#"><Logo/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Nossos Produtos<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Ecommerce
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo">Loja Start</span>
                    <span class="link-subtitulo">Para quem está começando</span>
                  </a>
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo">Full Commerce</span>
                    <span class="link-subtitulo">Solução completa e poderosa</span>
                  </a>                  
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo">Marketplace</span>
                    <span class="link-subtitulo">Venda nos principais sites</span>
                  </a>
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo"><span style="float:left;">Big Shop</span><span class="etiqueta-novo">NOVO!</span></span>
                    <span class="link-subtitulo">Para quem está começando</span>
                  </a> 
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tecnologia
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo">App Development</span>
                    <span class="link-subtitulo">Desenvolvimento completo de apps</span>
                  </a>
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo">Sistemas Web</span>
                    <span class="link-subtitulo">Sistemas automatizados na nuvem</span>
                  </a>                  
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo">Sites Institucionais</span>
                    <span class="link-subtitulo">Sua empresa na internet</span>
                  </a>
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo"><span style="float:left;">Pago agora</span><span class="etiqueta-novo">NOVO!</span></span>
                    <span class="link-subtitulo">Gere boletos com a menor taxa</span>
                  </a> 
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cases</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Atendimento
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo">Help Desk</span>
                    <span class="link-subtitulo">SAC para clientes Ecommerce</span>
                  </a>
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo">Central de Ajuda</span>
                  </a>                  
                  <a class="dropdown-item submenu-item" href="#">
                    <span class="link-titulo">Perguntas Frequentes</span>
                  </a>
                  <a class="dropdown-item submenu-item">
                    <span class="link-titulo">Já sou cliente</span>
                    <span class="link-fone">4004 3320</span>
                  </a> 
                </div>
              </li>          
            </ul>
          </div>
        </nav>
        <div class="mobile area-cliente">
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
.desktop {
  display: none;
}
.menu {
  background-color: #fff;
  position: fixed;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  width: 100vw;
  top: 0;
  z-index: 9;
}
.menu-container {
    width: 100%;
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
.submenu {
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
  max-width: 200px;
}
.dropdown-cliente span {
  margin-right: 8px;
}
.submenu-item {
    display: flex;
    flex-direction: column;
}
.navbar-light .navbar-nav .nav-link {
  color: #3d3d3d;
}
.dropdown-menu {
    border: none;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
}
.mobile.area-cliente {
    display: flex;
    padding: .5rem 1rem;
    justify-content: flex-end;
}
.navbar-light .navbar-toggler {
    border: none;
}
.menu-dots {
  position: absolute;
  transform: translateY(25px) translateX(-70px);
}
@media (min-width: 1200px) {
  .desktop {
    display: flex;
  }
  .mobile-menu, .mobile.area-cliente {
    display: none;
  }
}
</style>
