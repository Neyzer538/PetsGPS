import React from 'react'

export default function PetCard({pet, onRemove, onLocate}){
  return (
    <div className="pet-card">
      <img src={pet.img} alt={pet.name} />
      <div className="pet-info">
        <strong>{pet.name}</strong>
        <small>{pet.type}</small>
      </div>
      <div className="pet-actions">
        <button className="btn small" onClick={() => onLocate(pet)}>Localizar</button>
        <button className="btn small" onClick={() => onRemove(pet.id)}>Eliminar</button>
      </div>
    </div>
  )
}
