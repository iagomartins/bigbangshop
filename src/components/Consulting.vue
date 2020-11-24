<template>
    <div>
        <section class="consulting">
            <div class="container">
                <div class="banner-column">
                    <h1>Deseja uma consultoria gratuita?</h1>
                    <div class="banner">
                        <img src="../assets/Ecommerce/consulting-banner.png" alt="">
                    </div>
                    <p>Os consultores da Big Bang Shop terão o maior prazer em ajudá-lo
                    a formatar sua estrutura de vendas online. Aproveite o know-how desta equipe
                    extremamente qualificada e venha conversar sobre o futuro.</p>
                </div>
                <div class="form-column">
                    <div class="form-title">
                        <h1>Fale com um consultor</h1>
                    </div>
                    <form action="#" method="post">
                        <input class="form-input" type="text" name="name" placeholder="Seu nome">
                        <input class="form-input" type="text" name="email" placeholder="Seu e-mail">
                        <input class="form-input" type="text" name="phone" placeholder="Seu telefone">
                        <select name="product" id="product-select" class="form-select">
                            <option value="Selecione">Selecione o produto que te interessou</option>
                            <option value="Loja Start">Loja Start</option>
                            <option value="Full Commerce">Full Commerce</option>
                            <option value="Marketplace">Marketplace</option>
                        </select>
                        <i class="fas fa-chevron-down"></i>
                        <strong>Como deseja receber o contato?</strong>
                        <div class="contact">
                            <div>
                                <input type="checkbox" class="form-checkbox" name="phone" id="phone"><label class="label-checkbox" for="phone">Telefone</label>
                            </div>
                            <div>
                                <input type="checkbox" class="form-checkbox" name="email" id="email"><label class="label-checkbox" for="email">E-mail</label>
                            </div>
                            <div>
                                <input type="checkbox" class="form-checkbox" name="whatsapp" id="whatsapp"><label class="label-checkbox" for="whatsapp">Whatsapp</label>
                            </div>
                        </div>
                        <strong>Qual o melhor horário para entrarmos em contato?</strong>
                        <div class="schedule">
                            <div>
                                <input type="checkbox" class="form-checkbox" name="manha" id="manha"><label class="label-checkbox" for="manha">Manhã</label>
                            </div>
                            <div>
                                <input type="checkbox" class="form-checkbox" name="tarde" id="tarde"><label class="label-checkbox" for="tarde">Tarde</label>
                            </div>
                            <div>
                                <input type="checkbox" class="form-checkbox" name="noite" id="noite"><label class="label-checkbox" for="noite">Noite</label>
                            </div>
                        </div>
                        <input type="submit" name="submit" value="Receber contato" class="btn btn-primary" />
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Consulting'
}
</script>

<style scoped>
    .consulting {
        width: 100vw;
        background-color: #F3F3F3;
    }
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .banner-column {
        max-width: 486px;
        padding: 15px;
    }
    .banner-column h1 {
        font-size: 40px;
        max-width: 418px;
        color: #1c1c1c;
        margin-bottom: 48px;
    }
    .banner-column p {
        color: #1c1c1c;
        font-size: 18px;
        line-height: 22px;
    }
    .banner-column h1::before {
        content: '';
        background-color: #2351ff;
        position: absolute;
        height: 1px;
        width: 24px;
        transform: translateY(110px);
    }
    .banner {
        margin-bottom: 32px;
    }
    .banner img {
        max-width: 100%;
    }
    .form-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 486px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
    }
    .form-column form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding: 24px;
    }
    .form-title {
        font-size: 30px;
        line-height: 36px;
        width: 100%;
        border-bottom: 1px solid #DEDEDE;
        padding: 24px 34px;
        text-align: center;
    }
    input.btn.btn-primary {
        width: 100%;
        background-color: #2351ff;
        border-color: #2351ff;
        padding: 16px 0;
        font-size: 15px;
        line-height: 20px;
        font-weight: 700;
    }
    input.form-input {
        width: 100%;
        line-height: 52px;
        padding-left: 10px;
        margin-bottom: 24px;
        border: 1px solid #2351FF;
        box-sizing: border-box;
        border-radius: 4px;
    }
    select.form-select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        width: 100%;
        padding-left: 10px;
        line-height: 52px;
        height: 52px;
        margin-bottom: 24px;
        border: 1px solid #2351FF;
        box-sizing: border-box;
        border-radius: 4px;
    }
    .form-select + .fas.fa-chevron-down {
        z-index: 9;
        align-self: flex-end;
        transform: translateY(-55px);
        margin-right: 15px;
        color: #2351ff;
    }
    .form-column strong {
        margin-bottom: 16px;
        color: #1c1c1c;
        font-size: 16px;
        line-height: 20px;
    }
    .schedule, .contact {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }
    .schedule div, .contact div {
        margin-right: 10px;
        color: #1c1c1c;
    }
    .label-checkbox {
        margin-left: 24px;
        position: relative;
    }
    .label-checkbox::before {
        content: "";
        background: #2351ff;
        width: 18px;
        height: 18px;
        position: absolute;
        left: -23px;
        top: 1px;
        border-radius: 4px;
        transform: scale(0) rotateZ(180deg);
        transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .label-checkbox::after {
        content: "";
        background: none;
        width: 20px;
        height: 20px;
        position: absolute;
        left: -24px;
        border: 1px solid #2351ff;
        border-radius: 4px;
    }
    .form-checkbox {
        display: none;
    }
    .form-checkbox:checked + .label-checkbox::before {
        transform: scale(1) rotateZ(0deg);
    }
    @media (min-width: 1200px) {
        .container {
            flex-direction: row;
            align-items: flex-start;
        }
        .banner-column {
            margin-right: 126px;
        }
    }
</style>