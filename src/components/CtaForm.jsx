import React from 'react';
import { MessageCircle } from 'lucide-react';
import './CtaForm.css';

const CtaForm = () => {
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'footer_cta_form'
      });
    }
    alert("Thanks for reaching out! We will be in touch soon.");
    e.target.reset();
  };

  return (
    <section className="cta-section section text-center">
      <div className="container">
        <div className="cta-box">
          <h2>Book Your Free Property Consultation Today</h2>
          <p>Whether you're looking to buy, sell, or rent — our experts are ready to guide you step-by-step.</p>
          
          <form className="cta-form" onSubmit={handleLeadSubmit}>
            <div className="form-row">
              <input type="text" className="form-control" placeholder="Full Name" required />
              <input type="tel" className="form-control" placeholder="Phone Number" required />
              <button type="submit" className="btn btn-primary">Book Consultation</button>
            </div>
          </form>

          <div className="cta-alternatives">
            <span>Or chat with us immediately</span>
            <a href="https://wa.me/919412075428" target="_blank" rel="noreferrer" className="btn whatsapp-direct-btn">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaForm;
