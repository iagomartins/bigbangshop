<template>
    <div>
        <Header />
        <PageTitle title="Carreiras"/>
        <Breadcrumb page="Carreiras"/>
        <div class="container top-section">
            <div class="image">
                <img src="../assets/Carreiras/carreiras-img.png" alt="">
            </div>
            <div class="text-content">
                <h2>Transforme seu potencial</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" class="blue-btn">Ver todas as vagas</a>
            </div>
        </div>
        <div class="container tab-nav">
            <TabNavTwo>
                <TabTwo name="Todas" :selected="true">
                    <div class="tab-content">
                        <div class="flex-container">
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Desenvolvedor Júnior</strong>
                                        <span class="job-category">Desenvolvimento</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>UX/UI Designer</strong>
                                        <span class="job-category">Design</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                        <div class="flex-container">
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Social Media</strong>
                                        <span class="job-category">Marketing</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Product Owner</strong>
                                        <span class="job-category">Gestão e negócios</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                        <div class="flex-container">
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Gestor de Projetos</strong>
                                        <span class="job-category">Gestão e negócios</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Scrum Master</strong>
                                        <span class="job-category">Gestão e negócios</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                        <div class="flex-container">
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Assistente de Atendimento</strong>
                                        <span class="job-category">Gestão e negócios</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Designer Gráfico</strong>
                                        <span class="job-category">Design</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </TabTwo>
                <TabTwo name="Desenvolvimento">
                        <div class="flex-container">
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Desenvolvedor Júnior</strong>
                                        <span class="job-category">Desenvolvimento</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                </TabTwo>
                <TabTwo name="Design">
                        <div class="flex-container">
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Designer Gráfico</strong>
                                        <span class="job-category">Design</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>UX/UI Designer</strong>
                                        <span class="job-category">Design</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                </TabTwo>
                <TabTwo name="Gestão e Negócios">
                        <div class="flex-container">
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Product Owner</strong>
                                        <span class="job-category">Gestão e negócios</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Gestor de Projetos</strong>
                                        <span class="job-category">Gestão e negócios</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                        <div class="flex-container">
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Scrum Master</strong>
                                        <span class="job-category">Gestão e negócios</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Assistente de Atendimento</strong>
                                        <span class="job-category">Gestão e negócios</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                </TabTwo>
                <TabTwo name="Marketing">
                        <div class="flex-container">
                            <a href="#" class="job-info">
                                <div class="name-local">
                                    <div class="job-name">
                                        <strong>Social Media</strong>
                                        <span class="job-category">Marketing</span>
                                    </div>
                                    <span class="local">Belo Horizonte - MG</span>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                </TabTwo>
            </TabNavTwo>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import PageTitle from '../components/PageTitle.vue'
import Breadcrumb from "../components/Breadcrumb.vue";
import TabTwo from '../components/TabTwo.vue'
import TabNavTwo from '../components/TabNavTwo.vue'

export default {
    name: 'Carreiras',
    components: {
        Header,
        PageTitle,
        Breadcrumb,
        TabTwo,
        TabNavTwo
    }
}
</script>

<style scoped>
    .top-section {
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;
    }
    .image img {
        max-width: 100%;
        border-radius: 10px;
        width: 100%;
    }
    .image {
        border: 2px solid #1F6FFF;
        border-radius: 10px;
    }
    .text-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .text-content h2, .text-content p {
        margin-bottom: 32px;
    }
    .text-content h2 {
        color: #1c1c1c;
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
    }
    .text-content p {
        color: #3d3d3d;
        font-size: 18px;
        line-height: 23px;
        font-weight: 400;
    }
    .blue-btn {
        background: #2351FF;
        border-radius: 8px;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        padding: 16px 32px;
    }
    .tab-nav {
        margin-bottom: 100px;
    }
    .flex-container {
        display: flex;
        flex-direction: column;
    }
    a.job-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        width: 100%;
        margin-bottom: 24px;
    }
    a.job-info:hover {
        text-decoration: none;
    }
    .job-name strong {
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        color: #2351FF;
        margin-right: 16px;
    }
    span.job-category {
        font-size: 14px;
        line-height: 19px;
        padding: 4px 8px;
        background: #2351ff;
        color: #fff;
        border-radius: 4px;
    }
    .local {
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #666;
    }
    @media (min-width: 1200px) {
        .top-section {
            flex-direction: row;
            align-items: center;
        }
        .image {
            margin-right: 50px;
            min-width: 588px;
            transform: translate(-50px, 50px);
        }
        .image img {
            transform: translate(50px, -50px);
        }
        a.job-info {
            width: calc(50% - 12px);
        }
        .flex-container {
            flex-direction: row;
            justify-content: space-between;
        }
    }
    @media (max-width: 1199px) {
        .image {
            margin-bottom: 60px;
        }
    }
</style>