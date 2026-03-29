import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { properties } from '../data/properties';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
  // Taking first 3 properties to feature on home page
  const featured = properties.slice(0, 3);

  return (
    <section className="featured-properties section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Featured Properties</h2>
          <p>Explore some of our handpicked and most exclusive properties available in Dehradun.</p>
        </div>

        <div className="property-grid grid grid-3">
          {featured.map((prop) => (
            <div className="property-card" key={prop.id}>
              <div className="property-img-wrapper">
                <img src={prop.image} alt={prop.title} className="property-img" />
                <span className="property-badge">{prop.budget}</span>
              </div>
              <div className="property-content">
                <h3 className="property-price">{prop.price}</h3>
                <h4 className="property-title">{prop.title}</h4>
                <p className="property-location"><MapPin size={16} /> {prop.location}</p>
                <div className="property-footer">
                  <Link to={`/properties/${prop.id}`} className="btn btn-primary d-flex w-100 justify-center">
                    View Details <ArrowRight size={16} style={{marginLeft: '8px'}}/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{marginTop: '3rem'}}>
          <Link to="/properties" className="btn btn-outline d-flex" style={{display: 'inline-flex'}}>
            View All Properties <ArrowRight size={18} style={{marginLeft: '8px'}}/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
