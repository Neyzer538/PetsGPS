import React from 'react'
import ProductCard from './ProductCard'

export default function Features(){
  return (
    <section className="features">
      <h2>Collar rastreador.</h2>
      <p>En un collar con un diseño moderno y eficiente, siempre sabrás donde está tu mascota.</p>

      <div className="feature-grid">
        <ProductCard img="/src/assets/collar.jpeg" title="Collar"/>
        <ProductCard img="/src/assets/puppy.jpg" title="Rastreador"/>
        <ProductCard img="/src/assets/map.jpeg" title="Localiza"/>
      </div>

      <h3 style={{marginTop: 32}}>Comentarios</h3>
      <div className="comments">
        <blockquote>"Excelente servicio" - Usuaria</blockquote>
        <blockquote>"Servicio muy efectivo" - Usuario</blockquote>
        <blockquote>"Recomiendo el rastreador" - Persona</blockquote>
      </div>
    </section>
  )
}
