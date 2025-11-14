import React from 'react'
import Sidebar from './Sidebar'

export default function PageLayout({ children, pets, onOpenAdd, onRemove, onLocate, showSidebar = true }) {
  if (!showSidebar) {
    return <main className="container">{children}</main>
  }

  return (
    <main className="container">
      <div className="hero-left">{children}</div>
      <Sidebar pets={pets} onOpenAdd={onOpenAdd} onRemove={onRemove} onLocate={onLocate} />
    </main>
  )
}

