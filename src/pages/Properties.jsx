import React, { useState } from 'react';
import { properties } from '../data/properties';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Home, Building } from 'lucide-react';
import '../components/FeaturedProperties.css';
import './Properties.css';

const Properties = () => {
  const [filter, setFilter] = useState({
    budget: '',
    type: '',
    location: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredProperties = properties.filter(prop => {
    let match = true;
    if (filter.budget && filter.budget !== 'All') {
      match = match && prop.budget === filter.budget;
    }
    if (filter.type && filter.type !== 'All') {
      match = match && prop.type === filter.type;
    }
    if (filter.location && prop.location.toLowerCase().indexOf(filter.location.toLowerCase()) === -1) {
      match = false;
    }
    return match;
  });

  return (
    <div className="properties-page">
      <div className="page-header" style={{backgroundImage: 'url(/hero-bg.png)'}}>
        <div className="overlay"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-white">Our Properties</h1>
          <p className="text-white">Explore our extensive portfolio of premium real estate</p>
        </div>
      </div>

      <div className="container section">
        <div className="filter-bar">
          <div className="filter-group">
            <label>Budget</label>
            <select name="budget" className="form-control" onChange={handleFilterChange} value={filter.budget}>
              <option value="All">All Budgets</option>
              <option value="Premium">Premium</option>
              <option value="Ultra-Premium">Ultra-Premium</option>
              <option value="Standard">Standard</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Property Type</label>
            <select name="type" className="form-control" onChange={handleFilterChange} value={filter.type}>
              <option value="All">All Types</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="House">Independent House</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land / Plot</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Location</label>
            <input 
              type="text" 
              name="location"
              className="form-control" 
              placeholder="e.g. Rajpur Road" 
              onChange={handleFilterChange}
              value={filter.location}
            />
          </div>
        </div>

        <div className="property-grid grid grid-3 mt-4">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop) => (
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
                    <Link to={`/properties/${prop.id}`} className="btn btn-primary w-100 d-flex justify-center">
                      View Details <ArrowRight size={16} style={{marginLeft: '8px'}}/>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
             <div className="no-results text-center" style={{gridColumn: '1 / -1', padding: '4rem 0'}}>
               <h3>No properties found matching your criteria.</h3>
               <p>Please try a different search or contact us for personalized assistance.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
