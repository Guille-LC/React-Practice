import './components/Catalogo'
import './components/ItemCount'
import './components/Navbar'
import { Catalogo } from './components/Catalogo'
import { Navbar } from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import { Link } from 'react-router-dom';
import Carrito from './components/Carrito'


function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <div className='head'>
            <img src="../img/pngfind.com-green-day-logo-png-6068960.png" alt="Sweet Merch" className='logo'/>
            <h1>SWEET MERCH</h1>
          </div>
      </Link>
      <Navbar />
      <Routes>
        <Route path="/carrito" element={<Carrito />} /> 
        <Route path='/' element={<Catalogo />}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer />}/>
        <Route path="*" element={<NotFound/ >}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App