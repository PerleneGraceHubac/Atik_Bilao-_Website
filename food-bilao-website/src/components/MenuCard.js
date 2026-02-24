import React from 'react';

export default function MenuCard({ product }) {
  const message = `Hello! I would like to order the ${product.name}.`;
  const fbLink = `https://m.me/irene.ranises.hubac.2025?text=${encodeURIComponent(message)}`;

  return (
    <div className="menu-card">
      <img src={product.image} alt={product.name} className="menu-img" />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p className="desc">{product.description}</p>
        <p className="price">₱{product.price}</p>
        
        <a 
          href={fbLink}
          target="_blank" 
          rel="noopener noreferrer" 
          className="order-btn"
          style={{ marginTop: 'auto' }}
        >
          Order Now
        </a>
      </div>
    </div>
  );
}