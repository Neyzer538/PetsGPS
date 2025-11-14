import React from 'react'

export default function Info(){
  return (
    <>
      <h2>Información</h2>
      <p>Información sobre PetsGPS, su misión y cómo funciona.</p>
      
      <div style={{marginTop: 32}}>
        <h3>Nuestra Misión</h3>
        <p style={{color: 'var(--muted)', lineHeight: 1.6}}>
          PetsGPS nació con la misión de garantizar la seguridad y tranquilidad de los dueños de mascotas. 
          Utilizamos tecnología de vanguardia para mantener siempre localizada a tu mejor amigo.
        </p>
      </div>

      <div style={{marginTop: 32}}>
        <h3>¿Cómo funciona?</h3>
        <ol style={{color: 'var(--muted)', lineHeight: 1.8, paddingLeft: 20}}>
          <li>Adquiere un collar rastreador GPS de nuestro catálogo</li>
          <li>Registra tu mascota en la plataforma</li>
          <li>Conecta el dispositivo a través de nuestra app</li>
          <li>Monitorea la ubicación en tiempo real desde cualquier lugar</li>
        </ol>
      </div>

      <div style={{marginTop: 32}}>
        <h3>Características principales</h3>
        <ul style={{color: 'var(--muted)', lineHeight: 1.8, paddingLeft: 20}}>
          <li>Localización en tiempo real con precisión de metros</li>
          <li>Geocerca virtual para establecer áreas seguras</li>
          <li>Notificaciones instantáneas cuando tu mascota sale de la zona</li>
          <li>Historial de ubicaciones para revisar rutas</li>
          <li>Batería de larga duración</li>
          <li>Resistente al agua y condiciones climáticas</li>
        </ul>
      </div>
    </>
  )
}
