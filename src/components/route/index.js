import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from "../about"
import Contact from '../contact'
import Home from '../home'
import MainPage from "../../main-page"

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/main" component={MainPage} />
    </BrowserRouter>
);

export default Routes