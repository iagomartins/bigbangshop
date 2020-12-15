<template>
    <div>
        <div class="container rating-form">
            <h1 class="form-title">O que você achou desse conteúdo?</h1>
            <form action="#" method="post">
                <div class="form-row">
                    <div class="col mb-3">
                        <input type="text" class="form-control" placeholder="Nome">
                    </div>
                    <div class="col mb-3">
                        <input type="text" class="form-control" placeholder="E-mail">
                    </div>
                </div>
                <div class="form-row mb-3">
                    <div class="col rating-stars">
                        <input class="form-control" id="disabledInput" type="text" placeholder="Sua nota" disabled>
                        <div class="rating">
                            <input type="radio" id="star1"><label for="star1"></label>
                            <input type="radio" id="star2"><label for="star2"></label>
                            <input type="radio" id="star3"><label for="star3"></label>
                            <input type="radio" id="star4"><label for="star4"></label>
                            <input type="radio" id="star5"><label for="star5"></label>
                        </div>
                    </div>
                </div>
                <div class="form-row mb-3">
                    <div class="col">
                        <input class="form-control" type="text" placeholder="Escreva sua avaliação">
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <input type="submit" class="btn btn-primary btn-enviar">
                    </div>
                </div>
            </form>
        </div>
        <div class="container rating-results">
            <div class="average-rating">
                <span class="rating-number">4.0</span>
                <div>
                    <div class="average-stars">
                        <span>
                            <img src="../assets/Blog/FiveStarEmpty.png" alt="">
                        </span>
                        <span>
                            <img src="../assets/Blog/FiveStarFilled.png" alt="">
                        </span>
                    </div>
                    <span class="average-info">Média entre 42 avaliações</span>
                </div>
            </div>
            <div class="stars-count">
                <div>
                    <span class="star-name">5 estrelas</span>
                    <div class="percentage">
                        <div id="five-star" class="percentage-filler"></div>
                    </div>
                    <span class="star-name">999</span>
                </div>
                <div>
                    <span class="star-name">4 estrelas</span>
                    <div class="percentage">
                        <div id="four-star" class="percentage-filler"></div>
                    </div>
                    <span class="star-name">2</span>
                </div>
                <div>
                    <span class="star-name">3 estrelas</span>
                    <div class="percentage">
                        <div id="three-star" class="percentage-filler"></div>
                    </div>
                    <span class="star-name">0</span>
                </div>
                <div>
                    <span class="star-name">2 estrelas</span>
                    <div class="percentage">
                        <div id="two-star" class="percentage-filler"></div>
                    </div>
                    <span class="star-name">0</span>
                </div>
                <div>
                    <span class="star-name">1 estrela</span>
                    <div class="percentage">
                        <div id="one-star" class="percentage-filler"></div>
                    </div>
                    <span class="star-name">0</span>
                </div>
            </div>
        </div>
        <div class="container client-ratings">
            <div>
                <div class="client-rating-stars">
                    <span>
                        <img src="../assets/Blog/FiveStarFilled.png" alt="">
                    </span>
                </div>
                <strong class="client-name">Fulano de tal</strong>
                <p class="client-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <div class="client-rating-stars">
                    <span>
                        <img src="../assets/Blog/FiveStarFilled.png" alt="">
                    </span>
                </div>
                <strong class="client-name">Fulano de tal</strong>
                <p class="client-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <div class="client-rating-stars">
                    <span>
                        <img src="../assets/Blog/FiveStarFilled.png" alt="">
                    </span>
                </div>
                <strong class="client-name">Fulano de tal</strong>
                <p class="client-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <div class="client-rating-stars">
                    <span>
                        <img src="../assets/Blog/FiveStarFilled.png" alt="">
                    </span>
                </div>
                <strong class="client-name">Fulano de tal</strong>
                <p class="client-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <div class="client-rating-stars">
                    <span>
                        <img src="../assets/Blog/FiveStarFilled.png" alt="">
                    </span>
                </div>
                <strong class="client-name">Fulano de tal</strong>
                <p class="client-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <div class="client-rating-stars">
                    <span>
                        <img src="../assets/Blog/FiveStarFilled.png" alt="">
                    </span>
                </div>
                <strong class="client-name">Fulano de tal</strong>
                <p class="client-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <div class="client-rating-stars">
                    <span>
                        <img src="../assets/Blog/FiveStarFilled.png" alt="">
                    </span>
                </div>
                <strong class="client-name">Fulano de tal</strong>
                <p class="client-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
                <div class="client-rating-stars">
                    <span>
                        <img src="../assets/Blog/FiveStarFilled.png" alt="">
                    </span>
                </div>
                <strong class="client-name">Fulano de tal</strong>
                <p class="client-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="bottom-shadow"></div>
        </div>
        <a href="#" class="btn btn-primary btn-show">Mostrar mais</a>
    </div>
</template>

<script>
export default {
    name: 'RatingForm'
}
</script>

<style scoped>
    .form-title {
        margin-bottom: 65px;
        color: #2351FF;
        text-align: center;
        font-weight: 600;
        font-size: 46px;
        line-height: 56px;
    }
    .rating-form {
        max-width: 792px;
        margin-bottom: 100px;
    }
    .rating-stars {
        position: relative;
    }
    .rating {
        display: flex;
        position: absolute;
        right: 15px;
        top: 22%;
        transform: rotateY(180deg);
    }
    .rating input {
        display: none;
    }
    .rating label {
        position: relative;
    }
    .rating label::before {
        content: '\f005';
        font-family: fontawesome;
        font-weight: 300;
        position: relative;
        color: #FFCC00;
        font-size: 20px;
    }
    .rating label::after {
        content: '\f005';
        font-family: fontawesome;
        font-weight: 900;
        position: absolute;
        color: #FFCC00;
        font-size: 20px;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 0.4s;
        text-shadow: rgba(0, 0, 0, 0.5);
    }
    .rating label:hover::after,
    .rating label:hover ~ label::after,
    .rating input:checked ~ label::after {
        opacity: 1;
    }
    .form-control {
        border-color: #2351FF;
        height: 52px;
    }
    .btn-enviar {
        height: 52px;
        border-color: #2351FF;
        background: #2351FF;
        width: 100%;
        text-align: center;
    }
    .rating-results {
        max-width: 792px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
    }
    .average-rating {
        display: flex;
        align-items: center;
    }
    .rating-number {
        color: #2351FF;
        font-weight: 600;
        font-size: 48px;
        line-height: 56px;
        margin-right: 24px;
    }
    .average-stars {
        position: relative;
        width: fit-content;
        width: -moz-fit-content;
        margin-bottom: 7px;
    }
    .average-stars span:last-child {
        position: absolute;
        left: 0;
        width: 80%;
        overflow: hidden;
    }
    .average-info {
        color: #999;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
    }
    .stars-count div {
        display: flex;
        align-items: center;
    }
    .star-name {
        color: #666;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
    }
    .star-name:first-child {
        min-width: 63px;
    }
    .percentage {
        display: block;
        position: relative;
        width: 180px;
        height: 4px;
        background: #DEDEDE;
        margin: 0 24px;
    }
    .percentage-filler {
        display: block;
        height: 4px;
        max-width: 100%;
        background: #2351ff;
    }
    #five-star {
        width: 99%;
    }
    #four-star {
        width: 80%;
    }
    #three-star {
        width: 60%;
    }
    #two-star {
        width: 40%;
    }
    #one-star {
        width: 20%;
    }
    .client-ratings {
        display: grid;
        grid-template-columns: auto;
        position: relative;
        margin-bottom: 56px;
    }
    .client-ratings div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 260px;
    }
    .client-rating-stars {
        margin-bottom: 10px;
    }
    .client-rating-stars span {
        width: 132px;
    }
    .client-rating-stars span img {
        max-width: 100%;
    }
    .client-name {
        color: #3d3d3d;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 4px;
    }
    .client-comment {
        color: #666;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
    }
    .client-ratings .bottom-shadow {
        position: absolute;
        width: 100%;
        max-width: 100%;
        height: 148px;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
    }
    .btn-show {
        padding: 16px 32px;
        background-color: #2351FF;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        margin: auto;
        display: block;
        width: fit-content;
        width: -moz-fit-content;
        margin-bottom: 160px;
    }
    @media (min-width: 768px) {
        .client-ratings {
            grid-template-columns: auto auto;
        }
    }
    @media (min-width: 1200px) {
        .rating-results {
            flex-direction: row;
            justify-content: space-evenly;    
        }
        .client-ratings {
            grid-template-columns: auto auto auto auto;
        }
    }
</style>