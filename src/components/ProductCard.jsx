import React from 'react'
import { Link } from 'react-router-dom'

function slugify(s){
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
}

export default function ProductCard({img, title}){
  const href = `/producto/${slugify(title)}`
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <p>Detalles del producto y características.</p>
      <Link className="btn small" to={href}>Ver más</Link>
    </div>
  )
}
