import React from 'react';
import './styles/main.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About'; 

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section id="home" style={{ overflow: 'hidden', position: 'relative' }}> 
          <Hero />
        </section>

        <section id="menu">
          <Menu />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;