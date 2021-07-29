import React from 'react'
import Footer from '../footer'
import Header from '../header'
import Exemplo from "../../assets/images/json.png"

const Home = () => (
    <>
        <Header />
        <div className="row subtitle">
            <div className="col-md-2"></div>
            <div className="col-md-10"><h1>SOBRE</h1></div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <h2>Desafio de FrontEnd</h2>
                    <h5>
                        Gerar uma simples árvore de itens, na qual cada item pode ter vários itens encadeados (itens filhos) a partir dos dados existentes dentro do arquivo "data.json", contendo os dados para renderizar a árvore. A estrutura de um único item é esta:
                    </h5>
                    <p>
                        <img src={Exemplo} className="exemplo" alt="exemplo" />
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </>
)

export default Home