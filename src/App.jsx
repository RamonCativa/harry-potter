import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Peticiones } from './componentes/peticiones'

function App() {
  const [resultado, setresultado] = useState([])
  const [nombre, setnombre] = useState("")


  return (
    <>
      <Peticiones nombre={"harry "}/>
    </>
  )
}

export default App
