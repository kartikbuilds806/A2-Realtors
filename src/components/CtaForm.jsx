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
    const formData = new FormData(e.target);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';

    const text = `Hello A2 Realtors, I would like to book a consultation.\n\nName: ${name}\nPhone: ${phone}`;
    const phoneNum = "918445190135";
    const waUrl = `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    e.target.reset();
  };

  return (
    <section className="cta-section section text-center">
      <div className="container">
        <div className="cta-box">
          <h2>Looking for the perfect property?</h2>
          <p>Contact A2 Realtors today and book your site visit with our experts.</p>
          
          <form className="cta-form" onSubmit={handleLeadSubmit}>
            <div className="form-row">
              <input type="text" name="name" className="form-control" placeholder="Full Name" required />
              <input type="tel" name="phone" className="form-control" placeholder="Phone Number" required />
              <button type="submit" className="btn btn-primary">Book Consultation</button>
            </div>
          </form>

          <div className="cta-alternatives">
            <span>Or chat with us immediately</span>
            <a href="https://wa.me/918445190135" target="_blank" rel="noreferrer" className="btn whatsapp-direct-btn">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaForm;
