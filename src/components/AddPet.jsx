import React, { useState } from 'react'

const AVAILABLE_IMAGES = [
  {id:'puppy', src:'/src/assets/puppy.jpg', label:'Puppy'},
  {id:'cat', src:'/src/assets/cat.jpeg', label:'Cat'},
  {id:'rabbit', src:'/src/assets/rabbit.jpeg', label:'Rabbit'}
]

export default function AddPet({ onAdd, onClose }){
  const [name, setName] = useState('')
  const [type, setType] = useState('Perro')
  const [img, setImg] = useState(AVAILABLE_IMAGES[0].src)

  function submit(e){
    e.preventDefault()
    if(!name.trim()) return
    onAdd({ name: name.trim(), type, img })
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <header className="modal-header">
          <h3>Agregar mascota</h3>
          <button className="btn" onClick={onClose}>Cerrar</button>
        </header>
        <form onSubmit={submit} className="addpet-form">
          <label>Nombre</label>
          <input value={name} onChange={e => setName(e.target.value)} />

          <label>Tipo</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option>Perro</option>
            <option>Gato</option>
            <option>Otro</option>
          </select>

          <label>Imagen</label>
          <div className="image-options">
            {AVAILABLE_IMAGES.map(i => (
              <button type="button" key={i.id} className={`img-choice ${img===i.src? 'active':''}`} onClick={() => setImg(i.src)}>
                <img src={i.src} alt={i.label} />
              </button>
            ))}
          </div>

          <div style={{display:'flex',gap:8,marginTop:12}}>
            <button className="btn" type="submit">Agregar</button>
            <button type="button" onClick={onClose} className="btn small">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
