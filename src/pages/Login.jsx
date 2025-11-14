import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(){
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Iniciar sesión</h2>

        <form className="login-form" onSubmit={e=>e.preventDefault()}>
          <label htmlFor="email">Correo</label>
          <input id="email" type="email" placeholder="tu@correo.com" required />

          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" placeholder="••••••••" required />

          <div className="login-actions">
            <button className="btn" type="submit">Iniciar</button>
            <a className="muted" href="/forgot">¿Olvidaste tu contraseña?</a>
          </div>
        </form>

        <div className="login-footer">
          <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
        </div>
      </div>
    </div>
  )
}
