import React from 'react'

export default function Modal({children, onClose}){
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()} style={{maxWidth: 600, width: '90%'}}>
        <div style={{display:'flex',justifyContent:'flex-end', marginBottom: 8}}>
          <button className="btn" onClick={onClose}>Cerrar</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}
