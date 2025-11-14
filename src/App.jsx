import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import AddPet from './components/AddPet'
import PageLayout from './components/PageLayout'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Info from './pages/Info'
import Login from './pages/Login'
import Register from './pages/Register'
import MapView from './components/MapView'

function AppContent() {
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
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <PageLayout pets={pets} onOpenAdd={() => setShowAdd(true)} onRemove={removePet} onLocate={locatePet}>
              <Home />
            </PageLayout>
          } 
        />
        <Route 
          path="/informacion" 
          element={
            <PageLayout pets={pets} onOpenAdd={() => setShowAdd(true)} onRemove={removePet} onLocate={locatePet}>
              <Info />
            </PageLayout>
          } 
        />
        <Route 
          path="/catalogo" 
          element={
            <PageLayout pets={pets} onOpenAdd={() => setShowAdd(true)} onRemove={removePet} onLocate={locatePet}>
              <Catalog />
            </PageLayout>
          } 
        />
        <Route 
          path="/producto/:id" 
          element={
            <PageLayout pets={pets} onOpenAdd={() => setShowAdd(true)} onRemove={removePet} onLocate={locatePet}>
              <Product />
            </PageLayout>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {showAdd && <AddPet onClose={() => setShowAdd(false)} onAdd={addPet} />}
      {selectedPet && (
        <Modal onClose={() => setSelectedPet(null)}>
          <MapView pet={selectedPet} />
        </Modal>
      )}
    </>
  )
}

export default function App(){
  return (
    <div className="page">
      <Header />
      <AppContent />
      <Footer />
    </div>
  )
}
