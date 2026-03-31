import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="A2 Realtors Logo" />
        </Link>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-ctas desktop-only">
          <a href="tel:08445190135" className="btn btn-outline nav-btn">
            <Phone size={18} /> Call Now
          </a>
          <a href="https://wa.me/918445190135" target="_blank" rel="noreferrer" className="btn btn-primary nav-btn whatsapp-btn">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu Actions */}
      {isMobileMenuOpen && (
        <div className="mobile-actions">
           <a href="tel:08445190135" className="btn btn-outline" style={{width: '90%', margin: '10px auto', display: 'flex', justifyContent: 'center', gap: '8px'}}>
            <Phone size={18} /> Call Now
          </a>
          <a href="https://wa.me/918445190135" target="_blank" rel="noreferrer" className="btn btn-primary" style={{width: '90%', margin: '10px auto', display: 'flex', justifyContent: 'center', gap: '8px'}}>
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
