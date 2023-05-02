import React, { useContext, useState } from 'react'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'
import Contexto from './contexto/Contexto'

const Pagina = () => {
    const {alumno} = useContext(Contexto)
    const idioma = alumno[3].idioma
    const [ocultar1, setOcultar1] =useState(false)
    const [ocultar2, setOcultar2] =useState(false)
  return (
    <>
    <h1 className='titulo'>{alumno[idioma].titulo}</h1>
    <h2>{alumno[idioma].texto}</h2>
    <div className='botones'>
        <button>{alumno[idioma].boton1} onClick={()=> {setOcultar1(!ocultar1); setOcultar2(false)}}</button>
        <button>{alumno[idioma].boton2} onClick={()=> {setOcultar2(!ocultar2); setOcultar1(false)}}</button>
    </div>
    {ocultar1 ? <Profesora /> : null}
    <Ubicacion />
    </>
  )
}

export default Pagina