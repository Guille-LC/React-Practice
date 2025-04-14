import './components/ProductList'
import './components/ItemCount'
import './components/Navbar'
import { ProductList } from './components/ProductList'
import { Navbar } from './components/Navbar'
import Greeting from './components/Greeting'


function App() {
  return (
    <>
      <div className='head'>
        <img src="../img/pngfind.com-green-day-logo-png-6068960.png" alt="Sweet Merch" className='logo'/>
        <h1>SWEET MERCH</h1>
      </div>
        <Navbar />
        <Greeting greeting="¡Bienvenido a Sweet Merch!"/>
        <ProductList />
    </>
  )
}

export default App