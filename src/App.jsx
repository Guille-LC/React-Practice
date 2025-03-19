import './components/Componente1'
import './components/Componente2'
import { Componente1 } from './components/Componente1'
import { Componente2 } from './components/Componente2'


function App() {
  let year = 2025;
  return (
    <>
      <div>
        <h1>Sweet Merch</h1>
      </div>
      <Componente1 />
      <Componente2 propiedad={year}/>
    </>
  )
}

export default App