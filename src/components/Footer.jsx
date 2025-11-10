import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>© {new Date().getFullYear()} PetsGPS. Síguenos en nuestras redes sociales.</p>
        <div className="links social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
