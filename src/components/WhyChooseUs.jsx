import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { title: "14+ Years of Experience", desc: "With over 14 years in the real estate sector, we bring unmatched expertise." },
    { title: "Trusted by Hundreds of Happy Clients", desc: "Our commitment to excellence has helped hundreds find their dream properties." },
    { title: "Genuine & Verified Deals", desc: "Every property goes through a strict legal and physical background check." },
    { title: "Strong Local Market Knowledge", desc: "Our localized knowledge guarantees the best property deals in Dehradun." },
    { title: "End-to-End Support from Inquiry to Deal Closure", desc: "A tailored approach matching each client with their perfect property, right till the end." },
  ];

  return (
    <section className="wcu-section section">
      <div className="container wcu-container">
        
        <div className="wcu-image">
          {/* using the hero bg temporarily assuming placeholder since it's an interior/luxury context */}
          <img src="/hero-bg.png" alt="Why Choose A2 Realtors" />
          <div className="wcu-float-box">
            <h4>14+ Years</h4>
            <p>of Trust & Excellence</p>
          </div>
        </div>

        <div className="wcu-content">
          <div className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>
            <h2>Why Choose Us</h2>
            <p style={{marginLeft: 0}}>Experience unparalleled real estate services designed to secure your future.</p>
          </div>

          <div className="wcu-list">
            {reasons.map((reason, idx) => (
              <div key={idx} className="wcu-item">
                <div className="wcu-icon">
                  <CheckCircle2 size={24} />
                </div>
                <div className="wcu-text">
                  <h4>{reason.title}</h4>
                  <p>{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{marginTop: '2.5rem'}}>
             <a href="tel:08445190135" className="btn btn-primary">Speak to an Expert</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
