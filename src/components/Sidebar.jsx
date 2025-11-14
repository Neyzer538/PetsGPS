import React from 'react'
import Shop from './Shop'
import PetList from './PetList'

export default function Sidebar({ pets, onOpenAdd, onRemove, onLocate }) {
  return (
    <aside className="sidebar">
      <Shop onOpenAdd={onOpenAdd} />
      <div style={{ marginTop: 18 }}>
        <h4>Tus mascotas</h4>
        <PetList pets={pets} onRemove={onRemove} onLocate={onLocate} />
      </div>
    </aside>
  )
}

