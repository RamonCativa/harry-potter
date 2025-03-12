import { useRef } from "react"

export function Filtros({setnombre}) {
let inputref = useRef()

    return <>
    <input type="text" ref={inputref} />
    <button onClick={()=>{setnombre(inputref.current.value)}}>buscar</button>
    
    </>
    
}