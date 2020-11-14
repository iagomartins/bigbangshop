<template>
  <div class="email">
    <div class="container">
      <div class="mail-notifications">
        <div class="column">
          <h3>Quer receber novidades?</h3>
          <p>Inscreva-se agora mesmo</p>
        </div>
       <div class="inputs">
         <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Digite seu e-mail" aria-label="Digite seu e-mail" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Inscreva-se</button>
          </div>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Email',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mail-notifications {
    display: flex;
    flex-direction: column;   
  }
  .mail-notifications h3 {
    color: #2351FF;
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 0;
  }
  .mail-notifications p {
    color: #666666;
    font-size: 18px;
    font-weight: 400;
  }
  .email {
    width: 100%;
    background: #F3F3F3;
    clear: both;
    padding:80px 0;
  }
  .inputs .input-group {
    height: 55px;
  }
  .inputs .input-group .form-control {
    border-color: #2351FF;
    height: 55px;
  }
  .inputs .input-group .btn {
    border-color: #2351FF;
    background: #2351FF;
    color: #fff;
    padding: 14px 30px;
  }
  @media (min-width: 1200px) {
    .inputs {
      width: 50%;
    }
    .mail-notifications {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
