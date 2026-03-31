import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Camera, Globe, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container footer-wrapper grid grid-4">

        <div className="footer-col brand-info">
          <img src="/logo.png" alt="A2 Realtors Logo" style={{ filter: 'brightness(0) invert(1)' }} className="footer-logo" />
          <p>A trusted real estate agency in Dehradun with over 14 years of experience. Known for honesty, transparency, and genuine property deals.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Camera size={20} /></a>
            <a href="#" className="social-icon"><Globe size={20} /></a>
          </div>
        </div>

        <div className="footer-col links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/"><ArrowRight size={14} /> Home</Link></li>
            <li><Link to="/properties"><ArrowRight size={14} /> Properties</Link></li>
            <li><Link to="/about"><ArrowRight size={14} /> About Us</Link></li>
            <li><Link to="/contact"><ArrowRight size={14} /> Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col links">
          <h3>Services</h3>
          <ul>
            <li><Link to="/properties?type=residential"><ArrowRight size={14} /> Residential Property</Link></li>
            <li><Link to="/properties?type=commercial"><ArrowRight size={14} /> Commercial Deals</Link></li>
            <li><Link to="/properties?type=land"><ArrowRight size={14} /> Land & Plot Sales</Link></li>
            <li><Link to="/contact"><ArrowRight size={14} /> Property Consultation</Link></li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h3>Contact Info</h3>
          <ul className="contact-list">
            <li>
              <MapPin size={20} className="text-accent" />
              <span>25 B, Inder Road, Dalanwala, Dehradun, Uttarakhand – 248001</span>
            </li>
            <li>
              <Phone size={20} className="text-accent" />
              <a href="tel:8445190135">+91 8445190135</a>
            </li>
            <li>
              <Mail size={20} className="text-accent" />
              <a href="mailto:info@tandonproperties.com">info@tandonproperties.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} A2 Realtors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
