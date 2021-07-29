import React from 'react'
import Footer from '../footer'
import Header from '../header'

const Home = () => (
    <>
        <Header />
        <div className="row subtitle">
            <div className="col-md-2"></div>
            <div className="col-md-10"><h1>HOME</h1></div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <h2>Desafio de FrontEnd</h2>
                    <h5>
                        Aplicação feita para o teste de front end do Hi Platform.
                    </h5>
                </div>
            </div>
        </div>
        <Footer />
    </>
)

export default Home