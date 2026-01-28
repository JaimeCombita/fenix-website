import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/features';
import { CATEGORIES } from '../utils/constants';
import type { Product, ProductCategory } from '../types';
import './Catalog.css';

export const CatalogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Mesa Ejecutiva Premium',
        description: 'Mesa ejecutiva de alta calidad con acabado en madera',
        category: 'mesas',
        price: 1500000,
        images: [],
        featured: true
      },
      {
        id: '2',
        name: 'Silla Ergonómica Deluxe',
        description: 'Silla con soporte lumbar y ajustes múltiples',
        category: 'sillas',
        price: 850000,
        images: []
      },
      {
        id: '3',
        name: 'Archivador Metálico',
        description: 'Archivador de 4 gavetas con sistema de seguridad',
        category: 'archivadores',
        price: 680000,
        images: []
      }
    ];

    const filtered = selectedCategory === 'all' 
      ? mockProducts 
      : mockProducts.filter(p => p.category === selectedCategory);
    
    setProducts(filtered);
  }, [selectedCategory]);

  return (
    <div className="catalog-page">
      <div className="catalog-hero">
        <div className="container">
          <h1>Catálogo de Productos</h1>
          <p>Encuentra el mobiliario perfecto para tu institución</p>
        </div>
      </div>

      <div className="container">
        <section className="catalog-content">
          <aside className="catalog-sidebar">
            <h3>Categorías</h3>
            <ul className="category-filter">
              <li>
                <button
                  className={selectedCategory === 'all' ? 'active' : ''}
                  onClick={() => setSelectedCategory('all')}
                >
                  Todos los productos
                </button>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={selectedCategory === cat.id ? 'active' : ''}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <i className={`fas fa-${cat.icon}`}></i>
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="catalog-main">
            <div className="catalog-header">
              <h2>
                {selectedCategory === 'all' 
                  ? 'Todos los productos' 
                  : CATEGORIES.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="products-count">{products.length} producto(s)</p>
            </div>

            {products.length > 0 ? (
              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <i className="fas fa-box-open"></i>
                <p>No hay productos disponibles en esta categoría</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
