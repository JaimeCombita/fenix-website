import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import './ProductDetail.css';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Mesa Ejecutiva Premium',
    description: 'Mesa ejecutiva de alta gama con acabados en madera y metal. Diseño moderno y funcional para espacios de dirección. Perfecta para oficinas ejecutivas y salas de juntas.',
    category: 'mesas' as const,
    price: 1500000,
    images: [
      'https://via.placeholder.com/600x600/e74c3c/ffffff?text=Mesa+Ejecutiva+1',
      'https://via.placeholder.com/600x600/c0392b/ffffff?text=Mesa+Ejecutiva+2',
      'https://via.placeholder.com/600x600/95a5a6/ffffff?text=Mesa+Ejecutiva+3',
      'https://via.placeholder.com/600x600/34495e/ffffff?text=Mesa+Ejecutiva+4'
    ],
    stock: 15,
    featured: true,
    technicalDetails: {
      'Dimensiones': '180cm x 90cm x 75cm',
      'Material': 'Tablero MDF enchapado en nogal',
      'Estructura': 'Metal con acabado en polvo',
      'Peso': '65 kg',
      'Capacidad de carga': '150 kg',
      'Acabado': 'Lacado brillante'
    },
    features: [
      'Tablero de 25mm de espesor',
      'Sistema de cableado integrado',
      'Gaveta con cerradura de seguridad',
      'Patas niveladoras ajustables',
      'Superficie resistente a rayones',
      'Garantía de 3 años'
    ]
  },
  {
    id: '2',
    name: 'Silla Ergonómica Deluxe',
    description: 'Silla ergonómica con soporte lumbar ajustable y múltiples posiciones. Diseñada para largas jornadas de trabajo con máximo confort y soporte para la espalda.',
    category: 'sillas' as const,
    price: 850000,
    images: [
      'https://via.placeholder.com/600x600/3498db/ffffff?text=Silla+Ergo+1',
      'https://via.placeholder.com/600x600/2980b9/ffffff?text=Silla+Ergo+2',
      'https://via.placeholder.com/600x600/2c3e50/ffffff?text=Silla+Ergo+3'
    ],
    stock: 30,
    featured: true,
    technicalDetails: {
      'Dimensiones': '65cm x 65cm x 120cm',
      'Material respaldo': 'Malla transpirable',
      'Material asiento': 'Espuma de alta densidad',
      'Base': 'Nylon reforzado con 5 ruedas',
      'Peso máximo': '120 kg',
      'Ajustes': 'Altura, brazos, lumbar, reclinación'
    },
    features: [
      'Soporte lumbar ajustable',
      'Brazos 3D regulables',
      'Reclinación sincronizada',
      'Mecanismo de tensión ajustable',
      'Ruedas para todo tipo de piso',
      'Garantía de 2 años'
    ]
  },
  {
    id: '3',
    name: 'Archivador Metálico',
    description: 'Archivador de 4 gavetas con sistema de seguridad y rieles telescópicos. Ideal para organización de documentos en oficinas y archivos institucionales.',
    category: 'archivadores' as const,
    price: 680000,
    images: [
      'https://via.placeholder.com/600x600/95a5a6/ffffff?text=Archivador+1',
      'https://via.placeholder.com/600x600/7f8c8d/ffffff?text=Archivador+2'
    ],
    stock: 20,
    featured: false,
    technicalDetails: {
      'Dimensiones': '46cm x 62cm x 132cm',
      'Material': 'Lámina cold rolled calibre 22',
      'Capacidad por gaveta': '25 kg',
      'Sistema de cierre': 'Cerradura centralizada',
      'Acabado': 'Pintura electrostática',
      'Colores disponibles': 'Gris, beige, negro'
    },
    features: [
      '4 gavetas de apertura completa',
      'Rieles telescópicos de alta resistencia',
      'Sistema de seguridad anti-volcamiento',
      'Cerradura centralizada',
      'Porta-etiquetas en cada gaveta',
      'Garantía de 1 año'
    ]
  }
];

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = MOCK_PRODUCTS.find(p => p.id === id) || {
    id: id || 'unknown',
    name: 'Producto no encontrado',
    description: 'El producto que buscas no está disponible en este momento.',
    category: 'mesas' as const,
    price: 0,
    images: [],
    stock: 0,
    technicalDetails: {},
    features: []
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handlePrevImage = () => {
    if (product.images && product.images.length > 0) {
      setCurrentImageIndex((prev: number) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (product.images && product.images.length > 0) {
      setCurrentImageIndex((prev: number) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <button className="back-button" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Volver
        </button>

        <div className="product-detail-grid">
          <div className="product-image-section">
            <div className="image-carousel">
              <div className="main-image">
                {product.images && product.images.length > 0 ? (
                  <>
                    <img 
                      src={product.images[currentImageIndex]} 
                      alt={`${product.name} - Imagen ${currentImageIndex + 1}`}
                    />
                    
                    {product.images.length > 1 && (
                      <>
                        <button 
                          className="carousel-btn prev-btn" 
                          onClick={handlePrevImage}
                          aria-label="Imagen anterior"
                        >
                          <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                          className="carousel-btn next-btn" 
                          onClick={handleNextImage}
                          aria-label="Imagen siguiente"
                        >
                          <i className="fas fa-chevron-right"></i>
                        </button>
                        
                        <div className="carousel-indicators">
                          {product.images.map((_, index) => (
                            <button
                              key={index}
                              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                              onClick={() => handleThumbnailClick(index)}
                              aria-label={`Ir a imagen ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="image-placeholder">
                    <i className="fas fa-image fa-5x"></i>
                    <p>Imagen no disponible</p>
                  </div>
                )}
              </div>

              {product.images && product.images.length > 1 && (
                <div className="thumbnails-container">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img src={image} alt={`Miniatura ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-price-section">
              <span className="product-price">{formatPrice(product.price)}</span>
              {'stock' in product && product.stock !== undefined && (
                <span className={`stock-badge ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                  {product.stock > 0 ? `${product.stock} disponibles` : 'Agotado'}
                </span>
              )}
            </div>

            <p className="product-full-description">{product.description}</p>

            {product.features && product.features.length > 0 && (
              <div className="product-features">
                <h3>Características principales:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="action-buttons">
              <Link to={`/contacto?producto=${product.id}`}>
                <Button variant="primary" size="lg">
                  <i className="fas fa-envelope"></i>
                  Solicitar Cotización
                </Button>
              </Link>
              <Link to="/catalogo">
                <Button variant="outline" size="lg">
                  Ver más productos
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {product.technicalDetails && Object.keys(product.technicalDetails).length > 0 && (
          <div className="technical-specs-section">
            <h2>Especificaciones Técnicas</h2>
            <div className="specs-grid">
              {Object.entries(product.technicalDetails).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="additional-info-section">
          <div className="info-grid">
            <div className="info-card">
              <i className="fas fa-truck fa-2x"></i>
              <h4>Envío Nacional</h4>
              <p>Entrega en todo el país</p>
            </div>
            <div className="info-card">
              <i className="fas fa-shield-alt fa-2x"></i>
              <h4>Garantía</h4>
              <p>Hasta 3 años de garantía</p>
            </div>
            <div className="info-card">
              <i className="fas fa-tools fa-2x"></i>
              <h4>Instalación</h4>
              <p>Servicio de instalación incluido</p>
            </div>
            <div className="info-card">
              <i className="fas fa-headset fa-2x"></i>
              <h4>Soporte</h4>
              <p>Asesoría técnica permanente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
