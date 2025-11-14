import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register(){
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    acceptTerms: false
  })
  const [errors, setErrors] = useState({})
  const [passwordStrength, setPasswordStrength] = useState(0)

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  function checkPasswordStrength(password) {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[^a-zA-Z\d]/.test(password)) strength++
    return strength
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value))
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Correo inválido'
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida'
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden'
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Demo: Save to localStorage and redirect
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      users.push({
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        createdAt: new Date().toISOString()
      })
      localStorage.setItem('users', JSON.stringify(users))
      alert('¡Registro exitoso! Redirigiendo al login...')
      navigate('/login')
    } catch (err) {
      console.error('Error saving user:', err)
    }
  }

  const strengthLabels = ['Muy débil', 'Débil', 'Regular', 'Fuerte', 'Muy fuerte']
  const strengthColors = ['#ef4444', '#f59e0b', '#eab308', '#22c55e', '#16a34a']

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Crear cuenta</h2>
        <p className="muted" style={{marginTop: 4, marginBottom: 20}}>Regístrate para comenzar a usar PetsGPS</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre completo</label>
          <input 
            id="name" 
            name="name"
            type="text" 
            placeholder="Juan Pérez" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          {errors.name && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4, display: 'block'}}>{errors.name}</span>}

          <label htmlFor="email">Correo electrónico</label>
          <input 
            id="email" 
            name="email"
            type="email" 
            placeholder="tu@correo.com" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          {errors.email && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4, display: 'block'}}>{errors.email}</span>}

          <label htmlFor="phone">Teléfono (opcional)</label>
          <input 
            id="phone" 
            name="phone"
            type="tel" 
            placeholder="+1 234 567 8900" 
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="password">Contraseña</label>
          <input 
            id="password" 
            name="password"
            type="password" 
            placeholder="••••••••" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
          {formData.password && (
            <div style={{marginTop: 8}}>
              <div style={{display: 'flex', gap: 4, marginBottom: 4}}>
                {[1, 2, 3, 4].map(level => (
                  <div
                    key={level}
                    style={{
                      flex: 1,
                      height: 4,
                      background: level <= passwordStrength && passwordStrength > 0 ? strengthColors[passwordStrength - 1] : '#e5e7eb',
                      borderRadius: 2
                    }}
                  />
                ))}
              </div>
              <span style={{fontSize: 12, color: passwordStrength > 0 ? strengthColors[passwordStrength - 1] : 'var(--muted)'}}>
                {strengthLabels[passwordStrength - 1] || 'Muy débil'}
              </span>
            </div>
          )}
          {errors.password && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4, display: 'block'}}>{errors.password}</span>}

          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input 
            id="confirmPassword" 
            name="confirmPassword"
            type="password" 
            placeholder="••••••••" 
            value={formData.confirmPassword}
            onChange={handleChange}
            required 
          />
          {errors.confirmPassword && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4, display: 'block'}}>{errors.confirmPassword}</span>}

          <label style={{display: 'flex', alignItems: 'start', gap: 8, marginTop: 16, cursor: 'pointer'}}>
            <input 
              type="checkbox" 
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              style={{width: 'auto', marginTop: 4}}
            />
            <span style={{fontSize: 13, color: 'var(--muted)'}}>
              Acepto los <a href="/terminos" style={{color: 'var(--accent)'}}>términos y condiciones</a> y la <a href="/privacidad" style={{color: 'var(--accent)'}}>política de privacidad</a>
            </span>
          </label>
          {errors.acceptTerms && <span style={{color: '#ef4444', fontSize: 12, marginTop: 4, display: 'block'}}>{errors.acceptTerms}</span>}

          <div className="login-actions" style={{marginTop: 20}}>
            <button className="btn" type="submit" style={{flex: 1}}>Registrarse</button>
          </div>
        </form>

        <div className="login-footer">
          <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  )
}

