import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'hero_form'
      });
    }
    const formData = new FormData(e.target);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const interest = formData.get('interest') || '';

    const text = `Hello A2 Realtors, I would like to book a site visit/consultation.\n\nName: ${name}\nPhone: ${phone}\nInterested In: ${interest}`;
    const phoneNum = "918445190135";
    const waUrl = `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    e.target.reset();
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Find Your Dream <span className="text-accent">Property</span> in Dehradun</h1>
          <p className="hero-subtitle">Trusted Real Estate Experts with 14+ Years of Experience in Delivering Genuine & Profitable Property Deals</p>
          <div className="hero-ctas">
            <Link to="/properties" className="btn btn-primary d-flex">
              Book Site Visit <ArrowRight size={18} style={{marginLeft: '8px', verticalAlign: 'middle'}}/>
            </Link>
            <a href="https://wa.me/918445190135" className="btn btn-outline" target="_blank" rel="noreferrer" style={{borderColor: 'white', color: 'white'}}>
              Contact on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="hero-form-card">
          <h3>Request a Site Visit</h3>
          <p>Leave your details and our experts will get back to you.</p>
          <form className="hero-lead-form" onSubmit={handleLeadSubmit}>
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" className="form-control" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <select className="form-control" name="interest" defaultValue="" required>
                <option value="" disabled>Interested In</option>
                <option value="residential">Residential Property</option>
                <option value="commercial">Commercial Property</option>
                <option value="land">Land / Plot</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100" style={{width: '100%'}}>
              Book Consultation
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
