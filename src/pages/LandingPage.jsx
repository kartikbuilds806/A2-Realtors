import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Building, Award, Phone, Send } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Configuration for WhatsApp and Web3Forms
  const WHATSAPP_NUMBER = "919876543210"; // Replace with your actual number
  const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"; // Replace with your access key from web3forms.com

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send to Web3Forms (Email Notification)
      const formPayload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New Lead from Promo Landing Page",
        from_name: formData.name,
        name: formData.name,
        phone: formData.phone,
        requirements: formData.requirements,
      };

      // Only attempt to send email if a real key is provided
      if (WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formPayload),
        });
      }

      // 2. Redirect to WhatsApp
      const whatsappMessage = `Hi Tandon Properties!\n\nI got your details from the promotion.\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirements: ${formData.requirements}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
      
      setIsSuccess(true);
      setFormData({ name: '', phone: '', requirements: '' });
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: <Shield />, text: "100% Verified Properties" },
    { icon: <Building />, text: "Premium Locations in Dehradun" },
    { icon: <Award />, text: "Best Market Price Guarantee" },
    { icon: <CheckCircle />, text: "Hassle-Free Legal Paperwork" },
  ];

  return (
    <div className="landing-page">
      {/* Minimal Header */}
      <header className="landing-header">
        <div className="landing-container">
          <div className="landing-logo">Tandon Properties<span>.</span></div>
          <a href={`tel:+${WHATSAPP_NUMBER}`} className="header-contact">
            <Phone size={18} /> Call Now
          </a>
        </div>
      </header>

      {/* Main Hero Section with Form */}
      <section className="landing-hero">
        <div className="landing-hero-bg"></div>
        <div className="landing-hero-overlay"></div>
        
        <div className="landing-container hero-content-wrapper">
          <motion.div 
            className="hero-text-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">Limited Time Offer</div>
            <h1>Discover Your Dream Home in <span className="highlight">Dehradun</span></h1>
            <p className="hero-subtext">
              Exclusive luxury villas, premium plots, and commercial spaces tailored to your lifestyle. 
              Book a free site visit today.
            </p>
            
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <span className="benefit-text">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="hero-form-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="lead-form-card">
              <h3>Get Exclusive Details</h3>
              <p>Register now to view pricing and brochures.</p>
              
              {isSuccess ? (
                <div className="success-message">
                  <CheckCircle size={48} />
                  <h4>Request Sent!</h4>
                  <p>Redirecting you to WhatsApp for instant connection...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="lead-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>What are you looking for?</label>
                    <select 
                      name="requirements" 
                      value={formData.requirements}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select Property Type</option>
                      <option value="Residential Plot">Residential Plot</option>
                      <option value="Luxury Villa">Luxury Villa</option>
                      <option value="Commercial Shop">Commercial Space</option>
                      <option value="Ready to Move Flat">Ready to Move Flat</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Request...' : (
                      <>Receive Details Now <Send size={18} /></>
                    )}
                  </button>
                  <p className="form-disclaimer">We respect your privacy. No spam guaranteed.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Tandon Properties. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
