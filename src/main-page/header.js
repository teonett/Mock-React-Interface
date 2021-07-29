import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8 mt-5 subtitle">
          <h1>LISTA</h1>
          <h5>
            Simples árvore de itens com vários itens encadeados (itens filhos) a partir dos dados existentes dentro do arquivo "data.json.
          </h5>
        </div>
      </header>
    );
  }
}

export default Header;