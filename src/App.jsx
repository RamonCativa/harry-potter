import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Peticiones } from './componentes/peticiones'
import { Filtros } from './componentes/Filtros'

function App() {
  const [resultado, setresultado] = useState([])
  const [nombre, setnombre] = useState("")


  return (
    <>
      <Filtros setnombre={setnombre}/>
      <Peticiones nombre={nombre}/>

    </>
  )
}

export default App
