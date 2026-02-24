import React, { useState } from 'react';
import products from '../data/products.json';
import '../styles/main.css';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: 'Viand(Sud-an) Bilao', image: '/images/bilao1.png', desc: 'Hearty meals for the whole family.' },
    { id: 2, name: 'Snacks/Kakanin Bilao', image: '/images/kakanin1.png', desc: 'Perfect merienda favorites.' },
    { id: 3, name: 'Desserts', image: '/images/dessert1.png', desc: 'Sweet treats to end your meal.' }
  ];

  const currentProducts = products.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="menu-page container" style={{ position: 'relative', zIndex: 999, padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 5 }}>
        <h2>Our Menu</h2>
        {selectedCategory && (
          <button 
            onClick={() => setSelectedCategory(null)}
            className="back-btn"
            style={{ 
              marginTop: '1rem', 
              background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', 
              color: 'white', 
              padding: '10px 20px', 
              borderRadius: '50px', 
              border: 'none', 
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
            }}
          >
            ← Back to Categories
          </button>
        )}
      </div>

      {selectedCategory === null ? (
        <div className="menu-grid">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="menu-card category-card" 
              onClick={() => setSelectedCategory(cat.name)}
              style={{ cursor: 'pointer', overflow: 'hidden' }}
            >
              <div className="image-container" style={{ position: 'relative', height: '250px' }}>
                <img src={cat.image} alt={cat.name} className="menu-img" style={{ height: '100%' }} />
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0, 
                  background: 'rgba(0,0,0,0.3)',
                  transition: 'background 0.3s ease'
                }} 
                className="overlay"
                />
              </div>
              <div className="card-content">
                <h3>{cat.name}</h3>
                <p className="desc">{cat.desc}</p>
                <span style={{ 
                  color: '#d35400', 
                  fontWeight: 'bold',
                  textDecoration: 'underline'
                }}>View Menu →</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="menu-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product.id} className="menu-card">
                <img src={product.image} alt={product.name} className="menu-img" />
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p className="desc">{product.description}</p>
                  <p className="price">₱{product.price}</p>
                  
                  <a
                    href={`https://m.me/61586874489598?text=${encodeURIComponent(`Hello! I would like to order the ${product.name}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="order-btn"
                    style={{ marginTop: 'auto' }}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1/-1', padding: '2rem' }}>
              No items found in this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;