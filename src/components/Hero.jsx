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
    alert("Thank you! Our experts will contact you shortly.");
    e.target.reset();
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Find Your Perfect <span className="text-accent">Property</span> in Dehradun</h1>
          <p className="hero-subtitle">Trusted Real Estate Experts Since 1995</p>
          <div className="hero-ctas">
            <Link to="/properties" className="btn btn-primary d-flex">
              Explore Properties <ArrowRight size={18} style={{marginLeft: '8px', verticalAlign: 'middle'}}/>
            </Link>
            <a href="tel:9412075428" className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>
              Call Now
            </a>
          </div>
        </div>
        
        <div className="hero-form-card">
          <h3>Request a Site Visit</h3>
          <p>Leave your details and our experts will get back to you.</p>
          <form className="hero-lead-form" onSubmit={handleLeadSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <select className="form-control" required>
                <option value="" disabled selected>Interested In</option>
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
