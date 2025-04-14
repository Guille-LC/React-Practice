import './components/Catalogo'
import './components/ItemCount'
import './components/Navbar'
import { Catalogo } from './components/Catalogo'
import { Navbar } from './components/Navbar'
import Greeting from './components/Greeting'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className='head'>
        <img src="../img/pngfind.com-green-day-logo-png-6068960.png" alt="Sweet Merch" className='logo'/>
        <h1>SWEET MERCH</h1>
      </div>
        <Navbar />
          <Greeting greeting="¡Bienvenido a la tienda de Sweet Merch!"/>
        <Routes>
          <Route path='/' element={<Catalogo />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App