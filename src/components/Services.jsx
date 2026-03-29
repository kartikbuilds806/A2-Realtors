import React from 'react';
import { Home, Building2, Map, Handshake, Hotel } from 'lucide-react';
import './Services.css';

const Services = () => {
  const serviceList = [
    { id: 1, icon: <Home size={40} />, title: "Residential Buying & Selling", desc: "Find your dream home or get the best price for your current property with our expert valuation." },
    { id: 2, icon: <Building2 size={40} />, title: "Commercial Deals", desc: "Prime office spaces and retail shops located in Dehradun's major commercial hubs." },
    { id: 3, icon: <Map size={40} />, title: "Land & Plot Sales", desc: "Verified agricultural and residential plots ready for investment or construction." },
    { id: 4, icon: <Handshake size={40} />, title: "Property Consultation", desc: "Honest and transparent advisory for all your real estate portfolios and investments." },
    { id: 5, icon: <Hotel size={40} />, title: "Leasing", desc: "Specializing in the leasing of hotels and expansive agricultural lands for commercial use." },
  ];

  return (
    <section className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive real estate solutions tailored to your unique requirements.</p>
        </div>
        
        <div className="services-grid grid">
          {serviceList.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
