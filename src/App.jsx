import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Seccion from './componentes/seccion/Seccion';
import ListaDiscos from './componentes/discos/ListaDiscos';
import Menu from './componentes/menu/Menu';
import Fechas from './componentes/fechas/Fechas';
import ListaProductos from './componentes/productos/ListaProductos';


function App() {



  return (
    <Router>
      <div className="container">
    
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path='/' element={<Fechas />} />
            <Route path='/discos' element={<ListaDiscos />} />
            <Route path='/seccion' element={<Seccion />} />
            <Route path='/productos' element={<ListaProductos />} />
           </Routes>
        </main>

        <Footer />

      </div>
    </Router>

  )
}

export default App;