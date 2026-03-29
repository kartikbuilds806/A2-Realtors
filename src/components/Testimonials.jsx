import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      text: "A very smooth and stress-free process. From the first site visit to the final paperwork, Tandon Properties handled everything professionally.",
      author: "Rajiv Sharma",
      role: "Homeowner"
    },
    {
      text: "Honest and professional. It's rare to find such transparency in real estate today. Highly recommended for any property investment.",
      author: "Meera Gupta",
      role: "Investor"
    },
    {
      text: "Best property dealer in Dehradun. Mr. Pradeep Tandon has deep market knowledge that helped us secure a prime commercial spot.",
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
