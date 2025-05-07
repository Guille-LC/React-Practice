import './components/Catalogo'
import './components/ItemCount'
import './components/Navbar'
import { Catalogo } from './components/Catalogo'
import { Navbar } from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import { Link } from 'react-router-dom';
import Carrito from './components/Carrito';
import { Footer } from './components/Footer'
import {ShopCartProvider} from './components/context/ShopCartContext'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })
  if (loading) {
    return <Loading />
  }

  return (
    <>
      <ShopCartProvider>
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
          <Footer />
        </BrowserRouter>
      </ShopCartProvider>
    </>
  )
}

export default App