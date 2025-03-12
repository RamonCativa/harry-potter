import { useEffect, useState } from "react"

export function Peticiones({ nombre }) {

    const [personajes, setpersonajes] = useState([])

    async function obtenerdatos() {
        let respuesta = await fetch("https://api.potterdb.com/v1/characters?filter[name_cont]=" + nombre)
        let datos = await respuesta.json()
        console.log(datos)
        setpersonajes(datos.data)
    }

    useEffect(() => {
        if(nombre !== ""){
            obtenerdatos()
        }
        
    }, [nombre])

    return <>

        {personajes.map((element, index)=>{
            return <div key={index}>
                <h3>{element.attributes.name}</h3>
            </div>

        })}

    </>

}