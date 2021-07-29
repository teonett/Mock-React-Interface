import './main-page.css';
import DataItens from "../components/treeview";
import Footer from '../components/footer';
import Menu from '../components/header';
import Header from './header';

function App() {
  return (
    
    <div className="row container">
      <Menu />
      <Header />
      
      <div className="col-md-3"></div>
      <div className="col-md-8 mt-5">
        <DataItens></DataItens>
      </div>
      
      <Footer />
    </div>
);
}

export default App;
