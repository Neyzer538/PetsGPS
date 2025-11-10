import React from 'react'
import Hero from '../components/Hero'
import Shop from '../components/Shop'
import PetList from '../components/PetList'

export default function Home({pets, onOpenAdd, onRemove, onLocate}){
  return (
    <main className="container">
      <Hero />
      <aside className="sidebar">
        <Shop onOpenAdd={onOpenAdd} />
        <div style={{marginTop:18}}>
          <h4>Tus mascotas</h4>
          <PetList pets={pets} onRemove={onRemove} onLocate={onLocate} />
        </div>
      </aside>
    </main>
  )
}
