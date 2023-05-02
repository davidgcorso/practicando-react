import React, { useContext } from 'react'
import Contexto from './contexto/Contexto'
import Provider from '.contexto/Provider'

const Idiomas = () => {
    const {setAlumno}=useContext(Contexto)
    const {alumno}= useContext(Contexto)
    const sustitucion = (posicion) => {
        setAlumno(
            alumno.map((dato, indice)=> indice===3 ? {...dato, idioma:posicion} : {...dato})
        )
    }
    const cambio1 = () =>{
       sustitucion(0)
    }
    const cambio2 = () =>{
        sustitucion(1)
     }
     const cambio3 = () =>{
        sustitucion(2)
     }
  return (
    <div className='idiomas'>
        <div className='bandera'><img src='../public/img/españa.png' alt='' onClick={cambio1}/></div>
        <div className='bandera'><img src='../public/img/francia.png' alt='' onClick={cambio2}/></div>
        <div className='bandera'><img src='../public/img/reinoUnido.png' alt='' onClick={cambio3}/></div>
    </div>
  )
}

export default Idiomas