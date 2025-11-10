import React from 'react'
import PetCard from './PetCard'

export default function PetList({pets = [], onRemove, onLocate}){
  if(!pets.length) return <p className="muted">No tienes mascotas registradas.</p>

  return (
    <div className="pet-list">
      {pets.map(p => (
        <PetCard key={p.id} pet={p} onRemove={onRemove} onLocate={onLocate} />
      ))}
    </div>
  )
}
