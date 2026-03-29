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
          <h1 className="text-white">About Tandon Properties</h1>
          <p className="text-white">25+ Years of Honesty, Transparency, and Excellence</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container about-intro grid grid-2">
           <div className="about-text">
             <h2>Our Story</h2>
             <p>Tandon Properties, led by Mr. Pradeep Tandon, is one of Dehradun’s most trusted real estate consultancies with over 25+ years of experience. We established this firm with a single vision: to bring honesty and transparency into the real estate market of Uttarakhand.</p>
             <p>Since 1995, we have helped thousands of families find their dream homes and assisted countless investors in making secure, profitable commercial decisions.</p>
             
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
             <img src="/logo.png" alt="Tandon Properties Legacy" className="about-legacy-img" />
             <div className="founder-quote">
               <p>"A house is made of bricks and beams, but a home is made of hopes and dreams. Our mission is to protect those dreams."</p>
               <span>- Mr. Pradeep Tandon</span>
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
