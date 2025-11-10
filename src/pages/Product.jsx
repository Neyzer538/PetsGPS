import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product(){
  const { id } = useParams()
  return (
    <div style={{padding:20}}>
      <h2>Producto: {id}</h2>
      <p>Detalle del producto <strong>{id}</strong>. Aquí puedes mostrar datos reales.</p>
      <img src="/src/assets/collar.jpeg" alt="producto" style={{maxWidth:320}} />
    </div>
  )
}
