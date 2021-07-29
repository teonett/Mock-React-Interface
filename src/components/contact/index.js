import React from 'react'
import Footer from '../footer'
import Menu from '../header'
import Perfil from "../../assets/images/Perfil-Teo.png"

const Contact = () => (
    <>
        <Menu />
        <div className="row subtitle">
        <div className="col-md-2"></div>
            <div className="col-md-10"><h1>AUTOR</h1></div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <p>
                        <img src={Perfil} className="perfil" alt="perfil" />
                    </p>
                    <h5>
                        +20 anos de experiência em TI atuando em desenvolvimento, manutenções e melhorias de sistemas. Ótimos conhecimentos em padrões de projetos, levantamento de requisitos, elaboração de documentação técnica, SCRUM e facilidade de comunicação, trabalho em equipe focando principalmente em resolver problemas. 
                    </h5>
                    <h5>
                        Atuação em diversos projetos do ramo de Corretora de Valores, Fundos de Investimento, Risco, Estratégia, DMA e Trading de Importação usando diversas tecnologias:
                    </h5>
                    <h5>
                        C#, VB.NET, ASP.NET, MVC, TDD, REST, ASP, HTML, Javascript, JQuery, CSS, Oracle ( PL/SQL), SQL Server, MongoDB, Python, PHP, Microsiga Protheus, TOTVS, ABAP (construção de relatórios, dicionário de dados), Servidor de aplicação IIS, GIT, TFS, VSTS, Jira.
                    </h5>
                    <p>
                        <a href="https://teonett.github.io/"> Perfil Web: GITHUB</a> 
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </>
)

export default Contact