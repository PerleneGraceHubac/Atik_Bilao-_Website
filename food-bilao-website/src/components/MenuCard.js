import React, { useState } from 'react';

export default function MenuCard({ product }) {
  const hasSizes = product.sizes && product.sizes.length > 0;
  const [selectedSize, setSelectedSize] = useState(hasSizes ? product.sizes[0].size : null);
  
  const currentPrice = hasSizes 
    ? product.sizes.find(s => s.size === selectedSize)?.price 
    : product.price;
  
  const message = hasSizes
    ? `Hello! I would like to order the ${product.name} (${selectedSize}) for ₱${currentPrice}.`
    : `Hello! I would like to order the ${product.name}.`;
  
  const fbLink = `https://m.me/irene.ranises.hubac.2025?text=${encodeURIComponent(message)}`;

  return (
    <div className="menu-card">
      <img src={product.image} alt={product.name} className="menu-img" />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p className="desc">{product.description}</p>
        
        {hasSizes && (
          <div className="size-selector">
            <p style={{ margin: '10px 0 8px 0', fontSize: '0.9em', fontWeight: 'bold' }}>Size:</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {product.sizes.map(sz => (
                <button
                  key={sz.size}
                  onClick={() => setSelectedSize(sz.size)}
                  style={{
                    padding: '6px 12px',
                    border: selectedSize === sz.size ? '2px solid #ff6b35' : '1px solid #ccc',
                    backgroundColor: selectedSize === sz.size ? '#ff6b35' : 'white',
                    color: selectedSize === sz.size ? 'white' : 'black',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.85em',
                    fontWeight: selectedSize === sz.size ? 'bold' : 'normal'
                  }}
                >
                  {sz.size} - ₱{sz.price}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <p className="price">₱{currentPrice}</p>
        
        <a 
          href={fbLink}
          target="_blank" 
          rel="noopener noreferrer" 
          className="order-btn"
          style={{ marginTop: 'auto', display: 'block' }}
        >
          Order Now
        </a>
      </div>
    </div>
  );
}