import React, { useState } from 'react';
import '../styles/main.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const PAGE_ID = "61586874489598"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const text = `New Inquiry from Website:%0A Name: ${formData.name}%0A Email: ${formData.email}%0A Message: ${formData.message}`;
  const fbLink = `https://m.me/${PAGE_ID}?text=${text}`;

  return (
    <div className="contact-page container" style={{ padding: '2rem 0', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Contact Us</h2>
      <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#7f8c8d', fontSize: '1.05rem' }}>
        Have a question? Send us a message directly on Messenger!
      </p>

      <form style={{ background: 'var(--card-bg)', padding: '2.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#2c3e50' }}>
            Your Name
          </label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
            style={{ 
              width: '100%', 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: '2px solid #ecf0f1',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => e.target.style.borderColor = '#d35400'}
            onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#2c3e50' }}>
            Email / Phone
          </label>
          <input 
            type="text" 
            name="email" 
            placeholder="Enter your contact info" 
            value={formData.email} 
            onChange={handleChange} 
            style={{ 
              width: '100%', 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: '2px solid #ecf0f1',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => e.target.style.borderColor = '#d35400'}
            onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#2c3e50' }}>
            Message
          </label>
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Tell us how we can help you..." 
            value={formData.message} 
            onChange={handleChange} 
            style={{ 
              width: '100%', 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: '2px solid #ecf0f1',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
            onFocus={(e) => e.target.style.borderColor = '#d35400'}
            onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
          />
        </div>

        <a 
          href={fbLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn"
          style={{ 
            display: 'block', 
            width: '100%', 
            textAlign: 'center', 
            padding: '12px 32px',
            fontSize: '1rem'
          }}
        >
          Send to Messenger
        </a>
      </form>
    </div>
  );
}

export default Contact;