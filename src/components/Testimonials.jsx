import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      text: "Very genuine service, I wanted a property and got exactly what I wanted. Absolutely recommended.",
      author: "Rajiv Sharma",
      role: "Homeowner"
    },
    {
      text: "Best property dealers in Dehradun, genuine deals and good experience.",
      author: "Meera Gupta",
      role: "Investor"
    },
    {
      text: "Very professional and fair in deals. Highly recommended.",
      author: "Amit Verma",
      role: "Business Owner"
    }
  ];

  return (
    <section className="testimonials section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it. Read the experiences of families and businesses who trusted us.</p>
        </div>

        <div className="testi-grid grid grid-3">
          {reviews.map((review, idx) => (
            <div className="testi-card" key={idx}>
              <Quote className="quote-icon" size={40} />
              <p className="testi-text">"{review.text}"</p>
              <div className="testi-author">
                <div className="author-avatar">
                   {review.author.charAt(0)}
                </div>
                <div>
                  <h4>{review.author}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
