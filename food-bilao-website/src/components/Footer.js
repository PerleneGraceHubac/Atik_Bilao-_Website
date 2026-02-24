import React from 'react';

function Footer() {
  return (
    <footer className="site-footer" style={{ 
      padding: '3rem 2rem', 
      background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)', 
      color: 'white', 
      marginTop: '3rem',
      textAlign: 'center'
    }}>
      <div className="container">
        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '700' }}>🍲 Atik Bilao</h4>
        
        <div style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '0.5rem' }}>📍 Malayo Norte, Cortes, Bohol</p>
          <p style={{ marginBottom: '0.5rem' }}>📞 TNT: 09090881250</p>
          <p style={{ marginBottom: '0.5rem' }}>📞 TNT: 09467164181</p>
          <p style={{ marginBottom: '0.5rem' }}>📞 TNT: 09817975561</p>
        </div>
        
        <div className="social-links" style={{ marginBottom: '2rem' }}>
          <a 
            href="https://www.facebook.com/irene.ranises.hubac.2025" 
            style={{ 
              display: 'inline-block',
              color: '#d35400', 
              marginRight: '1.5rem', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Facebook
          </a>    
        </div>
        
        <p style={{ 
          fontSize: '0.9rem', 
          marginTop: '1.5rem', 
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          opacity: '0.8' 
        }}>
          © {new Date().getFullYear()} Atik Bilao. All rights reserved. | Made with ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;