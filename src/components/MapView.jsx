import React, { useState, useEffect } from 'react'

export default function MapView({ pet }) {
  const [location, setLocation] = useState({
    lat: 19.4326 + (Math.random() - 0.5) * 0.1,
    lng: -99.1332 + (Math.random() - 0.5) * 0.1,
    accuracy: 15,
    lastUpdate: new Date()
  })
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    // Simulate location updates every 5 seconds
    const interval = setInterval(() => {
      setIsUpdating(true)
      setTimeout(() => {
        setLocation(prev => ({
          lat: prev.lat + (Math.random() - 0.5) * 0.001,
          lng: prev.lng + (Math.random() - 0.5) * 0.001,
          accuracy: 10 + Math.random() * 10,
          lastUpdate: new Date()
        }))
        setIsUpdating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-MX', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="map-view">
      <div className="map-header" style={{marginBottom: 16}}>
        <h3 style={{margin: 0, marginBottom: 4}}>📍 {pet.name}</h3>
        <div style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--muted)'}}>
          <span className={isUpdating ? 'pulse' : ''}>
            {isUpdating ? '🔄 Actualizando...' : '✓ En línea'}
          </span>
          <span>•</span>
          <span>Última actualización: {formatTime(location.lastUpdate)}</span>
        </div>
      </div>

      <div className="map-container" style={{
        position: 'relative',
        width: '100%',
        height: 400,
        background: '#f0f4f8',
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        marginBottom: 16
      }}>
        {/* Map background - will use skeleton image */}
        <img 
          src="/src/assets/map/map-background.jpg" 
          alt="Map"
          onError={(e) => {
            e.target.src = '/src/assets/map.jpeg'
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.7
          }}
        />
        
        {/* Location marker */}
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '52%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10
        }}>
          <div style={{
            width: 24,
            height: 24,
            background: '#ef4444',
            borderRadius: '50%',
            border: '3px solid white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            animation: isUpdating ? 'pulse 1s infinite' : 'none'
          }} />
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: 4,
            background: 'white',
            padding: '4px 8px',
            borderRadius: 4,
            fontSize: 12,
            fontWeight: 600,
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            whiteSpace: 'nowrap'
          }}>
            {pet.name}
          </div>
        </div>

        {/* Accuracy circle */}
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '52%',
          transform: 'translate(-50%, -50%)',
          width: location.accuracy * 4,
          height: location.accuracy * 4,
          border: '2px dashed rgba(239, 68, 68, 0.3)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
      </div>

      <div className="location-info" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 12,
        marginBottom: 16
      }}>
        <div style={{padding: 12, background: '#f9fafb', borderRadius: 6}}>
          <div style={{fontSize: 12, color: 'var(--muted)', marginBottom: 4}}>Latitud</div>
          <div style={{fontWeight: 600, fontFamily: 'monospace'}}>{location.lat.toFixed(6)}</div>
        </div>
        <div style={{padding: 12, background: '#f9fafb', borderRadius: 6}}>
          <div style={{fontSize: 12, color: 'var(--muted)', marginBottom: 4}}>Longitud</div>
          <div style={{fontWeight: 600, fontFamily: 'monospace'}}>{location.lng.toFixed(6)}</div>
        </div>
        <div style={{padding: 12, background: '#f9fafb', borderRadius: 6}}>
          <div style={{fontSize: 12, color: 'var(--muted)', marginBottom: 4}}>Precisión</div>
          <div style={{fontWeight: 600}}>±{location.accuracy.toFixed(0)} m</div>
        </div>
        <div style={{padding: 12, background: '#f9fafb', borderRadius: 6}}>
          <div style={{fontSize: 12, color: 'var(--muted)', marginBottom: 4}}>Fecha</div>
          <div style={{fontWeight: 600, fontSize: 14}}>{formatDate(location.lastUpdate)}</div>
        </div>
      </div>

      <div style={{display: 'flex', gap: 8}}>
        <button 
          className="btn" 
          style={{flex: 1}}
          onClick={() => {
            setIsUpdating(true)
            setTimeout(() => {
              setLocation(prev => ({
                ...prev,
                lat: prev.lat + (Math.random() - 0.5) * 0.001,
                lng: prev.lng + (Math.random() - 0.5) * 0.001,
                lastUpdate: new Date()
              }))
              setIsUpdating(false)
            }, 500)
          }}
        >
          🔄 Actualizar ubicación
        </button>
        <button 
          className="btn" 
          style={{flex: 1, background: 'transparent', color: 'var(--accent)', border: '1px solid var(--accent)'}}
          onClick={() => {
            const url = `https://www.google.com/maps?q=${location.lat},${location.lng}`
            window.open(url, '_blank')
          }}
        >
          🗺️ Abrir en Google Maps
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .pulse {
          animation: pulse 1s infinite;
        }
      `}</style>
    </div>
  )
}

