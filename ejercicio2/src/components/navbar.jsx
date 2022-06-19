import React from 'react'

function Navbar() {
  return (
    <nav className="nav">
        <ul className='routes-nav'>
            <a href='/'><li>Inicio</li></a>
            <a href='/'><li>Películas</li></a>
            <a href='/'><li>Buscar</li></a>
            <a href='/'><li>Añadir</li></a>
        </ul>
    </nav>
  )
}

export default Navbar