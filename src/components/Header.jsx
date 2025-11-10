import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-header">
      <div className="wrap">
        <h1 className="logo"><Link to="/">PetsGPS</Link></h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/informacion">Información</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/login" className="btn">Iniciar</Link>
        </nav>
      </div>
    </header>
  )
}
