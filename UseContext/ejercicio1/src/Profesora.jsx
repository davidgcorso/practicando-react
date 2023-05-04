import React, { useContext } from 'react'
import Contexto from './contexto/Contexto'

const Profesora = () => {
    const {alumno} = useContext(Contexto) 
    const idioma = alumno[3].idioma
    const imagen = `../img/${alumno[idioma].foto}`
  return (
    <div className='profesora'>
        <h1>{alumno[idioma].boton1}:</h1>
        <div>
            <img className='imagenProfesora' src={imagen} alt='' />
        </div>
        <div>{alumno[idioma].nombre}</div>
    </div>
  )
}

export default Profesora