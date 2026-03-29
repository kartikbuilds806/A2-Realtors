import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { title: "Honest & Transparent Deals", desc: "We ensure complete transparency in every transaction without hidden costs." },
    { title: "Verified Properties", desc: "Every property goes through a strict legal and physical background check." },
    { title: "Local Market Expertise", desc: "With our 25+ years in Dehradun, our localized knowledge guarantees the best valuation." },
    { title: "Personalized Service", desc: "A tailored end-to-end approach matching each client with their perfect property." },
  ];

  return (
    <section className="wcu-section section">
      <div className="container wcu-container">
        
        <div className="wcu-image">
          {/* using the hero bg temporarily assuming placeholder since it's an interior/luxury context */}
          <img src="/hero-bg.png" alt="Why Choose Tandon Properties" />
          <div className="wcu-float-box">
            <h4>25+ Years</h4>
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
             <a href="tel:9412075428" className="btn btn-primary">Speak to an Expert</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
