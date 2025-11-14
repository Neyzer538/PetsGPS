import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const PRODUCTS = {
  collar: {
    id: "collar",
    title: "Collar Rastreador GPS",
    price: 89.99,
    originalPrice: 119.99,
    images: [
      "/src/assets/products/collar-detail-1.jpg",
      "/src/assets/products/collar-detail-2.jpg",
      "/src/assets/collar.jpeg",
    ],
    description:
      "Collar rastreador GPS de última generación con diseño moderno y eficiente. Mantén siempre localizada a tu mascota con precisión.",
    specs: {
      Batería: "Hasta 7 días de duración",
      Rango: "Hasta 5 km de alcance",
      Peso: "45g - Ligero y cómodo",
      Resistencia: "IP67 - Resistente al agua",
      Material: "Silicón suave y duradero",
      Tamaño: "Ajustable 20-40 cm",
    },
    features: [
      "Localización en tiempo real",
      "Geocerca virtual (áreas seguras)",
      "Notificaciones instantáneas",
      "Historial de ubicaciones",
      "App móvil incluida",
      "Garantía de 1 año",
    ],
    reviews: [
      {
        name: "María González",
        rating: 5,
        comment:
          "Excelente producto, muy fácil de usar y la batería dura mucho tiempo.",
        date: "2024-01-15",
      },
      {
        name: "Carlos Ruiz",
        rating: 5,
        comment:
          "Encontré a mi perro en minutos gracias al GPS. Totalmente recomendado.",
        date: "2024-01-10",
      },
      {
        name: "Ana Martínez",
        rating: 4,
        comment:
          "Buen producto, aunque la app podría mejorar un poco la interfaz.",
        date: "2024-01-05",
      },
    ],
  },
  rastreador: {
    id: "rastreador",
    title: "Rastreador GPS Premium",
    price: 129.99,
    originalPrice: 159.99,
    images: [
      "/src/assets/products/rastreador-detail-1.jpg",
      "/src/assets/products/rastreador-detail-2.jpg",
      "/src/assets/puppy.jpg",
    ],
    description:
      "Rastreador GPS premium con tecnología avanzada y mayor precisión. Ideal para mascotas que necesitan monitoreo constante.",
    specs: {
      Batería: "Hasta 14 días de duración",
      Rango: "Hasta 10 km de alcance",
      Peso: "35g - Ultra ligero",
      Resistencia: "IP68 - Sumergible",
      Material: "Titanio y plástico reforzado",
      Tamaño: "Compacto 3x2 cm",
    },
    features: [
      "GPS de alta precisión",
      "Sensores de actividad",
      "Modo de ahorro de energía",
      "Compatible con múltiples dispositivos",
      "Soporte 24/7",
      "Garantía de 2 años",
    ],
    reviews: [
      {
        name: "Roberto Sánchez",
        rating: 5,
        comment:
          "La mejor inversión para la seguridad de mi mascota. Muy preciso.",
        date: "2024-01-12",
      },
      {
        name: "Laura Fernández",
        rating: 5,
        comment: "Funciona perfectamente, la batería dura más de lo esperado.",
        date: "2024-01-08",
      },
    ],
  },
  localiza: {
    id: "localiza",
    title: "Sistema de Localización",
    price: 199.99,
    originalPrice: 249.99,
    images: [
      "/src/assets/products/localiza-detail-1.jpg",
      "/src/assets/map.jpeg",
    ],
    description:
      "Sistema completo de localización con múltiples dispositivos y funciones avanzadas de monitoreo.",
    specs: {
      Batería: "Hasta 30 días de duración",
      Rango: "Ilimitado (vía satélite)",
      Dispositivos: "Hasta 5 mascotas simultáneas",
      Resistencia: "IP68 - Sumergible",
      Material: "Aluminio anodizado",
      Tamaño: "Base 5x5 cm",
    },
    features: [
      "Sistema multi-mascota",
      "Mapas detallados en tiempo real",
      "Alertas personalizables",
      "Historial completo de rutas",
      "Panel de control web",
      "Garantía de 3 años",
    ],
    reviews: [
      {
        name: "Pedro López",
        rating: 5,
        comment:
          "Perfecto para tener varias mascotas. El panel web es muy útil.",
        date: "2024-01-14",
      },
    ],
  },
};

function getProductById(id) {
  return PRODUCTS[id] || PRODUCTS["collar"];
}

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(
    product.images[0] || "/src/assets/collar.jpeg"
  );

  const handleImageError = () => {
    setSelectedImage("/src/assets/collar.jpeg");
  };

  const averageRating =
    product.reviews.length > 0
      ? (
          product.reviews.reduce((sum, r) => sum + r.rating, 0) /
          product.reviews.length
        ).toFixed(1)
      : "0";

  return (
    <div style={{ paddingTop: 20, paddingBottom: 40 }}>
      <Link
        to="/catalogo"
        style={{
          color: "var(--muted)",
          textDecoration: "none",
          marginBottom: 16,
          display: "inline-block",
        }}
      >
        ← Volver al catálogo
      </Link>

      <div className="product-detail-grid">
        <div className="product-images">
          <div className="product-main-image">
            <img
              src={selectedImage}
              alt={product.title}
              onError={handleImageError}
              style={{
                width: "100%",
                borderRadius: 8,
                maxHeight: 500,
                objectFit: "contain",
              }}
            />
          </div>
          <div className="product-thumbnails">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`${product.title} ${idx + 1}`}
                  onError={(e) => {
                    e.target.src = "/src/assets/collar.jpeg";
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <div
            className="product-rating"
            style={{ marginTop: 8, marginBottom: 16 }}
          >
            <span style={{ fontSize: 18, fontWeight: 600 }}>
              ⭐ {averageRating}
            </span>
            <span className="muted" style={{ marginLeft: 8 }}>
              ({product.reviews.length} reseñas)
            </span>
          </div>
          <div className="product-pricing" style={{ marginBottom: 20 }}>
            <span className="product-price">${product.price}</span>
            {product.originalPrice && (
              <span className="product-original-price">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <p
            style={{
              color: "var(--muted)",
              marginBottom: 24,
              lineHeight: 1.6,
            }}
          >
            {product.description}
          </p>

          <div className="product-features" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, marginBottom: 12 }}>
              Características principales:
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {product.features.map((feature, idx) => (
                <li
                  key={idx}
                  style={{
                    padding: "6px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: 8 }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button
            className="btn"
            style={{
              width: "100%",
              padding: 14,
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            Agregar al carrito
          </button>
          <button
            className="btn"
            style={{
              width: "100%",
              padding: 14,
              fontSize: 16,
              background: "transparent",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
            }}
          >
            Comprar ahora
          </button>
        </div>
      </div>

      <div
        className="product-specs"
        style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid #eee" }}
      >
        <h2 style={{ marginBottom: 24 }}>Especificaciones técnicas</h2>
        <div className="specs-grid">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="spec-item">
              <strong>{key}:</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="product-reviews"
        style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid #eee" }}
      >
        <h2 style={{ marginBottom: 24 }}>Reseñas de clientes</h2>
        <div className="reviews-list">
          {product.reviews.map((review, idx) => (
            <div
              key={idx}
              className="review-item"
              style={{
                padding: 16,
                background: "#f9fafb",
                borderRadius: 8,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: 8,
                }}
              >
                <div>
                  <strong>{review.name}</strong>
                  <div style={{ marginTop: 4 }}>
                    {"⭐".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
                <span className="muted" style={{ fontSize: 14 }}>
                  {review.date}
                </span>
              </div>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
