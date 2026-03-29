import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import './FloatingActions.css';

const FloatingActions = () => {
  return (
    <div className="floating-actions">
      <a 
        href="tel:9412075428" 
        className="floating-btn fb-call"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      
      <a 
        href="https://wa.me/919412075428" 
        className="floating-btn fb-whatsapp"
        aria-label="WhatsApp Us"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FloatingActions;
