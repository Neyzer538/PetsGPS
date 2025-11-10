import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import AddPet from './components/AddPet'
import PetList from './components/PetList'
import Shop from './components/Shop'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Info from './pages/Info'
import Login from './pages/Login'

export default function App(){
  const [pets, setPets] = useState([])
  const [showAdd, setShowAdd] = useState(false)
  const [selectedPet, setSelectedPet] = useState(null)

  useEffect(() => {
    try{
      const raw = localStorage.getItem('pets')
      if(raw) setPets(JSON.parse(raw))
    }catch(e){
      console.warn('Could not load pets', e)
    }
  }, [])

  useEffect(() => {
    try{ localStorage.setItem('pets', JSON.stringify(pets)) }catch(e){}
  }, [pets])

  function addPet(pet){
    const newPet = { id: Date.now(), ...pet }
    setPets(prev => [newPet, ...prev])
    setShowAdd(false)
  }

  function removePet(id){
    setPets(prev => prev.filter(p => p.id !== id))
  }

  function locatePet(pet){
    setSelectedPet(pet)
  }

  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Home pets={pets} onOpenAdd={() => setShowAdd(true)} onRemove={removePet} onLocate={locatePet} />} />
        <Route path="/informacion" element={<Info />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

      {showAdd && <AddPet onClose={() => setShowAdd(false)} onAdd={addPet} />}
      {selectedPet && (
        <Modal onClose={() => setSelectedPet(null)}>
          <div style={{textAlign:'center'}}>
            <h3>Localizando: {selectedPet.name}</h3>
            <img src="/src/assets/map.svg" alt="map" style={{width:'100%',maxWidth:360}} />
            <p>Coordenadas simuladas: 12.3456, -98.7654</p>
          </div>
        </Modal>
      )}
    </div>
  )
}
