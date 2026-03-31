import React from 'react';
import { Home, Building2, Map, Handshake, Hotel } from 'lucide-react';
import './Services.css';

const Services = () => {
  const serviceList = [
    { id: 1, icon: <Home size={40} />, title: "Buying & Selling Residential Properties", desc: "Find your dream home or get the best price for your current property with our expert valuation." },
    { id: 2, icon: <Map size={40} />, title: "Plots & Land Investment", desc: "Verified residential plots and land ready for investment or construction." },
    { id: 3, icon: <Hotel size={40} />, title: "Premium & Luxury Homes", desc: "Exclusive luxury homes, penthouses, and duplexes located in prime Dehradun neighborhoods." },
    { id: 4, icon: <Building2 size={40} />, title: "Commercial Property Deals", desc: "Prime office spaces, retail shops, and commercial land in major hubs." },
    { id: 5, icon: <Handshake size={40} />, title: "Property Consultation & Investment Guidance", desc: "Honest and transparent advisory for all your real estate investments." },
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
