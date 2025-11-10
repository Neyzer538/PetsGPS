import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-left">
        <h2>PetsGPS</h2>
        <p>Esta app te ayuda a mantener ubicado a cualquier mascota que esté con usted.</p>

        <div className="objectives">
          <h3>Busca y encuentra a tu mejor amigo</h3>
          <div className="cards">
            <article className="card">
              <img src="/src/assets/cat.jpeg" alt="cat" />
              <h4>Objetivo 1</h4>
              <p>Garantizar seguridad de tu mascota</p>
            </article>
            <article className="card">
              <img src="/src/assets/puppy.jpg" alt="puppy" />
              <h4>Objetivo 2</h4>
              <p>Encontrar rastreadores y accesorios</p>
            </article>
            <article className="card">
              <img src="/src/assets/rabbit.jpeg" alt="rabbit" />
              <h4>Objetivo 3</h4>
              <p>Ser el mejor aliado para dueños</p>
            </article>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img className="hero-image" src="/src/assets/puppy.jpg" alt="puppy" />
      </div>
    </section>
  )
}
