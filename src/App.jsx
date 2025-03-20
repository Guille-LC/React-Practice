import './components/Componente1'
import './components/Componente2'
import './components/Navbar'
import { Componente1 } from './components/Componente1'
import { Componente2 } from './components/Componente2'
import { Navbar } from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <>
      <div className='head'>
        <img src="../img/pngfind.com-green-day-logo-png-6068960.png" alt="Sweet Merch" className='logo'/>
        <h1>Sweet Merch</h1>
      </div>
        <Navbar />
        <ItemListContainer greeting="¡Bienvenido a Sweet Merch!"/>
        <Componente1 />
        <Componente2 />
    </>
  )
}

export default App