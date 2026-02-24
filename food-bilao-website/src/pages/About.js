import React from 'react';

function About() {
  return (
    <div className="about-content container" style={{ padding: '2rem 0' }}>
      <h2 style={{ marginBottom: '2rem' }}>About Atik Bilao</h2>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
          Welcome to <strong>Atik Bilao</strong>! We are a family-owned business based in 
          <strong> Cortes, Bohol</strong>, dedicated to serving authentic Filipino favorites.
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
          What started as our mother's passion for cooking has grown into a service that brings 
          families together. Whether it's a birthday, reunion, or just a Sunday lunch, 
          our bilaos are prepared fresh, generous, and made with love.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c3e50' }}>
          Our mission is simple: to deliver exceptional Filipino comfort food that brings joy and 
          satisfaction to every table. Every bilao is crafted with premium ingredients and served with pride.
        </p>
      </div>
    </div>
  );
}

export default About;