import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { MapPin, ArrowLeft, Phone, BedDouble, Bath, Square, CheckCircle, Download } from 'lucide-react';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [showBrochureForm, setShowBrochureForm] = useState(false);

  if (!property) {
    return (
      <div className="section text-center" style={{paddingTop: '150px', minHeight: '60vh'}}>
        <h2>Property Not Found</h2>
        <Link to="/properties" className="btn btn-outline" style={{marginTop: '2rem'}}>Back to Properties</Link>
      </div>
    );
  }

  return (
    <div className="property-detail-page">
      {/* Top Banner */}
      <div className="pd-banner" style={{backgroundImage: `url(${property.image})`}}>
        <div className="overlay"></div>
        <div className="container relative z-10 pd-header">
           <Link to="/properties" className="back-link"><ArrowLeft size={20} /> Back to Properties</Link>
           <span className="badge">{property.budget}</span>
           <h1>{property.title}</h1>
           <p className="location-text"><MapPin size={20} /> {property.location}</p>
        </div>
      </div>

      <div className="container section pd-content">
        <div className="pd-main">
          
          <div className="pd-card overview-card">
            <div className="price-tag">{property.price}</div>
            <div className="key-specs">
              {property.bedrooms > 0 && (
                <div className="spec-item"><BedDouble size={24} /> <span>{property.bedrooms} Beds</span></div>
              )}
              {property.bathrooms > 0 && (
                <div className="spec-item"><Bath size={24} /> <span>{property.bathrooms} Baths</span></div>
              )}
              <div className="spec-item"><Square size={24} /> <span>{property.area}</span></div>
            </div>
            
            <div className="pd-description">
              <h3>Property Description</h3>
              <p>{property.description}</p>
            </div>
          </div>

          <div className="pd-card amenities-card">
            <h3>Amenities & Features</h3>
            <ul className="amenities-list">
              {property.amenities.map((amenity, idx) => (
                <li key={idx}><CheckCircle size={20} className="text-accent"/> {amenity}</li>
              ))}
            </ul>
          </div>

          <div className="pd-card map-card">
            <h3>Location Map</h3>
            <div className="map-placeholder">
              <iframe 
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110196.44428038936!2d77.94709407335272!3d30.325350812739504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="350" 
                style={{border:0, borderRadius: '8px'}} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
        </div>

        <div className="pd-sidebar">
           <div className="contact-widget pd-card" style={{position: 'sticky', top: '100px'}}>
             <h3>Interested in this property?</h3>
             <p>Contact us immediately to book a visit or negotiate the price.</p>
             
             <div className="widget-actions">
               <a href="tel:9412075428" className="btn btn-outline w-100 d-flex justify-center" style={{marginBottom: '1rem'}}>
                  <Phone size={18} style={{marginRight: '8px'}}/> Call Now
               </a>
               <a href={`https://wa.me/919412075428?text=I'm interested in ${property.title} (${property.price})`} target="_blank" rel="noreferrer" className="btn btn-primary w-100 d-flex justify-center">
                  Chat on WhatsApp
               </a>
             </div>

             <div className="brochure-section" style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #eee'}}>
               <h4>Download Brochure</h4>
               {!showBrochureForm ? (
                 <button onClick={() => setShowBrochureForm(true)} className="btn btn-secondary w-100 d-flex justify-center">
                    <Download size={18} style={{marginRight: '8px'}}/> Get Brochure
                 </button>
               ) : (
                 <form className="brochure-form" onSubmit={(e) => { e.preventDefault(); alert("Brochure link sent to your phone!")}}>
                   <input type="tel" className="form-control" placeholder="Enter Phone Number" required style={{marginBottom: '0.5rem'}}/>
                   <button type="submit" className="btn btn-primary w-100">Send Link</button>
                 </form>
               )}
             </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
