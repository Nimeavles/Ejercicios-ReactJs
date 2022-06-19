import React from 'react'
import logo from '../public/logo.jpg'

function header() {
  return (
    <header className='header'>
      <div className="header-content">
        <img className="icon" src={logo} alt="logo" />
        <h1 className='title'>Cartelera Online</h1>
      </div>
    </header>
  )
}

export default header