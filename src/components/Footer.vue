<template>
  <div class="footer">
      <div class="container">
        <div class="logo-social border-bottom mb-3 pb-3">
          <Logo/>
          <div class="social-media">
            <a href="#" class="facebook-icon"></a>
            <a href="#" class="twitter-icon"></a>
            <a href="#" class="instagram-icon"></a>
            <a href="#" class="linkedin-icon"></a>
          </div>
        </div>
      </div>
      <div class="container institucionais border-bottom pb-3 mb-3">
        <div class="inst-column">
          <a href="#" class="mb-3 inst-title">Nossas Soluções</a>
          <a href="#" class="mb-2">Big Shop</a>
          <a href="#" class="mb-2">Big Bang Track</a>
          <a href="#" class="mb-2">Curta & Compre</a>
          <a href="#" class="mb-2">Pago Agora</a>
        </div>
        <div class="inst-column">
          <router-link to="/ecommerce" class="mb-3 inst-title">E-Commerce</router-link>
          <router-link to="/ecommerce/lojastart" class="mb-2">Loja Start</router-link>
          <router-link to="/ecommerce/fullcommerce" class="mb-2">Full Commerce</router-link>
          <router-link to="/ecommerce/marketplace" class="mb-2">Marketplace</router-link>
        </div>
        <div class="inst-column">
          <router-link to="/tecnologia" class="mb-3 inst-title">Tecnologia</router-link>
          <router-link to="/tecnologia/appdevelopment" class="mb-2">App Development</router-link>
          <router-link to="/tecnologia/sistemasweb" class="mb-2">Sistemas Web</router-link>
          <router-link to="/tecnologia/sitesinstitucionais" class="mb-2">Sites Institucionais</router-link>
        </div>
        <div class="inst-column">
          <router-link to="/atendimento" class="mb-3 inst-title">Atendimento</router-link>
          <a href="#" class="mb-2">Help Desk</a>
          <a href="#" class="mb-2">Central de Ajuda</a>
          <a href="#" class="mb-2">Perguntas Frequentes</a>
          <a href="#" class="mb-2">Contato</a>
        </div>
        <div class="inst-column">
          <strong class="mb-3 inst-title">Institucional</strong>
          <router-link to="/quemsomos" class="mb-2">Quem Somos</router-link>
          <router-link to="/blog" class="mb-2">Blog</router-link>
          <a href="#" class="mb-2">Cases e Clientes</a>
          <router-link to="/carreiras" class="mb-2">Carreiras</router-link>
          <a href="#" class="mb-2">Materiais</a>
        </div>
        <div class="inst-column">
          <strong class="mb-3 inst-title">Entre em Contato</strong>
          <span class="mb-2 whatsapp">(31) 9 7853 4488</span>
          <span class="mb-2 mail">contato@bigbangshop.com.br</span>
          <span class="mb-2 phone">4004 3320</span>
          <a href="#" class="mb-2 chat">Acesse o Chat</a>
        </div>
      </div>
      <div class="container politicas pb-3">
        <div class="info">
          <p>© 2010-2020 Big Bang Digital Ltda. Todos os direitos reservados.</p> 
          <p>CNPJ: 21.306.310/0001-09. Av. Raja Gabáglia, 3.320, 5º andar, Estoril, Belo Horizonte - MG.</p>
        </div>
        <div class="info-links">
          <a href="#">Termos de Uso</a><i class="fas fa-circle"></i>
          <a href="#">Política de Privacidade</a><i class="fas fa-circle"></i>
          <a href="#">Uso de Cookies</a>
        </div>
      </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
  name: 'Footer',
  components: {
    Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    display: block;
    width: 100%;
    padding-top: 50px;
  }
  .logo-social {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 130px;
  }
  .social-media {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .social-media a {
    display: block;
    width: 28px;
    height: 28px;
    margin-right: 45px;
    background-repeat: no-repeat;
    background-position: center;
  }
  .social-media a:last-child {
    margin-right: 0px;
  }
  .facebook-icon {
    background-image: url('../assets/facebook-icon.svg');
  }
  .twitter-icon {
    background-image: url('../assets/twitter-icon.svg');
  }
  .instagram-icon {
    background-image: url('../assets/instagram-icon.svg');
  }
  .linkedin-icon {
    background-image: url('../assets/linkedin-icon.svg');
  }
  .institucionais {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .inst-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1c1c1c;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .inst-column a, .inst-column span {
    color: #3D3D3D;
    font-size: 14px;
  }
  .inst-column .inst-title {
    color: #1c1c1c;
    font-size: 16px;
    font-weight: 800;
  }
  .whatsapp::before {
    content: '';
    display: block;
    float: left;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    background-image: url('../assets/whatsapp.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  .mail::before {
    content: '';
    display: block;
    float: left;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    background-image: url('../assets/envelope.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  .phone::before {
    content: '';
    display: block;
    float: left;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    background-image: url('../assets/phone-alt.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  .chat::before {
    content: '';
    display: block;
    float: left;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    background-image: url('../assets/chat.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  .info {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  .info p {
    margin-bottom: 0;
  }
  .politicas {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .info-links {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .info-links a {
    color: #666;
    font-size: 14px;
    margin: 0 10px;
  }
  .info-links a:last-child {
    margin-right: 0;
  }
  i.fas.fa-circle {
    font-size: 6px;
    color: #2351ff;
  }
  @media (min-width: 1200px) {
    .institucionais {
      flex-direction: row;
      align-items: flex-start;
    }
    .inst-column {
      align-items: flex-start;
      margin-bottom: 0;
    }
    .logo-social {
      flex-direction: row;
      min-height: 0px;
      width: 100%;
    }
    .politicas {
      display: flex;
      flex-direction: row;
    }
    .info {      
      align-items: flex-start;
      margin-bottom: 0;
    }
  }
</style>
