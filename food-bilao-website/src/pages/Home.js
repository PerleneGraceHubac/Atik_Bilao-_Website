import React, { useState } from 'react';
import products from '../data/products.json';
import '../styles/main.css';

function Menu() {
  // 1. State to track if a category is open
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 2. The 3 Main Categories
  // UPDATE THESE IMAGE PATHS if you added new images to public/images/
  const categories = [
    { id: 1, name: 'Viand Bilao', image: '/images/bilao1.png', desc: 'Hearty meals for the whole family.' },
    { id: 2, name: 'Snacks/Kakanin Bilao', image: '/images/bilao2.png', desc: 'Perfect merienda favorites.' },
    { id: 3, name: 'Desserts', image: '/images/bilao3.png', desc: 'Sweet treats to end your meal.' }
  ];

  // 3. Filter products based on selection
  const currentProducts = products.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div 
      className="menu-page container" 
      /* FIX: Force White Background & Lift above Hero */
      style={{ 
        backgroundColor: '#ffffff', 
        position: 'relative', 
        zIndex: 999, 
        padding: '2rem', 
        borderRadius: '15px', 
        marginTop: '20px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}
    >
      
      {/* HEADER SECTION */}
      <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 5 }}>
        <h2>Our Menu</h2>
        {selectedCategory && (
          <button 
            onClick={() => setSelectedCategory(null)}
            className="back-btn"
            style={{ 
              marginTop: '10px', 
              background: '#333', 
              color: 'white', 
              padding: '5px 15px', 
              borderRadius: '20px', 
              border: 'none', 
              cursor: 'pointer'
            }}
          >
            ← Back to Categories
          </button>
        )}
      </div>

      {/* CONDITIONAL RENDERING */}
      {selectedCategory === null ? (
        
        /* VIEW 1: CATEGORIES */
        <div className="menu-grid">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="menu-card category-card" 
              onClick={() => setSelectedCategory(cat.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className="image-container">
                 <img src={cat.image} alt={cat.name} className="menu-img" />
                 <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)' }}></div>
              </div>
              <div className="card-content">
                <h3>{cat.name}</h3>
                <p className="desc">{cat.desc}</p>
                <span style={{ color: '#d35400', fontWeight: 'bold', textDecoration: 'underline' }}>View Menu</span>
              </div>
            </div>
          ))}
        </div>

      ) : (

        /* VIEW 2: PRODUCT ITEMS (With your NEW Link Logic) */
        <div className="menu-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product.id} className="menu-card">
                <img src={product.image} alt={product.name} className="menu-img" />
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p className="desc">{product.description}</p>
                  <p className="price">₱{product.price}</p>
                  
                  {/* THIS IS YOUR NEW LINK LOGIC APPLIED HERE */}
                  <a
                    href={`https://m.me/irene.ranises.hubac.2025?text=${encodeURIComponent(`Hello! I would like to order the ${product.name}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="order-btn"
                  >
                    Order Now
                  </a>

                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%', fontStyle: 'italic' }}>
              No items found in this category yet.
            </p>
          )}
        </div>

      )}
    </div>
  );
}

export default Menu;