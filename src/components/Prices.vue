<template>
    <div class="container">
        <h1>Quanto custa?</h1>
        <div class="flex-container">
            <div class="flex-content">
                <strong>Loja Start</strong>
                <p>Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet.</p>
                <span>• Design responsivo</span>
                <span>• Painel de controle completo</span>
                <span>• Estatísticas de acesso</span>
                <div class="prices">
                    <p>A partir de:</p>
                    <div class="buttons">
                        <span class="price">
                            <span class="currency">R$</span>299<span class="month">/mês</span>
                        </span>
                        <a href="#" class="btn btn-hire">Contratar</a>
                    </div>
                </div>
            </div>
            <div class="flex-content">
                <strong>Full Commerce</strong>
                <p>Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet.</p>
                <span>• Design responsivo</span>
                <span>• Painel de controle completo</span>
                <span>• Estatísticas de acesso</span>
                <div class="prices">
                    <p>A partir de:</p>
                    <div class="buttons">
                        <span class="price">
                            <span class="currency">R$</span>599<span class="month">/mês</span>
                        </span>
                        <a href="#" class="btn btn-hire">Contratar</a>
                    </div>
                </div>
            </div>
            <div class="flex-content">
                <strong>Maketplace</strong>
                <p>Loja online com todos os principais recursos, alta performance e preço acessível. Ideal para quem está começando a vender pela internet.</p>
                <span>• Design responsivo</span>
                <span>• Painel de controle completo</span>
                <span>• Estatísticas de acesso</span>
                <div class="prices">
                    <p>A partir de:</p>
                    <div class="buttons">
                        <span class="price">
                            <span class="currency">R$</span>999<span class="month">/mês</span>
                        </span>
                        <a href="#" class="btn btn-hire">Contratar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Prices'
}
</script>

<style scoped>
    .container {
        margin-bottom: 105px;
    }
    .container h1 {
        text-align: center;
        font-size: 36px;
        margin-bottom: 100px;
    }
    .flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .flex-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 350px;
        justify-content: center;
        margin-bottom: 50px;
    }
    .flex-content strong {
        font-size: 24px;
        line-height: 30px;
        color: #1C1C1C;
        font-weight: 800;
        margin-bottom: 24px;
    }
    .flex-content p {
        font-size: 16px;
        color: #3D3D3D;
        font-weight: 400;
        margin-bottom: 33px;
    }
    .flex-content span {
        font-size: 16px;
        line-height: 20px;
        font-weight: 800;
        margin-bottom: 11px;
    }
    .prices {
        display: flex;
        flex-direction: column;
        border-top: 1px solid#DEDEDE;
        width: 100%;
        padding-top: 8px;
        margin-top: 32px;
    }
    .prices p, .prices div {
        width: 100%;
    }
    .prices p {
        font-size: 16px;
        font-weight: 400;
        color: #666;
        margin-bottom: 8px;
    }
    .buttons {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .price {
        border: 1px solid #2351FF;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 8px 16px;
        color: #2351FF;
        font-size: 30px !important;
        line-height: 36px !important;
        font-weight: 600;
        display: flex;
        align-items: flex-end;
        margin-right: 16px;
        margin-bottom: 0 !important;
    }
    .currency, .month {
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 0 !important;
    }
    .btn.btn-hire {
        padding: 15px 32px;
        background-color: #2351FF;
        border-radius: 8px;
        color: #fff;
        font-size: 15px;
        font-weight: 800;
    }
    @media (min-width: 1200px) {
        .flex-container {
            flex-direction: row;
            justify-content: space-between;
        }
        .flex-content {
            margin-bottom: 0;
        }
    }
</style>