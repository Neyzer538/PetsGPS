import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop({onOpenAdd}){
  return (
    <section className="shop">
      <h2>Tienda en Linea</h2>
      <p>Agrégale a tu mascota un accesorio moderno.</p>
      <button className="btn" onClick={onOpenAdd}>Agregar mascota</button>
      <div className="shop-card" style={{marginTop:12}}>
        <img src="/src/assets/map.jpeg" alt="map" />
        <div>
          <h3>Agrega a tu mascota</h3>
          <p>Escanea el QR y registra el rastreador.</p>
          <Link className="btn small" to="/catalogo">Ver producto</Link>
        </div>
      </div>
    </section>
  )
}
