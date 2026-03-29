import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header" style={{backgroundImage: 'url(/hero-bg.png)'}}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-white">Contact Us</h1>
          <p className="text-white">Reach out to us for any property related queries</p>
        </div>
      </div>

      <div className="container section contact-content">
        <div className="contact-info-grid">
           
           <div className="contact-method-card">
              <div className="cm-icon"><MapPin size={32} /></div>
              <h3>Visit Our Office</h3>
              <p>1st Floor, Mussoorie Diversion, Pacific Hills, 15 Rajpur Rd, Malsi, Dehradun, Uttarakhand</p>
           </div>
           
           <div className="contact-method-card">
              <div className="cm-icon"><Phone size={32} /></div>
              <h3>Call Us Today</h3>
              <a href="tel:9412075428" className="contact-link">+91 94120 75428</a>
              <p>Available for WhatsApp</p>
           </div>
           
           <div className="contact-method-card">
              <div className="cm-icon"><Mail size={32} /></div>
              <h3>Email Us</h3>
              <a href="mailto:info@tandonproperties.com" className="contact-link">info@tandonproperties.com</a>
              <p>Drop us a line anytime!</p>
           </div>
           
           <div className="contact-method-card">
              <div className="cm-icon"><Clock size={32} /></div>
              <h3>Working Hours</h3>
              <p>Mon - Sat</p>
              <p className="contact-link">10:30 AM – 7:30 PM</p>
           </div>

        </div>

        <div className="contact-split-grid grid grid-2 mt-4">
           
           <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form className="contact-page-form" onSubmit={(e) => e.preventDefault()}>
                 <div className="form-group">
                   <label>Full Name</label>
                   <input type="text" className="form-control" required />
                 </div>
                 <div className="form-group">
                   <label>Phone Number</label>
                   <input type="tel" className="form-control" required />
                 </div>
                 <div className="form-group">
                   <label>Message</label>
                   <textarea className="form-control" rows="5" required></textarea>
                 </div>
                 <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
           </div>

           <div className="map-container">
             <iframe 
                title="Google Map Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4308579477027!2d78.0701967!3d30.3385759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929fa6686d1ff%3A0xe5a3c9dfbf20eb60!2sPacific%20Hills%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0, borderRadius: '12px', minHeight: '400px'}} 
                allowFullScreen="" 
                loading="lazy"
             ></iframe>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
