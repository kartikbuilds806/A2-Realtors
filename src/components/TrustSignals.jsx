import React from 'react';
import { Award, Users, Star, ShieldCheck } from 'lucide-react';
import './TrustSignals.css';

const TrustSignals = () => {
  const signalData = [
    { icon: <Award size={32} />, count: '25+', label: 'Years Experience' },
    { icon: <Users size={32} />, count: '1000+', label: 'Happy Clients' },
    { icon: <Star size={32} />, count: '4.9', label: 'Rating (172 Reviews)' },
    { icon: <ShieldCheck size={32} />, count: '100%', label: 'Honest Deals' },
  ];

  return (
    <section className="trust-signals bg-light section">
      <div className="container">
        <div className="ts-grid">
          {signalData.map((item, index) => (
            <div key={index} className="ts-card">
              <div className="icon-wrapper text-accent">{item.icon}</div>
              <h3>{item.count}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <div className="ts-tagline text-center">
          <p>"Trusted & Honest Property Consultant"</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
