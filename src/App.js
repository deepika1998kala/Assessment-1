// src/App.js
import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {/* Add logo or nav here if design has it */}
        <h1 className="header-title">Your Brand Name</h1>
      </header>
      <nav className="navbar">
        <div className="navbar-logo">YourLogo</div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button 
          className="navbar-hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
      <main className="App-main">
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">Welcome to Our Platform</h2>
            <p className="hero-subtitle">Whether you have an idea, a question, or simply want to explore how we can work together, We are just a message away. Let us catch up over coffee. Great stories always begin with a good conversation</p>
          </div>
        </section>

        <section className="contact-section">
          <ContactForm />
        </section>
      </main>

      <footer className="App-footer">
        {/* If you have a footer design */}
        <p>© 2025 Your Brand</p>
      </footer>
    </div>
  );
}

export default App;
