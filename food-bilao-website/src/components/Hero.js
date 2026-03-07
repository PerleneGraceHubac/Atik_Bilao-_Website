import React from 'react';

function Hero() {
  return (
    <div 
      className="hero" 
      style={{ 
        backgroundImage: "url('/images/cover1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ color: 'var(--primary-dark)', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>Delicious Bilao for Every Occasion</h2>
        <p>Fresh ingredients, family-sized portions — perfectly crafted for your special gatherings</p>
        <a className="btn" href="#menu" style={{
          display: 'inline-block',
          marginTop: '2rem',
          textDecoration: 'none'
        }}>Explore Our Menu</a>
      </div>
    </div> 
  );
}

export default Hero;