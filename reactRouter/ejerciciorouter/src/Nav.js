import React from 'react'
import { NavLink } from 'react-router-dom'
import  './App.css'

const Nav = () => {
  return (
    <nav>
        <NavLink to="/" className={({isActive})=> isActive?"activo":null}>Pagina 1</NavLink>
        <NavLink to="/pagina2" className={({isActive})=> isActive?"activo":null}>Pagina 2</NavLink>
        <NavLink to="/pagina3" className={({isActive})=> isActive?"activo":null}>Pagina 3</NavLink>
    </nav>
  )
}

export default Nav