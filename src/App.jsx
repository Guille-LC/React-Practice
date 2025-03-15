import './App.css'
import './Componente1'
import './Componente2'
import { Componente1 } from './Componente1'
import { Componente2 } from './Componente2'

function App() {
  return (
    <>
      <div>
        <h1>Proyecto con React</h1>
      </div>
      <Componente1/>
      <Componente2/>
    </>
  )
}

export default App