import React from 'react';
import TrustSignals from '../components/TrustSignals';
import CtaForm from '../components/CtaForm';
import { Target, Lightbulb, HeartHandshake } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header" style={{backgroundImage: 'url(/hero-bg.png)'}}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-white">About A2 Realtors</h1>
          <p className="text-white">14+ Years of Honesty, Transparency, and Excellence</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container about-intro grid grid-2">
           <div className="about-text">
             <h2>Our Story</h2>
             <p>A2 Realtors is a trusted and well-established real estate agency in Dehradun, known for providing genuine property deals and excellent client service. With over 14 years of experience, we have helped hundreds of clients find the right property based on their needs and budget.</p>
             <p>We specialize in residential and investment properties including flats, plots, duplex houses, penthouses, and commercial spaces across Dehradun and nearby areas.</p>
             <p>Our focus is on transparency, trust, and long-term relationships by offering verified properties and high-return investment opportunities.</p>
             
             <div className="mt-4">
               <h3>Our Expertise</h3>
               <ul className="expertise-list mt-8">
                 <li><Target size={20} className="text-accent" /> Strategic Property Valuation</li>
                 <li><Lightbulb size={20} className="text-accent" /> Legal Background Checks</li>
                 <li><HeartHandshake size={20} className="text-accent" /> Personalized Client-First Approach</li>
               </ul>
             </div>
           </div>
           
           <div className="about-image-wrapper">
             <img src="/logo.png" alt="A2 Realtors Legacy" className="about-legacy-img" />
             <div className="founder-quote">
               <p>"A house is made of bricks and beams, but a home is made of hopes and dreams. Our mission is to protect those dreams."</p>
               <span>- A2 Realtors</span>
             </div>
           </div>
        </div>
      </section>

      <TrustSignals />
      <CtaForm />
    </div>
  );
};

export default About;
